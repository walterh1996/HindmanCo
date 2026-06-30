import { FadeIn } from "@/components/fade-in";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Betsy Hindman — founder of Hindman Company, a boutique LinkedIn growth advisory trusted by Fortune 50 executives, global brands, and high-profile personal brands.",
};

const credentials = [
  { label: "Years in Business", value: "7+" },
  { label: "Years of Experience", value: "24+" },
  { label: "Executive Profiles Managed", value: "200+" },
  { label: "Based In", value: "Nashville, TN" },
];

const pressLogos = [
  "Ad Age",
  "CNBC",
  "Digiday",
  "PRWeek",
  "Forbes",
  "Entrepreneur",
  "Adobe",
];

const career = [
  {
    role: "Founder",
    company: "Hindman Company",
    period: "2018 — Present",
    description:
      "LinkedIn strategy, executive thought leadership, paid campaigns, and corporate training for Fortune 50 executives, global brands, and high-profile personal brands.",
  },
  {
    role: "VP, Content Marketing & Paid Media",
    company: "Raven Public Relations",
    period: "2017 — 2018",
    description:
      "Led content marketing and paid media strategy for a PR firm serving ad agencies, brands, media companies, and creative technology businesses.",
  },
  {
    role: "Partner",
    company: "Modern Daily Knitting",
    period: "2015 — 2019",
    description:
      "Co-founded and grew the world\u2019s leading knitting eCommerce platform, combining editorial content with direct-to-consumer commerce.",
  },
  {
    role: "Senior Strategist",
    company: "Parthenon Publishing",
    period: "2013 — 2015",
    description:
      "Marketing strategy for a Nashville-based book and periodical publishing company.",
  },
  {
    role: "National Account Manager",
    company: "The Walt Disney Company",
    period: "2003 — 2008",
    description:
      "Managed over $180M in national account sales across Disney\u2019s entertainment distribution division. Five years in enterprise sales at one of the world\u2019s most recognized brands.",
  },
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
                    manufacturing, advertising, gaming, entertainment,
                    women&rsquo;s sports, and publishing. Her clients include
                    Fortune 50 executives, Academy Award-winning entertainment
                    producers, legendary athletes and Olympians, tier 1
                    advertising agencies and PR firms, cybersecurity, fintech,
                    and SaaS teams. She&rsquo;s also worked with groups of
                    formerly incarcerated men and veterans making the transition
                    to the business world.
                  </p>
                  <p>
                    Over the past 5 years, LinkedIn has gone from a nice-to-have
                    to a critical owned communication channel for brands and
                    brand leaders — even supplanting traditional thought
                    leadership PR. It has also become an engine for
                    partnerships, brand growth, and customer acquisition.
                  </p>
                  <p>
                    Betsy frequently shares her industry knowledge as a speaker,
                    panelist, and source for news articles, such as her insights
                    into LinkedIn&rsquo;s thought leader ads for CNBC, and her
                    predictions for the future of LinkedIn advertising in
                    Digiday. She has been featured in Ad Age, CNBC, Digiday,
                    PRWeek, Forbes, Entrepreneur, and Adobe.
                  </p>
                  <p>
                    Betsy is a member of the Sunday Dinner Community — a
                    private, curated group of 400 senior leaders in marketing
                    and advertising, helmed by Lindsey Slaby in New York.
                  </p>
                  <p>
                    She graduated magna cum laude from Vanderbilt University and
                    makes her home in Nashville, TN with frequent trips to NYC
                    and LA.
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

      {/* Michael Sugar Quote */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <Quote
                size={28}
                className="text-brand/30 mx-auto mb-6"
                strokeWidth={1.5}
              />
              <blockquote className="font-serif italic text-xl md:text-2xl lg:text-3xl leading-[1.35] text-foreground mb-8">
                I came to her as an Oscar winning producer who thought I knew
                something about storytelling. Betsy reminded me that the way you
                tell your story online and the way you connect with the right
                audience is its own art form.
              </blockquote>
              <footer>
                <p className="text-sm font-medium text-foreground">
                  Michael Sugar
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  Academy Award-Winning Producer &amp; Founder, Sugar23
                </p>
              </footer>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-16 border-y border-border">
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

      {/* Career Timeline */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-4">
                Career
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-foreground mb-12">
                24+ years across sales, marketing, media, and strategy.
              </h2>
            </FadeIn>

            <div className="space-y-0 divide-y divide-border">
              {career.map((item, i) => (
                <FadeIn key={item.company} delay={0.05 * i}>
                  <div className="py-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8">
                    <div>
                      <p className="text-xs font-medium tracking-[0.1em] uppercase text-text-secondary">
                        {item.period}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-brand mb-2">
                        {item.company}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
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
                  strategy that fully engages LinkedIn and taps into other
                  thought leadership channels — events, awards, podcasts, and
                  earned media.
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

      {/* Rachel Huff Quote */}
      <section className="py-20 md:py-28 bg-accent">
        <div className="container-narrow">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="font-serif italic text-xl md:text-2xl leading-[1.35] text-foreground mb-8">
                &ldquo;Betsy is the go-to for executives who want to strengthen
                their presence and thought leadership on LinkedIn. She has a
                clear line of sight to the latest platform updates and a strong
                point of view on how to use them strategically for executive
                visibility.&rdquo;
              </blockquote>
              <footer>
                <p className="text-sm font-medium text-foreground">
                  Rachel Huff
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  Communications &amp; Marketing Leader
                </p>
              </footer>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-foreground mb-6 max-w-2xl mx-auto">
              Let&rsquo;s explore what we can build together.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Tell us about your goals and see if Hindman Company is the right
              fit.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-13 px-8 text-base font-medium bg-brand text-white rounded-sm hover:bg-brand-dark transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
