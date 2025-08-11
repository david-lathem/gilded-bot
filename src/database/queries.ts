import { DBPayoutStatus } from "../utils/typings/databseTypes.js";
import db from "./index.js";

// Insert payout record
export const createPayoutStatus = db.prepare<DBPayoutStatus>(
  `INSERT INTO payout_status (userId, trackId, amountPaidByCustomer, amountDueToStaff, createdAt) 
   VALUES (@userId, @trackId, @amountPaidByCustomer, @amountDueToStaff, @createdAt)`
);

// Get all payouts
export const getAllPayoutStatuses = db.prepare<{}, DBPayoutStatus>(
  `SELECT * FROM payout_status`
);

// Get payouts for a specific user
export const getPayoutStatusesByUser = db.prepare<
  { userId: string },
  DBPayoutStatus
>(`SELECT * FROM payout_status WHERE userId = @userId`);

export const deleteAllPayoutStatuses = db.prepare<{}>(
  `DELETE FROM payout_status`
);
