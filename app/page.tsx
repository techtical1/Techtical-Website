import { FloatingBottomNav } from "@/components/navigation/floating-bottom-nav";
import { HeroSection } from "@/components/pages/home/hero/hero-section";
import { TrustedTeamsSection } from "@/components/pages/home/trusted-teams/trusted-teams-section";
import { SectionSeparator } from "@/components/ui/section-separator";
import { CaseStudiesSection } from "@/components/pages/home/case-studies/case-studies-section";
import { ProblemSection } from "@/components/pages/home/problem/problem-section";
import { ServicesSection } from "@/components/pages/home/services/services-section";
import { DomainsSection } from "@/components/pages/home/domains/domains-section";
import { PlansSection } from "@/components/pages/home/plans/plans-section";
import { CredibilitySection } from "@/components/pages/home/credibility/credibility-section";
import { TestimonialsSection } from "@/components/pages/home/testimonials/testimonials-section";
import { FinalCtaSection } from "@/components/pages/home/final-cta/final-cta-section";
import { StartSmallSection } from "@/components/pages/home/start-small/start-small-section";
import { FooterSection } from "@/components/pages/home/footer/footer-section";
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
