import { authEnv } from "@waifu-bot/auth";

import { Cocoa, LogStatus } from "cocoa-discord";

import { FastifyReply, FastifyRequest } from "fastify";

import { client } from "../bot.js";
import { fetchData } from "../data/waifu.js";

export async function resync(request: FastifyRequest, reply: FastifyReply) {
  const authorization = request.headers.authorization;

  if (authorization !== authEnv.INTERNAL_SECRET) {
    reply.status(401);
    return "Unauthorized";
  }

  const waifu = await fetchData();
  // @ts-expect-error Abusing private member
  Music.style = getStyle();

  if (!client.isReady()) {
    reply.status(400);
    return "Client is not ready";
  }

  const arrayBuffer = await fetch(waifu.imageUrl).then((res) =>
    res.arrayBuffer(),
  );

  await client.user.setAvatar(Buffer.from(arrayBuffer));

  if (client.user.username !== waifu.nameEn) {
    Cocoa.log(
      `Changing username to ${waifu.nameEn} (from ${client.user.username})`,
      LogStatus.Warning,
    );
    await client.user.setUsername(waifu.nameEn);
  }

  return "Success";
}
