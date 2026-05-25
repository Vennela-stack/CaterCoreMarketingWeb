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

const TESTIMONIALS = [
  {
    quote:
      "We replaced four tools the week we switched. Sales reps quote three times faster and our kitchen finally trusts the numbers.",
    name: "Maya Hartford",
    role: "Director of Sales",
    company: "Hartford & Co. Catering",
    initials: "MH",
    tone: "ember" as const,
  },
  {
    quote:
      "The AI inquiry agent alone paid for the platform. We respond to every lead inside 4 minutes, even on Sundays.",
    name: "James Linden",
    role: "Founder & CEO",
    company: "Linden Hall Events",
    initials: "JL",
    tone: "azure" as const,
  },
  {
    quote:
      "Going from spreadsheets to CaterCore gave us back our weekends. The operations side is finally as polished as our food.",
    name: "Sophia Avalon",
    role: "Head of Operations",
    company: "Avalon Group",
    initials: "SA",
    tone: "sage" as const,
  },
  {
    quote:
      "Audit log, role-based access, and signature workflows ticked every box our enterprise clients required.",
    name: "Daniel Beaumont",
    role: "VP, Catering Services",
    company: "Beaumont Foundation",
    initials: "DB",
    tone: "ember" as const,
  },
  {
    quote:
      "Recurring events used to mean a Monday morning of copy-paste. Now it’s set once and forget — with full visibility.",
    name: "Renata Cole",
    role: "Operations Manager",
    company: "Northbrook Co.",
    initials: "RC",
    tone: "azure" as const,
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" padding="default" className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={containerStagger}
        className="max-w-2xl"
      >
        <motion.div variants={fadeUp}>
          <Badge tone="ember">Testimonials</Badge>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-display mt-5 text-[34px] leading-[1.08] md:text-[46px]"
        >
          Teams running serious catering, run on CaterCore.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-300"
        >
          From boutique studios to multi-venue operations, our customers trust
          CaterCore to keep their events — and margins — on track.
        </motion.p>
      </motion.div>

      {/* Quote grid */}
      <div className="mt-14 md:mt-16 grid grid-cols-1 gap-4 md:grid-cols-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: easeOutExpo, delay: i * 0.06 }}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-2xl",
              "border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3]",
              "p-6 md:p-7",
              "transition-[border-color,transform] duration-300 ease-out",
              "hover:-translate-y-[1px] hover:border-[rgba(11,13,16,0.18)]",
              // First card is wider on desktop
              i === 0 ? "md:col-span-3" : "md:col-span-3",
              i === 1 ? "md:col-span-3" : "",
              i === 2 ? "md:col-span-2" : "",
              i === 3 ? "md:col-span-2" : "",
              i === 4 ? "md:col-span-2" : "",
            )}
          >
            <QuoteMark className="mb-4 h-5 w-5 text-ink-400/80" />
            <blockquote className="text-[15px] leading-relaxed text-ink-950 md:text-[16px]">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-[rgba(11,13,16,0.07)] pt-4">
              <span
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-full border border-[rgba(11,13,16,0.22)] font-semibold",
                  t.tone === "ember" && "bg-gradient-to-br from-ink-300 to-ink-400 text-ink-950",
                  t.tone === "azure" && "bg-gradient-to-br from-azure-400 to-azure-500 text-ink-950",
                  t.tone === "sage"  && "bg-gradient-to-br from-sage-400  to-sage-500  text-ink-950",
                )}
              >
                {t.initials}
              </span>
              <div className="min-w-0">
                <div className="truncate text-[13px] font-medium text-ink-50">{t.name}</div>
                <div className="truncate text-[11.5px] text-ink-400">
                  {t.role} · {t.company}
                </div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M7 11c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3v1h3v6H4v-7zm9 0c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3v1h3v6h-8v-7z" />
    </svg>
  );
}
