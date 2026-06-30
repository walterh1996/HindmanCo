"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const CONTACT_EMAIL = "betsy@hindmancompany.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `New inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nWhat I'm looking for:\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-cream rounded-sm border border-border p-8 md:p-10">
        <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-5">
          <Check size={22} className="text-brand" strokeWidth={2} />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">
          Thanks for reaching out.
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          Your email client should have opened with your message ready to send.
          If it didn&rsquo;t, email us directly at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brand hover:text-brand-dark transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-cream rounded-sm border border-border p-8 md:p-10"
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-medium tracking-[0.1em] uppercase text-text-secondary mb-2"
          >
            Name <span className="text-brand">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 px-4 bg-background border border-border rounded-sm text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:border-brand transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-medium tracking-[0.1em] uppercase text-text-secondary mb-2"
          >
            Email <span className="text-brand">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 bg-background border border-border rounded-sm text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:border-brand transition-colors"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-medium tracking-[0.1em] uppercase text-text-secondary mb-2"
          >
            Tell me a little about what you&rsquo;re looking for{" "}
            <span className="text-brand">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:border-brand transition-colors resize-y"
            placeholder="A few sentences about your goals, team, or brand."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 h-13 px-8 text-base font-medium bg-brand text-white rounded-sm hover:bg-brand-dark transition-colors duration-200"
        >
          Send Message
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}
