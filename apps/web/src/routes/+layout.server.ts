import { parseAcceptLanguage } from "$lib/server/acceptLanguage";

import type { LayoutServerLoad } from "./$types";

export const load = (async ({ request }) => {
  const acceptLanguage = request.headers.get("Accept-Language") as string;

  return {
    acceptLanguage,
    primaryLanguage: parseAcceptLanguage(acceptLanguage),
  };
}) satisfies LayoutServerLoad;
