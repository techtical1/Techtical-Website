import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { SectionPill } from "@/components/ui/section-pill";
import { servicesPageDefaults, type ServicesClarityCtaData } from "@/lib/sanity.services";

type Props = { data?: ServicesClarityCtaData };

export function ClarityCtaSection({ data }: Props) {
  const section = data ?? servicesPageDefaults.clarityCta;

  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-10">

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1440px] flex-col items-center justify-center text-center">
       <SectionPill className="mb-10" label={section.pill}></SectionPill>

        <h2 className="text-[92px] font-semibold leading-[0.92] tracking-[-0.07em] text-[#202126] md:text-[128px]">
          {section.titleTop}
          <br />
          <span className="font-serif italic font-normal tracking-[-0.04em] text-[#00895F]">
            {section.titleHighlight}
          </span>
        </h2>

        <p className="mt-12 max-w-[560px] text-[24px] leading-[1.2] tracking-[-0.03em] text-black/55">
          {section.description}
        </p>

        <StrategyCallButton href={section.ctaHref} className="mt-10">
          {section.ctaLabel}
        </StrategyCallButton>
      </div>
    </section>
  );
}
