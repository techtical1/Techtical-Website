import { BlogIntroSection } from "@/components/pages/blog/sections/blog-intro/blog-intro-section";
import { AiProcessSection } from "@/components/pages/career/sections/ai-process/ai-process-section";
import { BeyondWorkSection } from "@/components/pages/career/sections/beyond-work/beyond-work-section";
import { FinalCtaSection } from "@/components/pages/career/sections/final-cta/final-cta-section";
import { CareerHeroSection } from "@/components/pages/career/sections/hero/career-hero-section";
import { HiringCtaSection } from "@/components/pages/career/sections/hiring-cta/hiring-cta-section";
import { MissionSection } from "@/components/pages/career/sections/mission/mission-section";
import { OpenPositionsSection } from "@/components/pages/career/sections/open-positions/open-positions-section";
import { TeamSection } from "@/components/pages/career/sections/team/team-section";
import { WhoWeAreSection } from "@/components/pages/career/sections/who-we-are/who-we-are-section";
import { WhyWorkWithUsSection } from "@/components/pages/career/sections/why-work-with-us/why-work-with-us-section";
import { FooterSection } from "@/components/pages/home/footer/footer-section";
import { FaqsSection } from "@/components/pages/services/sections/faqs/faqs-section";
import { SectionSeparator } from "@/components/ui/section-separator";



export default function CareerPage() {
  return (
    <main>
       <CareerHeroSection />
       <SectionSeparator/> 
        <WhoWeAreSection />
        <SectionSeparator/>
        <WhyWorkWithUsSection />
        <SectionSeparator/>
        <TeamSection />
        <SectionSeparator/>
        <BeyondWorkSection />
        <SectionSeparator/>
        <AiProcessSection />
        <SectionSeparator/>
        <MissionSection />
        <SectionSeparator/>
        <HiringCtaSection />
        <SectionSeparator/> 
        <OpenPositionsSection />
        <SectionSeparator/> 
        <BlogIntroSection />
        <SectionSeparator/> 
        <FaqsSection />
        <SectionSeparator/>
        <FinalCtaSection />
        <FooterSection />
    </main>
  );
}
