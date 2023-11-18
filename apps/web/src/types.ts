import { z } from "zod";

export const jwtSchema = z.object({
  userId: z.string().regex(/^[0-9]+$/),
  username: z.string(),
  role: z.enum(["USER", "ADMIN", "SUPERADMIN"]),
});
