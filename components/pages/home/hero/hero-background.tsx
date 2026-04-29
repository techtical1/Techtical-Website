import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.74), rgba(255,255,255,0.2) 58%, #fbfbfa)",
        }}
      />
      <Image
        src="/assets/hero/vector-grid.svg"
        width={1168}
        height={1017}
        alt=""
        priority
        className="absolute top-0 left-1/2 h-[73rem] w-[72.9375rem] max-w-none -translate-x-1/2 object-fill"
        aria-hidden="true"
      />
      <Image
        src="/assets/hero/gradient-blur-1.svg"
        width={576}
        height={481}
        alt=""
        priority
        className="absolute top-0 left-0 h-auto w-[36rem] max-w-none -translate-x-px -translate-y-px opacity-95 sm:w-[40rem] lg:w-[45rem]"
        aria-hidden="true"
      />
      <Image
        src="/assets/hero/gradient-blur.svg"
        width={720}
        height={720}
        alt=""
        priority
        className="absolute top-[16rem] right-[-13rem] h-auto w-[45rem] max-w-none opacity-95 sm:top-[18rem] sm:right-[-10rem] lg:top-[15rem] lg:right-[1rem]"
        aria-hidden="true"
      />
    </div>
  );
}
