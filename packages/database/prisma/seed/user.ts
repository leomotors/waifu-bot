import { UserRole } from "@prisma/client";

import { discordUserId, prisma } from "./constant";

await prisma.user.create({
  data: {
    id: discordUserId,
    name: "leomotors",
    avatarUrl:
      "https://cdn.discordapp.com/avatars/143649805250461696/a_5b8933c0cb2d730dc228160de172719a.gif?size=4096",
    role: UserRole.SUPERADMIN,
  },
});
