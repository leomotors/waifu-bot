module.exports = {
  ...require("@waifu-bot/config/prettier-web"),
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
