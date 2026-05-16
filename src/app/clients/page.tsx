import { FadeIn } from "@/components/fade-in";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Hindman Company has worked with Fortune 50 executives, global brands, and high-profile personal brands including Microsoft, AT&T, Nasdaq, YouTube, Edelman, and more.",
};

const enterpriseClients = [
  { name: "Microsoft", category: "Technology" },
  { name: "AT&T", category: "Telecommunications" },
  { name: "Nasdaq", category: "Financial Services" },
  { name: "YouTube", category: "Technology" },
  { name: "Edelman", category: "Public Relations" },
  { name: "MullenLowe", category: "Advertising" },
];

const clientTypes = [
  {
    title: "Enterprise Brands",
    description:
      "Fortune 500 communications, marketing, and brand teams who need strategic LinkedIn programs — from executive thought leadership to employee advocacy to paid campaigns.",
    examples:
      "Technology, financial services, telecommunications, professional services, healthcare, consumer brands.",
  },
  {
    title: "C-Suite Executives",
    description:
      "CMOs, Chief Communications Officers, VPs of Brand, and senior leaders who want to build a personal thought leadership presence that aligns with and amplifies their organization's brand.",
    examples:
      "Fortune 50 CMOs, Chief Communications Officers, Heads of Brand, SVPs of Marketing.",
  },
  {
    title: "High-Profile Personal Brands",
    description:
      "Founders, investors, athletes, entertainers, and public figures who want LinkedIn to function as an owned thought leadership channel — strategic, original, and high-impact.",
    examples:
      "Academy Award-winning producers, Olympic athletes, bestselling authors, venture-backed founders.",
  },
];

const caseStudies = [
  {
    headline: "3x increase in inbound pipeline",
    description:
      "A Fortune 100 technology company engaged Hindman Company to build their executive team's LinkedIn presence. Within six months, executive-attributed inbound leads increased by 300%.",
    category: "Executive Thought Leadership",
  },
  {
    headline: "50% reduction in cost-per-lead",
    description:
      "An enterprise SaaS company moved their LinkedIn paid campaigns to Hindman Company. Through strategic audience targeting and creative optimization, we reduced CPL by 50% while increasing lead quality.",
    category: "LinkedIn Ads",
  },
  {
    headline: "10,000+ new followers in 90 days",
    description:
      "A high-profile founder partnered with Hindman Company to build their LinkedIn presence from scratch. Through strategic content and engagement, we grew their audience to over 10,000 targeted followers in three months.",
    category: "Personal Brand",
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6">
                Clients
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6">
                Trusted by the world&rsquo;s most recognizable brands and
                leaders.
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                From Fortune 50 executive communications to high-profile
                personal brands, our client roster reflects the caliber of work
                we deliver.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="border-y border-border py-16">
        <div className="container-narrow">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-10 text-center">
              Select Enterprise Clients
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {enterpriseClients.map((client, i) => (
              <FadeIn key={client.name} delay={0.05 * i}>
                <div className="flex flex-col items-center text-center py-6">
                  <span className="text-2xl font-serif italic text-foreground/80 mb-2">
                    {client.name}
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-text-secondary">
                    {client.category}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <FadeIn>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-foreground mb-16 max-w-2xl">
              We work with three types of clients.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {clientTypes.map((type, i) => (
              <FadeIn key={type.title} delay={0.1 * i}>
                <div className="bg-cream p-8 md:p-10 h-full">
                  <h3 className="text-lg font-medium text-foreground mb-4">
                    {type.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {type.description}
                  </p>
                  <p className="text-xs text-text-secondary/80">
                    <span className="font-medium">Examples: </span>
                    {type.examples}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 md:py-32 bg-foreground text-cream">
        <div className="container-narrow">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream/40 mb-4">
              Results
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-cream mb-16 max-w-2xl">
              The work speaks for itself.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="border-t border-cream/20 pt-8">
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand mb-4">
                    {study.category}
                  </p>
                  <h3 className="font-serif italic text-2xl text-cream mb-4">
                    {study.headline}
                  </h3>
                  <p className="text-sm text-cream/60 leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-accent">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-foreground mb-6 max-w-2xl mx-auto">
              Ready to join them?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Book a free 20-minute discovery call to discuss how Hindman
              Company can help you leverage LinkedIn for growth.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <a
              href="https://calendly.com/betsyhindman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-13 px-8 text-base font-medium bg-brand text-white rounded-sm hover:bg-brand-dark transition-colors duration-200"
            >
              Book a Discovery Call
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
