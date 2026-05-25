"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";

const NAV_LINKS = [
  { label: "Product", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "transition-[background-color,backdrop-filter,border-color] duration-300 ease-out",
        scrolled
          ? "border-b border-[#D9D5CF]/40 bg-white/80 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-14 items-center justify-between gap-6">
        <a href="#" className="focus-ring rounded-md" aria-label="CaterCore home">
          <Logo className="text-ink-100" />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-md px-1.5 py-1 text-[13px] font-normal tracking-tight text-[#4A5260] hover:text-[#0B0D10]",
                "transition-colors duration-150",
                "focus-ring",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
