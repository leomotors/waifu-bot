// See https://kit.svelte.dev/docs/types#app
import type { UserRole } from "@waifu-bot/database";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}

    interface Locals {
      user?: {
        userId: string;
        username: string;
        role: UserRole;
      };
    }

    // interface PageData {}
    // interface Platform {}
  }
}

export {};
