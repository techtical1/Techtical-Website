import Image from "next/image";

type HiringCtaNoteProps = {
  arrow: string;
  line1: string;
  line2: string;
};

export function HiringCtaNote({ arrow, line1, line2 }: HiringCtaNoteProps) {
  return (
    <div className="pointer-events-none absolute bottom-[72px] left-[40%] z-20 hidden translate-x-[-12%] items-center gap-5 lg:flex">
      <Image
        src={arrow}
        alt=""
        width={96}
        height={84}
        className="h-auto w-[96px]"
      />

      <p className="rotate-[-3deg] whitespace-pre-line font-hand text-[24px] font-regular leading-[1.28] tracking-[-0.02em] text-[#007A57]">
        {line1}
        {"\n"}
        {line2}
      </p>
    </div>
  );
}