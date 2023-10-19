import { env } from "$env/dynamic/private";
import { redirect, type Handle, error } from "@sveltejs/kit";

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

  const accessToken = event.cookies.get("access_token");

  if (!accessToken) {
    throw redirect(302, "/login?error=notauthenticated");
  }

  try {
    const user = jwt.verify(accessToken, env.JWT_SECRET);

    const parsed = jwtSchema.safeParse(user);
    if (!parsed.success) {
      throw redirect(302, "/login?error=invalidjwtcontent");
    }

    event.locals.user = parsed.data;

    const response = await resolve(event);
    return response;
  } catch (error) {
    throw redirect(302, "/login?error=notauthenticated");
  }
}) satisfies Handle;
