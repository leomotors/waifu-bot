/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const withTM = require("next-transpile-modules")(["@waifu-bot/graphql"]);

/** @type {import("next").NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
