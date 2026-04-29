import Image from "next/image";
import { credibilityLogos, credibilityStats } from "./credibility-data";
import { CredibilityCard } from "./credibility-card";
import { StrategyCallButton } from "@/components/ui/strategy-call-button";

export function CredibilitySection() {
  return (
    <section className="flex min-h-screen items-center bg-[#FAFAF8] px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto flex w-full max-w-[70rem] flex-col items-center text-center">
        <div>
          <h2 className="text-[2.4rem] leading-tight font-semibold tracking-[-0.045em] text-[#262626] sm:text-[3rem] lg:text-[3.75rem]">
            From fiverr projects to real{" "}
            <span className="font-serif font-normal text-[#007E5B] italic">clarity</span>
          </h2>

          <p className="mt-4 text-[1.125rem] leading-normal text-[#656566] sm:text-[1.35rem]">
            Real products, real teams — delivering clarity, structure, and results.
          </p>
        </div>

        <div className="mt-12 w-full rounded-[2rem] border border-[#E8E8E5] bg-white px-6 py-10 shadow-[0_18px_60px_rgba(0,0,0,0.04)] sm:px-10">
          <Image
            src="/assets/credibility/fiverr.svg"
            alt="Fiverr"
            width={180}
            height={60}
            className="mx-auto h-auto w-[9rem] object-contain sm:w-[11rem]"
          />

          <h3 className="mt-6 text-[1.75rem] leading-none font-semibold tracking-[-0.03em] text-[#262626] sm:text-[2rem]">
            <span className="text-[#00A66A]">400+</span> Projects Delivered
          </h3>

          <p className="mt-4 text-[1rem] leading-normal text-[#656566] sm:text-[1.125rem]">
            Across industries, solving real product problems.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-[54rem] flex-wrap items-center justify-center gap-x-10 gap-y-5 rounded-full bg-[#FAFAF8] px-8 py-5 shadow-[inset_0_-4px_0_#EFEFEF]">
            {credibilityLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-7 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid w-full flex-cols-1 gap-8 md:grid-cols-2">
          {credibilityStats.map((stat) => (
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
          <StrategyCallButton href="#work">View Fiverr Profile</StrategyCallButton>
        </div>
      </div>
    </section>
  );
}
