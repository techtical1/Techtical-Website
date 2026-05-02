import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { homePageDefaults, type SanityFinalCtaData } from "@/lib/sanity.home";

type Props = { data?: SanityFinalCtaData };

export function FinalCtaSection({ data }: Props) {
  const defaults = homePageDefaults.finalCta;
  const eyebrow = data?.eyebrow ?? defaults.eyebrow;
  const line1 = data?.headlineLine1 ?? defaults.headlineLine1;
  const line2 = data?.headlineLine2 ?? defaults.headlineLine2;
  const line3 = data?.headlineLine3 ?? defaults.headlineLine3;
  const highlight = data?.headlineHighlight ?? defaults.headlineHighlight;
  const description = data?.description ?? defaults.description;
  const ctaLabel = data?.ctaLabel ?? defaults.ctaLabel;
  const ctaHref = data?.ctaHref ?? defaults.ctaHref;

  return (
    <section className="w-full bg-[#FAFAF8] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="w-full">
        <div className="relative w-full overflow-hidden rounded-[2rem] bg-[#131518] px-8 py-14 sm:px-12 lg:px-16 lg:py-20 xl:px-20">
          <div className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-[#00E18E]/20 blur-[90px]" />
          <div className="pointer-events-none absolute top-0 -right-20 h-96 w-96 rounded-full bg-[#00E18E]/20 blur-[110px]" />

          <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-[#00E18E]/20">
                  <span className="h-2 w-2 rounded-full bg-[#00E18E]" />
                </span>
                <p className="text-[0.85rem] font-semibold tracking-[0.45em] text-[#00E18E] uppercase">
                  {eyebrow}
                </p>
              </div>

              <h2 className="text-[3rem] leading-[1] tracking-[-0.05em] text-white sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem]">
                {line1} <br />
                {line2} <br />
                {line3}{" "}
                <span className="font-serif text-[#00E18E] italic">{highlight}</span>
              </h2>
            </div>

            <div className="max-w-[36rem] lg:justify-self-end">
              <p className="text-[1.2rem] leading-[1.5] text-white/70 sm:text-[1.35rem]">
                {description}
              </p>
              <div className="mt-8">
                <StrategyCallButton href={ctaHref}>{ctaLabel}</StrategyCallButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
