"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import {
  containerStagger,
  fadeUp,
  viewportOnce,
  easeOutExpo,
} from "@/lib/motion";

const STEPS = [
  {
    n: "01",
    title: "Capture inquiries",
    body:
      "Embed the public inquiry form on our site or let the AI agent chat with clients. CaterCore pulls every detail — event type, date, headcount, dietary — and creates a draft event automatically.",
    preview: <InquiryPreview />,
  },
  {
    n: "02",
    title: "Build the quote",
    body:
      "Drag in menu items, pick a service style, set guest count. Pricing recalculates live across food, staffing, travel, tax, and gratuity. Allergen warnings flag conflicts before they reach the client",
    preview: <QuotePreview />,
  },
  {
    n: "03",
    title: "Get it signed",
    body:
      "One click sends the contract via e-signature. Approval, signing, and PDF live in the same place. Change orders generate a new version automatically.",
    preview: <ContractPreview />,
  },
  {
    n: "04",
    title: "Deliver flawlessly",
    body:
      "Your kitchen sees prep notes. Your event staff sees floor plans and timing. Your client sees status updates. Everyone on the same event, no more email chains.",
    preview: <EventPreview />,
  },
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" padding="default" className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={containerStagger}
        className="max-w-2xl"
      >
        <motion.div variants={fadeUp}>
          <Badge tone="ember">How it works</Badge>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-display mt-5 text-[34px] leading-[1.08] md:text-[46px]"
        >
          One workflow, end to end.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-300"
        >
          From the first inquiry to the final invoice — every step in CaterCore
          is connected. No duplicate data entry, no dropped handoffs.
        </motion.p>
      </motion.div>

      <div className="relative mt-16 md:mt-20">
        {/* Vertical connector */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[26px] top-2 bottom-2 hidden md:block"
        >
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[rgba(11,13,16,0.10)] to-transparent" />
        </div>

        <ol className="space-y-10 md:space-y-14">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.6,
                ease: easeOutExpo,
                delay: i * 0.08,
              }}
              className="relative grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10"
            >
              {/* Step indicator */}
              <div className="md:col-span-1 flex md:block items-center gap-3">
                <div className="relative grid h-[54px] w-[54px] place-items-center rounded-xl border border-[rgba(11,13,16,0.13)] bg-ink-100/80 backdrop-blur-sm">
                  <span className="font-display text-[15px] font-semibold tracking-tight text-ink-500">
                    {s.n}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-0 rounded-xl",
                      "ring-1 ring-inset ring-ink-400/10",
                    )}
                  />
                  {/* dot on connector */}
                  <span
                    aria-hidden
                    className="absolute -bottom-2.5 left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-ink-300/70 md:block"
                  />
                </div>
                <div className="md:hidden text-[15px] font-semibold tracking-tight text-ink-50">
                  {s.title}
                </div>
              </div>

              {/* Copy */}
              <div className="md:col-span-4">
                <h3 className="hidden md:block text-[20px] font-semibold tracking-tight text-ink-50">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-300">
                  {s.body}
                </p>
              </div>

              {/* Preview */}
              <div className="md:col-span-7">
                <div className="group rounded-3xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-3 transition-colors duration-200 hover:border-[rgba(11,13,16,0.18)]">
                  {s.preview}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ----------------------------- Step previews ------------------------------ */

