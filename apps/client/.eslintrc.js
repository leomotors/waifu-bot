// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "warn",
    "react/no-unescaped-entities": "off",
  },
  ignorePatterns: ["generated/**/*"],
};

module.exports = config;
