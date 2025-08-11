import { OxaInvoiceStatusResponseData } from "./typings/OxapayTypes.js";
import { DBPayoutStatus } from "../utils/typings/databseTypes.js";
import { config } from "./constants.js";
import { createPayoutStatus } from "../database/queries.js";

export const managePayoutSplit = (
  statusData: OxaInvoiceStatusResponseData,
  paymentTakerId: string
) => {
  const amountPaid = statusData.amount;
  const serverFee = amountPaid * 0.2; // 20% of total
  const staffCut = amountPaid * 0.1; // 10% of total
  const ownerCut = amountPaid * 0.05; // 5% of total

  const createdAt = Date.now();

  const isOwner = config[paymentTakerId]?.owner === true;

  if (!isOwner) {
    // 1️⃣ Staff row
    const staffEntry = {
      userId: paymentTakerId,
      trackId: statusData.track_id,
      amountPaidByCustomer: amountPaid,
      amountDueToStaff: staffCut,
      createdAt,
    };

    createPayoutStatus.run(staffEntry);

    // 2️⃣ Owners rows (5% each)

    for (const [userId, userInfo] of Object.entries(config)) {
      if (!userInfo?.owner) continue;

      const ownerEntry = {
        userId: userId,
        trackId: statusData.track_id,
        amountPaidByCustomer: amountPaid,
        amountDueToStaff: ownerCut,
        createdAt,
      };

      createPayoutStatus.run(ownerEntry);
    }

    return;
  }

  // Special case → Owner took payment
  const ownerEntry = {
    userId: paymentTakerId,
    trackId: statusData.track_id,
    amountPaidByCustomer: amountPaid,
    amountDueToStaff: serverFee, // Full 10%
    createdAt,
  };

  createPayoutStatus.run(ownerEntry);
};
