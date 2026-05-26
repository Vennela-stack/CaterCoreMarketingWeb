"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { fadeUp, viewportOnce, containerStagger } from "@/lib/motion";

export function CTASection() {
  return (
    <Section id="cta" padding="tight">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={containerStagger}
        className="relative overflow-hidden rounded-3xl border border-[rgba(13,14,17,0.08)] bg-ink-850 px-8 py-14 md:px-14 md:py-20"
      >
        {/* Subtle warm wash from the top — keeps the panel from feeling flat
            without going back to the dark "hero box" treatment. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 0%, rgba(193,18,31,0.06) 0%, rgba(193,18,31,0) 70%)",
          }}
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <motion.div variants={fadeUp}>
            <SectionEyebrow>Get started</SectionEyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-display mt-4 text-[34px] leading-[1.06] md:text-[48px]"
          >
            Run your next event on CaterCore.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-300"
          >
            Start your free trial in minutes, or book a guided demo with our
            team — we’ll show you the platform live with your menu and pricing.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <LinkButton href="#" variant="primary" size="lg" className="min-w-[170px]">
              Start free trial
            </LinkButton>
            <LinkButton href="#" variant="secondary" size="lg" className="min-w-[170px]">
              Book a demo
            </LinkButton>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
