/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const imageDomains = [
  "cdn.discordapp.com",
  "c.tenor.com",
  "i.ytimg.com",
].concat(
  process.env.NODE_ENV === "development"
    ? ["static.wikia.nocookie.net", "static.zerochan.net"]
    : []
);

/** @satisfies {import("next").NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: imageDomains,
  },
  transpilePackages: ["@waifu-bot/codegen"],
});

module.exports = nextConfig;
