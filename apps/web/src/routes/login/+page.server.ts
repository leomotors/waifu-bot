import { prisma } from "@waifu-bot/database";

import { error, redirect } from "@sveltejs/kit";

import { env } from "$env/dynamic/private";
import { cookieTokenKey } from "$lib/constants";

import jwt from "jsonwebtoken";

import type { Actions } from "./$types";

export const actions = {
  default: async ({ cookies, request }) => {
    if (!env.JWT_SECRET) {
      throw error(500, "Server missing environment variables");
    }

    const formData = await request.formData();
    const ticketId = formData.get("ticket");

    if (!ticketId || typeof ticketId !== "string") {
      throw error(400, "Missing ticket");
    }

    const ticket = await prisma.ticket.findUnique({
      where: {
        ticketId,
      },
      include: {
        user: true,
      },
    });

    if (!ticket) {
      throw error(400, "Invalid ticket");
    }

    await prisma.ticket.deleteMany({
      where: {
        userId: ticket.userId,
      },
    });

    // Now > createdAt + 10 Min (Expired)
    // Now - 10 Min > createdAt
    if (new Date(Date.now() - 1000 * 60 * 10) > ticket.createdAt) {
      throw error(400, "Ticket expired");
    }

    const accessToken = jwt.sign(
      {
        userId: ticket.userId,
        username: ticket.user.name,
        role: ticket.user.role,
      },
      env.JWT_SECRET,
      { expiresIn: "14d" },
    );

    cookies.set(cookieTokenKey, accessToken, {
      path: "/",
      httpOnly: true,
      sameSite: true,
      maxAge: 60 * 60 * 24 * 14,
    });

    throw redirect(302, "/home");
  },
} satisfies Actions;
