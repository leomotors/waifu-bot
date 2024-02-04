import { error, type NumericRange, type RequestHandler } from "@sveltejs/kit";

import { createRequestHandler } from "@urami/core";

const handler = createRequestHandler({
  avif: false,
  remoteDomains: ["senddude.leomotors.me", "cdn.discordapp.com", "github.com"],
  allowedDomains: ["waifu.leomotors.me"],
  ttl: 1000 * 60 * 60 * 24 * 7,
  storePath: ".svelte-kit/images",
});

/**
 * 浦見 will throw Response object, need to convert it to SvelteKit format
 */
async function responseToError(response: Response): Promise<never> {
  if (response.status >= 400 && response.status < 600) {
    error(response.status as NumericRange<400, 599>, await response.text());
  } else {
    error(500, `Internal Server Error: ${response.status} ${response.text()}`);
  }
}

export const GET = (async ({ request }) => {
  try {
    return await handler(request);
  } catch (err) {
    if (err instanceof Response) {
      return await responseToError(err);
    } else {
      error(500, `Internal Server Error: ${err}`);
    }
  }
}) satisfies RequestHandler;
