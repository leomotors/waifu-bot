import { type Handle, error, redirect } from "@sveltejs/kit";

import { env } from "$env/dynamic/private";
import { isAdmin } from "$lib/authUtils";
import { cookieTokenKey } from "$lib/constants";
import type { AuthFailReason } from "$lib/login";

import jwt from "jsonwebtoken";

import { jwtSchema } from "./types";

function parseJwt(accessToken: string, secret: string) {
  try {
    const user = jwt.verify(accessToken, secret);
    return user;
  } catch (error) {
    redirect(
      302,
      `/login?error=${"notauthenticated" satisfies AuthFailReason}`,
    );
  }
}

export const handle = (async ({ event, resolve }) => {
  const isRequiredAuthPath =
    event.url.pathname.startsWith("/admin") ||
    event.url.pathname.startsWith("/home");

  if (!isRequiredAuthPath) {
    const response = await resolve(event);
    return response;
  }

  if (!env.JWT_SECRET) {
    error(500, "Server missing environment variables");
  }

  const accessToken = event.cookies.get(cookieTokenKey);

  if (!accessToken) {
    redirect(
      302,
      `/login?error=${"notauthenticated" satisfies AuthFailReason}`,
    );
  }

  const user = parseJwt(accessToken, env.JWT_SECRET);

  const parsed = jwtSchema.safeParse(user);
  if (!parsed.success) {
    redirect(
      302,
      `/login?error=${"invalidjwtcontent" satisfies AuthFailReason}`,
    );
  }

  event.locals.user = parsed.data;

  // Check Admin
  if (event.url.pathname.startsWith("/admin")) {
    if (!isAdmin(parsed.data.role)) {
      error(403, "Forbidden");
    }
  }

  const response = await resolve(event);
  return response;
}) satisfies Handle;
