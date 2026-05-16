import { FadeIn } from "@/components/fade-in";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Betsy Hindman — founder of Hindman Company, a boutique LinkedIn growth advisory trusted by Fortune 50 executives, global brands, and high-profile personal brands.",
};

const credentials = [
  { label: "Years in LinkedIn Strategy", value: "10+" },
  { label: "Fortune 500 Clients Served", value: "30+" },
  { label: "Executive Profiles Managed", value: "200+" },
  { label: "Based In", value: "Nashville, TN" },
];

const pressLogos = [
  "Forbes",
  "Entrepreneur",
  "Fast Company",
  "Inc.",
  "CNBC",
  "Digiday",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
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
                    Betsy Hindman is a communications strategist who works with
                    executives, brand leaders, and innovators to not only
                    increase visibility on the LinkedIn platform, but to
                    establish an influential voice across their industry.
                  </p>
                  <p>
                    She has worked with leaders across all sectors, including
                    advertising, gaming, entertainment, women&rsquo;s sports,
                    and publishing. Her wide-ranging clients include Fortune 50
                    executives, Academy Award-winning entertainment producers,
                    legendary athletes and Olympians, tier 1 advertising
                    agencies and PR firms, cybersecurity, fintech and SaaS
                    teams.
                  </p>
                  <p>
                    Over the past 5 years, LinkedIn has gone from a nice-to-have
                    to a critical owned communication channel for brands and
                    brand leaders — even supplanting traditional thought
                    leadership PR. It has also become an engine for
                    partnerships, brand growth and customer acquisition.
                  </p>
                  <p>
                    Betsy frequently shares her industry knowledge as a speaker,
                    panelist, and source for news articles, such as her insights
                    into LinkedIn&rsquo;s new thought leader ads for CNBC, and
                    her predictions for the future of LinkedIn advertising,
                    which appeared in Digiday.
                  </p>
                  <p>
                    Prior to founding Hindman Company, Betsy was in enterprise
                    sales with the Walt Disney Company, where she managed over
                    $180M in sales, and served as the VP of Paid Media and
                    Content Marketing at Raven Public Relations. An ardent
                    entrepreneur, Betsy is also a co-founder of
                    ModernDailyKnitting.com.
                  </p>
                  <p>
                    Betsy graduated magna cum laude from Vanderbilt University
                    and makes her home in Nashville, TN with frequent trips to
                    NYC and LA.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-2">
              <FadeIn delay={0.2} direction="left">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <Image
                    src="/images/betsy-about.webp"
                    alt="Betsy Hindman — Founder & CEO of Hindman Company"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
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

      {/* Approach — with street photography */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-street-2.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-foreground/90" />
        </div>
        <div className="container-narrow relative z-10">
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
                  Platform tips and tricks will only take you so far. Betsy
                  learns her clients&rsquo; priorities, industry, voice, and
                  area of expertise and then delivers a highly customized
                  strategy and support that fully engages the LinkedIn platform
                  for brands and individuals.
                </p>
                <p>
                  The approach taps into other thought leadership strategies
                  such as events, awards, podcasts and earned media — building a
                  comprehensive system that goes far beyond a posting schedule.
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
