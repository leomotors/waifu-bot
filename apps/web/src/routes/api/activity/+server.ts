import { authEnv } from "@waifu-bot/auth";
import { prisma } from "@waifu-bot/database";

import { type RequestHandler, error, json } from "@sveltejs/kit";

export const GET = (async ({ request }) => {
  const authorization = request.headers.get("Authorization");

  if (authorization !== authEnv.INTERNAL_SECRET) {
    error(401, "Unauthorized");
  }

  const activity = await prisma.activity.findMany({
    where: {
      enabled: true,
    },
  });

  return json(activity);
}) satisfies RequestHandler;
