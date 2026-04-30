import { cn } from "@/lib/utils";

type TagPillProps = {
  label: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function TagPill({
  label,
  className,
  size = "md",
}: TagPillProps) {
  return (
   <span
  className={cn(
    "inline-flex w-fit items-center justify-center rounded-full bg-[#F5F5F5] text-[#262626] font-normal capitalize whitespace-nowrap",
    
    size === "sm" && "h-8 px-3 text-[14px]",
    size === "md" && "h-10 px-5 text-[16px]",
    size === "lg" && "h-12 px-6 text-[18px]",

    className
  )}
>
      {label}
    </span>
  );
}