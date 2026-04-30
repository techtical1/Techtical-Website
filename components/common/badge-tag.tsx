// components/common/badge-tag.tsx

import { cn } from "@/lib/utils";

export function BadgeTag({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-[#F1F1EF] px-4 py-1.5 text-[14px] font-medium text-[#202126]",
        className
      )}
    >
      {label}
    </span>
  );
}