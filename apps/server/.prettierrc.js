module.exports = {
    ...require("@waifu-bot/config/prettier-app"),
    importOrder: [
        "^@waifu-bot",
        "^@nestjs",
        "^@",
        "^[a-zA-Z]",
        "^[.][.]",
        "^[.]",
    ],
};
