import { ActivityType, PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

await prisma.user.create({
  data: {
    id: "143649805250461696",
    name: "leomotors",
    avatarUrl:
      "https://cdn.discordapp.com/avatars/143649805250461696/a_5b8933c0cb2d730dc228160de172719a.gif?size=4096",
    role: UserRole.SUPERADMIN,
  },
});

const waifu = await prisma.waifu.create({
  data: {
    nameEn: "Yoisaki Kanade",
    nameJa: "宵崎奏",
    shortNameEn: "Kanade",
    shortNameJa: "奏",
    footerText: "……曲、つくらなくちゃ",
    color: "#0a0fac",

    imageUrl: "https://senddude.leomotors.me/files/waifu/kanade-pfp.png",
    bannerUrl: "https://senddude.leomotors.me/files/waifu/kanade-banner.png",

    sourceEn: "HATSUNE MIKU: COLORFUL STAGE!",
    sourceJa: "プロジェクトセカイ カラフルステージ！ feat. 初音ミク",

    createdBy: {
      connect: {
        id: "143649805250461696",
      },
    },
    simpedBy: {
      connect: {
        id: "143649805250461696",
      },
    },
  },
});

await prisma.configuration.create({
  data: {
    currentWaifu: {
      connect: {
        id: waifu.id,
      },
    },
    simpingSince: new Date("2023-10-17"),
  },
});

const activity = {
  LISTENING: [
    "Sannin de iru jikan",
    "Yukitoki",
    "il vento d'oro",
    "Honey Jet Coaster",
    "Daydream café",
    "Can You Feel My Heart",
    "Bury the Light",
    "Seisyun Complex",
    "Don't Fight The Music",
    "INTERNET OVERDOSE",
  ],
  STREAMING: [
    {
      name: "cunny",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],
} as const;

await prisma.activity.createMany({
  data: activity.LISTENING.map((name) => ({
    name,
    type: ActivityType.Listening,
  })),
});

await prisma.activity.createMany({
  data: activity.STREAMING.map((obj) => ({
    name: obj.name,
    type: ActivityType.Streaming,
    url: obj.url,
  })),
});
