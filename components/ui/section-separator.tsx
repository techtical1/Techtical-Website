import Image from "next/image";

type SectionSeparatorProps = {
  className?: string;
};

export function SectionSeparator({ className = "" }: SectionSeparatorProps) {
  return (
    <div
      className={`pointer-events-none mx-auto flex w-full justify-center ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/assets/common/section-separator.png"
        alt=""
        width={36}
        height={240}
        className="h-[120px] w-auto object-contain sm:h-[150px]"
      />
    </div>
  );
}
