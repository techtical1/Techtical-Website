import { BlogCtaSection } from "@/components/pages/blog/sections/blog-cta/blog-cta-section";
import { BlogIntroSection } from "@/components/pages/blog/sections/blog-intro/blog-intro-section";
import { ChallengeExplorerSection } from "@/components/pages/blog/sections/challenge-explorer/challenge-explorer-section";
import { FeaturedArticleSection } from "@/components/pages/blog/sections/featured-article/featured-article-section";
import { BlogHeroSection } from "@/components/pages/blog/sections/hero/blog-hero-section";
import { LatestInsightsSection } from "@/components/pages/blog/sections/latest-insights/latest-insights-section";
import { FooterSection } from "@/components/pages/home/footer/footer-section";
import { SectionSeparator } from "@/components/ui/section-separator";
import { getBlogPageData } from "@/lib/sanity.blog-page";
import { getHomePageData } from "@/lib/sanity.home";


export default async function BlogPage() {
  const [blog, home] = await Promise.all([
    getBlogPageData(),
    getHomePageData(),
  ]);

  return (
    <main>
        <BlogHeroSection data={blog.hero} />
        <SectionSeparator/>
        <FeaturedArticleSection data={blog.featuredArticle} />
        <SectionSeparator/>
        <ChallengeExplorerSection data={blog.challengeExplorer} />
        <SectionSeparator/>
        <LatestInsightsSection />
        <SectionSeparator/>
        <BlogIntroSection data={blog.intro} />
        <SectionSeparator />
        <BlogCtaSection data={blog.cta} />
        <FooterSection data={home.footer} />
    </main>
  );
}
