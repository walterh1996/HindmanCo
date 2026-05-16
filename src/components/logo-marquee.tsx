"use client";

import Image from "next/image";

const allClients = [
  { name: "Microsoft", logo: "/images/clients/microsoft.webp" },
  { name: "AT&T", logo: "/images/clients/att.webp" },
  { name: "Nasdaq", logo: "/images/clients/nasdaq.webp" },
  { name: "YouTube", logo: "/images/clients/youtube.webp" },
  { name: "Edelman", logo: "/images/clients/edelman.webp" },
  { name: "MullenLowe", logo: "/images/clients/mullenlowe.webp" },
  { name: "Brooks Instrument", logo: "/images/clients/brooks.webp" },
  { name: "Help Scout", logo: "/images/clients/helpscout.webp" },
  { name: "Black Kite", logo: "/images/clients/black-kite.webp" },
  { name: "Match", logo: "/images/clients/match.webp" },
  { name: "Groups360", logo: "/images/clients/groups360.webp" },
  { name: "August", logo: "/images/clients/august.webp" },
  { name: "Mythology", logo: "/images/clients/mythology.webp" },
  { name: "Yard", logo: "/images/clients/yard.webp" },
  { name: "NBZ", logo: "/images/clients/nbz.webp" },
  { name: "Narrative Science", logo: "/images/clients/narrative-science.webp" },
  { name: "Evalla Advisors", logo: "/images/clients/evalla.webp" },
  { name: "ESL", logo: "/images/clients/esl.webp" },
  { name: "ZS", logo: "/images/clients/zs.webp" },
  { name: "Rosie Red", logo: "/images/clients/rosie-red.webp" },
  { name: "Sprout House", logo: "/images/clients/sprouthouse.webp" },
  { name: "HHC", logo: "/images/clients/hhc.webp" },
  { name: "Zippay", logo: "/images/clients/zippay.webp" },
];

export function LogoMarquee() {
  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        {[...allClients, ...allClients].map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex-shrink-0 mx-6 md:mx-8"
          >
            <div className="relative h-8 w-24 md:h-9 md:w-28 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
                sizes="120px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
