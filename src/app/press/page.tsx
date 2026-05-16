import { FadeIn } from "@/components/fade-in";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Betsy Hindman and Hindman Company in the news — featured in Forbes, Entrepreneur, Fast Company, Inc., and Business Insider.",
};

const pressItems = [
  {
    publication: "Forbes",
    title: "How LinkedIn Became the Most Important Platform for B2B Thought Leadership",
    description:
      "Betsy Hindman shares her framework for building executive thought leadership on LinkedIn — and why most companies are doing it wrong.",
    date: "2024",
    url: "#",
  },
  {
    publication: "Entrepreneur",
    title: "The Future of Executive Branding Is on LinkedIn",
    description:
      "An in-depth look at how top executives are using LinkedIn to build influence, drive pipeline, and shape industry conversations.",
    date: "2024",
    url: "#",
  },
  {
    publication: "Fast Company",
    title: "Why the Best CEOs Are Investing in LinkedIn",
    description:
      "Betsy Hindman explains why CEO visibility on LinkedIn is no longer optional — and how the smartest companies are making it work.",
    date: "2023",
    url: "#",
  },
  {
    publication: "Inc.",
    title: "The LinkedIn Strategy That Fortune 500 Companies Are Using to Win B2B",
    description:
      "A deep dive into the strategic approach that Hindman Company uses to help enterprise brands dominate LinkedIn.",
    date: "2023",
    url: "#",
  },
  {
    publication: "Business Insider",
    title: "Meet the Strategist Behind LinkedIn's Most Influential Executive Profiles",
    description:
      "A profile of Betsy Hindman and the boutique advisory that's quietly shaping how the world's top leaders show up on LinkedIn.",
    date: "2023",
    url: "#",
  },
  {
    publication: "Nashville Business Journal",
    title: "Nashville's Hindman Company Is Redefining LinkedIn Strategy for Enterprise Brands",
    description:
      "How a Nashville-based boutique advisory is working with Fortune 50 clients to transform executive communications on LinkedIn.",
    date: "2022",
    url: "#",
  },
];

const speakingTopics = [
  "Executive Thought Leadership on LinkedIn",
  "B2B Content Strategy for Enterprise Brands",
  "Employee Advocacy at Scale",
  "LinkedIn Advertising for Pipeline Generation",
  "The Future of Executive Communications",
  "Building a Personal Brand That Drives Business Results",
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6">
                In the News
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6">
                Press &amp; media features.
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                Betsy Hindman is a recognized expert on LinkedIn strategy,
                executive communications, and B2B thought leadership. She has
                been featured in leading business publications.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Press Items */}
      <section className="pb-24 md:pb-32">
        <div className="container-narrow">
          <div className="divide-y divide-border">
            {pressItems.map((item, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-10 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium tracking-[0.15em] uppercase text-brand">
                          {item.publication}
                        </span>
                        <span className="text-xs text-text-secondary">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-medium text-foreground group-hover:text-brand transition-colors duration-200 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-text-secondary group-hover:text-brand transition-colors duration-200 shrink-0 mt-1"
                    />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section className="py-24 md:py-32 bg-foreground text-cream">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <FadeIn>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream/40 mb-4">
                  Speaking
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-cream mb-6">
                  Betsy is available for speaking engagements.
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-cream/70 leading-relaxed mb-8">
                  Betsy speaks at conferences, corporate events, and executive
                  retreats on topics related to LinkedIn strategy, executive
                  communications, and B2B thought leadership. Her talks are
                  strategic, actionable, and tailored to senior audiences.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <a
                  href="mailto:betsy@hindmancompany.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cream hover:text-cream/80 transition-colors"
                >
                  Inquire About Speaking
                  <ArrowUpRight size={14} />
                </a>
              </FadeIn>
            </div>

            <div>
              <FadeIn delay={0.15}>
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-cream/40 mb-6">
                  Speaking Topics
                </p>
                <ul className="space-y-4">
                  {speakingTopics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3 text-cream/70"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand mt-2.5 shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-accent">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-foreground mb-6 max-w-2xl mx-auto">
              Want to work with us?
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
