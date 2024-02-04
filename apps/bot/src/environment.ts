import { z } from "zod";

const baseEnvSchema = z.object({
  DISCORD_TOKEN: z.string().min(10),

  TENOR_APIKEY: z.string().min(10),
  GOLDEN_FRAME_ENDPOINT: z.string().regex(/https?:\/\/.+/),

  SPEECH_KEY: z.string().min(10),
  SPEECH_REGION: z.string().min(2),

  PUBLIC_WEB_URL: z.string().regex(/https?:\/\/.+/),
});

const productionSchema = z.object({
  ENVIRONMENT: z.literal("PRODUCTION"),
  DEV_GUILD_ID: z.undefined(),
});

const developmentSchema = z.object({
  ENVIRONMENT: z.literal("DEVELOPMENT").optional(),
  DEV_GUILD_ID: z.string().min(10),
});

const environmentSchema = z.intersection(
  baseEnvSchema,
  z.union([productionSchema, developmentSchema]),
);

export const environment = environmentSchema.parse(process.env);

export const GuildIds =
  environment.ENVIRONMENT === "PRODUCTION"
    ? "Global"
    : [environment.DEV_GUILD_ID];
