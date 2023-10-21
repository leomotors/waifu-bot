import { getCurrentWaifu } from "$lib/server";
import { error, type RequestHandler } from "@sveltejs/kit";

export const GET = (async ({ setHeaders, fetch }) => {
  const waifu = await getCurrentWaifu();

  const imageUrl = `/image?url=${encodeURI(waifu.imageUrl)}&w=64&q=100`;
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