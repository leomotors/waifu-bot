// @ts-check

/** @type {import("prettier").Config & { [key: string]: any }} */
const config = {
    ...require("./prettier-base"),
    importOrderCaseInsensitive: true,
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderParserPlugins: ["typescript", "decorators-legacy", "jsx"],
};

module.exports = config;
