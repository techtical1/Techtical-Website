// components/common/challenge-link-card.tsx

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ChallengeLinkCardProps = {
  index: string;
  label: string;
  href?: string;
  className?: string;
};

export function ChallengeLinkCard({
  index,
  label,
  href = "#",
  className,
}: ChallengeLinkCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group flex h-[68px] items-center justify-between rounded-[14px] bg-white px-6",
        "transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      <div className="flex items-center gap-7">
        <span className="text-[16px] font-medium text-[#00895F]">
          {index}
        </span>

        <span className="text-[18px] font-semibold tracking-[-0.02em] text-[#202126]">
          {label}
        </span>
      </div>

      <ArrowRight
        size={22}
        className="text-[#202126] transition duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}