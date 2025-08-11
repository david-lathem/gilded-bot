import db from "./index.js";

db.exec(`
  CREATE TABLE IF NOT EXISTS payout_status (
    userId TEXT NOT NULL,
    trackId TEXT NOT NULL,
    amountPaidByCustomer REAL NOT NULL,
    amountDueToStaff REAL NOT NULL,
    createdAt INTEGER NOT NULL,
    PRIMARY KEY (userId, trackId)
  )
`);
