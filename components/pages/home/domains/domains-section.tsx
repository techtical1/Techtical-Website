import { SectionPill } from "@/components/ui/section-pill";
import { DomainOrbit } from "./domain-orbit";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";


export function DomainsSection() {
  return (
    <section className="bg-[#FAFAF8] px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto overflow-hidden rounded-[2rem] bg-[#F2F2F3] px-6 py-14 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-12 lg:min-h-[34rem] lg:grid-cols-[minmax(0,38rem)_minmax(0,44rem)] lg:gap-16">
          <div className="flex min-w-0 flex-col items-start">
            <span>
              <SectionPill label="Industries" className="h-[42px] min-w-[140px] px-6 text-[0.875rem]" />
            </span>
                    
    

            <h2 className="mt-8 text-[2.5rem] font-semibold leading-none tracking-[-0.04em] text-[#262626] sm:text-[3rem] lg:text-[3.375rem]">
              We’ve Worked In Your
              <br />
              <span className="font-serif font-normal italic leading-[1.2] text-[#007E5B]">
                Domain Before
              </span>
            </h2>

            <p className="mt-8 max-w-[34rem] text-[1.125rem] leading-snug text-[#656566] sm:text-[1.35rem] lg:text-[1.5rem]">
              we’ve built and improved products across multiple industries -
              chances are we already understand how your space works.
            </p>

            <div className="mt-8">
              <StrategyCallButton>Explore Our Work</StrategyCallButton>
            </div>
          </div>

          <DomainOrbit />
        </div>
      </div>
    </section>
  );
}
