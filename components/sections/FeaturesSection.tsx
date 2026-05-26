"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/cn";
import {
  containerStagger,
  fadeUp,
  viewportOnce,
  easeOutExpo,
} from "@/lib/motion";

export function FeaturesSection() {
  return (
    <Section id="features" padding="default">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={containerStagger}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.div variants={fadeUp}>
          <SectionEyebrow>Features</SectionEyebrow>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-display mt-5 text-[34px] leading-[1.08] md:text-[46px]"
        >
          Everything your operation needs.
          <br />
          <span className="text-ink-400">Nothing it doesn’t.</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-300"
        >
          Replace seven tools with one workspace built for the realities of
          catering — from peak season chaos to multi-venue logistics.
        </motion.p>
      </motion.div>

      <div className="mt-14 md:mt-16 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[auto_auto_auto]">
        {/* Row 1 */}
        <FeatureCard
          className="md:col-span-3"
          eyebrow="Intake"
          title="AI Inquiry Capture"
          body="Parse messy emails and form submissions into structured event briefs. Auto-tag service type, guest count, and venue."
          icon={<IconSparkleMail />}
          preview={<PreviewAIInquiry />}
          accent="ember"
        />
        <FeatureCard
          className="md:col-span-3"
          eyebrow="Sales"
          title="Visual Quote Builder"
          body="Drag-and-drop menu items, packages, and add-ons. Margins, taxes, and gratuity recalculate as you build."
          icon={<IconLayers />}
          preview={<PreviewQuote />}
          accent="azure"
        />

        {/* Row 2 */}
        <FeatureCard
          className="md:col-span-2"
          eyebrow="Contracts"
          title="E-Signature"
          body="Legally binding signatures, deposit capture, and automated reminders — built-in."
          icon={<IconSignature />}
          preview={<PreviewSignature />}
          accent="sage"
        />
        <FeatureCard
          className="md:col-span-2"
          eyebrow="Menus"
          title="Smart Menu Library"
          body="Reusable items, modifiers, dietary tags, and seasonal collections — all version controlled."
          icon={<IconMenu />}
          preview={<PreviewMenu />}
          accent="ember"
        />
        <FeatureCard
          className="md:col-span-2"
          eyebrow="Pipeline"
          title="CRM Pipeline"
          body="Track every deal from inquiry to delivered. Forecast revenue with confidence."
          icon={<IconPipeline />}
          preview={<PreviewPipeline />}
          accent="azure"
        />

        {/* Row 3 */}
        <FeatureCard
          className="md:col-span-2"
          eyebrow="Pricing"
          title="Inventory-Aware Pricing"
          body="Quotes know what's in stock, what it costs, and what your margin will be — in real time."
          icon={<IconCoins />}
          accent="ember"
          compact
        />
        <FeatureCard
          className="md:col-span-2"
          eyebrow="Teams"
          title="Role-Based Workspaces"
          body="Sales, kitchen, and operations each see exactly what they need — no more, no less."
          icon={<IconShield />}
          accent="sage"
          compact
        />
        <FeatureCard
          className="md:col-span-2"
          eyebrow="Compliance"
          title="Activity & Audit Log"
          body="Every change tracked. Roll back, review, or export for compliance in seconds."
          icon={<IconHistory />}
          accent="azure"
          compact
        />

        {/* Row 4 — wide card */}
        <FeatureCard
          className="md:col-span-6"
          eyebrow="Automation"
          title="Recurring Events"
          body="Weekly office lunches, monthly board dinners, or seasonal pop-ups — automate the entire cycle from quote to delivery without copy-pasting."
          icon={<IconRepeat />}
          preview={<PreviewRecurring />}
          accent="ember"
          wide
        />
      </div>
    </Section>
  );
}

/* ------------------------------ Feature Card ----------------------------- */

type Accent = "ember" | "azure" | "sage";

