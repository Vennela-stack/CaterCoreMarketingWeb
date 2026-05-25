import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";

/**
 * Page composition.
 *
 * Each <Section /> is fully self-contained — comment one out, reorder them,
 * or replace one without touching any of the others. They share spacing/width
 * via the global `container-page` utility and the `Section` wrapper's padding
 * scale, so layout rhythm stays consistent regardless of order.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductShowcaseSection />
        <HowItWorksSection />
        <FeaturesSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <FAQSection />
        <SectionDivider />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}

/**
 * Purely decorative hairline between sections. Renders nothing structural,
 * so removing or reordering sections never depends on this being present.
 */
function SectionDivider() {
  return (
    <div className="container-page" aria-hidden>
      <div className="hairline" />
    </div>
  );
}
