import Image from "next/image";
import { SectionPill } from "@/components/ui/section-pill";
import { ServicesHeroMetrics } from "./services-hero-metrics";
import { servicesPageDefaults, type ServicesHeroData } from "@/lib/sanity.services";

type Props = { data?: ServicesHeroData };

export function ServicesHeroSection({ data }: Props) {
  const defaults = servicesPageDefaults.hero;
  const hero = data ?? defaults;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7F7F5] px-6 py-8 md:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[1280px] flex-col">
        {/* Row 1: Logo */}
        <div className="flex h-[110px] items-start justify-center">
          <Image
            src="/assets/common/dark logo.svg"
            alt="Techtical Solution"
            width={220}
            height={70}
            priority
          />
        </div>

        {/* Row 2: Hero Content + Stats */}
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-2">
          {/* Left 50% */}
          <div className="flex justify-start">
            <div className="max-w-[590px]">
              <SectionPill
                label={hero.eyebrow}
                className="mb-9 h-[42px] min-w-[140px] py-3 text-[0.875rem]"
              />

              <h1 className="text-[58px] font-semibold leading-[1.05] tracking-[-0.055em] text-[#202126] md:text-[76px]">
                {hero.titleLine1}
                <br />
                <span className="font-serif italic font-normal tracking-[-0.04em] text-[#00895F]">
                  {hero.titleHighlight}
                </span>
                <br />
                {hero.titleLine3}
              </h1>

              <p className="mt-8 max-w-[570px] text-[22px] leading-[1.35] tracking-[-0.025em] text-black/58">
                {hero.description}
              </p>
            </div>
          </div>

          {/* Right 50% */}
          <div className="relative flex h-full min-h-[560px] items-center justify-center">
            <ServicesHeroMetrics data={hero} />
          </div>
        </div>
      </div>
    </section>
  );
}
