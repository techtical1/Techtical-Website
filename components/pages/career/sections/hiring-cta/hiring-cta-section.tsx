    import Image from "next/image";
    import { careerPageDefaults, type HiringCtaData } from "@/lib/sanity.career";
    import { HiringCtaNote } from "./hiring-cta-note";
    import { StrategyCallButton } from "@/components/ui/strategy-call-button";
    import { SectionPill } from "@/components/ui/section-pill";

    type Props = { data?: HiringCtaData };

    export function HiringCtaSection({ data }: Props) {
    const { badge, title, description, button, note, assets } = data ?? careerPageDefaults.hiringCta;

    return (
  <section className="w-full px-4 py-20">
  <div className="mx-auto max-w-[1536px]">
    <div className="relative overflow-hidden rounded-[50px] border border-[#D9E2DF] bg-white p-[10px] shadow-[0_24px_80px_rgba(15,15,15,0.08)]">
      <div className="relative overflow-hidden rounded-[40px] bg-[#F8FFFC] px-8 py-10 md:px-14 md:py-14 lg:min-h-[520px] lg:px-[52px] lg:py-[54px]">
        <div className="pointer-events-none absolute inset-0 z-0 rounded-[40px] bg-[linear-gradient(270deg,rgba(0,225,142,0)_-29.3%,#00E18E_100%)] opacity-[0.08]" />
            <div className="relative z-10 max-w-[820px]">
                <SectionPill label={badge} className="mb-2"/>

                <h2 className="max-w-[780px] text-[42px] font-regular leading-[1.12] tracking-[-0.045em] text-[#202126] md:text-[60px] lg:text-[54px]">
                {title}
                </h2>

                <div className="mt-6 max-w-[820px] space-y-5 text-[19px] font-regular leading-[1.28] tracking-[-0.025em] text-[#6B706F] md:text-[18px]">
                {description.map((item) => (
                    <p key={item}>{item}</p>
                ))}
                </div>

                <StrategyCallButton href={button.href} className="mt-8">{button.label} </StrategyCallButton>
            </div>

            <HiringCtaNote
                arrow={assets.arrow}
                line1={note.line1}
                line2={note.line2}
            />

            <Image
                src={assets.man}
                alt="Business development lead illustration"
                width={460}
                height={460}
                priority
                className="pointer-events-none absolute bottom-0 right-[32px] z-10 hidden h-[460px] w-[460px] max-w-[460px] object-contain md:block md:right-[78px]"
            />
     </div>
    </div>
  </div>
</section>
    );
    }
