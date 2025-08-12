import { z } from "zod/mod.ts";

// Schema for the incoming chat request body
export const chatRequestSchema = z.object({
  model: z.string().min(1, { message: "Model cannot be empty" }),
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string(),
    })
  ).min(1, { message: "Messages array must contain at least one message" }),
});

// Type inference for easier use in our code
export type ChatRequest = z.infer<typeof chatRequestSchema>;