function FeatureCard({
  className,
  eyebrow,
  title,
  body,
  icon,
  preview,
  accent = "ember",
  compact = false,
  wide = false,
}: {
  className?: string;
  eyebrow: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  preview?: React.ReactNode;
  accent?: Accent;
  compact?: boolean;
  wide?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, ease: easeOutExpo }}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3]",
        "transition-[border-color,transform,box-shadow] duration-300 ease-out",
        "hover:border-[rgba(11,13,16,0.18)] hover:-translate-y-[1px]",
        "hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      {/* Soft accent glow on hover */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-[50%] opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          accent === "ember" && "bg-[radial-gradient(closest-side,rgba(239,68,68,0.22),transparent_70%)]",
          accent === "azure" && "bg-[radial-gradient(closest-side,rgba(125,169,224,0.16),transparent_70%)]",
          accent === "sage"  && "bg-[radial-gradient(closest-side,rgba(122,158,136,0.16),transparent_70%)]",
        )}
      />

      <div className={cn("relative p-6 md:p-7", compact ? "" : "")}>
        <div className="flex items-center gap-2.5">
          <div
            className={cn(
              "grid h-9 w-9 place-items-center rounded-lg border",
              "bg-[#F6F6F3]",
              accent === "ember" && "border-ember-400/20 text-ember-300",
              accent === "azure" && "border-azure-400/20 text-azure-400",
              accent === "sage"  && "border-sage-500/20  text-sage-400",
            )}
          >
            {icon}
          </div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-ink-400">
            {eyebrow}
          </div>
        </div>

        <h3 className={cn(
          "mt-5 font-display font-semibold tracking-tight text-ink-50",
          wide ? "text-[22px] md:text-[26px]" : "text-[18px] md:text-[19px]",
        )}>
          {title}
        </h3>
        <p className="mt-2 max-w-md text-[14px] leading-relaxed text-ink-300">
          {body}
        </p>

        {preview && (
          <div className={cn("mt-6", compact && "hidden")}>
            <div className="relative">
              {preview}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

/* ------------------------------ Previews -------------------------------- */

function PreviewAIInquiry() {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-7 rounded-xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-3.5 text-[12px] text-ink-300 leading-relaxed">
        <div className="text-[10.5px] uppercase tracking-[0.16em] text-ink-500">Inbound email</div>
        <div className="mt-1 text-ink-100">
          Hi! Looking for catering for our board dinner on{" "}
          <span className="rounded-sm bg-ember-400/15 px-1 text-ember-200">June 4</span>
          {" "}for about{" "}
          <span className="rounded-sm bg-ember-400/15 px-1 text-ember-200">320 people</span>.
          Plated dinner, open bar, 4 hours…
        </div>
      </div>
      <div className="col-span-5 rounded-xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-3.5">
        <div className="text-[10.5px] uppercase tracking-[0.16em] text-ember-300">Parsed brief</div>
        <ul className="mt-2 space-y-1.5 text-[11.5px] text-ink-100">
          <li className="flex justify-between"><span className="text-ink-400">Date</span><span>Jun 04</span></li>
          <li className="flex justify-between"><span className="text-ink-400">Guests</span><span>320</span></li>
          <li className="flex justify-between"><span className="text-ink-400">Service</span><span>Plated</span></li>
          <li className="flex justify-between"><span className="text-ink-400">Bar</span><span>Open · 4h</span></li>
        </ul>
      </div>
    </div>
  );
}

function PreviewQuote() {
  return (
    <div className="rounded-xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-3.5">
      <div className="flex items-center justify-between text-[11px] text-ink-400">
        <span>Hartford Gala</span>
        <span>$24,180 · <span className="text-sage-400">32% margin</span></span>
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          { l: "Plated dinner",   v: "$18,560", w: 80 },
          { l: "Full bar",        v: "$3,840",  w: 30 },
          { l: "Staffing",        v: "$720",    w: 10 },
          { l: "Rentals",         v: "$1,060",  w: 14 },
        ].map((row) => (
          <div key={row.l} className="grid grid-cols-12 items-center gap-2 text-[12px]">
            <div className="col-span-4 text-ink-100">{row.l}</div>
            <div className="col-span-6">
              <div className="h-1.5 rounded-full bg-[rgba(11,13,16,0.05)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-ember-500 to-ember-300"
                  style={{ width: `${row.w}%` }}
                />
              </div>
            </div>
            <div className="col-span-2 text-right text-ink-100">{row.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewSignature() {
  return (
    <div className="rounded-xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-4">
      <div className="font-display text-[22px] italic tracking-tight text-ember-200">
        M. Renwick
      </div>
      <div className="mt-1 text-[10.5px] text-ink-400">Signed · May 12 · 10:42 AM</div>
      <div className="mt-3 flex items-center justify-between rounded-md border border-sage-500/20 bg-sage-500/10 px-2.5 py-1.5 text-[11px]">
        <span className="text-sage-400">Deposit collected</span>
        <span className="font-medium text-ink-50">$7,254</span>
      </div>
    </div>
  );
}

function PreviewMenu() {
  return (
    <div className="rounded-xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-3.5">
      <div className="text-[10.5px] uppercase tracking-[0.16em] text-ink-400">Spring 2026 · seasonal</div>
      <ul className="mt-2.5 space-y-1.5 text-[12px]">
        {[
          { n: "Heirloom tomato burrata",   t: ["v"] },
          { n: "Lamb saddle · charred fennel" },
          { n: "Wild mushroom risotto",     t: ["v", "gf"] },
          { n: "Yuzu posset · meringue",    t: ["gf"] },
        ].map((d) => (
          <li key={d.n} className="flex items-center justify-between">
            <span className="text-ink-100">{d.n}</span>
            <span className="flex gap-1">
              {(d.t ?? []).map((tag) => (
                <span key={tag} className="rounded bg-[rgba(11,13,16,0.06)] px-1 text-[9.5px] text-ink-300 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PreviewPipeline() {
  const cols = [
    { n: "Inquiry",   c: 6, t: "ember" },
    { n: "Quoted",    c: 4, t: "azure" },
    { n: "Signed",    c: 3, t: "sage"  },
    { n: "Delivered", c: 8, t: "ember" },
  ];
  return (
    <div className="rounded-xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-3.5">
      <div className="grid grid-cols-4 gap-1.5">
        {cols.map((c) => (
          <div key={c.n} className="rounded-md border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-2">
            <div className="text-[10px] uppercase tracking-wider text-ink-400">{c.n}</div>
            <div className="mt-1 text-[15px] font-semibold text-ink-50">{c.c}</div>
            <div className="mt-1.5 h-1 rounded-full bg-[rgba(11,13,16,0.06)]">
              <div
                className={cn(
                  "h-full rounded-full",
                  c.t === "ember" && "bg-gradient-to-r from-ember-500 to-ember-300",
                  c.t === "azure" && "bg-gradient-to-r from-azure-500 to-azure-400",
                  c.t === "sage"  && "bg-gradient-to-r from-sage-500 to-sage-400",
                )}
                style={{ width: `${Math.min(100, c.c * 12)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewRecurring() {
  const weeks = 12;
  return (
    <div className="rounded-xl border border-[rgba(11,13,16,0.09)] bg-[#F6F6F3] p-4">
      <div className="flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-[0.16em] text-ink-400">Northbrook Weekly Lunch</div>
        <span className="rounded-md border border-ember-400/20 bg-ember-400/10 px-1.5 py-0.5 text-[10.5px] text-ember-300">
          Every Thursday · 12 weeks scheduled
        </span>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        {Array.from({ length: weeks }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-8 flex-1 rounded-md border",
              i < 4
                ? "border-sage-500/25 bg-sage-500/15"
                : i < 7
                ? "border-ember-400/25 bg-ember-400/10"
                : "border-[rgba(11,13,16,0.09)] bg-[rgba(11,13,16,0.03)]",
            )}
            title={`Week ${i + 1}`}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center gap-3 text-[10.5px] text-ink-400">
        <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-sage-400" /> Delivered</span>
        <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-ember-400" /> Scheduled</span>
        <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /> Upcoming</span>
      </div>
    </div>
  );
}

/* ------------------------------- Icons ---------------------------------- */

function IconSparkleMail() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="14" height="10" rx="1.5" />
      <path d="M3 6l7 5 7-5" />
      <path d="M15.5 2.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z" />
    </svg>
  );
}
function IconLayers() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3l7 3.5L10 10 3 6.5z" />
      <path d="M3 10l7 3.5L17 10" />
      <path d="M3 13.5l7 3.5 7-3.5" />
    </svg>
  );
}
function IconSignature() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14c2.5 0 3-6 5-6s1.5 5 3.5 5 2-3 3.5-3" />
      <path d="M3 17h14" />
    </svg>
  );
}
function IconMenu() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="12" height="14" rx="1.5" />
      <path d="M7 7h6M7 10h6M7 13h4" />
    </svg>
  );
}
function IconPipeline() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3"  y="4" width="3.6" height="12" rx="0.8" />
      <rect x="8.2" y="6" width="3.6" height="10" rx="0.8" />
      <rect x="13.4" y="8" width="3.6" height="8" rx="0.8" />
    </svg>
  );
}
function IconCoins() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="8" cy="6" rx="5" ry="2.4" />
      <path d="M3 6v3c0 1.3 2.2 2.4 5 2.4s5-1 5-2.4V6" />
      <path d="M3 9.5v3c0 1.3 2.2 2.4 5 2.4s5-1 5-2.4v-3" />
      <ellipse cx="14.5" cy="13" rx="3" ry="1.4" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3l6 2v5c0 4-3 6.5-6 7-3-.5-6-3-6-7V5l6-2z" />
      <path d="M7.5 10.5l2 2 3-4" />
    </svg>
  );
}
function IconHistory() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 10a6.5 6.5 0 1 0 1.7-4.4" />
      <path d="M3.5 4v3h3" />
      <path d="M10 6.5V10l2.5 1.5" />
    </svg>
  );
}
function IconRepeat() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8a4 4 0 0 1 4-4h7l-2-2" />
      <path d="M15 13h-7" />
      <path d="M16 12a4 4 0 0 1-4 4H5l2 2" />
    </svg>
  );
}
