import type { LayoutServerLoad } from "./$types";

export const load = (async ({ request }) => {
  const acceptLanguage = request.headers.get("Accept-Language") as string;

  return {
    acceptLanguage,
    primaryLanguage: acceptLanguage?.split(",")[0] || "default",
  };
}) satisfies LayoutServerLoad;
