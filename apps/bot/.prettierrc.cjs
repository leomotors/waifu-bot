module.exports = {
  ...require("@waifu-bot/config/prettier-app"),
  importOrder: [
    "^./dotenv",
    "^@waifu-bot",
    "^@leomotors",
    "^cocoa-discord-utils",
    "^discord.js",
    "^@discordjs",
    "^[a-zA-Z]",
    "^[.][.]",
    "^[.]",
  ],
};
