import { useEffect, useRef, useState } from "react";
import { AnchorMark } from "./motif";
import { cn } from "@/lib/utils";

// Replace with the real WhatsApp number (international format, no + or spaces).
const WHATSAPP_NUMBER = "61400000000";
const WHATSAPP_MESSAGE = "Hi, I'd like to ask about a website.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

/** WhatsApp glyph, kept thin to match the anchor mark's stroke language. */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("h-6 w-6", className)}>
      <path d="M12.02 2C6.59 2 2.18 6.41 2.18 11.84c0 1.74.46 3.43 1.33 4.92L2 22l5.36-1.4a9.78 9.78 0 0 0 4.66 1.19h.01c5.42 0 9.84-4.41 9.84-9.84C21.88 6.41 17.46 2 12.02 2Zm0 17.95h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.18.83.85-3.1-.19-.32a8.13 8.13 0 0 1-1.25-4.32c0-4.5 3.66-8.16 8.16-8.16 2.18 0 4.23.85 5.77 2.39a8.11 8.11 0 0 1 2.39 5.78c0 4.5-3.66 8.15-8.16 8.15Zm4.48-6.12c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" className={cn("h-4 w-4", className)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Hide the widget once the footer scrolls into view so it never sits on top of
  // footer content.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const io = new IntersectionObserver(
      (entries) => {
        setHidden(entries.some((e) => e.isIntersecting));
      },
      { threshold: 0.05 },
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  // Collapse the card when clicking outside of it.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={cn(
        "fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-300 md:bottom-8 md:right-8",
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100",
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {/* Expanded preview card */}
      <div
        className={cn(
          "w-[19rem] origin-bottom-right overflow-hidden rounded-[10px] border-[0.5px] border-border bg-cream shadow-[0_12px_40px_-12px_rgba(38,51,46,0.35)] transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2 text-primary">
            <AnchorMark className="h-4 w-4 text-teal" />
            <span className="font-serif text-sm tracking-tight text-teal">Anchor Web</span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-4">
          <div className="max-w-[15rem] rounded-[10px] rounded-bl-sm bg-secondary px-3.5 py-2.5">
            <p className="font-sans text-sm leading-relaxed text-foreground">
              Hi, thanks for stopping by 👋 Got a quick question about your website?
              Message me directly.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex w-full items-center justify-center rounded-[8px] bg-primary px-6 py-3 text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start WhatsApp chat
          </a>
        </div>
      </div>

      {/* Collapsed floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={open}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_rgba(38,51,46,0.45)] transition-transform duration-200 hover:scale-105",
          open && "scale-90",
        )}
      >
        {open ? <CloseIcon className="h-6 w-6" /> : <WhatsAppIcon className="h-7 w-7" />}
      </button>
    </div>
  );
}
