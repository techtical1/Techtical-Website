import { urlFor } from "@/lib/sanity.image";
import { sanityFetch } from "@/lib/sanity.queries";
import type { SanityImageSource } from "@sanity/image-url";

type SanityImg = SanityImageSource | null | undefined;

type RawWorkPage = {
  hero?: Partial<WorkHeroData> & {
    visuals?: Partial<Record<keyof WorkHeroData["visuals"], SanityImg>>;
  };
  approach?: Partial<WorkApproachData> & {
    logo?: SanityImg;
  };
  gallery?: Partial<ProjectGalleryData> & {
    projects?: (Partial<ProjectItem> & { image?: SanityImg })[];
  };
  featuredCase?: Partial<FeaturedCaseData> & {
    visuals?: Partial<Record<keyof FeaturedCaseData["visuals"], SanityImg>>;
    metrics?: (Partial<FeaturedCaseMetric> & { icon?: SanityImg })[];
  };
};

const workPageQuery = `
  *[_type == "workPage"][0] {
    hero {
      pill, title, description, cta, year,
      visuals {
        arrow { asset-> },
        path { asset-> },
        top { asset-> },
        main { asset-> },
        bottom { asset-> }
      }
    },
    approach {
      pill, title, paragraphs, footerNote, logo { asset-> }
    },
    gallery {
      pill, title, description,
      categories[] { id, label },
      projects[] { id, title, subtitle, image { asset-> }, category, featured }
    },
    featuredCase {
      pill, title, labels,
      visuals { phones { asset-> }, arrow { asset-> } },
      metrics[] { id, value, label, icon { asset-> }, className }
    }
  }
`;

export type WorkHeroData = {
  pill: string;
  title: {
    line1: string;
    line2: string;
    highlight: string;
  };
  description: string;
  cta: {
    label: string;
    note: string;
  };
  year: string;
  visuals: {
    arrow: string;
    path: string;
    top: string;
    main: string;
    bottom: string;
  };
};

export type WorkApproachData = {
  pill: string;
  title: {
    line1: string;
    line2: string;
    highlight: string;
  };
  paragraphs: string[];
  footerNote: string;
  logo: string;
};

export type ProjectCategory =
  | "all"
  | "saas"
  | "mobile"
  | "web"
  | "dashboard"
  | "design-system";

export type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: Exclude<ProjectCategory, "all">;
  featured?: boolean;
};

export type ProjectGalleryData = {
  pill: string;
  title: {
    line1: string;
    highlight: string;
  };
  description: string;
  categories: {
    id: ProjectCategory;
    label: string;
  }[];
  projects: ProjectItem[];
};

export type FeaturedCaseMetric = {
  id: string;
  value: string;
  label: string;
  icon: string;
  className: string;
};

export type FeaturedCaseData = {
  pill: string;
  title: {
    line1: string;
    highlight: string;
    line2: string;
  };
  labels: {
    before: string;
    after: string;
  };
  visuals: {
    phones: string;
    arrow: string;
  };
  metrics: FeaturedCaseMetric[];
};

export type WorkPageData = {
  hero?: WorkHeroData;
  approach?: WorkApproachData;
  gallery?: ProjectGalleryData;
  featuredCase?: FeaturedCaseData;
};

