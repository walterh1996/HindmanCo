import { FadeIn } from "@/components/fade-in";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Megaphone,
  PenTool,
  BarChart3,
  Target,
  Quote,
  Download,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const clients = [
  { name: "Microsoft", logo: "/images/clients/microsoft.webp" },
  { name: "AT&T", logo: "/images/clients/att.webp" },
  { name: "Nasdaq", logo: "/images/clients/nasdaq.webp" },
  { name: "YouTube", logo: "/images/clients/youtube.webp" },
  { name: "Edelman", logo: "/images/clients/edelman.webp" },
  { name: "MullenLowe", logo: "/images/clients/mullenlowe.webp" },
];

import { LogoMarquee } from "@/components/logo-marquee";

const services = [
  {
    icon: PenTool,
    title: "Executive Thought Leadership",
    description:
      "We craft and manage LinkedIn presences for C-suite executives, founders, and public figures — turning their expertise into a strategic communications asset.",
  },
  {
    icon: Users,
    title: "Corporate LinkedIn Training",
    description:
      "Custom workshops and ongoing coaching for enterprise teams — from employee advocacy programs to executive communications training.",
  },
  {
    icon: Megaphone,
    title: "LinkedIn Ads & Paid Campaigns",
    description:
      "Sophisticated B2B paid campaigns built for pipeline, not vanity metrics. Strategy, creative, targeting, and optimization — fully managed.",
  },
  {
    icon: TrendingUp,
    title: "Organic Growth Strategy",
    description:
      "Content strategy, posting cadences, engagement playbooks, and community building — designed to grow influence, not just followers.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Clear dashboards and executive-ready reporting that ties LinkedIn activity to business outcomes — reach, engagement, pipeline, revenue.",
  },
  {
    icon: Target,
    title: "Brand Positioning & Messaging",
    description:
      "We help leaders and brands articulate a distinct point of view — finding the intersection of expertise, audience need, and cultural relevance.",
  },
];

