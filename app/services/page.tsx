import { ClarityCtaSection } from "@/components/pages/services/sections/clarity-cta/clarity-cta-section";
import { FaqsSection } from "@/components/pages/services/sections/faqs/faqs-section";
import { ServicesMetricsSection } from "@/components/pages/services/sections/metrics/metric-section";
import { ProcessSection } from "@/components/pages/services/sections/process/process-section";
import { ProductClaritySection } from "@/components/pages/services/sections/product-clarity/product-clarity-section";
import { ServicesHeroSection } from "@/components/pages/services/sections/services-hero-section";
import { FooterSection } from "@/components/pages/home/footer/footer-section";
import { PlansSection } from "@/components/pages/home/plans/plans-section";
import { ProblemSection } from "@/components/pages/home/problem/problem-section";
import { StartSmallSection } from "@/components/pages/home/start-small/start-small-section";
import { TrustedTeamsSection } from "@/components/pages/home/trusted-teams/trusted-teams-section";
import { SectionSeparator } from "@/components/ui/section-separator";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      <SectionSeparator/>
      <TrustedTeamsSection/>
      <ServicesMetricsSection />
      <SectionSeparator/>
      <ProblemSection />
      <SectionSeparator/>
      <ProductClaritySection />
      <SectionSeparator/> 
      <ProductClaritySection /> 
      <SectionSeparator/>
      <ProcessSection />
      <SectionSeparator/>
      <PlansSection />
      <SectionSeparator/>
      <ClarityCtaSection />
      <SectionSeparator/>
      <FaqsSection />
      <SectionSeparator />
      <StartSmallSection />
      <FooterSection />
    </main>
  );
}
  