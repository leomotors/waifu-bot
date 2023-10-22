import { type Handle, error, redirect } from "@sveltejs/kit";

import { env } from "$env/dynamic/private";
import { cookieTokenKey } from "$lib/constants";
import type { AuthFailReason } from "$lib/login";

import jwt from "jsonwebtoken";
import { z } from "zod";

const jwtSchema = z.object({
  userId: z.string().regex(/^[0-9]+$/),
  username: z.string(),
  role: z.enum(["USER", "ADMIN"]),
});

export const handle = (async ({ event, resolve }) => {
  const isRequiredAuthPath =
    event.url.pathname.startsWith("/admin") ||
    event.url.pathname.startsWith("/home");

  if (!isRequiredAuthPath) {
    const response = await resolve(event);
    return response;
  }

  if (!env.JWT_SECRET) {
    throw error(500, "Server missing environment variables");
  }

  const accessToken = event.cookies.get(cookieTokenKey);

  if (!accessToken) {
    throw redirect(
      302,
      `/login?error=${"notauthenticated" satisfies AuthFailReason}`,
    );
  }

  try {
    const user = jwt.verify(accessToken, env.JWT_SECRET);

    const parsed = jwtSchema.safeParse(user);
    if (!parsed.success) {
      throw redirect(
        302,
        `/login?error=${"invalidjwtcontent" satisfies AuthFailReason}`,
      );
    }

    event.locals.user = parsed.data;

    // Check Admin
    if (event.url.pathname.startsWith("/admin")) {
      if (parsed.data.role !== "ADMIN") {
        throw error(403, "Forbidden");
      }
    }

    const response = await resolve(event);
    return response;
  } catch (error) {
    throw redirect(
      302,
      `/login?error=${"notauthenticated" satisfies AuthFailReason}`,
    );
  }
}) satisfies Handle;