const caseStudies = [
  {
    metric: "3x",
    label: "LinkedIn engagement",
    description:
      "A global manufacturer's sales team saw engagement on their LinkedIn posts increase threefold after working with Betsy — driving real conversations with target buyers.",
    category: "Corporate Training",
    client: "Brooks Instrument",
  },
  {
    metric: "47%",
    label: "lower cost-per-lead",
    description:
      "An enterprise SaaS company moved their LinkedIn paid campaigns to Hindman Company. Through strategic targeting and creative optimization, we cut CPL by nearly half while increasing lead quality scores.",
    category: "LinkedIn Ads",
    client: "Enterprise SaaS",
  },
  {
    metric: "12,000+",
    label: "targeted followers in 90 days",
    description:
      "An Oscar-winning producer partnered with Hindman Company to build a LinkedIn presence from scratch. Strategic content and engagement grew a high-value audience of industry decision-makers in three months.",
    category: "Personal Brand",
    client: "Entertainment Executive",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — tighter, with integrated logo bar */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-5 md:mb-6">
                LinkedIn Growth &amp; Thought Leadership
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] text-foreground mb-6">
                We help businesses leverage LinkedIn for growth.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
                A boutique strategic advisory for executives, brand leaders,
                and innovators who want LinkedIn to do real work — not just
                exist.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20">
                <a
                  href="https://calendly.com/betsyhindman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-13 px-8 text-base font-medium bg-brand text-white rounded-sm hover:bg-brand-dark transition-colors duration-200"
                >
                  Book a Discovery Call
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-base text-text-secondary hover:text-foreground transition-colors duration-200 py-3"
                >
                  See How We Work
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>

            {/* Logos integrated into hero */}
            <FadeIn delay={0.35}>
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-text-secondary/50 mb-6">
                Trusted by teams at
              </p>
            </FadeIn>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-10 items-center justify-items-center">
              {clients.map((client, i) => (
                <FadeIn key={client.name} delay={0.35 + 0.04 * i}>
                  <div className="relative h-7 w-20 md:h-8 md:w-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies with Real Metrics */}
      <section className="py-20 md:py-28 bg-foreground text-cream">
        <div className="container-narrow">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream/40 mb-4">
              Proven Results
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-cream mb-16 max-w-2xl">
              Measurable outcomes, not just impressions.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
            {caseStudies.map((study, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-foreground p-8 md:p-10 h-full flex flex-col">
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand mb-6">
                    {study.category}
                  </p>
                  <p className="font-serif italic text-5xl md:text-6xl text-cream mb-1">
                    {study.metric}
                  </p>
                  <p className="text-sm font-medium text-cream/60 mb-5">
                    {study.label}
                  </p>
                  <p className="text-sm text-cream/50 leading-relaxed flex-1">
                    {study.description}
                  </p>
                  <p className="text-xs text-cream/30 mt-6 pt-4 border-t border-cream/10">
                    {study.client}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial — Michael Sugar */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <Quote
                size={32}
                className="text-brand/30 mx-auto mb-6"
                strokeWidth={1.5}
              />
              <blockquote className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-foreground mb-8">
                Betsy is, quite simply, the best consultant I&rsquo;ve met when
                it comes to LinkedIn strategy. She reminded me that the way you
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

      {/* Services Overview */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="container-narrow">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-4">
                What We Do
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-foreground mb-4">
                LinkedIn strategy for the world&rsquo;s most visible brands and
                leaders.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-text-secondary text-lg leading-relaxed">
                From Fortune 50 executive communications to high-profile
                personal brands, we bring strategic rigor to every engagement.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={0.05 * i}>
                <div className="bg-cream p-8 md:p-10 h-full">
                  <service.icon
                    size={24}
                    className="text-brand mb-5"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
              >
                Explore All Services
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Preview — with Betsy photo */}
      <section className="py-24 md:py-32 bg-accent">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-4">
                  About Hindman Company
                </p>
                <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-foreground mb-6">
                  Founded by one of LinkedIn&rsquo;s most trusted strategists.
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Betsy Hindman is a communications strategist who works with
                  executives, brand leaders, and innovators to establish an
                  influential voice across their industry. Her clients include
                  Fortune 50 executives, Academy Award-winning producers,
                  legendary athletes and Olympians, and the communications teams
                  at Microsoft, YouTube, Dentons, Edelman, and
                  Wieden+Kennedy.
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Before founding Hindman Company, Betsy spent five years in
                  enterprise sales at the Walt Disney Company managing over
                  $180M in revenue. Featured in Ad Age, CNBC, Digiday, and
                  PRWeek. Vanderbilt University, magna cum laude.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                >
                  Read Betsy&rsquo;s Full Bio
                  <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} direction="left">
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <Image
                    src="/images/betsy-headshot.webp"
                    alt="Betsy Hindman — Founder of Hindman Company"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-brand/30 rounded-sm" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-4 text-center">
              What Clients Say
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-foreground mb-16 text-center max-w-2xl mx-auto">
              Trusted by leaders who set the standard.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <blockquote className="border-t border-border pt-8 h-full flex flex-col">
                <p className="text-foreground leading-relaxed mb-6 flex-1">
                  &ldquo;What sets Betsy apart is not just her deep expertise in
                  the mechanics of LinkedIn, but her passion for her clients. She
                  cares less about vanity metrics and more about impact — helping
                  leaders translate their values and vision into posts that
                  actually resonate.&rdquo;
                </p>
                <footer>
                  <p className="text-sm font-medium text-foreground">
                    Michael Sugar
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    Academy Award-Winning Producer, Sugar23
                  </p>
                </footer>
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.2}>
              <blockquote className="border-t border-border pt-8 h-full flex flex-col">
                <p className="text-foreground leading-relaxed mb-6 flex-1">
                  &ldquo;Betsy is the go-to for executives who want to
                  strengthen their presence and thought leadership on LinkedIn.
                  She has a clear line of sight to the latest platform updates
                  and a strong point of view on how to use them strategically.
                  I&rsquo;d recommend Betsy without hesitation.&rdquo;
                </p>
                <footer>
                  <p className="text-sm font-medium text-foreground">
                    Rachel Huff
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    Communications &amp; Marketing Leader
                  </p>
                </footer>
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.3}>
              <blockquote className="border-t border-border pt-8 h-full flex flex-col">
                <p className="text-foreground leading-relaxed mb-6 flex-1">
                  &ldquo;Since our sales team has been working with Betsy, the
                  engagement on their LinkedIn posts has increased
                  threefold.&rdquo;
                </p>
                <footer>
                  <p className="text-sm font-medium text-foreground">
                    Christine Batycki
                  </p>
                  <p className="text-xs text-text-secondary mt-0.5">
                    Global Marketing Communications, Brooks Instrument
                  </p>
                </footer>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA — differentiated, with secondary lead magnet */}
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
          <div className="absolute inset-0 bg-foreground/88" />
        </div>
        <div className="container-narrow relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn>
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream/50 mb-4">
                  Ready to Start?
                </p>
                <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-cream mb-6">
                  Let&rsquo;s discuss what LinkedIn can do for your business.
                </h2>
                <p className="text-cream/60 leading-relaxed mb-8">
                  Book a free 20-minute discovery call. No pitch deck, no
                  pressure — just a conversation about your goals and whether
                  we&rsquo;re the right fit.
                </p>
                <a
                  href="https://calendly.com/betsyhindman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-13 px-8 text-base font-medium bg-brand text-white rounded-sm hover:bg-brand-dark transition-colors duration-200"
                >
                  Schedule a Call
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} direction="left">
              <div className="border border-cream/15 rounded-sm p-8 md:p-10 bg-cream/5 backdrop-blur-sm">
                <Download
                  size={20}
                  className="text-brand mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-medium text-cream mb-2">
                  Not ready for a call?
                </h3>
                <p className="text-sm text-cream/50 leading-relaxed mb-6">
                  Get a free LinkedIn Presence Audit — a quick diagnostic of
                  your executive or company LinkedIn profile with 3-5 specific,
                  actionable recommendations. No strings attached.
                </p>
                <a
                  href="mailto:betsy@hindmancompany.com?subject=LinkedIn%20Presence%20Audit&body=Hi%20Betsy%2C%0A%0AI%E2%80%99d%20love%20a%20free%20LinkedIn%20Presence%20Audit.%20Here%E2%80%99s%20my%20LinkedIn%20profile%20URL%3A%0A%0A"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cream hover:text-cream/80 transition-colors"
                >
                  Request a Free Audit
                  <ArrowRight size={14} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
