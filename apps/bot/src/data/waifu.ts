import { authEnv } from "@waifu-bot/auth";
import { localWebUrl } from "@waifu-bot/constants";
import { type prisma } from "@waifu-bot/database";

import { Cocoa, LogStatus, createEmbedStyle } from "cocoa-discord";
import { getElapsed } from "cocoa-discord/meta";

import { Interaction, Message } from "discord.js";

let waifuData:
  | Awaited<ReturnType<(typeof prisma)["waifu"]["findUniqueOrThrow"]>>
  | undefined;

export async function fetchData(webhook = false) {
  const response = await fetch(localWebUrl + "/api/waifu", {
    headers: {
      Authorization: authEnv.INTERNAL_SECRET,
    },
  });

  if (!response.ok) {
    if (waifuData) {
      Cocoa.log(
        `Failed to fetch data ${response.status} ${response.statusText}, using cached data`,
        LogStatus.Error,
      );
      return waifuData;
    } else {
      throw new Error(
        `Failed to fetch data ${response.status} ${response.statusText}`,
      );
    }
  }

  waifuData = await response.json();
  Cocoa.log(
    `Successfully fetching Waifu Data for ${waifuData!.nameJa}` +
      (webhook ? " (Requested by Webhook)" : ""),
    LogStatus.Success,
  );
  return waifuData!;
}

export async function ensureData() {
  if (!waifuData) {
    await fetchData();
  }
}

export function getWaifuData() {
  if (!waifuData) {
    throw new Error("Waifu data not loaded");
  }

  return waifuData;
}

export function getStyle() {
  const waifu = getWaifuData();

  return createEmbedStyle({
    author: "invoker",
    color: parseInt(waifu.color.replace(/^#/, ""), 16),
    footer: (ctx: Interaction | Message) => {
      return {
        text: `Action took ${getElapsed(ctx.createdAt)} ms・${
          waifu.footerText
        }`,
      };
    },
  });
}

export function getShortNameEn() {
  const data = getWaifuData();
  return data.shortNameEn || data.shortNameJa;
}

export function getLongNameEn() {
  const data = getWaifuData();
  return data.nameEn || data.nameJa;
}
