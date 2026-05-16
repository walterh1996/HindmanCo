"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/clients", label: "Clients" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-border">
      <nav className="container-narrow flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-[4px] overflow-hidden">
            <Image
              src="/images/hco-logo.webp"
              alt="Hindman Company"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <span className="hidden sm:block text-sm font-medium tracking-wide uppercase text-foreground">
            Hindman Company
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://calendly.com/betsyhindman"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center h-10 px-5 text-sm font-medium bg-brand text-white rounded-sm hover:bg-brand-dark transition-colors duration-200"
          >
            Book a Call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-cream border-b border-border"
          >
            <div className="container-narrow py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-text-secondary hover:text-foreground transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://calendly.com/betsyhindman"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center h-11 px-6 text-sm font-medium bg-brand text-white rounded-sm hover:bg-brand-dark transition-colors"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
