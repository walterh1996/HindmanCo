import { FadeIn } from "@/components/fade-in";
import {
  PenTool,
  Users,
  Megaphone,
  TrendingUp,
  BarChart3,
  Target,
  Rocket,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "LinkedIn growth strategy, executive thought leadership, corporate training, paid campaigns, analytics, and brand positioning from Hindman Company.",
};

const services = [
  {
    icon: PenTool,
    title: "Executive Thought Leadership",
    subtitle: "For C-suite leaders and high-profile personal brands",
    description:
      "We craft and manage LinkedIn presences for C-suite executives, founders, and public figures — transforming your expertise into a strategic communications asset. Beyond standard content approaches, we understand that video is the greatest driver of reach and engagement on LinkedIn, and we strategize and execute interviews that result in engaging video content for the platform. Our process includes voice development, content strategy, ghostwriting, publishing, engagement management, and performance reporting.",
    includes: [
      "Voice and narrative development",
      "Content calendar and strategy",
      "Video interviews and polished video content",
      "Ghostwriting and editing",
      "Publishing and scheduling",
      "Comment and engagement management",
      "Monthly performance reporting",
    ],
  },
  {
    icon: Rocket,
    title: "Employee Activation",
    subtitle: "For organizations mobilizing their teams on LinkedIn",
    description:
      "We give you all the tools to motivate and mobilize company employees to take action on LinkedIn. As the platform has grown over the years, individual activity has become increasingly important and now outperforms company page content. We lean into this truth and aid in developing content that employees can share that aligns with corporate messaging.",
    includes: [
      "Audit review",
      "Training session",
      "Develop appropriate content",
      "Guide internal teams in content creation",
      "Plan for major announcements",
    ],
  },
  {
    icon: Users,
    title: "Corporate LinkedIn Training",
    subtitle: "For enterprise communications and marketing teams",
    description:
      "Custom workshops and ongoing coaching for enterprise teams. From employee advocacy programs to executive communications training, we help organizations activate their people as thought leaders on LinkedIn.",
    includes: [
      "Custom workshop development",
      "Employee advocacy program design",
      "Executive coaching (1:1 and group)",
      "Profile optimization at scale",
      "Playbooks and style guides",
      "Ongoing office hours and support",
    ],
  },
  {
    icon: Megaphone,
    title: "LinkedIn Ads & Paid Campaigns",
    subtitle: "For B2B pipeline and demand generation",
    description:
      "Sophisticated B2B paid campaigns built for pipeline, not vanity metrics. We handle strategy, creative, targeting, and optimization — fully managed. Our campaigns are designed to reach senior decision-makers and generate qualified leads.",
    includes: [
      "Campaign strategy and architecture",
      "Audience targeting and segmentation",
      "Ad creative development",
      "A/B testing and optimization",
      "Budget management and pacing",
      "Pipeline attribution and reporting",
    ],
  },
  {
    icon: TrendingUp,
    title: "Organic Growth Strategy",
    subtitle: "For brands and leaders building long-term influence",
    description:
      "Content strategy, posting cadences, engagement playbooks, and community building — designed to grow influence, not just followers. We help you build a sustainable system for LinkedIn presence that compounds over time.",
    includes: [
      "Content pillar development",
      "Posting cadence and calendar",
      "Engagement strategy and playbook",
      "Hashtag and topic optimization",
      "Community building tactics",
      "Growth benchmarking and tracking",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    subtitle: "For data-driven marketing leaders",
    description:
      "Clear dashboards and executive-ready reporting that ties LinkedIn activity to business outcomes. We go beyond vanity metrics to measure what matters: reach, engagement quality, pipeline influence, and revenue attribution.",
    includes: [
      "Custom dashboard setup",
      "Monthly executive reports",
      "Engagement quality analysis",
      "Pipeline attribution modeling",
      "Competitive benchmarking",
      "Quarterly strategy reviews",
    ],
  },
  {
    icon: Target,
    title: "Brand Positioning & Messaging",
    subtitle: "For leaders and organizations finding their voice",
    description:
      "We help leaders and brands articulate a distinct point of view — finding the intersection of expertise, audience need, and cultural relevance. This is the foundation everything else is built on.",
    includes: [
      "Positioning workshops",
      "Audience research and mapping",
      "Competitive narrative analysis",
      "Voice and tone development",
      "Key messaging frameworks",
      "Content theme architecture",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start with a deep-dive conversation to understand your business, your audience, your competitive landscape, and your goals. No templates — every engagement is custom.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We develop a comprehensive LinkedIn strategy — positioning, content pillars, voice guidelines, engagement approach, and success metrics — all documented and presented for your review.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Our team handles the work — writing, designing, publishing, engaging, and optimizing. You review and approve. We iterate and improve. In all, it's seamless and effective for busy executive teams.",
  },
  {
    step: "04",
    title: "Measurement",
    description:
      "We report on what matters: reach, engagement quality, follower growth, inbound leads, and pipeline influence. Monthly reviews keep strategy aligned with results.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6">
                Services
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6">
                Strategic LinkedIn services for enterprise brands and
                executives.
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                We offer a focused suite of thought leadership LinkedIn services
                — each built on strategic foundations, not cookie-cutter
                playbooks. Every engagement is custom.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-24 md:pb-32">
        <div className="container-narrow">
          <div className="space-y-0 divide-y divide-border">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={0.05 * i}>
                <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <service.icon
                        size={22}
                        className="text-brand"
                        strokeWidth={1.5}
                      />
                      <h2 className="text-xl md:text-2xl font-medium text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-4">
                      What&rsquo;s Included
                    </p>
                    <ul className="space-y-2.5">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-foreground"
                        >
                          <span className="w-1 h-1 rounded-full bg-brand mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-foreground text-cream">
        <div className="container-narrow">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream/40 mb-4">
              How We Work
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-cream mb-16 max-w-2xl">
              A clear, repeatable process — tailored to your business.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <FadeIn key={item.step} delay={0.1 * i}>
                <div>
                  <p className="font-serif italic text-4xl text-brand/60 mb-4">
                    {item.step}
                  </p>
                  <h3 className="text-lg font-medium text-cream mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
