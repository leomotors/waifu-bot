// @ts-check

const base = require("@leomotors/config/eslint").config();

/** @type {import("eslint").Linter.Config} */
const config = {
  ...base,
  rules: {
    ...base.rules,
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-inner-declarations": "off",
  },
};

module.exports = config;
