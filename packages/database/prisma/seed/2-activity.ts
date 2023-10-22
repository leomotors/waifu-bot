import { ActivityType } from "@prisma/client";

import { prisma } from "./constant";

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
