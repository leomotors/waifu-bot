import { z } from "zod";

const authEnvSchema = z.object({
  INTERNAL_SECRET: z.string().min(10),
});

export const authEnv = authEnvSchema.parse(process.env);
