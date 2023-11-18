import { authEnv } from "@waifu-bot/auth";

import { FastifyReply, FastifyRequest } from "fastify";

import { fetchData } from "../data/waifu.js";

export async function resync(request: FastifyRequest, reply: FastifyReply) {
  const authorization = request.headers.authorization;

  if (authorization !== authEnv.INTERNAL_SECRET) {
    reply.status(401);
    return "Unauthorized";
  }

  await fetchData();
  // @ts-expect-error Abusing private member
  Music.style = getStyle();

  return "Success";
}
