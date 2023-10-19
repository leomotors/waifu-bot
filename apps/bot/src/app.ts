import { authEnv } from "@waifu-bot/auth";
import { botWebhookPort } from "@waifu-bot/constants";

import chalk from "chalk";
import Fastify from "fastify";

import { activityManager } from "./bot.js";

const fastify = Fastify();

// Declare a route
fastify.post("/webhook/activity", async (request, reply) => {
  const authorization = request.headers.authorization;

  if (authorization !== authEnv.INTERNAL_SECRET) {
    reply.status(401);
    return "Unauthorized";
  }

  await activityManager.load();
  return "Success";
});

// Run the server!
try {
  await fastify.listen({ port: botWebhookPort });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}

process.on("SIGINT", async () => {
  console.log(chalk.yellow("Terminating Waifu Bot Webhook Client..."));
  await fastify.close();
});
