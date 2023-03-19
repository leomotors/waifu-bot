// @ts-check
import { defineConfig } from "rollup";

export default defineConfig({
  input: "dist/apps/bot/src/bot.js",
  output: {
    file: "out/index.js",
    format: "esm",
  },
});
