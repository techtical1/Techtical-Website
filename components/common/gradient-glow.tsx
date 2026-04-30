// components/common/gradient-glow.tsx

import { cn } from "@/lib/utils";

type GradientGlowProps = {
  className?: string;
  color?: string;
  opacity?: number;
  blur?: number;
};

export function GradientGlow({
  className,
  color = "#00E892",
  opacity = 0.22,
  blur = 120,
}: GradientGlowProps) {
  return (
    <div
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={{
        background: color,
        opacity,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}