export const workPageDefaults: Required<WorkPageData> = {
  hero: {
    pill: "Our Work",
    title: {
      line1: "UI/UX case studies",
      line2: "that boost",
      highlight: "retention & growth",
    },
    description:
      "Explore real projects where we solved UX problems, improved usability, and delivered measurable results.",
    cta: {
      label: "Book A Free Call",
      note: "Have Something\nSimilar In Mind?",
    },
    year: "2019",
    visuals: {
      arrow: "/assets/work/arrow.png",
      path: "/assets/work/path.png",
      top: "/assets/work/case-1.png",
      main: "/assets/work/case-main.png",
      bottom: "/assets/work/case-3.png",
    },
  },
  approach: {
    pill: "Our Approach",
    title: {
      line1: "We Design And Build Digital",
      line2: "Products That",
      highlight: "drive growth.",
    },
    paragraphs: [
      "We design and build digital products for startups and SaaS companies.",
      "From UX audits to full product design systems, our work focuses on improving usability, increasing engagement, and helping teams ship faster.",
      "Our expertise in UI UX design, SaaS UX, and web app design helps businesses create scalable, high-performing digital experiences that drive growth and long-term success.",
    ],
    footerNote: "Built With Clarity,",
    logo: "/assets/hero/techtical-solution-logo.svg",
  },
  gallery: {
    pill: "Selected Work",
    title: {
      line1: "Products used by real teams,",
      highlight: "solving real problems",
    },
    description: "Each Project Started With Confusion - And Ended With Clarity",
    categories: [
      { id: "all", label: "All" },
      { id: "saas", label: "SaaS Products" },
      { id: "mobile", label: "Mobile Apps" },
      { id: "web", label: "Web Applications" },
      { id: "dashboard", label: "Dashboards" },
      { id: "design-system", label: "Design Systems" },
    ],
    projects: [
      {
        id: "buildflow",
        title: "BuildFlow - SaaS Productivity App Design",
        subtitle: "Low User Engagement And Unclear Onboarding",
        image: "/assets/projects/buildflow.png",
        category: "saas",
        featured: true,
      },
      {
        id: "design-system",
        title: "Design System - Scalable UI Framework",
        subtitle: "Inconsistent UI And Slow Development Cycles",
        image: "/assets/projects/design-system.png",
        category: "design-system",
      },
      {
        id: "heppins-snap",
        title: "Heppins Snap - Social Rewards App UX",
        subtitle: "Low App Installs And Poor User Activation",
        image: "/assets/projects/heppins-snap.png",
        category: "mobile",
      },
      {
        id: "style-guide",
        title: "Design Style Guide - Component System",
        subtitle: "Design Inconsistency And Reusable Component Issues",
        image: "/assets/projects/style-guide.png",
        category: "design-system",
      },
      {
        id: "agenai",
        title: "AgenAI - AI Team Workflow Platform",
        subtitle: "Manual Workflows And Inefficient Task Execution",
        image: "/assets/projects/agenai.png",
        category: "saas",
      },
      {
        id: "edtech",
        title: "Educational Language Learning - EdTech UX Platform",
        subtitle: "Low Learning Engagement And Inconsistent Progress",
        image: "/assets/projects/edtech.png",
        category: "web",
      },
      {
        id: "insightflow",
        title: "InsightFlow - Data Analytics Dashboard",
        subtitle: "Scattered Data And Lack Of Actionable Insights",
        image: "/assets/projects/insightflow.png",
        category: "dashboard",
      },
      {
        id: "food-delivery",
        title: "Food Delivery App - UX Optimization",
        subtitle: "Slow Ordering Experience And Low Customer Satisfaction",
        image: "/assets/projects/food-delivery.png",
        category: "mobile",
      },
    ],
  },
  featuredCase: {
    pill: "Featured Case",
    title: {
      line1: "From Poor UX To",
      highlight: "high-converting",
      line2: "Product Experiences",
    },
    labels: {
      before: "Before",
      after: "After",
    },
    visuals: {
      phones: "/assets/featured-case/before-after-demo.png",
      arrow: "/assets/featured-case/Vector.svg",
    },
    metrics: [
      {
        id: "engagement",
        value: "+40%",
        label: "Engagement",
        icon: "/assets/featured-case/engagement.svg",
        className: "left-[80px] bottom-[210px] rotate-[-12deg] z-[7] w-[315px]",
      },
      {
        id: "turnaround",
        value: "48 Hr",
        label: "Fast Turnaround",
        icon: "/assets/featured-case/time.svg",
        className: "left-[405px] bottom-[245px] rotate-[1deg] z-[6] w-[330px]",
      },
      {
        id: "countries",
        value: "10+",
        label: "Countries Served",
        icon: "/assets/featured-case/Countries.svg",
        className: "left-[255px] bottom-[90px] rotate-[8deg] z-[8] w-[345px]",
      },
    ],
  },
};

