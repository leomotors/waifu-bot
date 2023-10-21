import type { PageServerLoad } from "./$types";
import { getCurrentWaifu } from "$lib/server";

export const load = (async () => {
  return await getCurrentWaifu();
}) satisfies PageServerLoad;
