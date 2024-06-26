import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Invalid email address.",
    }),
  notes: z.string().optional(),
});
