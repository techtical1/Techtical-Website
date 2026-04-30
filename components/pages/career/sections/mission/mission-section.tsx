import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionPill } from "@/components/ui/section-pill";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { TechticalLogo } from "@/components/brand/techtical-logo";
import { RichHeading } from "@/components/common/rich-heading";
import { missionData } from "./mission-data";

export function MissionSection() {
  const { pill, title, subtitle, card, decor } = missionData;

  return (
    <section className="relative overflow-hidden bg-[#F7F7F2] py-24 md:py-28">
      <Container size="wide">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center text-center">
          <SectionPill label={pill} className="mb-4 bg-white text-[#00895F]" />

          <RichHeading
            as="h2"
            className="text-[44px] md:text-[54px]"
            parts={[
              { text: title.normal },
              { text: title.highlight, highlight: true },
            ]}
          />

          <p className="mt-1 text-[24px] leading-[1.3] tracking-[-0.02em] text-[#666666]">
            {subtitle}
          </p>
        </div>

        <div className="relative mx-auto mt-4 h-[620px] max-w-[1320px]">
          {/* Decorative Clouds / Tree */}
          <Image
            src={decor.topLeft}
            alt=""
            width={170}
            height={90}
            className="absolute left-[30px] top-[70px] z-[1] hidden md:block"
          />

          <Image
            src={decor.leftMiddle}
            alt=""
            width={260}
            height={150}
            className="absolute left-[45px] top-[305px] z-[3] hidden md:block"
          />

          <Image
            src={decor.topRight}
            alt=""
            width={190}
            height={100}
            className="absolute right-[115px] top-[120px] z-[3] hidden md:block"
          />

          <Image
            src={decor.tree}
            alt=""
            width={330}
            height={420}
            className="absolute bottom-[0px] right-[5px] z-[1] hidden md:block"
          />

          {/* Main tilted card */}
          <div className="absolute left-1/2 top-[30px] z-[2] w-[760px] max-w-[calc(100%-32px)] -translate-x-1/2 rotate-[-3deg] rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_24px_70px_rgba(0,0,0,0.12)] md:w-[860px]">
            <div className="rounded-[22px] border border-[#00E892]/35 px-10 py-10 md:px-14 md:py-12">
              <h3 className="font-serif text-[42px] italic leading-[1.08] tracking-[-0.03em] text-[#202126] md:text-[58px]">
                {card.title}
              </h3>

              <div className="mt-9 max-w-[760px] space-y-7 text-left text-[20px] leading-[1.35] tracking-[-0.02em] text-[#666666] md:text-[23px]">
                {card.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <TechticalLogo variant="dark" type="logo" size="lg" />

                <StrategyCallButton variant="primary">
                  {card.cta}
                </StrategyCallButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}