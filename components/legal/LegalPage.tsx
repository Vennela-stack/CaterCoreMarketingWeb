import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { Section } from "@/components/layout/Section";

type LegalPageProps = {
  title: string;
  updated: string;
  intro?: string;
  sections: { heading: string; body: React.ReactNode }[];
};

/**
 * Shared shell for legal pages (/terms, /privacy, etc.).
 * Keeps typography, container width, and chrome (nav + footer) consistent
 * with the marketing site so the experience never feels like a "different app".
 */
export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36">
        <Section padding="tight">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="focus-ring inline-flex items-center gap-1.5 text-[12.5px] text-ink-400 hover:text-ink-50 transition-colors"
            >
              <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden>
                <path
                  d="M10 3.5L5.5 8l4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to home
            </Link>

            <h1 className="text-display mt-8 text-[36px] leading-[1.08] md:text-[52px]">
              {title}
            </h1>
            <p className="mt-3 text-[12.5px] uppercase tracking-[0.2em] text-ink-500">
              Last updated · {updated}
            </p>
            {intro && (
              <p className="mt-6 text-[15.5px] leading-relaxed text-ink-300">
                {intro}
              </p>
            )}

            <div className="hairline my-12" />

            <div className="space-y-10">
              {sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="font-display text-[20px] font-semibold tracking-tight text-ink-50 md:text-[22px]">
                    {s.heading}
                  </h2>
                  <div className="prose-legal mt-3 space-y-3 text-[14.5px] leading-relaxed text-ink-300">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <FooterSection />
    </>
  );
}
