// components/common/split-feature-card.tsx

import { cn } from "@/lib/utils";

type SplitFeatureCardProps = {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
};

export function SplitFeatureCard({
  left,
  right,
  className,
}: SplitFeatureCardProps) {
  return (
    <article
      className={cn(
        "mx-auto grid w-full max-w-[1320px] grid-cols-1 overflow-hidden rounded-[34px] border border-black/10 bg-white lg:grid-cols-[0.95fr_1fr]",
        className
      )}
    >
      {left}
      {right}
    </article>
  );
}