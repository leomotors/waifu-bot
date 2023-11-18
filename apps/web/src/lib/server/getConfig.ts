import { prisma } from "@waifu-bot/database";

export async function getConfig() {
  const config = await prisma.configuration.findUniqueOrThrow({
    where: { id: 0 },
  });

  return config;
}
