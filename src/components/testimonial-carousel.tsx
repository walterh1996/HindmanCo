"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Betsy is, quite simply, the best consultant I\u2019ve met when it comes to LinkedIn strategy and posting. I came to her as an Oscar winning producer who thought I knew something about storytelling. Betsy reminded me that the way you tell your story online and the way you connect with the right audience is its own art form.",
    author: "Michael Sugar",
    title: "Academy Award-Winning Producer & Founder",
    company: "Sugar23",
    image: "/images/testimonials/michael-sugar.jpg",
    initials: "MS",
  },
  {
    quote:
      "Imagine someone says to you, \u201Csee that big rig over there? That 18-wheeler? Yeah, you gotta drive that mofo coast to coast in the next 72 hours.\u201D That is when you would want a Betsy Hindman in your life. She will get that LinkedIn account of yours purring like it\u2019s Zsa Zsa Gabor in a luxury Park Avenue apartment circa 1965. Five stars.",
    author: "Toby Barlow",
    title: "Co-Founder & CCO",
    company: "Lafayette American",
    image: "/images/testimonials/toby-barlow.webp",
    initials: "TB",
  },
  {
    quote:
      "I learned everything I know about LinkedIn from Betsy Hindman. She gave me inspo to create a \u2018LinkedIn Guide\u2019 for my clients and I update it with the weekly advice she passes along. Book a consultation with her and it will be the best thing you do!",
    author: "Lindsey Slaby",
    title: "Founder, Marketing Strategy",
    company: "Sunday Dinner",
    image: "/images/testimonials/lindsey-slaby.jpg",
    initials: "LS",
  },
  {
    quote:
      "Betsy is the go-to for executives who want to strengthen their presence and thought leadership on LinkedIn. She delivered practical, actionable tips that attendees could put to work right away. I\u2019d recommend Betsy without hesitation!",
    author: "Rachel Huff",
    title: "President & Founder",
    company: "Victoire & Co",
    image: "/images/testimonials/rachel-huff.webp",
    initials: "RH",
  },
  {
    quote:
      "Betsy Hindman is an idea dynamo. Whether developing high-level strategy or tactical deployments, Betsy delivers with insights informed by experience, know-how and powerful intuition. Investment in her services provided me an immediate ROI.",
    author: "Hal Hassall",
    title: "VP Marketing",
    company: "Groups360",
    image: null,
    initials: "HH",
  },
  {
    quote:
      "Betsy is extremely knowledgeable and skilled at getting your content to reach a smart and targeted audience. She helped me and my team significantly magnify our message on LinkedIn.",
    author: "Senator Bill Frist, MD",
    title: "Former U.S. Senate Majority Leader",
    company: "LinkedIn Top 12 Voice",
    image: "/images/testimonials/bill-frist.jpg",
    initials: "BF",
  },
  {
    quote:
      "We hired Betsy to help us use LinkedIn to promote the launch of our new product. She helped us roll out highly successful LinkedIn advertising campaigns to a targeted CIO and CTO audience. I would recommend her to anyone considering this very effective marketing tool.",
    author: "Stuart Frankel",
    title: "CEO",
    company: "Narrative Science",
    image: "/images/testimonials/stuart-frankel.jpg",
    initials: "SF",
  },
  {
    quote:
      "Betsy\u2019s tips were amazing. Within 72 hours, I immediately saw an increase in engagement with my post and was even quoted on several sites. She will not only help you improve your marketing but how you position yourself as an influential leader.",
    author: "Kenny Nguyen",
    title: "CEO & Co-Founder",
    company: "ThreeSixtyEight \u2022 Forbes 30 Under 30",
    image: "/images/testimonials/kenny-nguyen.jpg",
    initials: "KN",
  },
  {
    quote:
      "Noble People has been leaning into thought leadership initiatives this year and Betsy helped us far beyond the tactical hacks and tips for LinkedIn publishing. She infused our content strategy with new thinking by giving us solid marketplace insights into B2B communications.",
    author: "Tom Morrissy",
    title: "Chief Growth Officer",
    company: "Noble People",
    image: "/images/testimonials/tom-morrissy.jpg",
    initials: "TM",
  },
  {
    quote:
      "Since our sales team has been working with Betsy, the engagement on their LinkedIn posts has increased threefold.",
    author: "Christine Batycki",
    title: "Global Marketing Communications",
    company: "Brooks Instrument",
    image: null,
    initials: "CB",
  },
];

