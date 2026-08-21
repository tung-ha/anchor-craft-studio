import { OutlineLink } from "./primitives";
import { AnchorMark } from "./motif";

const nav = [
  { href: "#services", label: "What I do" },
  { href: "#why", label: "Why me" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
];

export function Header() {
  return (
    <header className="bg-forest text-forest-foreground">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-2.5 font-serif text-lg tracking-tight">
          <AnchorMark className="h-5 w-5 shrink-0 text-sage-soft" />
          Anchor Web
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.7rem] uppercase tracking-[0.18em] text-forest-foreground/70 transition-colors hover:text-forest-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <OutlineLink href="#contact" className="border-forest-foreground/40 py-2.5">
          Request a Quote
        </OutlineLink>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest px-6 py-16 text-forest-foreground md:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Anchor Web</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-forest-foreground/60">
            Website design and development for small businesses and sole traders.
          </p>
        </div>
        <nav className="flex flex-col gap-3">
          {[...nav, { href: "#contact", label: "Contact" }].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.7rem] uppercase tracking-[0.18em] text-forest-foreground/60 transition-colors hover:text-forest-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="space-y-3 text-sm text-forest-foreground/70">
          <p>
            <a href="mailto:hello@anchorweb.com.au" className="hover:text-forest-foreground">
              hello@anchorweb.com.au
            </a>
          </p>
          <p>
            <a href="tel:0400000000" className="hover:text-forest-foreground">
              0400 000 000
            </a>
          </p>
          <p className="text-forest-foreground/50">Adelaide, South Australia</p>
        </div>
      </div>
      <div className="mx-auto mt-14 w-full max-w-6xl border-t border-forest-foreground/15 pt-6">
        <p className="text-xs text-forest-foreground/45">
          &copy; {new Date().getFullYear()} Anchor Web. Adelaide, South Australia.
        </p>
      </div>
    </footer>
  );
}
