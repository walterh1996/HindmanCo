import { FadeIn } from "@/components/fade-in";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Betsy Hindman — founder of Hindman Company, a boutique LinkedIn growth advisory trusted by Fortune 50 executives, global brands, and high-profile personal brands.",
};

const credentials = [
  {
    label: "Years in LinkedIn Strategy",
    value: "10+",
  },
  {
    label: "Fortune 500 Clients Served",
    value: "30+",
  },
  {
    label: "Executive Profiles Managed",
    value: "200+",
  },
  {
    label: "Based In",
    value: "Nashville, TN",
  },
];

const pressLogos = [
  "Forbes",
  "Entrepreneur",
  "Fast Company",
  "Inc.",
  "Business Insider",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <FadeIn>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6">
                  About
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-8">
                  Betsy Hindman
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand mb-8">
                  Founder &amp; CEO, Hindman Company
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-5 text-text-secondary leading-relaxed text-lg">
                  <p>
                    Betsy Hindman is a LinkedIn strategist, B2B marketing
                    advisor, and the founder of Hindman Company — a boutique
                    advisory that helps executives, enterprise brands, and
                    high-profile personal brands leverage LinkedIn for real
                    business growth.
                  </p>
                  <p>
                    Over the past decade, Betsy has worked with Fortune 50 CMOs,
                    Academy Award-winning producers, Olympic athletes, and the
                    communications teams at companies like Microsoft, AT&amp;T,
                    Nasdaq, YouTube, Edelman, and MullenLowe. Her approach is
                    strategic, not tactical — she helps clients build a distinct
                    point of view, not just a posting schedule.
                  </p>
                  <p>
                    Before founding Hindman Company, Betsy built and led
                    marketing teams at high-growth startups and worked at the
                    intersection of media, brand, and technology. She is a
                    recognized speaker on LinkedIn strategy, executive
                    communications, and the future of B2B influence.
                  </p>
                  <p>
                    Betsy has been featured in Forbes, Entrepreneur, Fast
                    Company, Inc., and Business Insider. She lives in Nashville,
                    Tennessee.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-2">
              <FadeIn delay={0.2} direction="left">
                <div className="aspect-[3/4] bg-accent rounded-sm mb-8" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border py-16">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((item, i) => (
              <FadeIn key={item.label} delay={0.05 * i}>
                <div className="text-center">
                  <p className="font-serif italic text-3xl md:text-4xl text-brand mb-2">
                    {item.value}
                  </p>
                  <p className="text-xs font-medium tracking-[0.1em] uppercase text-text-secondary">
                    {item.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-20">
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-8">
              Featured In
            </p>
          </FadeIn>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {pressLogos.map((name, i) => (
              <FadeIn key={name} delay={0.05 * i}>
                <span className="text-xl font-serif italic text-text-secondary/50">
                  {name}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 md:py-32 bg-foreground text-cream">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream/40 mb-4">
                Our Approach
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-cream mb-8">
                Strategy first. Always.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="space-y-5 text-cream/70 leading-relaxed">
                <p>
                  Most LinkedIn &ldquo;agencies&rdquo; start with content. We
                  start with strategy. Before a single post is written, we
                  invest in understanding the leader, the brand, the audience,
                  and the business objective.
                </p>
                <p>
                  Every engagement begins with a deep-dive discovery process —
                  competitive analysis, audience mapping, voice development, and
                  a clear articulation of the outcomes that matter. Only then do
                  we build the system: content pillars, posting cadences,
                  engagement strategy, and measurement frameworks.
                </p>
                <p>
                  The result is a LinkedIn presence that doesn&rsquo;t just look
                  good — it works. It generates inbound leads, attracts speaking
                  invitations, builds board-level credibility, and creates
                  genuine thought leadership in the market.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-accent">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-foreground mb-6 max-w-2xl mx-auto">
              Let&rsquo;s explore what we can build together.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Book a free 20-minute discovery call to discuss your goals and see
              if Hindman Company is the right fit.
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
