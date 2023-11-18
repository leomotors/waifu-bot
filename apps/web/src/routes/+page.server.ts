import { getAllWaifu } from "$lib/server/getAllWaifu";
import { getCurrentWaifu } from "$lib/server/getCurrentWaifu";

import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const [currentWaifu, allWaifu] = await Promise.all([
    getCurrentWaifu(),
    getAllWaifu(),
  ]);

  return {
    currentWaifu,
    allWaifu,
  };
}) satisfies PageServerLoad;
