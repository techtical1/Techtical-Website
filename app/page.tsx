import { OwnerChatCTA } from "@/components/cta/owner-chat-cta";
import { FloatingBottomNav } from "@/components/navigation/floating-bottom-nav";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { TrustedTeamsSection } from "@/components/sections/trusted-teams/trusted-teams-section";
import { SectionSeparator } from "@/components/ui/section-separator";
import { CaseStudiesSection } from "@/components/sections/case-studies/case-studies-section";
import { ProblemSection } from "@/components/sections/problem/problem-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { DomainsSection } from "@/components/sections/domains/domains-section";
import { PlansSection } from "@/components/sections/plans/plans-section";


export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <FloatingBottomNav />
        <OwnerChatCTA />
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
      </main>
    </>
  );
}
 