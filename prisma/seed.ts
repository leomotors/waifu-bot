import { PrismaClient } from "@prisma/client";

// ! SEED FOR DEV ONLY

const prisma = new PrismaClient();

function seedId(i: number) {
  return "10000000000000" + (100 + i);
}

const users: Array<{
  id: string;
  username: string;
  lastInteractGuildName: string;
  avatarUrl: string;
}> = [
  {
    id: seedId(1),
    username: "Hoto Cocoa",
    lastInteractGuildName: "Rabbit House",
    avatarUrl:
      "https://static.wikia.nocookie.net/yuripedia/images/9/93/1399011558814.jpg/revision/latest?cb=20140729134517",
  },
  {
    id: seedId(2),
    username: "Kafuu Chino",
    lastInteractGuildName: "Rabbit House",
    avatarUrl: "https://static.zerochan.net/Kafuu.Chino.full.3695657.jpg",
  },
  {
    id: seedId(3),
    username: "Fuiba Fuyu",
    lastInteractGuildName: "Bright Bunny",
    avatarUrl:
      "https://static.wikia.nocookie.net/gochiusa/images/9/91/FuibaFuyu.jpg/revision/latest?cb=20190517144842",
  },
];

async function main() {
  for (const user of users) {
    await prisma.user.create({
      data: {
        id: user.id,
        profile: {
          create: {
            username: user.username,
            lastInteractGuildName: user.lastInteractGuildName,
            avatarUrl: user.avatarUrl,
          },
        },
      },
    });

    await prisma.accessToken.create({
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
        token: `DEVELOPMENT ID:${user.id}`,
        expire: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    await prisma.playlist.create({
      data: {
        owner: {
          connect: {
            id: user.id,
          },
        },
        name: `${user.username}'s 1st Playlist`,
        description: `もふもふ collection of ${user.username}`,
      },
    });

    await prisma.playlist.create({
      data: {
        owner: {
          connect: {
            id: user.id,
          },
        },
        name: `${user.username}'s 2nd Playlist`,
        description: `yet another もふもふ collection of ${user.username}`,
      },
    });
  }
}

main();
