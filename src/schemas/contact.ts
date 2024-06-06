import { z } from "zod";

export const contactFormSchema = z.object({
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
  phone: z.string().optional(),
  company: z.string().optional(),
  title: z.string().optional(),
  interested_in: z.string().optional(),
  message: z.string().optional(),
});
