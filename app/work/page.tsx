import { WorkHeroSection } from "@/components/pages/work/sections/hero/work-hero-section";
import { WorkApproachSection } from "@/components/pages/work/sections/work-approach/work-approach-section";
import { SectionSeparator } from "@/components/ui/section-separator";


export default function WorkPage() {
  return (
    <main>
      <WorkHeroSection />
      <SectionSeparator />
      <WorkApproachSection />
      <SectionSeparator />  
    
    </main>
  );
}
  