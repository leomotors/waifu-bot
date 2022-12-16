/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withTM = require("next-transpile-modules")(["@waifu-bot/graphql"]);

const imageDomains = [
  "cdn.discordapp.com",
  "c.tenor.com",
  "i.ytimg.com",
].concat(
  process.env.NODE_ENV === "development"
    ? ["static.wikia.nocookie.net", "static.zerochan.net"]
    : []
);

/** @type {import("next").NextConfig} */
const nextConfig = withBundleAnalyzer(
  withTM({
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: imageDomains,
    },
  })
);

module.exports = nextConfig;
