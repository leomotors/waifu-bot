import { EmbedColor, FooterText, ShortNameEN } from "@waifu-bot/constants";

import { createEmbedStyle } from "cocoa-discord-utils";
import { getElapsed } from "cocoa-discord-utils/meta";

import { CommandInteraction, Message } from "discord.js";

export namespace Waifu {
    export const name = ShortNameEN;
    export const Color = EmbedColor;
    export function Footer(ctx: CommandInteraction | Message) {
        return {
            text: `Action took ${getElapsed(ctx.createdAt)} ms・${FooterText}`,
        };
    }
}

export const style = createEmbedStyle({
    author: "invoker",
    color: Waifu.Color,
    footer: (ctx) => Waifu.Footer(ctx),
});
