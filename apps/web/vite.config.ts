import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

const externalPackages = ["@waifu-bot/auth", "@waifu-bot/database"];

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
  build: {
    rollupOptions: {
      external: externalPackages,
    },
  },
  ssr: {
    external: externalPackages,
  },
});
