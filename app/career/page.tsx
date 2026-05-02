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
import { getBlogPageData } from "@/lib/sanity.blog-page";
import { getCareerPageData } from "@/lib/sanity.career";
import { getHomePageData } from "@/lib/sanity.home";
import { getServicesPageData } from "@/lib/sanity.services";



export default async function CareerPage() {
  const [career, blog, home, services] = await Promise.all([
    getCareerPageData(),
    getBlogPageData(),
    getHomePageData(),
    getServicesPageData(),
  ]);

  return (
    <main>
       <CareerHeroSection data={career.hero} />
       <SectionSeparator/> 
        <WhoWeAreSection data={career.whoWeAre} />
        <SectionSeparator/>
        <WhyWorkWithUsSection data={career.whyWorkWithUs} />
        <SectionSeparator/>
        <TeamSection data={career.team} />
        <SectionSeparator/>
        <BeyondWorkSection data={career.beyondWork} />
        <SectionSeparator/>
        <AiProcessSection data={career.aiProcess} />
        <SectionSeparator/>
        <MissionSection data={career.mission} />
        <SectionSeparator/>
        <HiringCtaSection data={career.hiringCta} />
        <SectionSeparator/> 
        <OpenPositionsSection data={career.openPositions} />
        <SectionSeparator/> 
        <BlogIntroSection data={blog.intro} />
        <SectionSeparator/> 
        <FaqsSection data={services.faqs} />
        <SectionSeparator/>
        <FinalCtaSection data={career.finalCta} />
        <FooterSection data={home.footer} />
    </main>
  );
}
