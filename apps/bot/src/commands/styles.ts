import { EmbedColor, FooterText, ShortNameEN } from "@waifu-bot/constants";

import { createEmbedStyle } from "cocoa-discord-utils";
import { getElapsed } from "cocoa-discord-utils/meta";

import { Interaction, Message } from "discord.js";

export const Waifu = {
  name: ShortNameEN,
  Color: EmbedColor,
  Footer(ctx: Interaction | Message) {
    return {
      text: `Action took ${getElapsed(ctx.createdAt)} ms・${FooterText}`,
    };
  },
};

export const style = createEmbedStyle({
  author: "invoker",
  color: Waifu.Color,
  footer: (ctx) => Waifu.Footer(ctx),
});
