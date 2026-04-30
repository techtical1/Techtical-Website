"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionPill } from "@/components/ui/section-pill";
import { featuredCaseData } from "./featured-case-data";

function MetricCard({
  value,
  label,
  icon,
  className,
}: {
  value: string;
  label: string;
  icon: string;
  className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={[
        "absolute hidden items-center gap-5 rounded-[20px] bg-white/95 lg:flex",
        "px-7 py-5 shadow-[0_22px_45px_rgba(0,0,0,0.26)] backdrop-blur-md",
        className,
      ].join(" ")}
    >
      <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-[16px] bg-[#F2F4F1]">
        <Image src={icon} alt="" width={34} height={34} />
      </div>

      <div>
        <div className="text-[40px] leading-none font-semibold tracking-[-0.04em] text-[#202126]">
          {value}
        </div>
        <div className="mt-1 text-[19px] leading-none text-[#5F5F5F]">{label}</div>
      </div>
    </motion.div>
  );
}

export function FeaturedCaseSection() {
  const { pill, title, labels, visuals, metrics } = featuredCaseData;

  return (
    <section className="bg-white py-24 md:py-28">
      <Container size="wide">
        <div className="relative min-h-[760px] overflow-hidden rounded-[38px] px-10 py-14 md:px-16 lg:px-20">
          {/* SOFT GREEN GLOW */}
          <div
            className="pointer-events-none absolute top-[-120px] left-1/2 z-[1]"
            style={{
              width: "90.125rem",
              height: "20.625rem",
              transform: "translateX(-50%)",
              background: "linear-gradient(180deg, #00E18E 0%, #00E18E 100%)",
              opacity: 0.4,
              filter: "blur(250px)",
            }}
          />
          {/* LEFT TITLE CONTENT */}
          <div className="relative z-[5] max-w-[620px]">
            <SectionPill label={pill} className="mb-10 bg-white text-[#00895F]" />

            <h2 className="text-[42px] leading-[1.08] font-semibold tracking-[-0.05em] text-[#202126] md:text-[64px]">
              {title.line1}
              <br />
              <span className="font-serif font-normal text-[#00895F] italic">
                {title.highlight}
              </span>
              <br />
              {title.line2}
            </h2>
          </div>

          {/* METRICS - moved lower so they do not overlap title */}
          {metrics.map((metric) => (
            <MetricCard key={metric.id} {...metric} />
          ))}

          {/* PHONES - controlled height and position */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="absolute right-[40px] bottom-0 z-[4] hidden h-[650px] w-[680px] lg:block"
          >
            <Image
              src={visuals.phones}
              alt="Before and after product redesign"
              fill
              className="object-contain object-bottom"
              priority
            />
          </motion.div>

          {/* BEFORE AFTER LABELS */}
          <span className="absolute top-[245px] right-[580px] z-[6] font-serif text-[30px] text-[#202126] italic">
            {labels.before}
          </span>

          <span className="absolute top-[245px] right-[110px] z-[6] font-serif text-[30px] text-[#202126] italic">
            {labels.after}
          </span>

          <Image
            src={visuals.arrow}
            alt=""
            width={125}
            height={65}
            className="absolute top-[75px] right-[325px] z-[6]"
          />

          {/* MOBILE STACK */}
          <div className="relative z-[7] mt-10 grid gap-4 lg:hidden">
            <div className="relative h-[420px]">
              <Image
                src={visuals.phones}
                alt="Before and after product redesign"
                fill
                className="object-contain object-bottom"
              />
            </div>

            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="flex items-center gap-4 rounded-[16px] bg-white p-4 shadow-md"
              >
                <Image src={metric.icon} alt="" width={32} height={32} />
                <div>
                  <div className="text-[24px] font-semibold text-[#202126]">{metric.value}</div>
                  <div className="text-[14px] text-[#666]">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
