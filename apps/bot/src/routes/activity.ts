import { authEnv } from "@waifu-bot/auth";

import { FastifyReply, FastifyRequest } from "fastify";

import { activityManager } from "../bot.js";

export async function activity(request: FastifyRequest, reply: FastifyReply) {
  const authorization = request.headers.authorization;

  if (authorization !== authEnv.INTERNAL_SECRET) {
    reply.status(401);
    return "Unauthorized";
  }

  await activityManager.load(true);
  return "Success";
}
