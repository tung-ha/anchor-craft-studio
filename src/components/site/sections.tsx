import { useState } from "react";
import { Label, OutlineLink, Section, SolidLink, TextLink } from "./primitives";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, EMAIL } from "@/lib/contact";
import { AnchorMark, Reveal, ServiceIcons } from "./motif";

export function Hero() {
  return (
    <section
      id="top"
      className="grid-texture relative overflow-hidden px-6 pb-24 pt-24 md:px-10 md:pb-40 md:pt-36"
    >
      <span
        aria-hidden="true"
        className="drift-motif animate-drift pointer-events-none absolute -right-24 -top-[38%] select-none font-serif text-[38rem] leading-[0.75] text-forest opacity-[0.06] md:-right-40 md:-top-[45%] md:text-[64rem]"
      >
        A
      </span>
      <div className="relative mx-auto w-full max-w-6xl">
        <Label>Website Design · Adelaide</Label>
        <h1 className="mt-8 max-w-4xl font-serif text-[2.8rem] leading-[1.05] tracking-tight md:text-[5rem]">
          <span className="block">
            A website your customers can <em className="italic text-primary">trust.</em>
          </span>
          <span className="mt-3 block text-muted-foreground">
            Live in days, not months.
          </span>
        </h1>
        <p className="mt-9 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          A considered, founder-led studio in Adelaide, making websites that give
          small businesses and sole traders the credibility their work already
          deserves.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-5">
          <SolidLink href={PHONE_TEL}>Call {PHONE_DISPLAY}</SolidLink>
          <OutlineLink
            href={WHATSAPP_URL}
            className="border-primary/40 text-primary hover:bg-primary/10"
          >
            Message on WhatsApp
          </OutlineLink>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          <TextLink href="#work">See recent work</TextLink>
        </p>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <Section className="border-y border-border bg-cream-deep">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <Label>The Problem</Label>
          <h2 className="mt-6 max-w-md font-serif text-3xl leading-tight md:text-[2.6rem]">
            A website can look perfectly fine and still do nothing for the business
            behind it.
          </h2>
        </Reveal>
        <Reveal
          delay={120}
          className="space-y-6 text-base leading-relaxed text-muted-foreground md:pt-14"
        >
          <p>
            Most small business websites are not broken. They are simply vague. The
            work is good, the reputation is good, and none of that comes through on
            the screen. Visitors cannot tell what is offered, who it is for, or why
            this business is the safe choice — so they leave and enquire elsewhere.
          </p>
          <p>
            This is the gap I set out to close. I work through what a business
            actually needs to communicate, then build a site that says it plainly:
            clear structure, honest language, and a straightforward path to making
            contact.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

const services = [
  {
    n: "I",
    Icon: ServiceIcons.layout,
    title: "Website design",
    body: "Layouts and typography that suit the business rather than a template — clear, calm, and built around what a customer needs to see first.",
  },
  {
    n: "II",
    Icon: ServiceIcons.code,
    title: "Development & build",
    body: "Fast, modern, hand-built sites that work properly on phones, load quickly, and stay easy to update as the business changes.",
  },
  {
    n: "III",
    Icon: ServiceIcons.document,
    title: "Copy & structure",
    body: "Working out what a page should say and in what order, so visitors understand the offer without effort.",
  },
  {
    n: "IV",
    Icon: ServiceIcons.shield,
    title: "Care & support",
    body: "Hosting, updates and small changes after launch, handled by the same person who built the site.",
  },
];

export function Services() {
  return (
    <Section id="services">
      <Reveal>
        <Label>What I Do</Label>
        <h2 className="mt-6 max-w-lg font-serif text-3xl leading-tight md:text-[2.6rem]">
          Four parts of the same job
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={120 * (i + 1)}>
            <article className="flex h-full flex-col rounded-[10px] border-[0.5px] border-border bg-card p-9 md:p-11">
              <s.Icon className="h-6 w-6 text-primary" />
              <span className="mt-6 block font-mono text-sm tracking-[0.2em] text-primary">{s.n}</span>

              <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <a
                href={PHONE_TEL}
                className="mt-8 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary transition-colors hover:text-foreground"
              >
                Call to discuss &rarr;
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const reasons = [
  {
    n: "01",
    title: "Business first, website second",
    body: "The conversation starts with how the business makes money and who it serves. The design follows from there.",
  },
  {
    n: "02",
    title: "One point of contact",
    body: "The person you speak with at the first enquiry is the person who designs, builds and launches the site.",
  },
  {
    n: "03",
    title: "Fixed, transparent pricing",
    body: "A written scope and a fixed price before work begins. No hourly creep, no surprises at the end.",
  },
  {
    n: "04",
    title: "Technical depth when it is needed",
    body: "Backed by a trusted network of collaborators for the specialised work, without agency overheads passed on to you.",
  },
  {
    n: "05",
    title: "Support after launch",
    body: "Launch is the beginning. Updates, changes and questions continue to be answered afterwards.",
  },
];

export function Why() {
  return (
    <Section id="why" className="relative overflow-hidden bg-forest text-forest-foreground">
      <AnchorMark
        className="pointer-events-none absolute -bottom-16 right-0 h-72 w-72 text-forest-foreground opacity-[0.06] md:h-96 md:w-96"
      />
      <div className="relative grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Label className="text-sage-soft">How It Works</Label>
          <h2 className="mt-6 font-serif text-3xl leading-tight md:text-[2.6rem]">
            Why work with me
          </h2>
          <div className="mt-8 flex gap-4">
            <AnchorMark className="mt-1 h-4 w-4 shrink-0 text-teal-bright" />
            <p className="max-w-xs text-sm leading-relaxed text-sage-soft">
              Five things that make the difference between a website that simply
              exists and one that earns its keep.
            </p>
          </div>
        </Reveal>
        <ol className="divide-y divide-forest-foreground/15 border-t border-forest-foreground/15">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.n} delay={120 * i}>
              <div className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-10">
                <div className="flex flex-col items-start gap-2 sm:items-center">
                   <AnchorMark className="h-4 w-4 text-teal-bright" />
                   <span className="font-mono text-base tracking-[0.2em] text-teal-bright">{r.n}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl">{r.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-sage-soft">
                    {r.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function CaseStudy() {
  return (
    <Section id="work">
      <Reveal>
        <Label>Featured Project</Label>
        <h2 className="mt-6 max-w-xl font-serif text-3xl leading-tight md:text-[2.6rem]">
          Vilaconic — a wholesale importer, presented properly
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-14 md:grid-cols-2">
        <Reveal as="figure" delay={120}>
          <div className="overflow-hidden rounded-[10px] border-[0.5px] border-border bg-card">
            <div className="flex items-center gap-2 border-b-[0.5px] border-border bg-secondary px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="ml-3 flex-1 truncate rounded-[4px] bg-background px-3 py-1 text-[0.65rem] tracking-wide text-muted-foreground">
                vilaconic.vercel.app
              </span>
            </div>
            <img
              src="/images/vilaconic-site.jpg"
              alt="Screenshot of the Vilaconic website homepage, a bilingual wholesale food importer site"
              className="block w-full"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={240}>
          <p className="text-base leading-relaxed text-muted-foreground">
            Vilaconic is an Adelaide-based wholesale importer of Vietnamese and
            South-East Asian food products, dealing with buyers here and overseas.
            The brief was unwritten: they needed a site that felt like the business
            itself and could speak to clients in two languages.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            The result is a bilingual English and Vietnamese site with a clear
            product story, built so the team can send it to a new client with
            confidence rather than explaining themselves from scratch.
          </p>
          <div className="mt-10 flex gap-5">
            <AnchorMark className="mt-1.5 h-5 w-5 shrink-0 text-primary" />
            <blockquote className="border-l border-primary/40 pl-6 text-lg leading-relaxed">
              &ldquo;Without any brief, scope, or technology knowledge – we simply
              handed our business over and let the process happen. This trust was
              rewarded well. The website has managed to capture everything that is us,
              has the ability to function in both English and Vietnamese languages for
              our clients, and provides us with something we can be proud to show new
              clients. It is unusual to come across somebody who can convert an unclear
              concept into something like this without our continuous guidance.&rdquo;
              <footer className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                Vilaconic, Adelaide
              </footer>
            </blockquote>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <SolidLink href={PHONE_TEL}>Call {PHONE_DISPLAY}</SolidLink>
            <OutlineLink
              href={WHATSAPP_URL}
              className="border-primary/40 text-primary hover:bg-primary/10"
            >
              Message on WhatsApp
            </OutlineLink>
          </div>
          <div className="mt-6">
            <TextLink href="https://vilaconic.vercel.app" external>
              Visit the live site &rarr;
            </TextLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" className="border-y border-border bg-cream-deep">
      <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Label>About</Label>
          <AnchorMark className="mt-8 h-9 w-9 text-primary" />
          <div className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>Founder-led studio, working from Adelaide, South Australia.</p>
            <p>A small number of clients taken on at a time.</p>
          </div>
          <figure className="mt-10 max-w-xs overflow-hidden rounded-[10px] border-[0.5px] border-border">
            <img
              src="/images/about-texture.jpg"
              alt="Warm natural light across a linen and oak desk surface"
              width={1200}
              height={912}
              loading="lazy"
              className="block aspect-[4/3] w-full object-cover"
            />
          </figure>
        </Reveal>

        <Reveal
          delay={120}
          className="space-y-6 text-base leading-relaxed text-muted-foreground"
        >
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-[2.4rem]">
            I run Anchor Web from Adelaide.
          </h2>
          <p>
            I started this because I kept meeting people who were good at what they
            do and poorly served by the website representing them — either an
            unfinished template, or an agency engagement that cost more than it
            returned.
          </p>
          <p>
            I work with a small number of clients at a time, which means the
            attention stays where it should be. I ask a lot of questions early, I
            explain things without jargon, and I would rather tell you a feature is
            unnecessary than sell it to you.
          </p>
          <p>
            For anything outside my own expertise, I bring in collaborators I trust
            and remain the person accountable for the outcome.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "business", label: "Business name", type: "text", required: false },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact">
      <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Label>Contact</Label>
          <h2 className="mt-6 font-serif text-3xl leading-tight md:text-[2.6rem]">
            Tell me about the business.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A short message is enough to start. I will reply with honest thoughts on
            what would help, and a fixed price if it is a good fit.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={PHONE_TEL}
              className="block font-serif text-3xl text-primary transition-colors hover:text-foreground"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-[8px] border border-primary/40 px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary/10"
            >
              Message on WhatsApp
            </a>
            <p className="pt-2 text-sm text-muted-foreground">
              Prefer email? Send a message below, or write to{" "}
              <a href={`mailto:${EMAIL}`} className="underline underline-offset-4 hover:text-primary">
                {EMAIL}
              </a>
              .
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="flex items-center rounded-[10px] border-[0.5px] border-border p-10">
              <p className="text-base leading-relaxed text-muted-foreground">
                Thank you — your message has been noted. This form is not yet connected
                to an inbox — for anything urgent, call {PHONE_DISPLAY}.
              </p>
            </div>
          ) : (
            <form
              className="grid gap-7 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {fields.map((f) => (
                <div key={f.name} className="flex flex-col gap-2">
                  <label
                    htmlFor={f.name}
                    className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    className="border-b border-border bg-transparent py-2.5 text-base outline-none transition-colors focus:border-primary"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="border-b border-border bg-transparent py-2.5 text-base outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-[8px] border border-border px-7 py-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Send enquiry
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}

export { OutlineLink };
