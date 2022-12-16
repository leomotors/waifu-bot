// @ts-check

module.exports = require("@leomotors/config/prettier").withSortImports({
  importOrder: [
    "^./dotenv",
    "^@waifu-bot",
    "^cocoa-discord-utils",
    "^@leomotors",
    "^discord.js",
    "^@discordjs",
    "<THIRD_PARTY_MODULES>",
    "^[.][.]",
    "^[.]",
  ],
});
