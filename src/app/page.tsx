import { FadeIn } from "@/components/fade-in";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Megaphone,
  PenTool,
  BarChart3,
  Target,
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

const testimonials = [
  {
    quote:
      "Since our sales team has been working with Betsy, the engagement on their LinkedIn posts has increased threefold.",
    author: "Christine Batycki",
    company: "Global Marketing Communications, Brooks Instrument",
  },
  {
    quote:
      "Working with Hindman Company felt less like hiring an agency and more like gaining a strategic advisor. They understand the nuances of executive communication at the highest level.",
    author: "Chief Marketing Officer",
    company: "Global Financial Services Firm",
  },
  {
    quote:
      "The ROI on our LinkedIn campaigns exceeded every other B2B channel. Hindman Company doesn't just run ads — they build systems.",
    author: "Head of Demand Generation",
    company: "Enterprise SaaS Company",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-36 lg:py-44 overflow-hidden">
        <div className="container-narrow relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeIn>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6">
                  LinkedIn Growth &amp; Thought Leadership
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-foreground mb-6">
                  We help businesses leverage LinkedIn for growth.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-10">
                  A boutique strategic advisory for executives, brand leaders,
                  and innovators who want LinkedIn to do real work — not just
                  exist.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <a
                    href="https://calendly.com/betsyhindman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-13 px-8 text-base font-medium bg-brand text-white rounded-sm hover:bg-brand-dark transition-colors duration-200"
                  >
                    Book a 20-Minute Discovery Call
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
            </div>

            <FadeIn delay={0.2} direction="left">
              <div className="relative hidden lg:block">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/images/hero-street-1.webp"
                    alt="Professional urban street scene — the world Hindman Company clients operate in"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-foreground/10" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-brand/20 rounded-sm" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Social Proof Bar — Client Logos */}
      <section className="border-y border-border py-12 md:py-16">
        <div className="container-narrow">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-10 text-center">
              Trusted by Teams At
            </p>
          </FadeIn>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
            {clients.map((client, i) => (
              <FadeIn key={client.name} delay={0.05 * i}>
                <div className="relative h-8 w-24 md:w-28 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="120px"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32">
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
      <section className="py-24 md:py-32 bg-foreground text-cream">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream/40 mb-4">
                  About Hindman Company
                </p>
                <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-cream mb-6">
                  Founded by one of LinkedIn&rsquo;s most trusted strategists.
                </h2>
                <p className="text-cream/70 leading-relaxed mb-4">
                  Betsy Hindman has spent over a decade helping the
                  world&rsquo;s most recognizable brands and executives build
                  influence on LinkedIn. Her client roster includes Fortune 50
                  CMOs, Academy Award-winning producers, Olympic athletes, and
                  the communications teams at companies like Microsoft,
                  AT&amp;T, and Nasdaq.
                </p>
                <p className="text-cream/70 leading-relaxed mb-8">
                  Before founding Hindman Company, Betsy was in enterprise sales
                  with the Walt Disney Company, where she managed over $180M in
                  sales, and served as VP of Paid Media and Content Marketing at
                  Raven Public Relations. She graduated magna cum laude from
                  Vanderbilt University and makes her home in Nashville, TN.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cream hover:text-cream/80 transition-colors"
                >
                  Read Betsy&rsquo;s Full Bio
                  <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} direction="left">
              <div className="relative">
                <div className="aspect-[3/4] rounded-sm overflow-hidden">
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
              Client Feedback
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-foreground mb-16 text-center max-w-2xl mx-auto">
              Trusted by leaders who set the standard.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <blockquote className="border-t border-border pt-8 h-full flex flex-col">
                  <p className="text-foreground leading-relaxed mb-6 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer>
                    <p className="text-sm font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {testimonial.company}
                    </p>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — with street photo */}
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
          <div className="absolute inset-0 bg-foreground/85" />
        </div>
        <div className="container-narrow text-center relative z-10">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream/50 mb-4">
              Ready to Start?
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream mb-6 max-w-2xl mx-auto">
              Let&rsquo;s discuss what LinkedIn can do for your business.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-cream/60 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Book a free 20-minute discovery call. No pitch deck, no pressure
              — just a conversation about your goals and whether we&rsquo;re the
              right fit.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="https://calendly.com/betsyhindman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-13 px-8 text-base font-medium bg-brand text-white rounded-sm hover:bg-brand-dark transition-colors duration-200"
            >
              Book a 20-Minute Discovery Call
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
