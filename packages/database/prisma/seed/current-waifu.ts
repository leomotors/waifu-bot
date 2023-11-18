import { discordUserId, prisma } from "./constant";

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
        id: discordUserId,
      },
    },
    simpedBy: {
      connect: {
        id: discordUserId,
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
