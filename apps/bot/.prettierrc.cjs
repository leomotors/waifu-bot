// @ts-check

module.exports = require("@leomotors/config/prettier").withSortImports({
  importOrder: [
    "^@waifu-bot",
    "^cocoa-discord",
    "^@leomotors",
    "^discord.js",
    "^@discordjs",
    "<THIRD_PARTY_MODULES>",
    "^[.][.]",
    "^[.]",
  ],
});
