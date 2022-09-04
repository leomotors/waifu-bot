import { Voice as LibVoice, Music as MusicBase } from "@leomotors/music-bot";

import { Param, SlashCommand } from "cocoa-discord-utils/slash/class";

import { ChannelType, Client, VoiceChannel } from "discord.js";

import * as fs from "fs/promises";

import { style } from "./styles";

let qualityLinks: { [key: string]: string };

// * Note: Extending Class Cog is not what you should do unless you know
// * underlying mechanics
export class Music extends MusicBase {
    constructor(client: Client) {
        super(client, style, "Related to playing music");
    }

    @SlashCommand("Play quality preseted musics")
    async quality(
        ctx: SlashCommand.Context,
        @Param.Choices<Param.String.Type>(async () => {
            qualityLinks = JSON.parse(
                (await fs.readFile("data/quality.json")).toString()
            ) as { [key: string]: string };

            return Object.keys(qualityLinks).map((k) => ({
                name: k,
                value: k,
            }));
        })
        @Param.String("Quality musics to play")
        quality: Param.String.Type
    ) {
        await ctx.deferReply();

        await LibVoice.joinFromContext(ctx);
        const result = await LibVoice.addMusicToQueue(
            ctx.guildId!,
            qualityLinks[quality]!,
            ctx.user.id
        );

        if (typeof result != "string") {
            const emb = this.musicEmbed(ctx, ctx.user.id, result);
            await ctx.followUp({ embeds: [emb] });
        } else {
            await ctx.followUp(`Unexpected Error: ${result}`);
        }
    }

    @SlashCommand("yes, rick roll")
    async rickroll(
        ctx: SlashCommand.Context,
        @Param.Channel("Channel to surprise!") channel: Param.Channel.Type
    ) {
        if (channel.type != ChannelType.GuildVoice) {
            await ctx.reply("Can only rick roll normal voice channel");
            return;
        }

        await ctx.deferReply();

        await LibVoice.joinVoiceChannel(channel as VoiceChannel);
        await LibVoice.addMusicToQueue(
            ctx.guildId!,
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            ctx.user.id
        );

        await ctx.followUp("Rick Roll Time!");
    }
}
