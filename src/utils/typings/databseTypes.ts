export type DBPayoutStatus = {
  userId: string;
  trackId: string;
  amountPaidByCustomer: number;
  amountDueToStaff: number;
  createdAt: number; // Unix timestamp
};
