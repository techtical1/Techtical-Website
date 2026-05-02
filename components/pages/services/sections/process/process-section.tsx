import { cn } from "@/lib/utils";
import { servicesPageDefaults, type ServicesProcessData } from "@/lib/sanity.services";

type ProcessSectionProps = {
  data?: ServicesProcessData;
  className?: string;
};

export function ProcessSection({ data, className }: ProcessSectionProps) {
  const section = data ?? servicesPageDefaults.process;

  return (
    <section className="bg-[#F7F7F5] px-6 py-24 md:px-10">
      <div
        className={cn(
          "mx-auto flex min-h-[770px] w-full max-w-[1440px] flex-col items-center overflow-hidden rounded-[40px] bg-[#141517] px-6 py-[88px] text-center md:px-10",
          className
        )}
      >
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-[44px] font-semibold leading-[1.05] tracking-[-0.055em] text-white md:text-[56px]">
            {section.titleMain}{" "}
            <span className="font-serif italic font-normal text-[#00E892]">
              {section.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-[20px] leading-[1.25] tracking-[-0.02em] text-white/68 md:text-[24px]">
            {section.description}
          </p>
        </div>

        {/* Empty animation area: place your fixed container animation here */}
        <div className="relative mt-16 flex min-h-[470px] w-full flex-1 items-center justify-center">
          {/* Replace this empty area with animation component */}
        </div>
      </div>
    </section>
  );
}
