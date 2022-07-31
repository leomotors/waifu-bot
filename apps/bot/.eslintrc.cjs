// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
    ...require("@waifu-bot/config/eslint-app"),
    ignorePatterns: ["dist/**/*"],
};

module.exports = config;
