"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { caseStudies } from "./case-studies-data";
import { CaseStudySlide } from "./case-study-slide";

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const totalSlides = caseStudies.length;
  const transitionCount = totalSlides - 1;

  const SCROLL_PER_SLIDE = 520;
  const scrollDistance = transitionCount * SCROLL_PER_SLIDE;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${transitionCount * 100}%`]);

  return (
    <section ref={sectionRef} className="relative bg-[#FAFAF8]">
      <div className="relative" style={{ height: `calc(${transitionCount * 100}vh + 1px)` }}>
        <div className="sticky top-16 flex h-[76vh] items-center overflow-hidden">
          <div className="mx-auto h-full w-[94vw] max-w-[1480px] overflow-hidden rounded-[2rem] bg-[#0F0F0F] shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <motion.div style={{ x }} className="flex h-full">
              {caseStudies.map((caseStudy, index) => (
                <CaseStudySlide
                  key={caseStudy.title}
                  caseStudy={caseStudy}
                  index={index}
                  totalSlides={totalSlides}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
