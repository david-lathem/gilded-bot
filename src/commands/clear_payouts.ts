import { extendedAPICommand } from "../utils/typings/types.js";
import { deleteAllPayoutStatuses } from "../database/queries.js";

export default {
  name: "clear_payouts",
  description: "Clear everyone payout data",
  ownerOnly: true,

  execute: async (interaction) => {
    deleteAllPayoutStatuses.run({});

    await interaction.editReply("Cleared everyone data!");
  },
} satisfies extendedAPICommand;
