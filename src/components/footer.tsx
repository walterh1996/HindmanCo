import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/clients", label: "Clients" },
  { href: "/press", label: "Press" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-cream">
      <div className="container-narrow py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-[4px] overflow-hidden">
                <Image
                  src="/images/hco-logo.webp"
                  alt="Hindman Company"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="text-sm font-medium tracking-wide uppercase text-cream/80">
                Hindman Company
              </span>
            </div>
            <p className="text-sm text-cream/60 leading-relaxed max-w-xs">
              A boutique LinkedIn growth and thought leadership advisory for
              executives, enterprise brands, and high-profile personal brands.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-cream/40 mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-cream/40 mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:betsy@hindmancompany.com"
                className="text-sm text-cream/70 hover:text-cream transition-colors duration-200 flex items-center gap-2"
              >
                <Mail size={14} />
                betsy@hindmancompany.com
              </a>
              <a
                href="https://www.linkedin.com/in/betsyhindman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 hover:text-cream transition-colors duration-200 flex items-center gap-2"
              >
                <LinkedInIcon size={14} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Hindman Company. Based in
            Nashville, TN.
          </p>
          <p className="text-xs text-cream/40">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
