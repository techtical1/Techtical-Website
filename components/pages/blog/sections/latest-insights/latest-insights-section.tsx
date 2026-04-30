// components/pages/blog/sections/latest-insights/latest-insights-section.tsx

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/common/section-header";
import { BlogFeatureCard } from "@/components/common/blog-feature-card";
import { BlogCard } from "@/components/common/blog-card";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { getFeaturedPost, getRegularPosts } from "@/lib/blog";

export function LatestInsightsSection() {
  const featuredPost = getFeaturedPost();
  const posts = getRegularPosts();

  if (!featuredPost) return null;

  return (
    <section className="bg-[#F7F7F2] py-24">
      <Container size="wide">
        <SectionHeader
          title={{
            normal: "Latest",
            highlight: "insights",
          }}
        />

        <BlogFeatureCard {...featuredPost} />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <StrategyCallButton variant="primary">View More</StrategyCallButton>
        </div>
      </Container>
    </section>
  );
}