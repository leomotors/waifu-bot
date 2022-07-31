/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const withTM = require("next-transpile-modules")(["@waifu-bot/graphql"]);

/** @type {import("next").NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  images: ["cdn.discordapp.com"],
});

module.exports = nextConfig;
