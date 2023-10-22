import { redirect } from "@sveltejs/kit";

import type { AuthFailReason } from "$lib/login";

import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  if (!locals.user) {
    console.log("(user)/home/+layout.server.ts#load : HOW");

    throw redirect(302, `/login?error=${"how" satisfies AuthFailReason}`);
  }

  return {
    user: locals.user,
  };
}) satisfies LayoutServerLoad;
