import { getPayoutStatusesByUser } from "../database/queries.js";
import { config } from "../utils/constants.js";
import { buildBaseEmbed } from "../utils/embeds.js";
import { extendedAPICommand } from "../utils/typings/types.js";
import { ApplicationCommandOptionType } from "discord.js";

export default {
  name: "check_payout",
  description: "checkout someone payout data",
  options: [
    {
      name: "user",
      description: "someone else to check for (owner only)",
      type: ApplicationCommandOptionType.User,
    },
  ],

  execute: async (interaction) => {
    let optionalUserToCheckFor = interaction.options.getUser("user");

    if (
      optionalUserToCheckFor &&
      optionalUserToCheckFor.id !== interaction.user.id &&
      !config[interaction.user.id]?.owner
    )
      throw new Error("Owner only!");

    optionalUserToCheckFor ??= interaction.user;

    const payouts = getPayoutStatusesByUser.all({
      userId: optionalUserToCheckFor.id,
    });

    if (!payouts.length)
      throw new Error(
        `No payout records found for ${optionalUserToCheckFor.username}.`
      );

    // Sort by createdAt DESC
    payouts.sort((a, b) => b.createdAt - a.createdAt);

    // Build description
    let totalDue = 0;

    const payoutLines = payouts.map((p, i) => {
      totalDue += p.amountDueToStaff;
      return `${i + 1}. <t:${Math.floor(p.createdAt / 1000)}:f> - **$${
        p.amountDueToStaff
      }**\n`;
    });

    const description =
      `**📊 Total Due:** \`\`\`${totalDue} USD\`\`\`\n` +
      payoutLines.join("\n");

    const embed = buildBaseEmbed({
      guild: interaction.guild,
      title: `Payout Summary for ${optionalUserToCheckFor.username}`,
      description,
    });

    return embed;
  },
} satisfies extendedAPICommand;
