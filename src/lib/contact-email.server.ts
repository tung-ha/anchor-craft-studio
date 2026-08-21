import type { EnquiryInput } from "./contact.schema";

const RECIPIENT = "tung.tan.ha@gmail.com";
const FROM = "Anchor Web <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmail(data: EnquiryInput) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Business", data.business || "—"],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
  ];

  return {
    from: FROM,
    to: [RECIPIENT],
    reply_to: data.email,
    subject: `New enquiry — ${data.name}${data.business ? ` (${data.business})` : ""}`,
    html: `
      <div style="font-family:system-ui,sans-serif;line-height:1.6">
        <h2 style="font-family:Georgia,serif">New enquiry from Anchor Web</h2>
        ${rows
          .map(
            ([key, value]) =>
              `<p style="margin:4px 0"><strong>${key}:</strong> ${escapeHtml(value)}</p>`,
          )
          .join("")}
        <p style="margin-top:16px"><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      </div>
    `,
  };
}

export async function deliverEnquiry(
  data: EnquiryInput,
  resendKey: string,
  lovableKey?: string,
) {
  const usingGateway = Boolean(lovableKey);
  const endpoint = usingGateway
    ? "https://connector-gateway.lovable.dev/resend/emails"
    : "https://api.resend.com/emails";

  const headers: Record<string, string> = {
    Authorization: `Bearer ${lovableKey ?? resendKey}`,
    "Content-Type": "application/json",
  };

  if (usingGateway) {
    headers["X-Connection-Api-Key"] = resendKey;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(buildEmail(data)),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Email request failed [${response.status}]: ${errorBody}`);
    throw new Error("Could not send your message. Please call or WhatsApp instead.");
  }
}