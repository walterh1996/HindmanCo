"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Betsy is, quite simply, the best consultant I\u2019ve met when it comes to LinkedIn strategy and posting. I came to her as an Oscar winning producer who thought I knew something about storytelling. Betsy reminded me that the way you tell your story online and the way you connect with the right audience is its own art form. What sets Betsy apart is not just her deep expertise in the mechanics of LinkedIn, but her passion for her clients. She cares less about vanity metrics and more about impact, helping leaders, creators, and companies translate their values and vision into posts that actually resonate.",
    author: "Michael Sugar",
    title: "Academy Award-Winning Producer & Founder",
    company: "Sugar23",
    image: "/images/testimonials/michael-sugar.jpg",
  },
  {
    quote:
      "Imagine someone says to you, \u201Csee that big rig over there? That 18-wheeler? Yeah, you gotta drive that mofo coast to coast in the next 72 hours and then parallel park it in between a Maserati and a Lamborghini.\u201D That is when you would want a Betsy Hindman in your life. She will show you how to handle that machine. She will get that LinkedIn account of yours purring like it\u2019s Zsa Zsa Gabor in a luxury Park Avenue apartment circa 1965. She is thorough and detail-oriented. She is patient and she is a pleasure to collaborate with. This is the kind of expertise the world needs to see more of. Five stars.",
    author: "Toby Barlow",
    title: "Co-Founder & CCO",
    company: "Lafayette American",
    image: "/images/testimonials/toby-barlow.webp",
  },
  {
    quote:
      "I learned everything I know about LinkedIn from Betsy Hindman. She gave me inspo to create a \u2018LinkedIn Guide\u2019 for my clients and I update it with the weekly advice she passes along. If the agency posts articles from off LinkedIn, reposts often, or has no featured posts \u2014 these are flags that demonstrate not truly understanding the platform. Book a consultation with her and it will be the best thing you do!",
    author: "Lindsey Slaby",
    title: "Founder, Marketing Strategy & Organizational Design",
    company: "Sunday Dinner",
    image: "/images/testimonials/lindsey-slaby.jpg",
  },
  {
    quote:
      "Betsy is the go-to for executives who want to strengthen their presence and thought leadership on LinkedIn. She has a clear line of sight to the latest platform updates and a strong point of view on how to use them strategically for executive visibility. She delivered practical, actionable tips that attendees could put to work right away. I\u2019d recommend Betsy without hesitation!",
    author: "Rachel Huff",
    title: "President & Founder",
    company: "Victoire & Co",
    image: "/images/testimonials/rachel-huff.webp",
  },
  {
    quote:
      "Betsy Hindman is an idea dynamo. Whether developing high-level strategy or tactical deployments, Betsy delivers with insights informed by experience, know-how and powerful intuition. She is a highly effective sales trainer and delivers ninja skills in social media amplification, content creation, and website design. Investment in her services provided me an immediate ROI.",
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
  },
  {
    quote:
      "We hired Betsy to help us use LinkedIn to promote the launch of our new product, Lexio. Based on her knowledge of the B2B space, she helped us roll out highly successful LinkedIn advertising campaigns to a targeted CIO and CTO audience. I felt Betsy\u2019s enterprise-level sales experience was helpful in guiding our approach, and I would recommend her to anyone considering this very effective marketing tool.",
    author: "Stuart Frankel",
    title: "CEO",
    company: "Narrative Science",
    image: "/images/testimonials/stuart-frankel.jpg",
  },
  {
    quote:
      "Betsy\u2019s tips were amazing. Within 72 hours, I immediately saw an increase in engagement with my post and was even quoted on several sites. I highly recommend you to cast away your biases on LinkedIn and listen to her. She will not only help you improve your marketing but how you position yourself as an influential leader.",
    author: "Kenny Nguyen",
    title: "CEO & Co-Founder",
    company: "ThreeSixtyEight \u2022 Forbes 30 Under 30",
    image: "/images/testimonials/kenny-nguyen.jpg",
  },
  {
    quote:
      "Noble People has been leaning into thought leadership initiatives this year and Betsy helped us far beyond the tactical hacks and tips for LinkedIn publishing. She infused our content strategy with new thinking by giving us solid marketplace insights into B2B communications and what resonates overall. Time well spent by the Noble team.",
    author: "Tom Morrissy",
    title: "Chief Growth Officer",
    company: "Noble People",
    image: "/images/testimonials/tom-morrissy.jpg",
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
    const timer = setInterval(next, 8000);
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
        <div className="text-center mb-10 min-h-[260px] md:min-h-[200px] flex flex-col justify-center">
          <Quote
            size={28}
            className="text-brand/25 mx-auto mb-6"
            strokeWidth={1.5}
          />
          <blockquote
            key={current}
            className="font-serif italic text-lg md:text-xl lg:text-2xl leading-[1.4] text-foreground animate-fade-in"
          >
            &ldquo;{t.quote}&rdquo;
          </blockquote>
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
                    ? "w-6 bg-brand"
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
