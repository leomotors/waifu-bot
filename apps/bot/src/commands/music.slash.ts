import { Param, SlashCommand } from "cocoa-discord-utils/slash/class";

import { Voice as LibVoice, Music as MusicBase } from "@leomotors/music-bot";

import { ChannelType, Client, VoiceChannel } from "discord.js";

import { style } from "./styles.js";

// * Note: Extending Class Cog is not what you should do unless you know
// * underlying mechanics
export class Music extends MusicBase {
  constructor(client: Client) {
    super(client, style, "Related to playing music");
  }

  @SlashCommand("yes, rick roll")
  async rickroll(
    ctx: SlashCommand.Context,
    @Param.Channel("Channel to surprise!") channel: Param.Channel.Type,
  ) {
    if (channel.type !== ChannelType.GuildVoice) {
      await ctx.reply("Can only rick roll normal voice channel");
      return;
    }

    await ctx.deferReply();

    await LibVoice.joinVoiceChannel(channel as VoiceChannel);
    await LibVoice.addMusicToQueue(
      ctx.guildId!,
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      ctx.user.id,
    );

    await ctx.followUp("Rick Roll Time!");
  }
}
