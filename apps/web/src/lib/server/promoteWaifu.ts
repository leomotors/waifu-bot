import { prisma } from "@waifu-bot/database";

import { diffDays } from "./diffDays";
import { getConfig } from "./getConfig";

export async function promoteWaifu(id: string) {
  const now = new Date();
  const config = await getConfig();

  // Add Simp Interval to current waifu as memorial
  await prisma.simpInterval.create({
    data: {
      waifu: {
        connect: {
          id: config.currentWaifuId,
        },
      },
      ...diffDays(config.simpingSince, now),
    },
  });

  // Promote new Waifu to Production
  await prisma.configuration.update({
    where: { id: 0 },
    data: {
      currentWaifuId: Number(id),
      simpingSince: now,
    },
  });
}
