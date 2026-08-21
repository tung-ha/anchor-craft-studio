import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Label({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("px-6 py-24 md:px-10 md:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

const base =
  "inline-flex items-center justify-center rounded-[8px] px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.18em] transition-colors";

export function SolidLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(base, "bg-primary text-primary-foreground hover:bg-primary/90", className)}
    >
      {children}
    </a>
  );
}

export function OutlineLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        base,
        "border border-current text-current hover:bg-current/10",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function TextLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm text-foreground transition-colors hover:border-foreground"
    >
      {children}
    </a>
  );
}
