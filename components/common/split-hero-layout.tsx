// components/common/split-hero-layout.tsx

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SplitHeroLayoutProps = {
  top?: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export function SplitHeroLayout({
  top,
  left,
  right,
  className,
  contentClassName,
}: SplitHeroLayoutProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#F7F7F2] py-20 md:py-24",
        className
      )}
    >
      <Container size="wide">
        {top}

        <div
          className={cn(
            "grid min-h-[640px] grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]",
            contentClassName
          )}
        >
          {left}
          {right}
        </div>
      </Container>
    </section>
  );
}