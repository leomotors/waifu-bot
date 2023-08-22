import {
  CogSlashClass,
  Param,
  SlashCommand,
} from "cocoa-discord-utils/slash/class";

import { CommandChoice, getLyric } from "./kashi.service.js";
import { style } from "./styles.js";

export class Kashi extends CogSlashClass {
  constructor() {
    super("Kashi", "Lyrics Related Cog");
  }

  @SlashCommand("Get Lyrics of the Song")
  async lyric(
    ctx: SlashCommand.Context,
    @Param.Choices<Param.String.Type>(async () => await CommandChoice())
    @Param.String("Name of the song")
    song: Param.String.Type,
    @Param.Ephemeral ephemeral: Param.Ephemeral.Type
  ) {
    const { content, img, title } = await getLyric(song);

    const emb = style.use(ctx).setTitle(title).setDescription(content);
    if (img) emb.setThumbnail(img);

    await ctx.reply({
      embeds: [emb.toJSON()],
      ephemeral: ephemeral ?? false,
    });
  }
}
