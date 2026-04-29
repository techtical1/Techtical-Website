// components/pages/home/work/work-hero-section.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionPill } from "@/components/ui/section-pill";
import { Container } from "@/components/ui/container";
import { workHeroData } from "./work-hero-data";

export function WorkHeroSection() {
  const { pill, title, description, cta, year, visuals } = workHeroData;

  return (
    <section className="relative overflow-hidden bg-[#F7F7F2] py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="max-w-[560px]">
            <SectionPill label={pill} className="mb-6" />

            <h1 className="text-[42px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#202126] md:text-[56px]">
              {title.line1}
              <br />
              {title.line2}{" "}
              <span className="font-serif font-normal italic text-[#00895F]">
                {title.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.6] text-[#5A5A5A]">
              {description}
            </p>

            <div className="relative mt-10 inline-block">
              <button className="rounded-full bg-[#00E892] px-8 py-4 text-[15px] font-medium text-[#0F0F0F] shadow-md transition-all hover:scale-[1.02]">
                {cta.label}
              </button>

              <span className="absolute left-full top-1/2 ml-6 -translate-y-1/2 whitespace-pre text-[14px] font-medium text-[#00895F]">
                {cta.note}
              </span>
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
