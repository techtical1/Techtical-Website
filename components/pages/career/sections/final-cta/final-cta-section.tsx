import { SectionPill } from "@/components/ui/section-pill";
import { RichHeading } from "@/components/common/rich-heading";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { careerPageDefaults, type CareerFinalCtaData } from "@/lib/sanity.career";

type Props = { data?: CareerFinalCtaData };

export function FinalCtaSection({ data }: Props) {
  const finalCtaData = data ?? careerPageDefaults.finalCta;

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-[110px]">

      <div className="relative z-10 mx-auto flex max-w-[1680px] flex-col items-center text-center">
        <SectionPill className="mb-[58px]" label={finalCtaData.pill} />

        <RichHeading
          as="h2"
          parts={[...finalCtaData.headingParts]}
          className="max-w-[1540px] text-[72px] leading-[0.95] tracking-[-0.07em] md:text-[110px] lg:text-[120px]"
          highlightClassName="text-[82px] leading-[0.9] tracking-[-0.055em] md:text-[130px] lg:text-[120px]"
        />

        <p className="mt-[52px] max-w-[560px] text-[27px] font-medium leading-[1.18] tracking-[-0.045em] text-[#686B6A]">
          {finalCtaData.description}
        </p>

        <div className="mt-[58px] flex flex-col items-center justify-center gap-6 sm:flex-row">
          {finalCtaData.buttons.map((button) => (
            <StrategyCallButton
              key={button.label}
              href={button.href}
              variant={button.variant}
            >
              {button.label}
            </StrategyCallButton>
          ))}
        </div>
      </div>
    </section>
  );
}
