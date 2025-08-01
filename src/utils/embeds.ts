import { EmbedBuilder } from "discord.js";
import { BaseEmbedOptions } from "./typings/types.js";

export function buildBaseEmbed({
  guild,
  title,
  description,
  color = 15856712,
  fields = [],
}: BaseEmbedOptions) {
  return (
    new EmbedBuilder()
      .setTitle(title ?? null)
      .setColor(color)
      .setDescription(description ?? null)
      .addFields(fields)
      .setFooter({
        text: guild.name,
        iconURL: guild.iconURL({ size: 128 }) || undefined,
      })
      // .setThumbnail(
      //   "https://media.discordapp.net/attachments/1387420725069090948/1388080189489021171/avatar.gif?ex=6868e86a&is=686796ea&hm=d036c62e675a21637bf6229f568fbf7c8f5c1f83cdd6d0323a2d61351652621c&=&width=250&height=250"
      // )
      .setImage("https://i.gyazo.com/c132d07db96a21cbd6b56ffae63e3527.gif")
  );
}
