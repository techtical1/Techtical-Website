import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionPill } from "@/components/ui/section-pill";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { TechticalLogo } from "@/components/brand/techtical-logo";
import { RichHeading } from "@/components/common/rich-heading";
import { careerPageDefaults, type CareerHeroData } from "@/lib/sanity.career";

type Props = { data?: CareerHeroData };

export function CareerHeroSection({ data }: Props) {
  const { pill, title, description, cta, processCard } = data ?? careerPageDefaults.hero;

  return (
    <section className="bg-[#F7F7F2] py-[72px] md:py-[96px]">
  <Container>
    <div className="mx-auto max-w-[1240px]">

      {/* LOGO */}
      <div className="mb-14 flex justify-center">
        <TechticalLogo variant="dark" type="logo" size="lg" />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 items-center gap-x-[80px] gap-y-12 lg:grid-cols-[1.15fr_0.85fr]">

        {/* LEFT */}
        <div className="max-w-[720px]">

          <SectionPill label={pill} className="mb-6" />

          <RichHeading
            as="h1"
            className="text-[40px] leading-[1.1] tracking-[-0.04em] md:text-[64px]"
            parts={[
              { text: title.line1 },
              { text: title.line2, newLine: true },
              { text: title.line3, newLine: true },
              { text: title.highlight, highlight: true },
            ]}
          />

          <p className="mt-6 text-[18px] leading-[1.5] text-[#666] md:text-[20px]">
            {description}
          </p>

          <div className="mt-10">
            <StrategyCallButton variant="primary">
              {cta.primary}
            </StrategyCallButton>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex h-full items-stretch">
        <div className="relative w-full overflow-hidden rounded-[28px]">

            <Image
            src={processCard.image}
            alt="Team working on product"
            fill
            className="object-cover"
            priority
            />

        </div>
        </div>

      </div>
    </div>
  </Container>
</section>
  );
}