function InquiryPreview() {
  return (
    <div className="rounded-xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-4">
      <div className="flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Inquiry inbox</div>
        <span className="rounded-md border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3]/95 px-1.5 py-0.5 text-[10.5px] text-ink-300">
          Today · 4 new
        </span>
      </div>
      <ul className="mt-3 divide-y divide-[rgba(11,13,16,0.07)]">
        {[
          { name: "Hartford Gala",      meta: "Jun 04 · 320 guests · Corporate", source: "Website", tone: "ember" },
          { name: "Renwick Wedding",    meta: "May 18 · 140 guests · Wedding",   source: "Referral", tone: "azure" },
          { name: "Linden Birthday",    meta: "Jun 15 · 60 guests · Private",    source: "Instagram", tone: "sage" },
        ].map((row) => (
          <li key={row.name} className="flex items-center gap-3 py-2.5 text-[12.5px]">
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                row.tone === "ember" && "bg-ink-300",
                row.tone === "azure" && "bg-azure-400",
                row.tone === "sage"  && "bg-sage-400",
              )}
            />
            <div className="min-w-0 flex-1">
              <div className="truncate text-ink-50">{row.name}</div>
              <div className="truncate text-[11px] text-ink-400">{row.meta}</div>
            </div>
            <span className="rounded-md border border-[rgba(11,13,16,0.09)] bg-[rgba(11,13,16,0.03)] px-1.5 py-0.5 text-[10.5px] text-ink-300">
              {row.source}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuotePreview() {
  return (
    <div className="rounded-xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Quote builder</div>
          <div className="mt-0.5 text-[13.5px] font-medium text-ink-50">Hartford Gala · 320 guests</div>
        </div>
        <div className="text-right">
          <div className="text-[10.5px] text-ink-400">Estimated</div>
          <div className="text-[14px] font-semibold text-ink-400">$24,180</div>
        </div>
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          { l: "Plated dinner · 3 course",    p: "$58 × 320", t: "$18,560" },
          { l: "Full bar service · 4 hrs",    p: "$12 × 320", t: "$3,840" },
          { l: "Front of house · 8 staff",    p: "$45 × 16h", t: "$720"   },
          { l: "Linens & rentals",            p: "package",   t: "$1,060" },
        ].map((row) => (
          <div
            key={row.l}
            className="flex items-center justify-between rounded-md border border-[rgba(11,13,16,0.07)] bg-[#F6F6F3]/95 px-2.5 py-2 text-[12px]"
          >
            <div className="text-ink-100">{row.l}</div>
            <div className="flex items-center gap-3 text-ink-400">
              <span className="text-[11px]">{row.p}</span>
              <span className="w-16 text-right text-ink-100">{row.t}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-[rgba(11,13,16,0.09)] pt-2.5">
        <div className="text-[11px] text-ink-400">Margin <span className="text-sage-400 font-medium">32%</span></div>
        <div className="flex items-center gap-1.5 text-[10.5px] text-ink-400">
          <span className="h-1.5 w-1.5 rounded-full bg-ink-300" /> Inventory-aware
        </div>
      </div>
    </div>
  );
}

function ContractPreview() {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-7 rounded-xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-4">
        <div className="flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Proposal</div>
          <span className="rounded-md border border-sage-500/20 bg-sage-500/10 px-1.5 py-0.5 text-[10.5px] text-sage-400">
            Signed
          </span>
        </div>
        <div className="mt-3 space-y-2">
          {[
            "Event scope & menu",
            "Pricing & deposit terms",
            "Cancellation policy",
            "Signature & payment",
          ].map((l, i) => (
            <div key={l} className="flex items-center gap-2.5 text-[12px]">
              <span
                className={cn(
                  "grid h-4 w-4 place-items-center rounded-full border",
                  "border-sage-500/30 bg-sage-500/15 text-sage-400",
                )}
              >
                <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.5 8.5l3 3 6-7" />
                </svg>
              </span>
              <span className="text-ink-100">{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-5 rounded-xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-4">
        <div className="text-[11px] uppercase tracking-[0.16em] text-ink-400">E-signature</div>
        <div className="mt-3 rounded-md border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3]/95 p-3">
          <div className="font-display text-[20px] text-ink-400 tracking-tight italic">
            M. Renwick
          </div>
          <div className="mt-1 text-[10.5px] text-ink-400">Signed May 12 · 10:42 AM</div>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-md border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3]/95 px-2.5 py-2">
          <div className="text-[11.5px] text-ink-100">Deposit · $7,254</div>
          <span className="rounded-md bg-[#F6F6F3]/90 px-1.5 py-0.5 text-[10px] font-medium text-ink-400">
            Paid
          </span>
        </div>
      </div>
    </div>
  );
}

function EventPreview() {
  const hours = ["3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p"];
  return (
    <div className="rounded-xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-4">
      <div className="flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Event sheet · Avalon Conf</div>
        <span className="rounded-md border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3]/95 px-1.5 py-0.5 text-[10.5px] text-ink-300">
          Jun 12 · 600 guests
        </span>
      </div>

      <div className="mt-3 grid grid-cols-8 gap-1 text-[10px] text-ink-500">
        {hours.map((h) => (
          <div key={h} className="text-center">{h}</div>
        ))}
      </div>

      <div className="mt-1 space-y-1.5">
        {[
          { name: "Kitchen",       span: [0, 5], tone: "ember", label: "Prep & service" },
          { name: "FOH service",   span: [2, 7], tone: "azure", label: "Plated dinner" },
          { name: "Bar team",      span: [3, 8], tone: "sage",  label: "Open bar" },
          { name: "Breakdown",     span: [6, 8], tone: "ember", label: "Pack out" },
        ].map((row) => (
          <div key={row.name} className="grid grid-cols-8 items-center gap-1">
            <div className="col-span-8 text-[10.5px] text-ink-400">{row.name}</div>
            <div className="col-span-8 grid grid-cols-8 gap-1">
              {Array.from({ length: 8 }).map((_, i) => {
                const inSpan = i >= row.span[0] && i < row.span[1];
                return (
                  <div
                    key={i}
                    className={cn(
                      "h-2.5 rounded-sm",
                      inSpan
                        ? row.tone === "ember"
                          ? "bg-gradient-to-r from-ink-300/70 to-ink-400/80"
                          : row.tone === "azure"
                          ? "bg-gradient-to-r from-azure-500/60 to-azure-400/80"
                          : "bg-gradient-to-r from-sage-500/60 to-sage-400/80"
                        : "bg-[rgba(11,13,16,0.04)]",
                    )}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-ink-400">
        <span>Updated 8m ago · synced from signed contract</span>
        <span className="flex items-center gap-1.5 text-sage-400">
          <span className="h-1.5 w-1.5 rounded-full bg-sage-400" /> Live
        </span>
      </div>
    </div>
  );
}
