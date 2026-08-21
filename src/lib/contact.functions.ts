import { createServerFn } from "@tanstack/react-start";
import { enquirySchema } from "./contact.schema";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const sendEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    const lovableKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey || !lovableKey) {
      throw new Error("Email is not configured yet.");
    }


    const rows: [string, string][] = [
      ["Name", data.name],
      ["Business", data.business || "—"],
      ["Email", data.email],
      ["Phone", data.phone || "—"],
    ];

    const html = `
      <div style="font-family:system-ui,sans-serif;line-height:1.6">
        <h2 style="font-family:Georgia,serif">New enquiry from anchorweb</h2>
        ${rows
          .map(
            ([k, v]) =>
              `<p style="margin:4px 0"><strong>${k}:</strong> ${escapeHtml(v)}</p>`,
          )
          .join("")}
        <p style="margin-top:16px"><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      </div>
    `;

    const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": apiKey,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        from: "Anchor Web <onboarding@resend.dev>",
        to: ["tung.tan.ha@gmail.com"],
        reply_to: data.email,
        subject: `New enquiry — ${data.name}${data.business ? ` (${data.business})` : ""}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      throw new Error("Could not send your message. Please call or WhatsApp instead.");
    }

    return { ok: true as const };
  });
