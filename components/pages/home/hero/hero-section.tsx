"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { CapabilityMarquee } from "@/components/pages/home/hero/capability-marquee";
import { FounderTrustBar } from "@/components/pages/home/hero/founder-trust-bar";
import { HeroBackground } from "@/components/pages/home/hero/hero-background";
import { heroFade } from "@/components/pages/home/hero/hero-motion";
import { homePageDefaults, type SanityHeroData } from "@/lib/sanity.home";

type Props = { data?: SanityHeroData };

export function HeroSection({ data }: Props) {
  const defaults = homePageDefaults.hero;
  const headlineLine1 = data?.headlineLine1 ?? defaults.headlineLine1;
  const headlineBold = data?.headlineBold ?? defaults.headlineBold;
  const description = data?.description ?? defaults.description;
  const primaryCta = data?.primaryCtaLabel ?? defaults.primaryCtaLabel;
  const primaryCtaHref = data?.primaryCtaHref ?? defaults.primaryCtaHref;
  const secondaryCta = data?.secondaryCtaLabel ?? defaults.secondaryCtaLabel;
  const secondaryCtaHref = data?.secondaryCtaHref ?? defaults.secondaryCtaHref;
  const note = data?.handwrittenNote ?? defaults.handwrittenNote;
  const founderTrustText = data?.founderTrustText ?? defaults.founderTrustText;

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-x-hidden bg-[#fbfbfa]">
      <HeroBackground />

      <div className="container-page relative flex min-h-[calc(100svh-4.875rem)] flex-col">
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center pt-8 pb-8 text-center sm:pt-10 sm:pb-10 lg:-translate-y-8 lg:pt-8 lg:pb-6">
          <motion.div {...heroFade(0.05)}>
            <Image
              src="/assets/hero/techtical-solution-logo.svg"
              width={206}
              height={60}
              alt="Techtical Solution"
              priority
              className="h-auto w-[172px] sm:w-[206px]"
            />
          </motion.div>

          <FounderTrustBar avatars={data?.founderAvatars} text={founderTrustText} />

          <motion.h1
            className="mt-4 max-w-5xl text-center text-[3.25rem] leading-tight font-light text-balance text-[#262626] capitalize sm:text-[4.5rem] lg:text-[5.9375rem] lg:leading-tight"
            {...heroFade(0.22)}
          >
            {headlineLine1}
            <span className="block font-bold">{headlineBold}</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-3xl text-lg leading-8 text-pretty text-[#666666] sm:text-xl"
            {...heroFade(0.32)}
          >
            {description}
          </motion.p>

          <motion.div
            className="relative mt-10 flex w-full max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row"
            {...heroFade(0.42)}
          >
            <StrategyCallButton href={primaryCtaHref}>{primaryCta}</StrategyCallButton>
            <StrategyCallButton href={secondaryCtaHref} variant="secondary">
              {secondaryCta}
            </StrategyCallButton>
          </motion.div>

          <motion.p
            className="font-hand mt-6 w-full max-w-[37.3125rem] text-center text-[1.0625rem] leading-normal font-normal text-[#656566] sm:text-[1.125rem]"
            {...heroFade(0.52)}
          >
            {note}
          </motion.p>
        </div>
      </div>

      <CapabilityMarquee items={data?.marqueeItems} />
    </section>
  );
}
