import { authEnv } from "@waifu-bot/auth";
import { prisma } from "@waifu-bot/database";

import { type RequestHandler, error, json } from "@sveltejs/kit";

import { getConfig } from "$lib/server/getConfig";

export const GET = (async ({ request }) => {
  const authorization = request.headers.get("Authorization");

  if (authorization !== authEnv.INTERNAL_SECRET) {
    throw error(401, "Unauthorized");
  }

  const config = await getConfig();
  const waifu = await prisma.waifu.findUniqueOrThrow({
    where: {
      id: config.currentWaifuId,
    },
  });

  return json(waifu);
}) satisfies RequestHandler;
