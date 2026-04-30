import { CredibilitySection } from "@/components/pages/home/credibility/credibility-section";
import { FooterSection } from "@/components/pages/home/footer/footer-section";
import { StartSmallSection } from "@/components/pages/home/start-small/start-small-section";
import { TestimonialsSection } from "@/components/pages/home/testimonials/testimonials-section";
import { ClarityCtaSection } from "@/components/pages/services/sections/clarity-cta/clarity-cta-section";
import { FaqsSection } from "@/components/pages/services/sections/faqs/faqs-section";
import { ProductClaritySection } from "@/components/pages/services/sections/product-clarity/product-clarity-section";
import { FeaturedCaseSection } from "@/components/pages/work/sections/featured-case/featured-case-section";
import { WorkHeroSection } from "@/components/pages/work/sections/hero/work-hero-section";
import { ProjectGallerySection } from "@/components/pages/work/sections/project-gallery/project-gallery-section";
import { WorkApproachSection } from "@/components/pages/work/sections/work-approach/work-approach-section";
import { SectionSeparator } from "@/components/ui/section-separator";

export default function WorkPage() {
  return (
    <main>
      <WorkHeroSection />
      <SectionSeparator />
      <WorkApproachSection />
      <SectionSeparator />
      <ProjectGallerySection />
      <SectionSeparator />
      <FeaturedCaseSection />
      <SectionSeparator />
      <TestimonialsSection />
      <SectionSeparator />
      <ProductClaritySection />
      <SectionSeparator />
      <FaqsSection />
      <SectionSeparator />
      <ClarityCtaSection />
      <SectionSeparator />
      <StartSmallSection />
      <FooterSection />
    </main>
  );
}
