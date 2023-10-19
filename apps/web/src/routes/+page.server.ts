import { prisma } from "@waifu-bot/database";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const config = await prisma.configuration.findUniqueOrThrow({
    where: { id: 0 },
  });

  const waifu = await prisma.waifu.findUniqueOrThrow({
    where: {
      id: config.currentWaifuId,
    },
  });

  return waifu;
}) satisfies PageServerLoad;
