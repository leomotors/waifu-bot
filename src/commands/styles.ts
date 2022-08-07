import { createEmbedStyle } from "cocoa-discord-utils";
import { getElapsed } from "cocoa-discord-utils/meta";

import { Interaction, Message } from "discord.js";

export namespace Waifu {
    export const name = "Shikimori";
    export const Color = 0xdfa7ce;
    export function Footer(ctx: Interaction | Message) {
        return {
            text: `Action took ${getElapsed(
                ctx.createdAt
            )} ms・可愛いだけじゃないわ💓`,
        };
    }
}

export const style = createEmbedStyle({
    author: "invoker",
    color: Waifu.Color,
    footer: (ctx) => Waifu.Footer(ctx),
});
