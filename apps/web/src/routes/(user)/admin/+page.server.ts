import { prisma } from "@waifu-bot/database";

import { getCurrentWaifu } from "$lib/server/getCurrentWaifu";

import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const [activityCount, enabledActivity, currentWaifu] = await Promise.all([
    prisma.activity.count(),
    prisma.activity.count({
      where: {
        enabled: true,
      },
    }),
    getCurrentWaifu(),
  ]);

  return {
    activityCount,
    enabledActivity,
    currentWaifu,
  };
}) satisfies PageServerLoad;
