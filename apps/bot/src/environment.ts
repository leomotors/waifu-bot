// TODO Use zod and also merge with dotenv.ts

export const GuildIds =
  process.env.ENVIRONMENT === "PRODUCTION"
    ? "Global"
    : process.env.DEV_GUILD_IDS?.split(",");
