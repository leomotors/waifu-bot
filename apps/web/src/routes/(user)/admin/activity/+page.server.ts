import { ActivityType, prisma } from "@waifu-bot/database";

import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
  const activities = await prisma.activity.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return {
    activities,
  };
}) satisfies PageServerLoad;

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("name");
    const type = formData.get("type");
    const url = formData.get("url");
    const enabled = formData.get("enabled") === "on";

    if (
      !name ||
      !type ||
      typeof name !== "string" ||
      typeof type !== "string" ||
      typeof url !== "string"
    ) {
      return { error: "Unexpected Error: Data Type invalid" };
    }

    try {
      const created = await prisma.activity.create({
        data: {
          name,
          type: type as ActivityType,
          url,
          enabled,
        },
      });

      return {
        message: `Successfully created activity #${created.id} (${created.name})`,
      };
    } catch (error) {
      return { error: `Unexpected Error: ${error}` };
    }
  },
  update: async ({ request }) => {
    const formData = await request.formData();

    const id = formData.get("id");
    const name = formData.get("name");
    const type = formData.get("type");
    const url = formData.get("url");
    const enabled = formData.get("enabled") === "on";

    if (
      !id ||
      !name ||
      !type ||
      typeof id !== "string" ||
      typeof name !== "string" ||
      typeof type !== "string" ||
      typeof url !== "string"
    ) {
      return { error: "Unexpected Error: Data Type invalid" };
    }

    try {
      await prisma.activity.update({
        where: { id: +id },
        data: {
          name,
          type: type as ActivityType,
          url,
          enabled,
        },
      });
    } catch (error) {
      return { error: `Unexpected Error: ${error}` };
    }

    return { message: `Successfully update activity #${id} (${name})` };
  },
  delete: async ({ request }) => {
    const formData = await request.formData();

    const id = formData.get("id");

    if (!id || typeof id !== "string") {
      return { error: "Unexpected Error: ID invalid (HOW)" };
    }

    const deleted = await prisma.activity.delete({
      where: { id: +id },
    });

    return {
      message: `Successfully deleted activity #${id} (${deleted.name})`,
    };
  },
} satisfies Actions;
