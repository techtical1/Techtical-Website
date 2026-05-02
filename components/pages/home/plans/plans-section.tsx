import Image from "next/image";
import { PlanCard } from "./plan-card";
import { SectionPill } from "@/components/ui/section-pill";
import { homePageDefaults, type SanityPlanItem, type SanityPlansData } from "@/lib/sanity.home";

type Props = { data?: SanityPlansData };

export function PlansSection({ data }: Props) {
  const defaults = homePageDefaults.plans;
  const displayPlans: SanityPlanItem[] = data?.plans?.length ? data.plans : defaults.plans;
  const pillLabel = data?.pillLabel ?? defaults.pillLabel;
  const headingLine1 = data?.headingLine1 ?? defaults.headingLine1;
  const headingLine2Prefix = data?.headingLine2Prefix ?? defaults.headingLine2Prefix;
  const headingHighlight = data?.headingHighlight ?? defaults.headingHighlight;
  const description = data?.description ?? defaults.description;
  const bottomText = data?.bottomText ?? defaults.bottomText;

  return (
    <section className="bg-[#FAFAF8] px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,48rem)] xl:grid-cols-[minmax(0,28rem)_minmax(0,58rem)]">
        <div className="flex min-w-0 flex-col">
          <SectionPill label={pillLabel} className="h-[42px] min-w-[140px] px-6 text-[0.875rem]" />
          <h2 className="mt-8 text-[3rem] font-semibold leading-[1.12] tracking-[-0.05em] text-[#262626] sm:text-[4rem] lg:text-[4.5rem]">
            {headingLine1}
            <br />
            {headingLine2Prefix}{" "}
            <span className="font-serif font-normal italic text-[#007E5B]">{headingHighlight}</span>
          </h2>
          <p className="mt-8 max-w-[28rem] text-[1.35rem] leading-snug text-[#656566]">
            {description}
          </p>
          <p className="mt-auto pt-24 max-w-[30rem] text-[1.35rem] leading-snug text-[#262626]">
            {bottomText}
          </p>
          <div className="mt-8">
            <Image
              src="/assets/hero/techtical-solution-logo.svg"
              width={206}
              height={60}
              alt="Techtical Solution"
              priority
              className="h-auto w-[172px] sm:w-[206px]"
            />
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-0">
          {displayPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={index === 0 ? "relative z-10 lg:translate-x-[0.75rem]" : "relative z-20"}
            >
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
