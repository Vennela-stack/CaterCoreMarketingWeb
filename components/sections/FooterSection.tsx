import { Section } from "@/components/layout/Section";
import { Logo } from "@/components/ui/Logo";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Overview",          href: "#features" },
      { label: "Quote builder",     href: "#features" },
      { label: "Menus & catalog",   href: "#features" },
      { label: "Contracts",         href: "#features" },
      { label: "Integrations",      href: "#" },
      { label: "Changelog",         href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",      href: "#" },
      { label: "Customers",  href: "#testimonials" },
      { label: "Careers",    href: "#" },
      { label: "Press",      href: "#" },
      { label: "Contact",    href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help center",   href: "#" },
      { label: "API docs",      href: "#" },
      { label: "Migration",     href: "#" },
      { label: "Security",      href: "#" },
      { label: "Status",        href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms",       href: "/terms" },
      { label: "Privacy",     href: "/privacy" },
      { label: "DPA",         href: "#" },
      { label: "Cookies",     href: "#" },
      { label: "SOC 2",       href: "#" },
    ],
  },
];

export function FooterSection() {
  return (
    <footer id="footer" className="relative border-t border-[rgba(11,13,16,0.09)] bg-ink-950">
      {/* faint top hairline glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-ember-400/30 to-transparent"
      />
      <Section padding="tight" className="!py-16 md:!py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-ink-400">
              The operating system for modern caterers. From inquiry to invoice —
              all in one place.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <Social label="Twitter">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor"><path d="M12.6 2.2h2L10.4 7l4.9 6.8h-3.8l-3-4.1-3.5 4.1H2.9l4.5-5.3L2.7 2.2h3.9l2.7 3.7zM12 12.6h1.1L5.1 3.3H4z"/></svg>
              </Social>
              <Social label="LinkedIn">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor"><path d="M2.5 5.5h2.4v8.1H2.5zM3.7 1.7a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8M6.7 5.5h2.3v1.1h.03c.33-.6 1.1-1.3 2.3-1.3 2.5 0 2.9 1.6 2.9 3.7v4.6h-2.4V9.5c0-.9 0-2-1.2-2s-1.4 1-1.4 2v4.1H6.7z"/></svg>
              </Social>
              <Social label="YouTube">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor"><path d="M13.9 4.7a1.6 1.6 0 0 0-1.1-1.1C11.8 3.3 8 3.3 8 3.3s-3.8 0-4.8.3a1.6 1.6 0 0 0-1.1 1.1C1.8 5.7 1.8 8 1.8 8s0 2.3.3 3.3a1.6 1.6 0 0 0 1.1 1.1c1 .3 4.8.3 4.8.3s3.8 0 4.8-.3a1.6 1.6 0 0 0 1.1-1.1c.3-1 .3-3.3.3-3.3s0-2.3-.3-3.3M6.7 9.9V6.1L9.9 8z"/></svg>
              </Social>
              <Social label="GitHub">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 0 0-2.1 12.65c.33.06.45-.14.45-.32v-1.13c-1.83.4-2.22-.88-2.22-.88-.3-.76-.74-.97-.74-.97-.6-.41.05-.4.05-.4.67.05 1.02.69 1.02.69.59 1.02 1.55.73 1.93.56.06-.43.23-.73.42-.9-1.46-.17-3-.73-3-3.26 0-.72.26-1.31.68-1.78-.07-.17-.3-.84.06-1.76 0 0 .55-.18 1.81.68a6.3 6.3 0 0 1 3.3 0c1.26-.86 1.81-.68 1.81-.68.36.92.13 1.59.06 1.76.42.47.68 1.06.68 1.78 0 2.54-1.55 3.09-3.02 3.25.24.21.45.61.45 1.23v1.83c0 .18.12.39.45.32A6.5 6.5 0 0 0 8 1.5z"/></svg>
              </Social>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-[10.5px] uppercase tracking-[0.16em] text-ink-500">
              <span className="rounded-md border border-[rgba(11,13,16,0.09)] bg-[rgba(11,13,16,0.03)] px-2 py-1">SOC 2 Type II</span>
              <span className="rounded-md border border-[rgba(11,13,16,0.09)] bg-[rgba(11,13,16,0.03)] px-2 py-1">GDPR</span>
              <span className="rounded-md border border-[rgba(11,13,16,0.09)] bg-[rgba(11,13,16,0.03)] px-2 py-1">PCI DSS</span>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13.5px] text-ink-200 transition-colors duration-150 hover:text-ink-50"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mt-14 md:mt-16" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <p className="text-[12.5px] text-ink-500">
            © {new Date().getFullYear()} CaterCore, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[12.5px] text-ink-400">
            <a href="/privacy" className="hover:text-ink-50 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-ink-50 transition-colors">Terms</a>
            <a href="#" className="hover:text-ink-50 transition-colors">Cookie settings</a>
          </div>
        </div>
      </Section>
    </footer>
  );
}

function Social({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="focus-ring grid h-8 w-8 place-items-center rounded-md border border-[rgba(11,13,16,0.09)] bg-[rgba(11,13,16,0.03)] text-ink-300 transition-colors hover:text-ink-50 hover:border-[rgba(11,13,16,0.18)]"
    >
      {children}
    </a>
  );
}
