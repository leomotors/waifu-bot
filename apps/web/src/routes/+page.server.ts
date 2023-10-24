import { prisma } from "@waifu-bot/database";

import { getCurrentWaifu } from "$lib/server";

import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const [currentWaifu, allWaifu] = await Promise.all([
    getCurrentWaifu(),
    prisma.waifu.findMany({
      include: {
        simpIntervals: {
          orderBy: {
            begin: "desc",
          },
        },
      },
    }),
  ]);

  return {
    currentWaifu,
    allWaifu: allWaifu
      .filter((waifu) => waifu.simpIntervals.length)
      .sort((a, b) => {
        return (
          b.simpIntervals[0].begin.getTime() -
          a.simpIntervals[0].begin.getTime()
        );
      }),
  };
}) satisfies PageServerLoad;
