import { type RequestHandler, error } from "@sveltejs/kit";

import { getCurrentWaifu } from "$lib/server";

export const GET = (async ({ setHeaders, fetch }) => {
  const waifu = await getCurrentWaifu();

  const imageUrl = `/api/image?url=${encodeURIComponent(
    waifu.bannerUrl,
  )}&w=1200&q=100`;
  const res = await fetch(imageUrl);

  if (!res.body) {
    throw error(500, "Failed to fetch image");
  }

  setHeaders({
    "Cache-Control": "public, max-age=3600", // cache the image for 1 hour
    "Content-Type": res.headers.get("Content-Type") || "image/png",
  });

  return new Response(res.body);
}) satisfies RequestHandler;
