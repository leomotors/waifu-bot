import { discordUserId, prisma } from "./constant";

function simpInterval(
  begin: string,
  end: string,
  versionBegin: string | undefined = undefined,
  versionEnd: string | undefined = undefined,
) {
  const b = new Date(begin);
  const e = new Date(end);

  const days = Math.round((e.getTime() - b.getTime()) / (1000 * 3600 * 24)) + 1;

  return {
    begin: b,
    end: e,
    days,
    versionBegin,
    versionEnd,
  };
}

await prisma.waifu.create({
  data: {
    nameEn: "Sajo Kaede",
    nameJa: "佐城 楓",
    shortNameEn: "Kaede",
    shortNameJa: "かえで",
    footerText: "hot blond onee chan at your service ⋆｡",
    color: "#bb9963",

    imageUrl: "https://senddude.leomotors.me/files/waifu/kaede-pfp.webp",
    bannerUrl: "https://senddude.leomotors.me/files/waifu/kaede-banner.webp",

    sourceEn: "The Dreaming Boy Is a Realist",
    sourceJa: "夢見る男子は現実主義者",

    createdByUserId: discordUserId,
    simpIntervals: {
      create: simpInterval("2023-09-10", "2023-10-17", "4.1.700", "5.1.810"),
    },
  },
});

await prisma.waifu.create({
  data: {
    nameEn: "Goto Hitori",
    nameJa: "後藤ひとり",
    shortNameEn: "Bocchi",
    shortNameJa: "ぼっち",
    footerText: "🎸 Motivation はここにあるんだ！",
    color: "#d6a9cc",

    imageUrl: "https://senddude.leomotors.me/files/waifu/bocchi-pfp.jpg",
    bannerUrl:
      "https://github.com/Leomotors/waifu-bot/raw/7a135edfd88a67556c8d41d5b46bb035e8edc218/images/bocchitakusan.png",

    sourceEn: "BOCCHI THE ROCK!",
    sourceJa: "ぼっち・ざ・ろっく！",

    createdByUserId: discordUserId,
    simpIntervals: {
      create: simpInterval("2022-11-16", "2023-09-10", "4.0.640", "4.0.662"),
    },
  },
});
