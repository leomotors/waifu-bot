import { prisma } from "@waifu-bot/database";

export async function getAllWaifu(pastOnly = true) {
  const allWaifu = await prisma.waifu.findMany({
    include: {
      simpIntervals: {
        orderBy: {
          begin: "desc",
        },
      },
      createdBy: true,
    },
  });

  return allWaifu
    .filter((waifu) => !pastOnly || waifu.simpIntervals.length)
    .sort((a, b) => {
      return (
        (b.simpIntervals[0]?.begin.getTime() ?? b.createdAt.getTime()) -
        (a.simpIntervals[0]?.begin.getTime() ?? a.createdAt.getTime())
      );
    });
}
