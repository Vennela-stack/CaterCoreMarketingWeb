"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * HERO — editorial layered canvas.
 *
 * NOT a column-based marketing hero. Every element is placed absolutely so the
 * composition matches the reference image. The dominant element is the
 * massive left-aligned headline; the cards, labels, arcs, and rules are
 * arranged asymmetrically around it.
 *
 * Background stack (back → front):
 *   1. paper canvas (#F5F3EE)            — section bg
 *   2. architectural arcs (SVG)          — atmospheric depth on the right
 *   3. film grain overlay                — subtle texture
 *   4. composition layer (text, cards)
 *
 * No scroll-jacking, no parallax, no entry animations beyond a gentle float on
 * the floating cards.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#F5F3EE]"
    >
      {/* 1. Hero background system — 3 huge architectural arcs (CSS, not SVG)
          positioned off-canvas + 4 tiny red signal dots. Sits at z-0; all
          content above stacks on top naturally. */}
      <div className="hero-bg-system">
        <div className="arc arc-1" />
        <div className="arc arc-2" />
        <div className="arc arc-3" />
        <span className="signal-dot dot-1" />
        <span className="signal-dot dot-2" />
        <span className="signal-dot dot-3" />
        <span className="signal-dot dot-4" />
      </div>

      {/* 2. Grain texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain-overlay"
      />


      {/* 5. Top eyebrow — "— An operating system for modern caterers" */}
      <div className="absolute left-[7vw] top-[17vh]">
        <div className="flex items-center gap-3">
          <span aria-hidden className="block h-px w-5 bg-ember-400" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-ember-400">
            An operating system for modern caterers
          </span>
        </div>
      </div>

      {/* 6. HEADLINE — final polish: weight dropped to medium for elegance,
          ~5% smaller, slightly more line breathing. Anti-aliased via the
          base body classes (subpixel + optimized rendering). */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "absolute left-[7vw] top-[24vh]",
          "font-display uppercase",
          "tracking-[-0.04em] leading-[0.95]",
          "text-ink-50 font-medium",
          "[font-feature-settings:'ss01','cv11']",
          "text-[36px] sm:text-[52px] md:text-[72px] lg:text-[88px] xl:text-[100px]",
        )}
      >
        <span className="block">From inquiry</span>
        <span className="block">
          to invoice<span className="text-ember-400">.</span>
        </span>
      </motion.h1>

      {/* 7. Red rule + first paragraph — narrower and lower so the headline
          floats above its own pocket of whitespace. Slightly more leading and
          a touch more vertical separation from the headline. */}
      <div className="absolute left-[7vw] top-[65vh] max-w-[360px]">
        <span aria-hidden className="block h-[2px] w-[52px] bg-ember-400" />
        <p className="mt-7 text-[14px] leading-[1.85] text-ink-200">
          From the first client inquiry to the final invoice, CaterCore keeps
          your entire catering operation organized, automated, and moving
          without chaos.
        </p>
      </div>

      {/* 8. Second red rule + second paragraph */}
      <div className="absolute left-[7vw] top-[84vh] hidden max-w-[360px] md:block">
        <span aria-hidden className="block h-[2px] w-[30px] bg-ember-400" />
        <p className="mt-5 text-[14px] leading-[1.85] text-ink-200">
          One platform for quotes, contracts, menus, staffing, and operations.
        </p>
      </div>

      {/* 9. Floating cards — placement is deliberately uneven; each card sits
          at a slightly different inset distance so the rhythm reads as
          accidental rather than grid-aligned. */}
      <FloatingCard
        className="absolute top-[23vh] right-[7vw] w-[260px] z-20"
        floatDelay="0s"
        icon={<MailIcon />}
        title="New inquiry received"
        meta="Hartford Gala · 320 guests"
        timeAgo="2m ago"
      />
      <FloatingCard
        className="absolute top-[50vh] right-[4vw] w-[268px] z-20"
        floatDelay="1.4s"
        icon={<DocIcon />}
        title="Contract signed"
        meta="Avalon Conference"
        sub="$42,000"
        timeAgo="8m ago"
      />
      <FloatingCard
        className="absolute top-[69vh] left-[46vw] w-[252px] z-20 hidden md:block"
        floatDelay="2.6s"
        icon={<CheckIcon />}
        title="Kitchen prep updated"
        meta="Smith Engagement"
        timeAgo="18m ago"
      />

      {/* 10. Step number labels — 01 / 02 / 03 */}
      <StepLabel
        className="absolute top-[33vh] left-[70vw] hidden md:block"
        n="01"
        label="Inquiry"
      />
      <StepLabel
        className="absolute top-[72vh] right-[12vw] hidden md:block"
        n="02"
        label="Contract"
      />
      <StepLabel
        className="absolute top-[81vh] left-[50vw] hidden md:block"
        n="03"
        label="Operations"
      />

      {/* 11. Bottom centered label — sits in the transition between the hero
          and the How-it-works section. Monochrome hairlines (no red), just
          a quiet black/cream rule on either side of the label. */}
      <div className="absolute bottom-[3.5vh] left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          <span aria-hidden className="block h-px w-16 bg-ink-50/35" />
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.32em] text-ink-300">
            Built for catering operations
          </span>
          <span aria-hidden className="block h-px w-16 bg-ink-50/35" />
        </div>
      </div>

      {/* 12. Bottom-left crosshair */}
      <span
        aria-hidden
        className="crosshair absolute bottom-[4vh] left-[2vw] hidden md:block"
      />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Floating card                                                              */
