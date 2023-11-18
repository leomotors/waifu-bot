import { prisma } from "@waifu-bot/database";

import { getConfig } from "./getConfig";

export async function getCurrentWaifu() {
  const config = await getConfig();

  const waifu = await prisma.waifu.findUniqueOrThrow({
    where: {
      id: config.currentWaifuId,
    },
    include: {
      createdBy: true,
    },
  });

  return {
    ...waifu,
    simpingSince: config.simpingSince,
  };
}
