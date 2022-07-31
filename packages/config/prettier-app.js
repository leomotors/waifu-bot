// @ts-check

/** @type {import("prettier").Config & { [key: string]: any }} */
const config = {
    bracketSpacing: true,
    tabWidth: 4,
    useTabs: false,
    singleQuote: false,
    semi: true,
    printWidth: 80,
    importOrderCaseInsensitive: true,
    importOrderSeparation: true,
    importOrderParserPlugins: ["typescript", "decorators-legacy"],
};

module.exports = config;
