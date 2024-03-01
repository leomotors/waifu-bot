import { Param, SlashCommand } from "cocoa-discord/slash/class";

import {
  Music as MusicBase,
  addMusicToQueue,
  joinVoiceChannel,
} from "@cocoa-discord/music-module";

import { ChannelType, Client, VoiceChannel } from "discord.js";

import { getStyle } from "../data/waifu.js";

// * Note: Extending Class Cog is not what you should do unless you know
// * underlying mechanics
export class Music extends MusicBase {
  constructor(client: Client) {
    super(client, () => getStyle(), "Related to playing music");
  }

  @SlashCommand("yes, rick roll")
  async rickroll(
    ctx: SlashCommand.Context,
    @Param.Channel("Channel to surprise!") channel: Param.Channel.Type,
  ) {
    if (!ctx.guildId) {
      await ctx.reply("This command is only available in server!");
      return;
    }

    if (channel.type !== ChannelType.GuildVoice) {
      await ctx.reply("Can only rick roll normal voice channel");
      return;
    }

    await ctx.deferReply();

    await joinVoiceChannel(channel as VoiceChannel);
    await addMusicToQueue(
      ctx.guildId,
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      ctx.user.id,
    );

    await ctx.followUp("Rick Roll Time!");
  }
}
