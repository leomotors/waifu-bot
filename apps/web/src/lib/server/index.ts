import { prisma } from "@waifu-bot/database";

export async function getCurrentWaifu() {
  const config = await prisma.configuration.findUniqueOrThrow({
    where: { id: 0 },
  });

  const waifu = await prisma.waifu.findUniqueOrThrow({
    where: {
      id: config.currentWaifuId,
    },
  });

  return waifu;
}
