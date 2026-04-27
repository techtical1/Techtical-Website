"use client";

import { motion, useTransform, useMotionValue } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { CaseStudyCard } from "./case-study-card";
import type { CaseStudy } from "./case-studies-data";

type Props = {
  caseStudy: CaseStudy;
  index: number;
  totalSlides: number;
  scrollYProgress: MotionValue<number>;
};

export function CaseStudySlide({ caseStudy, index, totalSlides, scrollYProgress }: Props) {
  const center = index / (totalSlides - 1 || 1);

  const scale = useTransform(
    scrollYProgress,
    [
      Math.max(0, center - 0.22),
      Math.max(0, center - 0.06),
      center,
      Math.min(1, center + 0.06),
      Math.min(1, center + 0.22),
    ],
    [0.96, 1, 1, 1, 0.96],
  );

  const opacity = useMotionValue(1);

  return <CaseStudyCard caseStudy={caseStudy} scale={scale} opacity={opacity} />;
}
