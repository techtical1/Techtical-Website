import Image from "next/image";
import { cn } from "@/lib/utils";

type BenefitCardProps = {
  icon: string;
  title: string;
  description: string;

  variant?: "default" | "tilted" | "flat";
  size?: "md" | "lg";

  className?: string;
};

export function BenefitCard({
  icon,
  title,
  description,
  variant = "default",
  size = "md",
  className,
}: BenefitCardProps) {
  return (
    <article
      className={cn(
        // Base
        "group flex w-full items-center gap-6 rounded-[22px] border border-black/10 bg-white transition-all duration-500",

        // Shadow system (premium feel)
        "shadow-[0_12px_30px_rgba(0,0,0,0.08)]",
        "hover:-translate-y-[4px] hover:shadow-[0_24px_60px_rgba(0,0,0,0.14)]",

        // Size
        size === "md" && "px-6 py-5",
        size === "lg" && "px-7 py-6",

        // Variants
        variant === "tilted" && "rotate-[-2deg] hover:rotate-0",
        variant === "flat" && "shadow-none",

        className
      )}
    >
      {/* ICON BOX */}
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-[18px] icon-surface transition duration-500",
          "group-hover:scale-105",
          size === "md" && "h-[74px] w-[74px]",
          size === "lg" && "h-[80px] w-[80px]"
        )}
      >
        <Image src={icon} alt="" width={40} height={40} />
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-[22px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#202126] md:text-[24px]">
          {title}
        </h3>

        <p className="mt-2 text-[16px] leading-[1.4] text-[#666666] md:text-[18px]">
          {description}
        </p>
      </div>
    </article>
  );
}