import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  notes: z.string().optional(),
});
