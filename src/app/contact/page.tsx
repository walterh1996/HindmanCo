import { FadeIn } from "@/components/fade-in";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hindman Company. Book a 20-minute discovery call with Betsy Hindman to discuss LinkedIn growth strategy for your brand or team.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <FadeIn>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-6">
                  Contact
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6">
                  Let&rsquo;s start a conversation.
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-lg text-text-secondary leading-relaxed mb-10">
                  The best way to explore working together is to book a free
                  20-minute discovery call. No pitch deck, no pressure — just a
                  conversation about your goals and whether we&rsquo;re the
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

            <div className="lg:pt-8">
              <FadeIn delay={0.15} direction="left">
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden mb-10">
                  <Image
                    src="/images/betsy-headshot.webp"
                    alt="Betsy Hindman"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.2} direction="left">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-4">
                      Email
                    </h3>
                    <a
                      href="mailto:betsy@hindmancompany.com"
                      className="flex items-center gap-3 text-lg text-foreground hover:text-brand transition-colors duration-200"
                    >
                      <Mail size={20} strokeWidth={1.5} />
                      betsy@hindmancompany.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-4">
                      LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/betsyhindman/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-lg text-foreground hover:text-brand transition-colors duration-200"
                    >
                      <LinkedInIcon size={20} />
                      linkedin.com/in/betsyhindman
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-4">
                      Location
                    </h3>
                    <p className="flex items-center gap-3 text-lg text-foreground">
                      <MapPin size={20} strokeWidth={1.5} />
                      Nashville, Tennessee
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="py-24 md:py-32 bg-accent">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary mb-4">
                Schedule
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-foreground mb-6">
                Pick a time that works for you.
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-text-secondary leading-relaxed mb-10">
                Select a 20-minute slot below. If you don&rsquo;t see a time
                that works, email us directly and we&rsquo;ll find one.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-sm border border-border p-8 md:p-12 text-center">
                <a
                  href="https://calendly.com/betsyhindman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-medium text-brand hover:text-brand-dark transition-colors"
                >
                  Open Scheduling Page
                  <ArrowUpRight size={18} />
                </a>
                <p className="text-sm text-text-secondary mt-4">
                  Opens Calendly in a new tab
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-serif italic text-3xl md:text-4xl leading-[1.15] text-foreground mb-12">
                Common questions
              </h2>
            </FadeIn>

            <div className="divide-y divide-border">
              <FadeIn delay={0.05}>
                <div className="py-8">
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    What happens on the discovery call?
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    It&rsquo;s a 20-minute conversation to understand your
                    goals, your current LinkedIn presence, and what success
                    looks like. We&rsquo;ll share relevant experience and
                    discuss whether there&rsquo;s a fit. No pitch deck, no
                    pressure.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="py-8">
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    What does a typical engagement look like?
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Every engagement is custom. Some clients need full-service
                    executive thought leadership management. Others need a
                    strategic audit, a training workshop, or help with LinkedIn
                    advertising. We&rsquo;ll scope the right approach for your
                    needs.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="py-8">
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    How much does it cost?
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Pricing varies based on scope. Our engagements typically
                    start with a strategic assessment and scale from there. We
                    work with both enterprise organizations on retainer and
                    individual executives on project-based engagements.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="py-8">
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    Do you work with individuals or just companies?
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Both. We work with enterprise brands on corporate LinkedIn
                    strategy, and with individual executives and public figures
                    on personal thought leadership. Many of our engagements
                    combine both.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
