// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "prettier/prettier": "warn",
    eqeqeq: "warn",
    "react/no-unescaped-entities": "off",
    "tailwindcss/no-custom-classname": "off",
  },
  ignorePatterns: ["generated/**/*"],
};

module.exports = config;
