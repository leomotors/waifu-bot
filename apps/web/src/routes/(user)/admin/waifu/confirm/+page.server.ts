import { authEnv } from "@waifu-bot/auth";
import { botWebhookUrl } from "@waifu-bot/constants";
import { prisma } from "@waifu-bot/database";

import { error, redirect } from "@sveltejs/kit";

import { getConfig } from "$lib/server/getConfig";
import { promoteWaifu } from "$lib/server/promoteWaifu";

import { z } from "zod";

import type { Actions, PageServerLoad } from "./$types";

const schema = z.object({
  action: z.union([z.literal("simp"), z.literal("resync")]),
  id: z.string().regex(/^\d+$/),
});

export const load = (async ({ parent, url }) => {
  const { user } = await parent();

  if (user.role !== "SUPERADMIN") {
    throw error(403, "Forbidden");
  }

  const searchParams = new URLSearchParams(url.search);
  const result = schema.safeParse(Object.fromEntries(searchParams));

  if (!result.success) {
    throw error(400, `Bad Request: ${result.error.message}`);
  }

  const { action, id } = result.data;

  const config = await getConfig();

  if (action === "resync" && config.currentWaifuId !== +id) {
    throw error(400, "You seem to try to resync wrong waifu");
  }

  const waifu = await prisma.waifu.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      shortNameJa: true,
    },
  });

  if (!waifu) {
    throw error(404, "Not Found");
  }

  return {
    action,
    id,
    waifuName: waifu.shortNameJa,
  };
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    const action = formData.get("action");

    const result = schema.safeParse({ id, action });

    if (!result.success) {
      throw error(422, `zod error: ${result.error.message}`);
    }

    if (result.data.action === "simp") {
      await promoteWaifu(result.data.id);
    }

    // Fire webhook
    const res = await fetch(botWebhookUrl + "/webhook/resync", {
      method: "POST",
      headers: {
        Authorization: authEnv.INTERNAL_SECRET,
      },
    });

    if (!res.ok) {
      throw error(
        500,
        `Failed to fire webhook: ${res.status} ${res.statusText}`,
      );
    }

    throw redirect(303, "/admin/waifu");
  },
} satisfies Actions;
