module.exports = {
    ...require("@waifu-bot/config/eslint-app"),
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    ignorePatterns: [".eslintrc.js", "*/@generated/**/*"],
};
