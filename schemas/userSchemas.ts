import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type User = z.infer<typeof UserSchema>;
