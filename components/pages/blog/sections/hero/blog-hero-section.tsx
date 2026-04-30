"use client";

import { TechticalLogo } from "@/components/brand/techtical-logo";
import { SectionPill } from "@/components/ui/section-pill";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { GradientGlow } from "@/components/common/gradient-glow";
import { RichHeading } from "@/components/common/rich-heading";
import { SplitHeroLayout } from "@/components/common/split-hero-layout";
import { InsightStatCard } from "@/components/common/insight-stat-card";
import { blogHeroData } from "./blog-hero-data";

export function BlogHeroSection() {
  const { pill, title, description, cta, cards } = blogHeroData;

  return (
    <SplitHeroLayout
      className="bg-[#F7F7F2]"
      top={
        <>
          <GradientGlow className="left-[-140px] top-[80px] h-[420px] w-[420px]" />
          <GradientGlow className="right-[-120px] bottom-[40px] h-[430px] w-[430px]" />

          <div className="mx-auto mb-14 flex justify-center">
            <TechticalLogo variant="dark" type="logo" size="lg" />
          </div>
        </>
      }
      left={
        <div className="relative z-[5] max-w-[720px]">
          <SectionPill label={pill} className="mb-8 bg-white text-[#00895F]" />

          <RichHeading
            className="text-[48px] md:text-[72px]"
            parts={[
              { text: title.line1 },
              { text: title.line2, newLine: true },
              { text: title.highlight, highlight: true },
              { text: title.line3, highlight: true, newLine: true },
            ]}
          />

          <p className="mt-8 max-w-[680px] text-[20px] leading-[1.45] text-[#5F5F5F]">
            {description}
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <StrategyCallButton variant="primary">
              {cta.primary}
            </StrategyCallButton>

            <StrategyCallButton variant="secondary">
              {cta.secondary}
            </StrategyCallButton>
          </div>
        </div>
      }
      right={
        <div className="relative hidden h-[560px] lg:block">
          <InsightStatCard
            type="brands"
            title={cards.trusted.title}
            description={cards.trusted.text}
            brands={cards.trusted.brands}
            badge={cards.trusted.badge}
            className="absolute left-[120px] top-[10px] h-[260px] w-[330px] rotate-[-5deg]"
          />

          <InsightStatCard
            type="image"
            title={cards.growth.title}
            description={cards.growth.text}
            image={cards.growth.vector}
            className="absolute left-[150px] top-[290px] h-[250px] w-[325px] rotate-[5deg]"
            delay={0.2}
          />

           <InsightStatCard
            type="avatars"
            title={cards.clients.title}
            description={cards.clients.text}
            image={cards.clients.image}
            className="absolute right-[20px] top-[115px] h-[245px] w-[315px] rotate-[10deg]"
            delay={0.1}
          />

        </div>
      }
    />
  );
}