function Avatar({
  testimonial,
  size,
  className = "",
}: {
  testimonial: (typeof testimonials)[0];
  size: number;
  className?: string;
}) {
  if (testimonial.image) {
    return (
      <div
        className={`relative rounded-full overflow-hidden shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={testimonial.image}
          alt={testimonial.author}
          fill
          className="object-cover"
          sizes={`${size}px`}
        />
      </div>
    );
  }
  return (
    <div
      className={`rounded-full bg-brand/10 flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        className="font-medium text-brand"
        style={{ fontSize: size * 0.3 }}
      >
        {testimonial.initials}
      </span>
    </div>
  );
}

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (index === current || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    const nextIdx = (current + 1) % testimonials.length;
    goTo(nextIdx);
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(next, 6000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isPaused, next, current]);

  const t = testimonials[current];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main testimonial display */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-center mb-14 md:mb-16">
        {/* Large headshot */}
        <div className="flex flex-col items-center lg:items-start">
          <div
            className={`transition-all duration-500 ease-out ${
              isTransitioning
                ? "opacity-0 scale-95"
                : "opacity-100 scale-100"
            }`}
          >
            <div className="relative">
              <Avatar testimonial={t} size={200} className="ring-4 ring-border shadow-xl" />
              <div className="absolute -inset-3 rounded-full border border-brand/15 pointer-events-none" />
            </div>
          </div>

          <div
            className={`mt-6 text-center lg:text-left transition-all duration-500 ease-out ${
              isTransitioning
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-base font-medium text-foreground">
              {t.author}
            </p>
            <p className="text-sm text-text-secondary mt-0.5">{t.title}</p>
            <p className="text-sm font-medium text-brand mt-0.5">
              {t.company}
            </p>
          </div>
        </div>

        {/* Quote */}
        <div
          className={`relative transition-all duration-500 ease-out ${
            isTransitioning
              ? "opacity-0 translate-x-4"
              : "opacity-100 translate-x-0"
          }`}
        >
          <Quote
            size={48}
            className="text-brand/10 mb-4 hidden lg:block"
            strokeWidth={1}
          />
          <blockquote className="font-serif italic text-xl md:text-2xl lg:text-[1.75rem] leading-[1.45] text-foreground">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-6 h-px w-16 bg-brand/30" />
        </div>
      </div>

      {/* Interactive face strip */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none lg:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none lg:hidden" />

        <div className="flex items-center justify-start lg:justify-center gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide px-2">
          {testimonials.map((person, i) => (
            <button
              key={person.author}
              onClick={() => goTo(i)}
              aria-label={`Read testimonial from ${person.author}`}
              className="group flex flex-col items-center gap-2 shrink-0 focus:outline-none"
            >
              <div
                className={`relative transition-all duration-300 ease-out ${
                  i === current
                    ? "scale-110 ring-[3px] ring-brand ring-offset-2 ring-offset-cream rounded-full"
                    : "opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 rounded-full"
                }`}
              >
                <Avatar testimonial={person} size={56} />
              </div>
              <span
                className={`text-[10px] font-medium tracking-wide transition-all duration-300 max-w-[64px] text-center leading-tight ${
                  i === current
                    ? "text-brand"
                    : "text-text-secondary/0 group-hover:text-text-secondary/70"
                }`}
              >
                {person.author.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-6 flex justify-center">
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 bg-brand"
                  : i < current
                    ? "w-2 bg-brand/30"
                    : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
