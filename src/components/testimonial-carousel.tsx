"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Betsy is, quite simply, the best consultant I\u2019ve met when it comes to LinkedIn strategy and posting. I came to her as an Oscar winning producer who thought I knew something about storytelling. Betsy reminded me that the way you tell your story online and the way you connect with the right audience is its own art form.",
    extended:
      "What sets Betsy apart is not just her deep expertise in the mechanics of LinkedIn, but her passion for her clients. She cares less about vanity metrics and more about impact, helping leaders, creators, and companies translate their values and vision into posts that actually resonate. She is also an incredible connector of people.",
    author: "Michael Sugar",
    title: "Academy Award-Winning Producer & Founder",
    company: "Sugar23",
    image: "/images/testimonials/michael-sugar.jpg",
    initials: "MS",
  },
  {
    quote:
      "Betsy is the go-to for executives who want to strengthen their presence and thought leadership on LinkedIn. She has a clear line of sight to the latest platform updates and a strong point of view on how to use them strategically for executive visibility.",
    extended:
      "Betsy recently spoke at an event I hosted for in-house communications and marketing leaders, and one hour with her wasn\u2019t nearly enough. She delivered practical, actionable tips that attendees could put to work right away. Whether you\u2019re serious about LinkedIn or just trying to make sense of it all, I\u2019d recommend Betsy without hesitation!",
    author: "Rachel Huff",
    title: "President & Founder",
    company: "Victoire & Co",
    image: "/images/testimonials/rachel-huff.webp",
    initials: "RH",
  },
  {
    quote:
      "Since our sales team has been working with Betsy, the engagement on their LinkedIn posts has increased threefold.",
    extended: null,
    author: "Christine Batycki",
    title: "Global Marketing Communications",
    company: "Brooks Instrument",
    image: null,
    initials: "CB",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const t = testimonials[current];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto">
        {/* Quote */}
        <div className="text-center mb-10 min-h-[280px] md:min-h-[220px] flex flex-col justify-center">
          <Quote
            size={28}
            className="text-brand/25 mx-auto mb-6"
            strokeWidth={1.5}
          />
          <blockquote className="font-serif italic text-xl md:text-2xl lg:text-3xl leading-[1.35] text-foreground mb-4 transition-opacity duration-500">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          {t.extended && (
            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-3xl mx-auto mt-4">
              &ldquo;{t.extended}&rdquo;
            </p>
          )}
        </div>

        {/* Author */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {t.image ? (
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-border shrink-0">
              <Image
                src={t.image}
                alt={t.author}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-full bg-brand/10 border-2 border-border flex items-center justify-center shrink-0">
              <span className="text-sm font-medium text-brand">
                {t.initials}
              </span>
            </div>
          )}
          <div className="text-left">
            <p className="text-sm font-medium text-foreground">{t.author}</p>
            <p className="text-xs text-text-secondary">{t.title}</p>
            <p className="text-xs font-medium text-brand">{t.company}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-2 text-text-secondary hover:text-foreground transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-brand"
                    : "w-1.5 bg-border hover:bg-text-secondary"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-2 text-text-secondary hover:text-foreground transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
