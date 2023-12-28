import { prisma } from "@waifu-bot/database";

import { redirect } from "@sveltejs/kit";

import type { AuthFailReason } from "$lib/login";

import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  if (!locals.user) {
    console.log("(user)/+layout.server.ts#load : HOW");

    redirect(302, `/login?error=${"how" satisfies AuthFailReason}`);
  }

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: locals.user.userId,
    },
    include: {
      simpingWaifu: true,
      _count: {
        select: {
          createdWaifus: true,
        },
      },
    },
  });

  return {
    user,
  };
}) satisfies LayoutServerLoad;
