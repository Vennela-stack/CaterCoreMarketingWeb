# CaterCore — Marketing Site

Premium, dark-aesthetic SaaS marketing site for CaterCore, the operating system for modern caterers.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** (used sparingly).

---

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build && npm run start   # production build
```

---

## Architecture

The site is composed in [`app/page.tsx`](app/page.tsx) by importing one component per section. **Each section is fully isolated** — comment a line out, reorder the JSX, or swap one for another without touching the other sections.

```
app/
  layout.tsx          # html + body shell, font, metadata
  page.tsx            # composes sections — edit/reorder here
  globals.css         # tokens, scrollbar, motion-safe, utility layers

components/
  layout/
    Container.tsx     # max-width container utility
    Section.tsx       # vertical-padding scale + container wrapper
    Navbar.tsx        # sticky nav with scroll background
  ui/
    Button.tsx        # primary / secondary / ghost
    Badge.tsx         # eyebrow chip
    Logo.tsx          # mark + wordmark
  mockups/
    DashboardMockup.tsx
  sections/
    HeroSection.tsx
    HowItWorksSection.tsx
    FeaturesSection.tsx
    TestimonialsSection.tsx
    FAQSection.tsx
    CTASection.tsx
    FooterSection.tsx

lib/
  cn.ts               # clsx + tailwind-merge helper
  motion.ts           # shared framer-motion variants
```

### Removing or reordering a section

Open [`app/page.tsx`](app/page.tsx) and comment out the import + JSX line. Nothing else needs to change — section spacing, container widths, and scroll flow are all driven by global tokens, not by sibling sections.

```diff
  <HeroSection />
- <HowItWorksSection />
  <FeaturesSection />
```

The `<SectionDivider />` between sections is purely decorative — safe to keep, remove, or skip per pair.

---

## Design tokens

Color palette (in [`tailwind.config.ts`](tailwind.config.ts)):

| Token | Use |
| --- | --- |
| `ink.950` → `ink.50` | Backgrounds + neutral text scale (charcoal → bone) |
| `ember.300` / `ember.400` | Warm gold accent (primary brand) |
| `azure.400` | Cool secondary accent |
| `sage.400` | Positive/confirmation accent |

Spacing rhythm is driven by `Section`'s `padding` prop (`tight | default | loose | none`) so vertical cadence stays consistent regardless of section order.

---

## Performance posture

- Animations restricted to `transform` / `opacity` (no layout-thrashing properties).
- Framer Motion is used only for above-the-fold reveal and accordion height — Tailwind keyframes (`animate-float-y`, `animate-pulse-glow`) cover everything else.
- All visuals (dashboards, charts, mockups) are pure HTML/SVG — no images to lazy-load.
- `prefers-reduced-motion` is respected globally in [`app/globals.css`](app/globals.css).
- Inter is loaded via the `rsms.me/inter` CDN with `preconnect`; swap to `next/font/google` if self-hosting is preferred.
