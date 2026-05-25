"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { easeOutExpo, fadeUp, containerStagger, viewportOnce } from "@/lib/motion";

const FAQS = [
  {
    q: "How is CaterCore priced?",
    a: "CaterCore is priced per seat with three tiers — Starter, Pro, and Enterprise. Pricing scales with the size of your team, not the number of events. We don’t charge transaction fees on quotes, contracts, or payments. Annual plans include a 20% discount.",
  },
  {
    q: "What does onboarding look like?",
    a: "Most teams are live within 7 days. We migrate your existing menus, clients, and historical events for you, then run a guided onboarding for sales, kitchen, and operations leads. Enterprise customers receive a dedicated implementation manager.",
  },
  {
    q: "Which tools does CaterCore integrate with?",
    a: "Native integrations with QuickBooks, Xero, Stripe, Google Calendar, Outlook, Gmail, Slack, DocuSign, HubSpot, and Mailchimp. We also expose a documented REST API and webhooks for custom workflows.",
  },
  {
    q: "How does the AI Inquiry Agent work?",
    a: "The agent parses inbound emails and web form submissions into structured event briefs — extracting date, guest count, service type, dietary needs, and venue. It can then draft a quote using your menu library and pricing rules. You always review before anything is sent.",
  },
  {
    q: "Can we migrate from another platform?",
    a: "Yes. We support imports from Total Party Planner, Caterease, Tripleseat, and from raw Excel exports. Our team handles mapping, cleanup, and validation as part of onboarding at no extra cost.",
  },
  {
    q: "Are e-signatures legally binding?",
    a: "Yes. CaterCore signatures are compliant with ESIGN (US), UETA, eIDAS (EU), and PIPEDA (Canada). Each signature is paired with an immutable audit trail capturing identity, timestamp, IP, and document hash.",
  },
  {
    q: "Will it scale with our operation?",
    a: "CaterCore powers single-venue boutiques and multi-region operations running 5,000+ events per year. Role-based workspaces, audit logs, SSO, SCIM, and granular permissions are built in.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Email and chat support for all plans, with 24-hour first-response SLA. Pro plans include priority chat. Enterprise plans include a named CSM, dedicated Slack channel, and 1-hour response SLA.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" padding="default">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={containerStagger}
          className="md:col-span-4"
        >
          <motion.div variants={fadeUp}>
            <Badge tone="ember">FAQ</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-display mt-5 text-[32px] leading-[1.08] md:text-[40px]"
          >
            Questions, answered.
          </motion.h2>
        </motion.div>

        <div className="md:col-span-8">
          <ul className="divide-y divide-[rgba(11,13,16,0.09)] border-y border-[rgba(11,13,16,0.09)]">
            {FAQS.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className={cn(
                      "focus-ring group flex w-full items-start justify-between gap-6 py-5 text-left",
                      "transition-colors duration-200",
                    )}
                  >
                    <span
                      className={cn(
                        "text-[15.5px] font-medium tracking-tight transition-colors",
                        isOpen ? "text-ink-50" : "text-ink-100 group-hover:text-ink-50",
                      )}
                    >
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border",
                        "border-[rgba(11,13,16,0.13)] bg-[rgba(11,13,16,0.03)] text-ink-300",
                        "transition-transform duration-300 ease-out",
                        isOpen && "rotate-45 text-ember-300 border-ember-400/30 bg-ember-400/10",
                      )}
                    >
                      <PlusIcon />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.34, ease: easeOutExpo }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-10 text-[14.5px] leading-relaxed text-ink-300">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

