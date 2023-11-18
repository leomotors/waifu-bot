import { botWebhookPort } from "@waifu-bot/constants";

import chalk from "chalk";
import Fastify from "fastify";

import { activity } from "./routes/activity.js";
import { resync } from "./routes/resync.js";

const fastify = Fastify({
  logger: true,
});

// Declare routes
fastify.post("/webhook/activity", activity);
fastify.post("/webhook/resync", resync);

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
