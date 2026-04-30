// components/common/floating-card.tsx

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FloatingCardProps = {
  children: React.ReactNode;
  className?: string;
  innerBorder?: boolean;
  delay?: number;
};

export function FloatingCard({
  children,
  className,
  innerBorder = true,
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={cn(
        "relative rounded-[26px] border border-black/10 bg-white/80 p-6 shadow-[0_22px_55px_rgba(0,0,0,0.12)] backdrop-blur-xl",
        className
      )}
    >
      {innerBorder && (
        <div className="pointer-events-none absolute inset-[12px] rounded-[20px] border border-black/5" />
      )}

      <div className="relative z-[2]">{children}</div>
    </motion.div>
  );
}