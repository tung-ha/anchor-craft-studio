# Anchor Web — refined editorial site

A single-page site for Anchor Web, a founder-led web design business in Adelaide, built in a calm, editorial studio style.

## Visual direction

- **Palette:** warm cream background (#F7F5EF), deep forest/charcoal (#2A3328) for header, footer and select dark bands, muted sage and a soft gold used sparingly as accents only.
- **Typography:** Fraunces serif for headlines, section titles and numerals; a clean sans (Inter/DM Sans) for body. Small-caps, letter-spaced micro-labels above every section heading ("WEBSITE DESIGN · ADELAIDE", "WHAT I DO", "HOW IT WORKS").
- **UI:** square-edged solid and outline buttons with tracked-out small-caps labels — no pills. Cards use 1px hairline borders, generous padding, no shadows or colour fills.
- **Imagery:** warm, muted Unsplash photography (workspaces, materials, Adelaide texture). No people depicted anywhere. About section uses an abstract mark, not a portrait.

## Sections

1. **Header** — dark bar, wordmark, minimal nav, one outline CTA.
2. **Hero** — label, large serif outcome headline ("Websites built for businesses that need to be taken seriously"), one supporting line, primary "Request a Quote" button plus "See recent work" text link, paired with a warm photograph.
3. **The problem** — two-column statement: many small business sites look presentable but don't build trust or generate enquiries; Anchor Web's role in fixing that.
4. **What I do** — 4 services in a thin-bordered grid with light serif numerals and "Explore →" links.
5. **Why work with me** — 01–05 numbered list: business-first approach, one point of contact, fixed transparent pricing, technical depth backed by a trusted network of collaborators, ongoing support after launch.
6. **Featured project — Vilaconic** — wholesale Vietnamese/South-East Asian food importer, Adelaide. Image, outcome-focused description (bilingual English/Vietnamese site, credible presence for new clients), and a "Visit the live site" link to vilaconic.vercel.app. The testimonial is reproduced word for word, attributed to "Vilaconic, Adelaide":

   > "Without any brief, scope, or technology knowledge – we simply handed our business over and let the process happen. This trust was rewarded well. The website has managed to capture everything that is us, has the ability to function in both English and Vietnamese languages for our clients, and provides us with something we can be proud to show new clients. It is unusual to come across somebody who can convert an unclear concept into something like this without our continuous guidance."
7. **About** — short first-person section, understated, abstract mark instead of a photo.
8. **Contact** — closing prompt plus a form (name, business name, email, phone, message). Visual only for now: submitting shows a confirmation message, nothing is sent or stored.
9. **Footer** — dark, business name, nav repeat, hello@anchorweb.com.au and 0400 000 000 as placeholders, "Adelaide, South Australia."

Copy throughout is calm and slightly understated — no exclamation points, no urgency language.

## Technical notes

- Rewrite `src/routes/index.tsx` as the home page, composed of section components under `src/components/`.
- Add tokens (cream, forest, sage, gold, serif/sans families, sharp radii) to `src/styles.css` under `@theme inline`; fonts loaded via `<link>` in `src/routes/__root.tsx`.
- Route-level `head()` on the index route: Adelaide-focused title, description, og/twitter tags; single H1 in the hero; semantic sections; alt text on all imagery; LocalBusiness JSON-LD.
- Hero and case study images sourced from Unsplash at high resolution and stored locally in `src/assets/`.
