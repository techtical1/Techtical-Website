import Image from "next/image";
import { trustedLogos } from "./trusted-teams-data";

const railSegmentWidth = 310;
const railTailWidth = 200;

export function TrustedTeamsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] px-6 pt-0 pb-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-[40px] leading-[1.1] font-semibold tracking-[-0.04em] text-[#242424] md:text-[56px]">
          Trusted by teams building
        </p>

        <p className="mt-2 font-serif text-[34px] leading-none tracking-[-0.03em] text-[#009F72] italic md:text-[48px]">
          serious products
        </p>
      </div>

      <div className="relative mx-auto mt-14 h-28 w-full max-w-[90rem] overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-28 bg-gradient-to-r from-[#FAFAF8] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-28 bg-gradient-to-l from-[#FAFAF8] to-transparent" />

        <div className="animate-trusted-logo-marquee absolute top-0 left-0 flex w-max">
          {[0, 1].map((segmentIndex) => (
            <div key={segmentIndex} className="relative h-28 w-[90.0625rem] shrink-0">
              {trustedLogos.map((logo, logoIndex) => (
                <div
                  key={`${logo.name}-${segmentIndex}`}
                  className="absolute top-2 flex h-16 w-[13.4375rem] -translate-x-1/2 items-center justify-center opacity-45 grayscale transition hover:opacity-80"
                  style={{
                    left:
                      logoIndex === trustedLogos.length - 1
                        ? `${logoIndex * railSegmentWidth + railTailWidth / 2}px`
                        : `${logoIndex * railSegmentWidth + 214 / 2}px`,
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-auto max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
