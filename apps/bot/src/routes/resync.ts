import { authEnv } from "@waifu-bot/auth";

import { Cocoa, EmbedStyle, LogStatus } from "cocoa-discord";

import { FastifyReply, FastifyRequest } from "fastify";

import { client, musicClient } from "../bot.js";
import { fetchData, getShortNameEn, getStyle } from "../data/waifu.js";

export async function resync(request: FastifyRequest, reply: FastifyReply) {
  const authorization = request.headers.authorization;

  if (authorization !== authEnv.INTERNAL_SECRET) {
    reply.status(401);
    return "Unauthorized";
  }

  const waifu = await fetchData(true);
  (musicClient as unknown as { style: EmbedStyle }).style = getStyle();

  if (!client.isReady()) {
    reply.status(400);
    return "Client is not ready";
  }

  const arrayBuffer = await fetch(waifu.imageUrl).then((res) =>
    res.arrayBuffer(),
  );

  await client.user.setAvatar(Buffer.from(arrayBuffer));

  const newName = getShortNameEn();

  if (client.user.username !== newName) {
    Cocoa.log(
      `Changing username to ${newName} (from ${client.user.username})`,
      LogStatus.Warning,
    );
    await client.user.setUsername(newName);
  }

  return "Success";
}
