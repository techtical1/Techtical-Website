import { BlogCtaSection } from "@/components/pages/blog/sections/blog-cta/blog-cta-section";
import { BlogIntroSection } from "@/components/pages/blog/sections/blog-intro/blog-intro-section";
import { ChallengeExplorerSection } from "@/components/pages/blog/sections/challenge-explorer/challenge-explorer-section";
import { FeaturedArticleSection } from "@/components/pages/blog/sections/featured-article/featured-article-section";
import { BlogHeroSection } from "@/components/pages/blog/sections/hero/blog-hero-section";
import { LatestInsightsSection } from "@/components/pages/blog/sections/latest-insights/latest-insights-section";
import { FooterSection } from "@/components/pages/home/footer/footer-section";
import { SectionSeparator } from "@/components/ui/section-separator";
import { Section } from "lucide-react";


export default function BlogPage() {
  return (
    <main>
        <BlogHeroSection />
        <SectionSeparator/>
        <FeaturedArticleSection />
        <SectionSeparator/>
        <ChallengeExplorerSection />
        <SectionSeparator/>
        <LatestInsightsSection />
        <SectionSeparator/>
        <BlogIntroSection />
        < SectionSeparator />
        <BlogCtaSection />;
        <FooterSection />
    </main>
  );
}
