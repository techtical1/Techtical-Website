"use client";

import { motion } from "framer-motion";
import { ServicesHeroMetrics} from "./services-hero-metrics";
import { servicesHeroData } from "./services-hero-data";

export function ServicesHeroVisual() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[520px] lg:h-[520px]">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[8%] top-[22%] h-[190px] w-[190px] rounded-[34px] border border-black/5 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.08)]"
      >
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#E9FFF6]">
            <div className="h-7 w-7 rounded-lg bg-[#00E892]" />
          </div>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
            Strategy UX
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[6%] top-[12%] grid gap-3"
      >
        {servicesHeroData.metrics.slice(0, 2).map((metric) => (
          <ServicesHeroMetrics
            key={metric.label}
            value={metric.value}
            label={metric.label}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[18%] right-[18%] rounded-[22px] border border-black/5 bg-white/85 px-6 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <span className="h-8 w-8 rounded-full bg-[#F3D7FF]" />
            <span className="h-8 w-8 rounded-full bg-[#FFE8A3]" />
            <span className="h-8 w-8 rounded-full bg-[#D7FFF0]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#101113]">4.9 rating</p>
            <p className="text-xs text-black/45">Across product projects</p>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(0,232,146,0.18),transparent_58%)] blur-2xl" />
    </div>
  );
}