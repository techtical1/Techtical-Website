import Link from "next/link";
import { clarityCtaData } from "./clarity-cta-data";
import Image from "next/image";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { SectionPill } from "@/components/ui/section-pill";

export function ClarityCtaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-10">

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1440px] flex-col items-center justify-center text-center">
       <SectionPill className="mb-10" label={"Get Started"}></SectionPill>

        <h2 className="text-[92px] font-semibold leading-[0.92] tracking-[-0.07em] text-[#202126] md:text-[128px]">
          {clarityCtaData.titleTop}
          <br />
          <span className="font-serif italic font-normal tracking-[-0.04em] text-[#00895F]">
            {clarityCtaData.titleHighlight}
          </span>
        </h2>

        <p className="mt-12 max-w-[560px] text-[24px] leading-[1.2] tracking-[-0.03em] text-black/55">
          {clarityCtaData.description}
        </p>

        <StrategyCallButton className="mt-10">Book A Free Call</StrategyCallButton>
      </div>
    </section>
  );
}