import { useState } from "react";
import { Label, OutlineLink, Section, SolidLink, TextLink } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Label>Website Design · Adelaide</Label>
          <h1 className="mt-6 max-w-xl font-serif text-[2.6rem] leading-[1.08] tracking-tight md:text-[3.6rem]">
            Websites built for businesses that need to be taken seriously
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
            A considered, founder-led studio in Adelaide, making websites that give
            small businesses and sole traders the credibility their work already
            deserves.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <SolidLink href="#contact">Request a Quote</SolidLink>
            <TextLink href="#work">See recent work</TextLink>
          </div>
        </div>
        <figure className="relative">
          <img
            src="/images/hero.jpg"
            alt="A calm, warmly lit interior with muted timber, linen and natural light"
            className="aspect-[4/3.4] w-full object-cover"
            loading="eager"
          />
        </figure>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <Section className="border-y border-border">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Label>The Problem</Label>
          <h2 className="mt-6 max-w-md font-serif text-3xl leading-tight md:text-[2.6rem]">
            A website can look perfectly fine and still do nothing for the business
            behind it.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:pt-14">
          <p>
            Most small business websites are not broken. They are simply vague. The
            work is good, the reputation is good, and none of that comes through on
            the screen. Visitors cannot tell what is offered, who it is for, or why
            this business is the safe choice — so they leave and enquire elsewhere.
          </p>
          <p>
            Anchor Web exists to close that gap. I work through what a business
            actually needs to communicate, then build a site that says it plainly:
            clear structure, honest language, and a straightforward path to making
            contact.
          </p>
        </div>
      </div>
    </Section>
  );
}

const services = [
  {
    n: "I",
    title: "Website design",
    body: "Layouts and typography that suit the business rather than a template — clear, calm, and built around what a customer needs to see first.",
  },
  {
    n: "II",
    title: "Development & build",
    body: "Fast, modern, hand-built sites that work properly on phones, load quickly, and stay easy to update as the business changes.",
  },
  {
    n: "III",
    title: "Copy & structure",
    body: "Working out what a page should say and in what order, so visitors understand the offer without effort.",
  },
  {
    n: "IV",
    title: "Care & support",
    body: "Hosting, updates and small changes after launch, handled by the same person who built the site.",
  },
];

export function Services() {
  return (
    <Section id="services">
      <Label>What I Do</Label>
      <h2 className="mt-6 max-w-lg font-serif text-3xl leading-tight md:text-[2.6rem]">
        Four parts of the same job
      </h2>
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
        {services.map((s) => (
          <article key={s.title} className="flex flex-col bg-background p-9 md:p-11">
            <span className="font-serif text-lg text-gold">{s.n}</span>
            <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {s.body}
            </p>
            <a
              href="#contact"
              className="mt-8 text-[0.68rem] uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground"
            >
              Explore &rarr;
            </a>
          </article>
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
    <Section id="why" className="bg-forest text-forest-foreground">
      <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Label className="text-forest-foreground/50">How It Works</Label>
          <h2 className="mt-6 font-serif text-3xl leading-tight md:text-[2.6rem]">
            Why work with me
          </h2>
        </div>
        <ol className="divide-y divide-forest-foreground/15 border-t border-forest-foreground/15">
          {reasons.map((r) => (
            <li key={r.n} className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-10">
              <span className="font-serif text-xl text-gold">{r.n}</span>
              <div>
                <h3 className="font-serif text-xl">{r.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-forest-foreground/65">
                  {r.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function CaseStudy() {
  return (
    <Section id="work">
      <Label>Featured Project</Label>
      <h2 className="mt-6 max-w-xl font-serif text-3xl leading-tight md:text-[2.6rem]">
        Vilaconic — a wholesale importer, presented properly
      </h2>
      <div className="mt-14 grid gap-14 md:grid-cols-2">
        <figure>
          <img
            src="/images/vilaconic.jpg"
            alt="Warm still life of South-East Asian dried goods and produce in wholesale packaging"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div>
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
          <blockquote className="mt-10 border-l border-gold pl-6 text-lg leading-relaxed">
            &ldquo;Without any brief, scope, or technology knowledge – we simply
            handed our business over and let the process happen. This trust was
            rewarded well. The website has managed to capture everything that is us,
            has the ability to function in both English and Vietnamese languages for
            our clients, and provides us with something we can be proud to show new
            clients. It is unusual to come across somebody who can convert an unclear
            concept into something like this without our continuous guidance.&rdquo;
            <footer className="mt-5 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
              Vilaconic, Adelaide
            </footer>
          </blockquote>
          <div className="mt-10">
            <TextLink href="https://vilaconic.vercel.app" external>
              Visit the live site &rarr;
            </TextLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" className="border-y border-border">
      <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Label>About</Label>
          <div
            aria-hidden="true"
            className="mt-8 flex h-28 w-28 items-center justify-center border border-border"
          >
            <svg viewBox="0 0 48 48" className="h-12 w-12 text-gold" fill="none">
              <path
                d="M24 6v36M24 12c-6 0-9 3-9 3M24 12c6 0 9 3 9 3M8 28c0 8 7 14 16 14s16-6 16-14M6 28h4M38 28h4"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
              <circle cx="24" cy="7" r="3" stroke="currentColor" strokeWidth="1.25" />
            </svg>
          </div>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
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
        </div>
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
        <div>
          <Label>Contact</Label>
          <h2 className="mt-6 font-serif text-3xl leading-tight md:text-[2.6rem]">
            Tell me about the business.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A short message is enough to start. I will reply with honest thoughts on
            what would help, and a fixed price if it is a good fit.
          </p>
          <div className="mt-8 space-y-2 text-sm text-muted-foreground">
            <p>hello@anchorweb.com.au</p>
            <p>0400 000 000</p>
          </div>
        </div>

        {sent ? (
          <div className="flex items-center border border-border p-10">
            <p className="text-base leading-relaxed text-muted-foreground">
              Thank you — your message has been noted. This form is not yet connected
              to an inbox, so please reach out directly at hello@anchorweb.com.au in
              the meantime.
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
                  className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  required={f.required}
                  className="border-b border-border bg-transparent py-2.5 text-base outline-none transition-colors focus:border-foreground"
                />
              </div>
            ))}
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label
                htmlFor="message"
                className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="border-b border-border bg-transparent py-2.5 text-base outline-none transition-colors focus:border-foreground"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-primary px-8 py-3.5 text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-forest/90"
              >
                Send enquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}

export { OutlineLink };
