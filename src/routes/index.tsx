import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site/chrome";
import {
  About,
  CaseStudy,
  Contact,
  Hero,
  Problem,
  Services,
  Why,
} from "@/components/site/sections";

const title = "Anchor Web — Website Design & Development, Adelaide";
const description =
  "Founder-led website design and development in Adelaide for small businesses and sole traders. Fixed pricing, one point of contact, support after launch.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Anchor Web",
  description,
  email: "hello@anchorweb.com.au",
  telephone: "0400 000 000",
  areaServed: "Adelaide, South Australia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Adelaide",
    addressRegion: "SA",
    addressCountry: "AU",
  },
};

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Why />
        <CaseStudy />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
