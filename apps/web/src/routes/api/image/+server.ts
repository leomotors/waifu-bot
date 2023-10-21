import type { RequestHandler } from "@sveltejs/kit";
import { createRequestHandler } from "@urami/core";

const handler = createRequestHandler({
  avif: false,
  remoteDomains: ["senddude.leomotors.me"],
  allowedDomains: ["waifu.leomotors.me"],
  ttl: 1000 * 60 * 60 * 24 * 7,
  storePath: ".svelte-kit/images",
});

export const GET = (({ request }) => handler(request)) satisfies RequestHandler;
