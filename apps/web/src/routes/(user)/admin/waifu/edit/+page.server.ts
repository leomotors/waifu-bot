import { prisma } from "@waifu-bot/database";

import { type ServerLoad, error, redirect } from "@sveltejs/kit";

import { uploadFile } from "$lib/server/uploadFile";

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
  shortNameJa: z.string().min(1),
  shortNameEn: z.string().default(""),
  color: z.string().regex(/^#[0-9a-f]{6}$/i),
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
  default: async ({ request, locals }) => {
    const formData = await request.formData();

    const formEntries = Object.fromEntries(formData.entries());

    const result = schema.safeParse(formEntries);

    if (!result.success) {
      throw error(422, `zod error: ${result.error}`);
    }

    const filePrefix = result.data.shortNameEn || result.data.shortNameJa;

    const [imageUrl, bannerUrl] = await Promise.all([
      result.data.imageFile?.size ?? 0 > 0
        ? uploadFile(result.data.imageFile!, filePrefix + "-image")
        : undefined,
      result.data.bannerFile?.size ?? 0 > 0
        ? uploadFile(result.data.bannerFile!, filePrefix + "-banner")
        : undefined,
    ]);

    if (result.data.id && !isNaN(+result.data.id)) {
      await prisma.waifu.update({
        where: {
          id: +result.data.id,
        },
        data: {
          nameJa: result.data.nameJa,
          nameEn: result.data.nameEn,
          shortNameJa: result.data.shortNameJa,
          shortNameEn: result.data.shortNameEn,
          color: result.data.color,
          sourceJa: result.data.sourceJa,
          sourceEn: result.data.sourceEn,
          footerText: result.data.footerText,
          note: result.data.note,
          imageUrl,
          bannerUrl,
          createdBy: {
            connect: {
              id: locals.user!.userId,
            },
          },
        },
      });
    } else {
      await prisma.waifu.create({
        data: {
          nameJa: result.data.nameJa,
          nameEn: result.data.nameEn,
          shortNameJa: result.data.shortNameJa,
          shortNameEn: result.data.shortNameEn,
          color: result.data.color,
          sourceJa: result.data.sourceJa,
          sourceEn: result.data.sourceEn,
          footerText: result.data.footerText,
          note: result.data.note,
          imageUrl: imageUrl!,
          bannerUrl: bannerUrl!,
          createdBy: {
            connect: {
              id: locals.user!.userId,
            },
          },
        },
      });
    }

    throw redirect(303, "/admin/waifu");
  },
} satisfies Actions;
