module.exports = {
  ...require("@waifu-bot/config/prettier-app"),
  importOrder: [
    "^\\$styles",
    "^[$]",
    "^@",
    "^next",
    "^react",
    "^[a-zA-Z]",
    "^[.][.]",
    "^[.]",
  ],
};
