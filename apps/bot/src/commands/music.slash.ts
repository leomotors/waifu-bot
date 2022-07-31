import { Voice as LibVoice, Music as MusicBase } from "@leomotors/music-bot";

import { Param, SlashCommand } from "cocoa-discord-utils/slash/class";

import { Client } from "discord.js";

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

        if (result != "No results found") {
            const emb = this.musicEmbed(ctx, ctx.user.id, result);
            await ctx.followUp({ embeds: [emb.toJSON()] });
        } else {
            await ctx.followUp("Unexpected Error: Video not found");
        }
    }
}
