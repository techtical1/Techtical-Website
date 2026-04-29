// components/pages/home/work/work-hero-section.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { workHeroData } from "./work-hero-data";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";

export function WorkHeroSection() {
  const { pill, title, description, cta, year, visuals } = workHeroData;

  return (
    <section className="relative overflow-hidden bg-[#F7F7F2] py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="max-w-[560px]">

            <h1 className="text-[42px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#202126] md:text-[56px]">
              {title.line1}
              <br />
              {title.line2}{" "}
              <br/>
              <span className="font-serif font-normal italic text-[#00895F]">
                {title.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.6] text-[#5A5A5A]">
              {description}
            </p>

          <div className="relative mt-10 w-fit">
            <StrategyCallButton>{cta.label}</StrategyCallButton>

            <div className="absolute left-[270px] top-[74px] h-[120px] w-[220px]">
              <Image
                src={visuals.arrow}
                alt=""
                width={72}
                height={58}
                className="absolute left-0 top-0"
              />

              <span className="absolute left-[48px] top-[58px] whitespace-pre text-[18px] font-hand leading-[1.45] tracking-[-0.02em] text-[#00895F]">
                {cta.note}
              </span>
            </div>
          </div>
          </div>

          <div className="relative hidden h-[700px] lg:block">
            <Image
              src={visuals.path}
              alt=""
              width={400}
              height={700}
              className="absolute right-[80px] top-0 opacity-80"
            />

            <span className="absolute right-[120px] top-[40px] rotate-[-90deg] text-[14px] tracking-wider text-[#5A5A5A]">
              {year}
            </span>

            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute right-0 top-[120px] h-[220px] w-[340px] overflow-hidden rounded-[24px] shadow-xl"
            >
              <Image src={visuals.top} alt="" fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute right-[40px] top-[300px] h-[260px] w-[380px] overflow-hidden rounded-[28px] shadow-2xl"
            >
              <Image src={visuals.main} alt="" fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ y: 160, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute right-[20px] top-[580px] h-[180px] w-[300px] overflow-hidden rounded-[22px] shadow-lg"
            >
              <Image src={visuals.bottom} alt="" fill className="object-cover" />
            </motion.div>

            <div className="absolute bottom-0 left-0 h-[140px] w-full bg-gradient-to-t from-[#F7F7F2] to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
