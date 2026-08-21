import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  business: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please add a short message").max(2000),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
