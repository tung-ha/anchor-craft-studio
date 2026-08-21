import { createServerFn } from "@tanstack/react-start";
import { enquirySchema } from "./contact.schema";
import { deliverEnquiry } from "./contact-email.server";

export const sendEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    const lovableKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) {
      throw new Error("Email is not configured yet.");
    }

    await deliverEnquiry(data, apiKey, lovableKey);

    return { ok: true as const };
  });
