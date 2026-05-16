import { FadeIn } from "@/components/fade-in";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Strategic insights on LinkedIn growth, executive thought leadership, B2B marketing, and personal branding from Hindman Company.",
};

const featuredInsights = [
  {
    category: "Strategy",
    title: "Why Most Executive LinkedIn Programs Fail — And How to Fix Yours",
    excerpt:
      "The biggest mistake companies make with executive LinkedIn isn't content — it's a lack of strategic foundation. Here's the framework that actually works.",
    date: "Coming Soon",
    readTime: "8 min read",
  },
  {
    category: "Thought Leadership",
    title: "The Difference Between Personal Branding and Thought Leadership",
    excerpt:
      "Personal branding is about visibility. Thought leadership is about influence. Here's why the distinction matters — and how to build the latter.",
    date: "Coming Soon",
    readTime: "6 min read",
  },
  {
    category: "LinkedIn Ads",
    title: "B2B LinkedIn Ads: A Framework for Pipeline, Not Impressions",
    excerpt:
      "Most B2B LinkedIn ad campaigns optimize for the wrong things. Here's how to build campaigns that actually generate qualified pipeline.",
    date: "Coming Soon",
    readTime: "10 min read",
  },
];

const topics = [
  "LinkedIn Strategy",
  "Executive Communications",
  "B2B Content Marketing",
  "Employee Advocacy",
  "LinkedIn Advertising",
  "Personal Branding",
  "Thought Leadership",
  "Measurement & ROI",
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6">
                Insights
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6">
                Strategic thinking on LinkedIn and B2B growth.
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                Perspectives from Betsy Hindman and the Hindman Company team on
                LinkedIn strategy, executive communications, and the future of
                B2B thought leadership.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="pb-24 md:pb-32">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {featuredInsights.map((article, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <article className="bg-cream p-8 md:p-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-brand">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-medium text-foreground mb-3 flex-1">
                    {article.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-text-secondary">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{article.readTime}</span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-8">
              Topics We Cover
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="inline-flex items-center px-4 py-2 text-sm text-text-secondary border border-border rounded-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 md:py-32 bg-foreground text-cream">
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream/40 mb-4">
              Stay Informed
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-cream mb-6 max-w-2xl mx-auto">
              New insights are on the way.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-cream/70 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              We&rsquo;re building a library of strategic resources on LinkedIn
              growth and executive thought leadership. Follow Betsy on LinkedIn
              to be the first to know when new content drops.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="https://www.linkedin.com/in/betsyhindman/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-13 px-8 text-base font-medium bg-brand text-white rounded-sm hover:bg-brand-dark transition-colors duration-200"
            >
              Follow on LinkedIn
            </a>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-accent">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-foreground mb-6 max-w-2xl mx-auto">
              Ready to put strategy into action?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Book a free 20-minute discovery call to discuss how Hindman
              Company can help your team or brand grow on LinkedIn.
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
