import Image from "next/image";
import { CredibilityCard } from "./credibility-card";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";
import { homePageDefaults, type SanityCredibilityData } from "@/lib/sanity.home";

type Props = { data?: SanityCredibilityData };

export function CredibilitySection({ data }: Props) {
  const defaults = homePageDefaults.credibility;
  const logos = data?.logos?.length ? data.logos : defaults.logos;
  const stats = data?.stats?.length ? data.stats : defaults.stats;
  const projectCount = data?.projectCount ?? defaults.projectCount;
  const projectCountLabel = data?.projectCountLabel ?? defaults.projectCountLabel;
  const projectCountDesc = data?.projectCountDescription ?? defaults.projectCountDescription;
  const heading = data?.heading ?? defaults.heading;
  const headingHighlight = data?.headingHighlight ?? defaults.headingHighlight;
  const subheading = data?.subheading ?? defaults.subheading;
  const marketplaceLogo = data?.marketplaceLogo ?? defaults.marketplaceLogo;
  const ctaLabel = data?.ctaLabel ?? defaults.ctaLabel;
  const ctaHref = data?.ctaHref ?? defaults.ctaHref;

  return (
    <section className="flex min-h-screen items-center bg-[#FAFAF8] px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto flex w-full max-w-[70rem] flex-col items-center text-center">
        <div>
          <h2 className="text-[2.4rem] leading-tight font-semibold tracking-[-0.045em] text-[#262626] sm:text-[3rem] lg:text-[3.75rem]">
            {heading}{" "}
            <span className="font-serif font-normal text-[#007E5B] italic">{headingHighlight}</span>
          </h2>
          <p className="mt-4 text-[1.125rem] leading-normal text-[#656566] sm:text-[1.35rem]">
            {subheading}
          </p>
        </div>

        <div className="mt-12 w-full rounded-[2rem] border border-[#E8E8E5] bg-white px-6 py-10 shadow-[0_18px_60px_rgba(0,0,0,0.04)] sm:px-10">
          <Image
            src={marketplaceLogo.src}
            alt={marketplaceLogo.name}
            width={marketplaceLogo.width}
            height={marketplaceLogo.height}
            className="mx-auto h-auto w-[9rem] object-contain sm:w-[11rem]"
            unoptimized={marketplaceLogo.src.includes("cdn.sanity.io")}
          />
          <h3 className="mt-6 text-[1.75rem] leading-none font-semibold tracking-[-0.03em] text-[#262626] sm:text-[2rem]">
            <span className="text-[#00A66A]">{projectCount}</span> {projectCountLabel}
          </h3>
          <p className="mt-4 text-[1rem] leading-normal text-[#656566] sm:text-[1.125rem]">
            {projectCountDesc}
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-[54rem] flex-wrap items-center justify-center gap-x-10 gap-y-5 rounded-full bg-[#FAFAF8] px-8 py-5 shadow-[inset_0_-4px_0_#EFEFEF]">
            {logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-7 w-auto object-contain"
                unoptimized={logo.src.includes('cdn.sanity.io')}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid w-full flex-cols-1 gap-8 md:grid-cols-2">
          {stats.map((stat) => (
            <CredibilityCard
              key={stat.id}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>

        <div className="mt-10">
          <StrategyCallButton href={ctaHref}>{ctaLabel}</StrategyCallButton>
        </div>
      </div>
    </section>
  );
}
