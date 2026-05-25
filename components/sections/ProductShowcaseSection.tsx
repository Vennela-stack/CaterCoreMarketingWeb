"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Section } from "@/components/layout/Section";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { easeOutExpo, viewportOnce } from "@/lib/motion";

/**
 * Product showcase — sits between the hero ("Built for catering operations")
 * and the How-it-works section. A dark dashboard mockup floating on the
 * paper canvas, with two operational overlay cards that partially escape
 * the dashboard frame (matches the reference screenshot exactly).
 *
 * The dashboard itself stays dark (hardcoded dark hex inside DashboardMockup)
 * so it reads as a real product screenshot embedded in the light page —
 * same pattern as Stripe / Linear / Flashback Labs.
 */
export function ProductShowcaseSection() {
  return (
    <Section id="product" padding="tight" innerClassName="relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease: easeOutExpo }}
        className="relative mx-auto w-full max-w-[1180px]"
      >
        {/* Soft red glow behind dashboard */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 -top-10 -bottom-10 rounded-[32px] opacity-70"
          style={{
            background:
              "radial-gradient(55% 65% at 50% 20%, rgba(193,18,31,0.10) 0%, rgba(193,18,31,0) 70%)",
          }}
        />

        <div className="relative">
          {/* Floating UI cards — overlaid asymmetrically, partially escaping
              the dashboard frame so it feels embedded into the page. */}
          <FloatingInquiryCard
            className={cn(
              "hidden md:block absolute z-20",
              "-left-6 lg:-left-14 top-12 w-[260px]",
              "animate-float-y",
            )}
          />
          <FloatingContractCard
            className={cn(
              "hidden md:block absolute z-20",
              "-right-6 lg:-right-14 top-32 w-[300px]",
              "animate-float-y [animation-delay:1.6s]",
            )}
          />

          {/* The dashboard itself — stays dark on the cream page */}
          <DashboardMockup className="relative z-0" />
        </div>
      </motion.div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Floating overlay cards                                                     */
/* -------------------------------------------------------------------------- */

function FloatingInquiryCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[rgba(13,14,17,0.06)] bg-white",
        "p-4 shadow-[0_24px_48px_-24px_rgba(13,14,17,0.20),0_8px_18px_-14px_rgba(13,14,17,0.10)]",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F1115] text-white">
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2.5" y="4" width="11" height="8" rx="1.5" />
            <path d="M3 5l5 4 5-4" />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold tracking-tight text-ink-50">
            New inquiry captured
          </div>
          <div className="mt-0.5 text-[11px] text-ink-400">
            via website form · 7s ago
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-lg border border-[rgba(13,14,17,0.06)] bg-[#F5F3EE] p-2.5">
        <div className="text-[11px] font-medium text-ink-100">
          Hartford Gala · Jun 4
        </div>
        <div className="mt-0.5 text-[11px] leading-snug text-ink-300">
          320 guests · plated dinner · open bar
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-ink-300">
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full bg-ember-400 animate-pulse-glow"
        />
        AI Agent drafting quote…
      </div>
    </div>
  );
}

function FloatingContractCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[rgba(13,14,17,0.06)] bg-white",
        "p-4 shadow-[0_24px_48px_-24px_rgba(13,14,17,0.20),0_8px_18px_-14px_rgba(13,14,17,0.10)]",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0F1115] text-white">
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 8.5l3 3 5.5-7" />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold tracking-tight text-ink-50">
            Contract signed
          </div>
          <div className="mt-0.5 text-[11px] text-ink-400">
            Avalon Conf · $42,000
          </div>
        </div>
        <span className="rounded-md border border-[rgba(46,139,87,0.25)] bg-[rgba(46,139,87,0.10)] px-1.5 py-0.5 text-[10px] font-medium text-[#2E8B57]">
          DocuSign
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Quote", "Menu", "Pay"].map((label) => (
          <div
            key={label}
            className="rounded-lg border border-[rgba(13,14,17,0.06)] bg-[#F5F3EE] px-2 py-1.5"
          >
            <div className="text-[9.5px] font-medium uppercase tracking-[0.16em] text-ink-300">
              {label}
            </div>
            <div className="mt-0.5 text-[12px] font-semibold text-ink-50">✓</div>
          </div>
        ))}
      </div>
    </div>
  );
}
