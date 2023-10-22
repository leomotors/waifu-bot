// @ts-check

/** @satisfies {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  bracketSpacing: true,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  semi: true,
  printWidth: 80,
  plugins: [
    "prettier-plugin-svelte",
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^@waifu-bot",
    "^@svelte",
    "^svelte",
    "^\\$",
    "<THIRD_PARTY_MODULES>",
    "^[.][.]",
    "^[.]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "decorators-legacy", "jsx"],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};

module.exports = config;
