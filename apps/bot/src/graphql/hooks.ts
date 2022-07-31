import { Interaction, Message } from "discord.js";

import { gqlSdk } from "./client";

export async function updateUser(ctx: Interaction | Message) {
    const user = (ctx as Interaction).user ?? (ctx as Message).author;

    gqlSdk.upsertUser({
        data: {
            id: user.id,
            profile: {
                username: user.username,
                lastInteractGuildName: ctx.guild?.name ?? "<Undefined Guild>",
                avatarUrl: user.avatarURL() ?? user.defaultAvatarURL,
            },
        },
    });
}
