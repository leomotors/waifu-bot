import { YoutubeURLPrefix } from "@waifu-bot/constants";

import { Voice as LibVoice } from "@leomotors/music-bot";

import {
    CogSlashClass,
    Param,
    SlashCommand,
} from "cocoa-discord-utils/slash/class";

import { gqlSdk, PublicWebUrl } from "../graphql";
import { updateUser } from "../graphql/hooks";

export class Web extends CogSlashClass {
    constructor() {
        super("Web", "Cog that interacts with Website");
    }

    @SlashCommand(
        "Grants you access to website, will revoke earlier access token"
    )
    async login(ctx: SlashCommand.Context) {
        await ctx.deferReply({ ephemeral: true });

        await updateUser(ctx);

        const res = await gqlSdk.generateToken({
            where: { id: ctx.user.id },
        });
        const token = res.generateToken.token;

        await ctx.followUp(
            `You can access website at ${PublicWebUrl}/login?token=${token}`
        );
    }

    @SlashCommand("Play saved playlist")
    async playlist(
        ctx: SlashCommand.Context,
        @Param.Integer("ID of Playlist to play") id: Param.Integer.Type
    ) {
        await ctx.deferReply();
        const playlist = (await gqlSdk.getPlaylist({ where: { id } })).playlist;

        if (!playlist) {
            await ctx.followUp(`Playlist #${id} not found`);
            return;
        }

        if (playlist.ownerId != ctx.user.id) {
            await ctx.followUp("Only the playlist owner can play it");
            return;
        }

        if (!playlist.music?.length) {
            await ctx.followUp(
                "This playlist has no music to play, please add one!"
            );
            return;
        }

        const reply = await ctx.followUp(
            `Loading musics... 0/${playlist.music.length}`
        );

        await LibVoice.joinFromContext(ctx);

        let added = 0;
        let failure = 0;
        for (const music of playlist.music) {
            added++;

            try {
                await LibVoice.addMusicToQueue(
                    ctx.guildId!,
                    YoutubeURLPrefix + music.videoId,
                    ctx.user.id
                );
            } catch (err) {
                failure++;
            }

            if (added < playlist.music.length) {
                await reply.edit(
                    `Loading musics... ${added}/${playlist.music.length}, failure: ${failure}`
                );
            } else {
                await reply.edit(
                    `Successfully loaded all ${playlist.music.length} musics!${
                        failure ? ` (${failure} failed)` : ""
                    }`
                );
            }
        }
    }
}
