import { KitQLClient } from "@kitql/client";

export const kitQLClient = new KitQLClient({
  url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  headersContentType: "application/json",
});