/* -------------------------------------------------------------------------- */

function FloatingCard({
  className,
  icon,
  title,
  meta,
  sub,
  timeAgo,
  floatDelay = "0s",
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  meta: string;
  sub?: string;
  timeAgo: string;
  floatDelay?: string;
}) {
  return (
    <div
      className={cn(
        // even more atmospheric: less surface, fainter hairline, larger blur
        "rounded-2xl border border-[rgba(13,14,17,0.025)] bg-white/55",
        "px-4 py-3.5",
        // ultra-soft drop, no hard lift edge
        "shadow-[0_26px_52px_-34px_rgba(13,14,17,0.18),0_8px_18px_-16px_rgba(13,14,17,0.06)]",
        "backdrop-blur-lg",
        "animate-float-y",
        className,
      )}
      style={{ animationDelay: floatDelay }}
    >
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ember-400 text-white shadow-[0_8px_18px_-10px_rgba(193,18,31,0.45)]">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[13.5px] font-semibold tracking-tight text-ink-50">
            {title}
          </div>
          <div className="mt-0.5 truncate text-[12px] text-ink-300">
            {meta}
          </div>
          {sub && (
            <div className="mt-0.5 truncate text-[12px] font-medium text-ink-100">
              {sub}
            </div>
          )}
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-ink-400">
            {timeAgo}
            <span aria-hidden className="ml-auto h-1.5 w-1.5 rounded-full bg-ember-400/85" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Step label "01 / Inquiry"                                                  */
/* -------------------------------------------------------------------------- */

function StepLabel({
  className,
  n,
  label,
}: {
  className?: string;
  n: string;
  label: string;
}) {
  return (
    <div className={className} aria-hidden>
      <div className="text-[11px] font-semibold tracking-[0.04em] text-ember-400">
        {n}
      </div>
      <div className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.32em] text-ink-400">
        {label}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Icons                                                                      */
/* -------------------------------------------------------------------------- */

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4" width="11" height="8" rx="1.5" />
      <path d="M3 5l5 4 5-4" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2.5h6l3 3v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1z" />
      <path d="M10 2.5v3h3" />
      <path d="M5.5 9h5M5.5 11.5h3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6" />
      <path d="M5.5 8.5l2 2 3.5-4" />
    </svg>
  );
}
