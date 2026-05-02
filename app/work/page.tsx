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
import { getHomePageData } from "@/lib/sanity.home";
import { getServicesPageData } from "@/lib/sanity.services";
import { getWorkPageData } from "@/lib/sanity.work";

export default async function WorkPage() {
  const [work, home, services] = await Promise.all([
    getWorkPageData(),
    getHomePageData(),
    getServicesPageData(),
  ]);

  return (
    <main>
      <WorkHeroSection data={work.hero} />
      <SectionSeparator />
      <WorkApproachSection data={work.approach} />
      <SectionSeparator />
      <ProjectGallerySection data={work.gallery} />
      <SectionSeparator />
      <FeaturedCaseSection data={work.featuredCase} />
      <SectionSeparator />
      <TestimonialsSection data={home.testimonials} />
      <SectionSeparator />
      <ProductClaritySection data={services.productClarity} />
      <SectionSeparator />
      <FaqsSection data={services.faqs} />
      <SectionSeparator />
      <ClarityCtaSection data={services.clarityCta} />
      <SectionSeparator />
      <StartSmallSection data={home.startSmall} />
      <FooterSection data={home.footer} />
    </main>
  );
}
