import { FloatingBottomNav } from "@/components/navigation/floating-bottom-nav";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { TrustedTeamsSection } from "@/components/sections/trusted-teams/trusted-teams-section";
import { SectionSeparator } from "@/components/ui/section-separator";
import { CaseStudiesSection } from "@/components/sections/case-studies/case-studies-section";
import { ProblemSection } from "@/components/sections/problem/problem-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { DomainsSection } from "@/components/sections/domains/domains-section";
import { PlansSection } from "@/components/sections/plans/plans-section";
import { CredibilitySection } from "@/components/sections/credibility/credibility-section";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section";
import { FinalCtaSection } from "@/components/sections/final-cta/final-cta-section";
import { StartSmallSection } from "@/components/sections/start-small/start-small-section";
import { FooterSection } from "@/components/sections/footer/footer-section";
import { FounderFormWidget } from "@/components/founder-form/founder-form-widget";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <FloatingBottomNav />
        <SectionSeparator className="mb-14" />
        <TrustedTeamsSection />
        <SectionSeparator />
        <CaseStudiesSection />
        <SectionSeparator />
        <ProblemSection />
        <SectionSeparator />
        <ServicesSection />
        <SectionSeparator />
        <DomainsSection />
        <SectionSeparator />
        <PlansSection />
        <SectionSeparator />
        <CredibilitySection />
        <SectionSeparator />
        <TestimonialsSection />
        <FinalCtaSection />
        <SectionSeparator />
        <StartSmallSection />
        <FooterSection />
        <FounderFormWidget />
      </main>
    </>
  );
}
