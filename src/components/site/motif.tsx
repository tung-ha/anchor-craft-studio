import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Single reusable line-drawn anchor mark. Same geometry and stroke everywhere. */
export function AnchorMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <circle cx="12" cy="4" r="2.1" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M12 6.1V21M8.4 9.2h7.2M3.6 14.2c0 4 3.8 6.8 8.4 6.8s8.4-2.8 8.4-6.8M2.6 14.2h2M19.6 14.2h2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Fade + lift once, the first time the element enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "figure" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <As
      ref={ref as never}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </As>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

/** Minimal line icons matching the anchor mark's stroke weight. */
export const ServiceIcons = {
  layout: (props: { className?: string }) => (
    <svg {...iconProps} className={cn("h-6 w-6", props.className)}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </svg>
  ),
  code: (props: { className?: string }) => (
    <svg {...iconProps} className={cn("h-6 w-6", props.className)}>
      <path d="M8.5 7.5 3.5 12l5 4.5M15.5 7.5l5 4.5-5 4.5M13.5 4.5l-3 15" />
    </svg>
  ),
  document: (props: { className?: string }) => (
    <svg {...iconProps} className={cn("h-6 w-6", props.className)}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  ),
  shield: (props: { className?: string }) => (
    <svg {...iconProps} className={cn("h-6 w-6", props.className)}>
      <path d="M12 3l7 3v6c0 4.2-2.9 7.7-7 9-4.1-1.3-7-4.8-7-9V6l7-3Z" />
      <path d="M9.2 12.2l2 2 3.6-3.9" />
    </svg>
  ),
};
