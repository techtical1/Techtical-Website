"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { CapabilityMarquee } from "@/components/sections/hero/capability-marquee";
import { FounderTrustBar } from "@/components/sections/hero/founder-trust-bar";
import { HeroBackground } from "@/components/sections/hero/hero-background";
import { heroFade } from "@/components/sections/hero/hero-motion";

export function HeroSection() {
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

          <FounderTrustBar />

          <motion.h1
            className="mt-4 max-w-5xl text-center text-[3.25rem] leading-tight font-light text-balance text-[#262626] capitalize sm:text-[4.5rem] lg:text-[5.9375rem] lg:leading-tight"
            {...heroFade(0.22)}
          >
            We Build Products
            <span className="block font-bold">Founders Can Ship.</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-3xl text-lg leading-8 text-pretty text-[#666666] sm:text-xl"
            {...heroFade(0.32)}
          >
            We design apps, websites, and digital products that look right, work right, and help
            your business grow for founders building something worth using.
          </motion.p>

          <motion.div
            className="relative mt-10 flex w-full max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row"
            {...heroFade(0.42)}
          >
            <StrategyCallButton />
            <StrategyCallButton href="#work" variant="secondary">
              See Our Work
            </StrategyCallButton>
          </motion.div>

          <motion.p
            className="font-hand mt-6 w-full max-w-[37.3125rem] text-center text-[1.0625rem] leading-normal font-normal text-[#656566] sm:text-[1.125rem]"
            {...heroFade(0.52)}
          >
            Free 30-minute call. No pitch. We&apos;ll tell you exactly what your product needs
            &mdash; even if you don&apos;t hire us.
          </motion.p>
        </div>
      </div>

      <CapabilityMarquee />
    </section>
  );
}
