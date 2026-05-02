import Image from "next/image";
import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import type { SanityCaseStudyItem } from "@/lib/sanity.home";

type CaseStudyCardProps = {
  caseStudy: SanityCaseStudyItem;
  scale: MotionValue<number>;
  opacity: MotionValue<number> | number;
};

export function CaseStudyCard({ caseStudy, scale, opacity }: CaseStudyCardProps) {
  return (
    <motion.article
      style={{ scale, opacity }}
      className="grid h-full w-[94vw] max-w-[1480px] shrink-0 grid-cols-1 items-center gap-10 px-8 py-8 md:grid-cols-[52%_38%] md:justify-center md:px-14"
    >
      <div className="relative h-[42vh] w-full overflow-hidden rounded-[2rem] md:h-[58vh]">
        <Image src={caseStudy.image} alt={caseStudy.title} fill className="object-cover" priority />
      </div>

      <div className="flex w-full max-w-139.5 flex-col items-start">
        <span className="flex h-[1.66813rem] w-fit items-center justify-center rounded-[6.25rem] bg-[rgba(0,232,146,0.12)] px-[0.625rem] pt-[0.375rem] pb-[0.41813rem] text-[0.75rem] leading-none font-medium text-[#00E892]">
          {caseStudy.eyebrow}
        </span>

        <h2 className="mt-8 w-full text-[3.375rem] leading-none font-bold tracking-[-0.04em] text-[#FAFAF8] capitalize">
          {caseStudy.title}
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="flex h-12 items-center justify-center gap-1.5 rounded-[62.4375rem] border border-[rgba(250,250,248,0.14)] bg-[rgba(250,250,248,0.06)] px-4 py-3 text-[1rem] font-normal text-[#D8D8D8]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative mt-10 h-auto w-full rounded-[2.25rem] border border-[rgba(250,250,248,0.08)] bg-[rgba(250,250,248,0.06)] px-8 pt-24 pb-8 md:h-74.75 md:w-139.5">
          <svg
            className="absolute top-0 left-8 h-[4.87381rem] w-[3.26544rem]"
            viewBox="0 0 53 79"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M20.5 1C8.7 10.7 1 24.4 1 39.2C1 53.7 8.9 63 20.1 63C29.4 63 36.2 56.4 36.2 47.5C36.2 39.5 30.6 33.5 22.7 33.5C20.6 33.5 18.7 33.9 17.2 34.6C18.4 24.2 24.2 14.3 33.7 6.5L20.5 1Z"
              stroke="#00E18E"
              strokeWidth="1"
            />
            <path
              d="M49.5 1C37.7 10.7 30 24.4 30 39.2C30 53.7 37.9 63 49.1 63C58.4 63 65.2 56.4 65.2 47.5C65.2 39.5 59.6 33.5 51.7 33.5C49.6 33.5 47.7 33.9 46.2 34.6C47.4 24.2 53.2 14.3 62.7 6.5L49.5 1Z"
              stroke="#00E18E"
              strokeWidth="1"
            />
          </svg>

          <p className="text-[#FAFAF8]capitalize w-full text-[1.5rem] leading-normal font-semibold md:w-117">
            {caseStudy.quote}
          </p>

          <div className="mt-10 flex items-center gap-5">
            <div className="relative h-15.5 w-15.5 overflow-hidden rounded-[3.875rem] bg-[#D9D9D9]">
              <Image
                src={caseStudy.author.avatar}
                alt={caseStudy.author.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-[1.375rem] leading-normal font-medium text-[#FAFAF8] capitalize">
                {caseStudy.author.name}
              </p>
              <p className="text-[1rem] leading-6 font-normal text-[#B7B7B7]">
                {caseStudy.author.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
