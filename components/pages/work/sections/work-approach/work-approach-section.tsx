// components/sections/work/work-approach-section.tsx

"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionPill } from "@/components/ui/section-pill";
import { workApproachData } from "./work-approach-data";

export function WorkApproachSection() {
  const { pill, title, paragraphs, footerNote, logo } = workApproachData;

  return (
    <section className="relative overflow-hidden bg-white py-28">

      <Container size="default">
        <div className="flex flex-col items-center text-center">

          {/* Pill */}
          <SectionPill label={pill} className="mb-6" />

          {/* Title */}
          <h2 className="text-[40px] md:text-[56px] font-semibold leading-[1.15] tracking-[-0.04em] text-[#202126] max-w-[900px]">
            {title.line1}
            <br />
            {title.line2}{" "}
            <span className="font-serif italic font-normal text-[#00895F]">
              {title.highlight}
            </span>
          </h2>

                {/* Card Wrapper */}
        <div className="relative mt-16 w-[760px] max-w-full">

        {/* Textured shadow card behind */}
        <div
            className="
            absolute left-[-20px] top-[30px]
            h-full w-full
            rotate-[-2deg]
            rounded-[30px]
            opacity-70
            "style={{
            backgroundImage: "url('/assets/work-approach/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
        />

        {/* Main white card */}
        <div
            className="
            relative
            rotate-[-3deg]
            rounded-[30px]
            border border-black/10
            bg-white
            px-10 py-10
            text-left"
        >
            <div className="space-y-5 text-[15px] leading-[1.7] text-[#5A5A5A]">
            {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
            ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
            <span className="text-[16px] font-medium text-[#00895F]">
                {footerNote}
            </span>

            <Image
                src={logo}
                alt="Techtical Solution"
                width={140}
                height={40}
            />
            </div>
        </div>
        </div>

        </div>
      </Container>
    </section>
  );
}