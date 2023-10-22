import { getCurrentWaifu } from "$lib/server";

import type { PageServerLoad } from "./$types";

export const load = (async () => {
  return await getCurrentWaifu();
}) satisfies PageServerLoad;
