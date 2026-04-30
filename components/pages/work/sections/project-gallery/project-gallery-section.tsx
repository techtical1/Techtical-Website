"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionPill } from "@/components/ui/section-pill";
import {
  projectCategories,
  projectGalleryData,
  projects,
  type ProjectCategory,
  type ProjectItem,
} from "./project-gallery-data";

function getCategoryCount(category: ProjectCategory) {
  if (category === "all") return projects.length;
  return projects.filter((project) => project.category === category).length;
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group border-b border-black/10 pb-7"
    >
      <div className="relative h-[360px] overflow-hidden rounded-[18px] bg-[#F3F3EE] md:h-[430px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-5">
        <div>
          <h3 className="text-[24px] leading-[1.2] font-semibold tracking-[-0.03em] text-[#202126]">
            {project.title}
          </h3>

          <p className="mt-2 text-[15px] leading-[1.5] text-[#6B6B6B]">{project.subtitle}</p>
        </div>

        <button
          aria-label={`Open ${project.title}`}
          className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/30 text-[#202126] transition duration-300 group-hover:border-[#00895F] group-hover:bg-[#00895F] group-hover:text-white"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.article>
  );
}

export function ProjectGallerySection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const { pill, title, description } = projectGalleryData;

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      <Container size="wide">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <SectionPill label={pill} className="mb-5" />

          <h2 className="text-[40px] leading-[1.08] font-semibold tracking-[-0.045em] text-[#202126] md:text-[56px]">
            {title.line1}
            <br />
            <span className="font-serif font-normal text-[#00895F] italic">{title.highlight}</span>
          </h2>

          <p className="mt-5 text-[17px] leading-[1.6] text-[#6B6B6B]">{description}</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={[
                  "rounded-full border px-5 py-3 text-[15px] leading-none transition duration-300",
                  isActive
                    ? "border-[#00895F] bg-[#00895F] text-white shadow-[0_10px_25px_rgba(0,137,95,0.22)]"
                    : "border-black/10 bg-white text-[#5A5A5A] hover:border-[#00895F]/40 hover:text-[#00895F]",
                ].join(" ")}
              >
                {category.label} ({getCategoryCount(category.id)}) +
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
