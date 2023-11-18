import { prisma } from "@waifu-bot/database";

import { type ServerLoad, error } from "@sveltejs/kit";

import { z } from "zod";

import type { Actions } from "./$types";

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

const baseSchema = z.object({
  nameJa: z.string().min(1),
  nameEn: z.string().default(""),
  sourceJa: z.string().min(1),
  sourceEn: z.string().default(""),
  footerText: z.string().default(""),
  note: z.string().default(""),
});

const createSchema = z.object({
  id: z.undefined(),
  imageFile: z.instanceof(File).refine((file) => file.size > 0),
  bannerFile: z.instanceof(File).refine((file) => file.size > 0),
});

const editSchema = z.object({
  id: z.string().regex(/^\d+$/),
  imageFile: z.instanceof(File).optional(),
  bannerFile: z.instanceof(File).optional(),
});

const schema = z.intersection(baseSchema, z.union([createSchema, editSchema]));

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const formEntries = Object.fromEntries(formData.entries());

    const result = schema.safeParse(formEntries);

    if (!result.success) {
      throw error(422, `zod error: ${result.error}`);
    }

    console.log({ data: result.data });

    return {
      ok: "hello",
    };
  },
} satisfies Actions;
