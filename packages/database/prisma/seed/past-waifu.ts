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
    nameEn: "skittle-chan",
    nameJa: "skittle-chan",
    shortNameEn: "skittle-chan",
    shortNameJa: "skittle-chan",
    footerText: "",
    color: "#f1c40f",

    imageUrl: "https://senddude.leomotors.me/files/waifu/skittle-chan.webp",
    bannerUrl:
      "https://github.com/Leomotors/salim-bot/raw/576d41610172b37844ddb5a214e622cdf8511ae4/images/long-live-hm-queen.jpg",

    sourceEn: "Beluga",
    sourceJa: "Beluga",

    note: "First useful discord bot for our server, coauthored by @Qwenty228\nCode is at CarelessDev/SIMP-Bot\nPS. First (not useful) discord bot for our server is Salim Bot",

    createdByUserId: discordUserId,
    simpIntervals: {
      create: simpInterval("2021-09-17", "2021-11-21", "1.0", "1.3"),
    },
  },
});

await prisma.waifu.create({
  data: {
    nameEn: "Yukinoshita Haruno",
    nameJa: "雪ノ下陽乃",
    shortNameEn: "Harunon",
    shortNameJa: "はるのん",
    footerText: "このハルノには夢がある ❄️",
    color: "#5a3844",

    imageUrl: "https://senddude.leomotors.me/files/waifu/haruno-pfp.png",
    bannerUrl:
      "https://github.com/CarelessDev/Harunon/raw/main/assets/Screenshot1.png",

    sourceEn: "My Youth Romantic Comedy Is Wrong, As I Expected",
    sourceJa: "やはり俺の青春ラブコメはまちがっている。",

    note: "Python Version (v2) is in CarelessDev/Harunon\nJavaScript Version (v3) is in CarelessDev/harunon.js",

    createdByUserId: discordUserId,
    simpIntervals: {
      create: simpInterval("2021-11-21", "2022-07-06", "2.0", "3.1.333"),
    },
  },
});

await prisma.waifu.create({
  data: {
    nameEn: "Shikimori-san",
    nameJa: "式守さん",
    shortNameEn: "Shikimori",
    shortNameJa: "式守",
    footerText: "可愛いだけじゃないわ💓",
    color: "#dfa7ce",

    imageUrl: "https://senddude.leomotors.me/files/waifu/shikimori-pfp.png",
    bannerUrl: "https://senddude.leomotors.me/files/waifu/shikimori-banner.jpg",

    sourceEn: "Shikimori's Not Just a Cutie",
    sourceJa: "可愛いだけじゃない式守さん",

    note: "First Waifu Bot of this repository (Leomotors/waifu-bot)",

    createdByUserId: discordUserId,
    simpIntervals: {
      create: simpInterval("2022-07-06", "2022-08-15", "3.2.400", "4.0.600"),
    },
  },
});

await prisma.waifu.create({
  data: {
    nameEn: "Vergil",
    nameJa: "Vergil",
    shortNameEn: "Vergil",
    shortNameJa: "Vergil",
    footerText: "🪑 Where is your motivation?",
    color: "#2f2e4e",

    imageUrl: "https://senddude.leomotors.me/files/waifu/vergil-pfp.png",
    bannerUrl: "https://senddude.leomotors.me/files/waifu/vergil-banner.webp",

    sourceEn: "Devil May Cry",
    sourceJa: "Devil May Cry",

    createdByUserId: discordUserId,
    simpIntervals: {
      create: simpInterval("2022-08-15", "2022-11-16", "4.0.605", "4.0.629"),
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

    note: "Image selected by @Qwenty228",

    createdByUserId: discordUserId,
    simpIntervals: {
      create: simpInterval("2023-09-10", "2023-10-17", "4.1.700", "5.1.810"),
    },
  },
});
