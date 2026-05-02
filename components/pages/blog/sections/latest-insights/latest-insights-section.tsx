import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/common/section-header";
import { BlogFeatureCard } from "@/components/common/blog-feature-card";
import { BlogCard } from "@/components/common/blog-card";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { getBlogPosts, type SanityBlogPost } from "@/lib/sanity.fetch";
import { getImageUrl } from "@/lib/sanity.image";

type PostCardData = {
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
  tag: string;
};

function transformSanityPost(post: SanityBlogPost): PostCardData {
  return {
    slug: post.slug?.current ?? post._id,
    image:
      getImageUrl(post.image ?? null, { width: 800, height: 500 }) ??
      "/assets/blog/blog-intro.png",
    category: post.category ?? "Article",
    title: post.title ?? "",
    description: post.description ?? post.excerpt ?? "",
    tag: post.tag ?? "Read More",
  };
}

export async function LatestInsightsSection() {
  let featuredPost: PostCardData | undefined;
  let posts: PostCardData[] = [];

  try {
    const sanityPosts = await getBlogPosts();
    if (sanityPosts && sanityPosts.length > 0) {
      const featured =
        sanityPosts.find((p) => p.isFeatured) ?? sanityPosts[0];
      const rest = sanityPosts.filter((p) => p._id !== featured._id);
      featuredPost = transformSanityPost(featured);
      posts = rest.map(transformSanityPost);
    }
  } catch {
    // Sanity unavailable — section renders nothing
  }

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
