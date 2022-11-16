module.exports = {
  ...require("@waifu-bot/config/prettier-app"),
  importOrder: [
    "^@waifu-bot",
    "^@nestjs",
    "^@",
    "^src/",
    "^[a-zA-Z]",
    "^./prisma",
    "^./app",
    "^[.][.]",
    "^[.]",
  ],
};
