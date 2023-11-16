import { prisma } from "@waifu-bot/database";

import { type ServerLoad, error } from "@sveltejs/kit";

async function loadWaifuData(id: number) {
  if (isNaN(id)) {
    return null;
  }

  const waifu = prisma.waifu.findUnique({
    where: { id },
  });

  if (!waifu) {
    throw error(404, "Not Found: Waifu not found");
  }

  return waifu;
}

export const load = (async ({ url }) => {
  const searchParams = new URLSearchParams(url.search);

  const id = searchParams.get("id");

  if (!id || (isNaN(+id) && id !== "create")) {
    throw error(400, "Bad Request: Invalid id");
  }

  const waifu = await loadWaifuData(+id);

  return {
    id: +id,
    create: id === "create",
    waifu,
  };
}) satisfies ServerLoad;
