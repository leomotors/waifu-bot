import type { ServerLoad } from "@sveltejs/kit";

import { getAllWaifu } from "$lib/server/getAllWaifu";
import { getConfig } from "$lib/server/getConfig";

export const load = (async () => {
  const [allWaifu, config] = await Promise.all([
    getAllWaifu(false),
    getConfig(),
  ]);

  return { allWaifu, config };
}) satisfies ServerLoad;
