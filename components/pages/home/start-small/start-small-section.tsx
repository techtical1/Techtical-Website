import { SectionPill } from "@/components/ui/section-pill";
import { StartSmallCard } from "./start-small-card";
import { homePageDefaults, type SanityStartSmallData } from "@/lib/sanity.home";

type Props = { data?: SanityStartSmallData };

export function StartSmallSection({ data }: Props) {
  const defaults = homePageDefaults.startSmall;
  const pillLabel = data?.pillLabel ?? defaults.pillLabel;
  const headingPrefix = data?.headingPrefix ?? defaults.headingPrefix;
  const headingHighlight = data?.headingHighlight ?? defaults.headingHighlight;
  const displayCards = data?.cards?.length ? data.cards : defaults.cards;

  return (
    <section className="bg-[#FAFAF8] px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col items-center">
        <SectionPill label={pillLabel} />
        <h2 className="mt-8 text-center text-[2.75rem] leading-none font-semibold tracking-[-0.045em] text-[#262626] sm:text-[3.5rem] lg:text-[4rem]">
          {headingPrefix}{" "}
          <span className="font-serif font-normal text-[#007E5B] italic">{headingHighlight}</span>
        </h2>
        <div className="mt-16 grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {displayCards.map((card) => (
            <StartSmallCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
