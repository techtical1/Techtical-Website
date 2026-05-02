// components/pages/blog/sections/featured-article/featured-article-section.tsx

import { Container } from "@/components/ui/container";
import { SectionPill } from "@/components/ui/section-pill";
import { RichHeading } from "@/components/common/rich-heading";
import { SplitFeatureCard } from "@/components/common/split-feature-card";
import { TagPill } from "@/components/common/tag-pill";
import { blogPageDefaults, type FeaturedArticleData } from "@/lib/sanity.blog-page";

type Props = { data?: FeaturedArticleData };

export function FeaturedArticleSection({ data }: Props) {
  const { leftCard, article } = data ?? blogPageDefaults.featuredArticle;

  return (
    <section className="relative bg-[#F7F7F2] py-24 md:py-28">
      <Container size="wide">
        <SplitFeatureCard
          left={
            <div className="bg-[#111416] p-5 lg:p-6">
              <div className="flex min-h-[350px] flex-col items-center justify-center rounded-[26px] bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),rgba(255,255,255,0)_42%),linear-gradient(180deg,#171B1D_0%,#111416_100%)] px-8 py-12 text-center">
                <SectionPill
                  label={leftCard.pill}
                  className="mb-8 bg-white text-[#00895F]"
                />

                <RichHeading
                  as="h2"
                  className="text-[42px] leading-[1.1] text-white md:text-[54px]"
                  parts={[
                    { text: leftCard.title.line1 },
                    {
                      text: leftCard.title.highlight,
                      highlight: true,
                      newLine: true,
                    },
                  ]}
                />

                <p className="mt-8 max-w-[560px] text-[21px] leading-[1.3] text-white/72">
                  {leftCard.description}
                </p>
              </div>
            </div>
          }
          right={
            <div className="flex min-h-[350px] items-center px-8 py-12 lg:px-12">
              <div className="max-w-[620px]">
                <h3 className="text-[30px] font-semibold leading-[1.15] tracking-[-0.035em] text-[#202126] md:text-[36px]">
                  {article.title}
                  <br />
                  <span className="text-[#00895F]">{article.highlight}</span>
                </h3>

                <p className="mt-7 text-[17px] leading-[1.45] text-[#626262]">
                  {article.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {article.tags.map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </div>
          }
        />
      </Container>
    </section>
  );
}