function imageUrl(image: SanityImg, fallback: string) {
  return urlFor(image)?.url() ?? fallback;
}

function mergeObject<T extends Record<string, unknown>>(fallback: T, value?: Partial<T>) {
  return { ...fallback, ...(value ?? {}) } as T;
}

function isProjectCategory(category: unknown): category is ProjectItem["category"] {
  return (
    category === "saas" ||
    category === "mobile" ||
    category === "web" ||
    category === "dashboard" ||
    category === "design-system"
  );
}

function transformWorkPage(raw: RawWorkPage | null): WorkPageData {
  if (!raw) return workPageDefaults;

  const defaults = workPageDefaults;

  const projects = raw.gallery?.projects?.length
    ? raw.gallery.projects.map((project, index) => {
        const fallback = defaults.gallery.projects[index] ?? defaults.gallery.projects[0];
        return {
          ...fallback,
          ...project,
          image: imageUrl(project.image as SanityImg, fallback.image),
          category: isProjectCategory(project.category) ? project.category : fallback.category,
        };
      })
    : defaults.gallery.projects;

  return {
    hero: {
      ...defaults.hero,
      ...raw.hero,
      title: mergeObject(defaults.hero.title, raw.hero?.title),
      cta: mergeObject(defaults.hero.cta, raw.hero?.cta),
      visuals: {
        arrow: imageUrl(raw.hero?.visuals?.arrow, defaults.hero.visuals.arrow),
        path: imageUrl(raw.hero?.visuals?.path, defaults.hero.visuals.path),
        top: imageUrl(raw.hero?.visuals?.top, defaults.hero.visuals.top),
        main: imageUrl(raw.hero?.visuals?.main, defaults.hero.visuals.main),
        bottom: imageUrl(raw.hero?.visuals?.bottom, defaults.hero.visuals.bottom),
      },
    },
    approach: {
      ...defaults.approach,
      ...raw.approach,
      title: mergeObject(defaults.approach.title, raw.approach?.title),
      logo: imageUrl(raw.approach?.logo, defaults.approach.logo),
    },
    gallery: {
      ...defaults.gallery,
      ...raw.gallery,
      title: mergeObject(defaults.gallery.title, raw.gallery?.title),
      categories: raw.gallery?.categories?.length ? raw.gallery.categories : defaults.gallery.categories,
      projects,
    },
    featuredCase: {
      ...defaults.featuredCase,
      ...raw.featuredCase,
      title: mergeObject(defaults.featuredCase.title, raw.featuredCase?.title),
      labels: mergeObject(defaults.featuredCase.labels, raw.featuredCase?.labels),
      visuals: {
        phones: imageUrl(raw.featuredCase?.visuals?.phones, defaults.featuredCase.visuals.phones),
        arrow: imageUrl(raw.featuredCase?.visuals?.arrow, defaults.featuredCase.visuals.arrow),
      },
      metrics: raw.featuredCase?.metrics?.length
        ? raw.featuredCase.metrics.map((metric, index) => {
            const fallback = defaults.featuredCase.metrics[index] ?? defaults.featuredCase.metrics[0];
            return {
              ...fallback,
              ...metric,
              icon: imageUrl(metric.icon as SanityImg, fallback.icon),
            };
          })
        : defaults.featuredCase.metrics,
    },
  };
}

export async function getWorkPageData(): Promise<WorkPageData> {
  const raw = await sanityFetch<RawWorkPage | null>({
    query: workPageQuery,
    tags: ["workPage"],
  });

  return transformWorkPage(raw);
}
