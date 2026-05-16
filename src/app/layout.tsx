import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hindmancompany.com"),
  title: {
    default: "Hindman Company — LinkedIn Growth & Thought Leadership",
    template: "%s | Hindman Company",
  },
  description:
    "A boutique strategic advisory for executives, brand leaders, and innovators who want LinkedIn to do real work. LinkedIn growth strategy, executive thought leadership, and B2B campaigns.",
  keywords: [
    "LinkedIn growth",
    "thought leadership",
    "executive branding",
    "B2B LinkedIn",
    "LinkedIn strategy",
    "Betsy Hindman",
    "Hindman Company",
    "LinkedIn agency",
    "Nashville",
  ],
  authors: [{ name: "Betsy Hindman" }],
  creator: "Hindman Company",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hindmancompany.com",
    siteName: "Hindman Company",
    title: "Hindman Company — LinkedIn Growth & Thought Leadership",
    description:
      "A boutique strategic advisory for executives, brand leaders, and innovators who want LinkedIn to do real work.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hindman Company — LinkedIn Growth & Thought Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hindman Company — LinkedIn Growth & Thought Leadership",
    description:
      "A boutique strategic advisory for executives, brand leaders, and innovators who want LinkedIn to do real work.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hindman Company",
  url: "https://hindmancompany.com",
  logo: "https://hindmancompany.com/logo.png",
  description:
    "A boutique LinkedIn growth and thought leadership advisory for executives, enterprise brands, and high-profile personal brands.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nashville",
    addressRegion: "TN",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Betsy Hindman",
    jobTitle: "Founder & CEO",
    url: "https://www.linkedin.com/in/betsyhindman/",
  },
  sameAs: ["https://www.linkedin.com/in/betsyhindman/"],
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Betsy Hindman",
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    name: "Hindman Company",
  },
  url: "https://hindmancompany.com/about",
  sameAs: ["https://www.linkedin.com/in/betsyhindman/"],
  knowsAbout: [
    "LinkedIn Marketing",
    "Thought Leadership",
    "Executive Branding",
    "B2B Marketing",
    "Content Strategy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPerson),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
