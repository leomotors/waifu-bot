// See https://kit.svelte.dev/docs/types#app
import type { z } from "zod";

import type { jwtSchema } from "./types";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}

    interface Locals {
      user?: z.infer<typeof jwtSchema>;
    }

    // interface PageData {}
    // interface Platform {}
  }
}

export {};
