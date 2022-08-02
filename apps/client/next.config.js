/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withTM = require("next-transpile-modules")(["@waifu-bot/graphql"]);

/** @type {import("next").NextConfig} */
const nextConfig = withBundleAnalyzer(
  withTM({
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["cdn.discordapp.com", "c.tenor.com"],
    },
  })
);

module.exports = nextConfig;
