import { urlFor } from "@/lib/sanity.image";
import { sanityFetch } from "@/lib/sanity.queries";
import type { SanityImageSource } from "@sanity/image-url";

type SanityImg = SanityImageSource | null | undefined;

type RawBlogPage = {
  hero?: Partial<BlogHeroData> & {
    cards?: Partial<BlogHeroData["cards"]> & {
      trusted?: Partial<BlogHeroData["cards"]["trusted"]> & {
        brands?: (Partial<BlogBrand> & { logo?: SanityImg })[];
      };
      clients?: Partial<BlogHeroData["cards"]["clients"]> & { image?: SanityImg };
      growth?: Partial<BlogHeroData["cards"]["growth"]> & { vector?: SanityImg };
    };
  };
  featuredArticle?: Partial<FeaturedArticleData>;
  challengeExplorer?: Partial<ChallengeExplorerData>;
  intro?: Partial<BlogIntroData> & {
    image?: Partial<BlogIntroData["image"]> & { image?: SanityImg };
  };
  cta?: Partial<BlogCtaData>;
};

const blogPageQuery = `
  *[_type == "blogPage"][0] {
    hero {
      pill, title, description, cta,
      cards {
        trusted {
          title, badge, text,
          brands[] { name, logo { asset-> } }
        },
        clients { title, image { asset-> }, text },
        growth { title, vector { asset-> }, text }
      }
    },
    featuredArticle {
      leftCard { pill, title, description },
      article { title, highlight, description, tags }
    },
    challengeExplorer {
      title, description,
      challenges[] { index, label, href }
    },
    intro {
      title, paragraphs, tags,
      image { image { asset-> }, alt }
    },
    cta {
      pill, title, description, cta
    }
  }
`;

export type BlogBrand = {
  name: string;
  logo: string;
};

export type BlogHeroData = {
  pill: string;
  title: {
    line1: string;
    line2: string;
    highlight: string;
    line3: string;
  };
  description: string;
  cta: {
    primary: string;
    secondary: string;
  };
  cards: {
    trusted: {
      title: string;
      brands: BlogBrand[];
      badge: string;
      text: string;
    };
    clients: {
      title: string;
      image: string;
      text: string;
    };
    growth: {
      title: string;
      vector: string;
      text: string;
    };
  };
};

export type FeaturedArticleData = {
  leftCard: {
    pill: string;
    title: {
      line1: string;
      highlight: string;
    };
    description: string;
  };
  article: {
    title: string;
    highlight: string;
    description: string;
    tags: string[];
  };
};

export type ChallengeExplorerData = {
  title: {
    line1: string;
    line2: string;
    highlight: string;
  };
  description: string;
  challenges: {
    index: string;
    label: string;
    href: string;
  }[];
};

export type BlogIntroData = {
  title: {
    line1: string;
    highlight: string;
  };
  paragraphs: string[];
  tags: string[];
  image: {
    src: string;
    alt: string;
  };
};

export type BlogCtaData = {
  pill: string;
  title: {
    line1: string;
    highlight: string;
    line2: string;
  };
  description: string;
  cta: {
    primary: string;
    secondary: string;
  };
};

export type BlogPageData = {
  hero?: BlogHeroData;
  featuredArticle?: FeaturedArticleData;
  challengeExplorer?: ChallengeExplorerData;
  intro?: BlogIntroData;
  cta?: BlogCtaData;
};

export const blogPageDefaults: Required<BlogPageData> = {
  hero: {
    pill: "Insights For Builders",
    title: {
      line1: "UI/UX design, product",
      line2: "strategy &",
      highlight: "SaaS growth",
      line3: "insights",
    },
    description:
      "Learn how to design, build, and improve digital products with actionable insights on ux design, product strategy, onboarding, retention, and scalable systems - tailored for startups and saas teams.",
    cta: {
      primary: "Book A Free Strategy Call",
      secondary: "See Our Work",
    },
    cards: {
      trusted: {
        title: "Trusted By\n100+ Product Teams",
        brands: [
          {
            name: "FlickNite",
            logo: "/assets/credibility/FlickNite.svg",
          },
          {
            name: "WingAI",
            logo: "/assets/credibility/wingai.svg",
          },
        ],
        badge: "+98",
        text: "Founders, PMs and designers rely on these insights to make better product decisions.",
      },
      clients: {
        title: "Insights From Real\nClient Work",
        image: "/assets/credibility/customer.svg",
        text: "Every article is grounded in real-world challenges - not academic theory.",
      },
      growth: {
        title: "Focused On UX,\nRetention & Growth",
        vector: "/assets/blog/growth-vector.svg",
        text: "Practical frameworks that drive measurable improvements in usability and retention.",
      },
    },
  },
  featuredArticle: {
    leftCard: {
      pill: "Start Here",
      title: {
        line1: "What actually makes a",
        highlight: "product work",
      },
      description:
        "Not all product problems are obvious. start with the insight that has helped hundreds of founders understand the root of their challenges.",
    },
    article: {
      title: "Why Most Digital Products Fail",
      highlight: "(And How UX Fixes It)",
      description:
        "Most Products Fail Due To Poor User Experience, Unclear Onboarding, And Lack Of Product Direction - Not Bad Ideas. This Guide Explains How To Identify And Fix The Real Issues Affecting Product Performance.",
      tags: ["Improve Retention", "Fix Onboarding", "Increase Usability"],
    },
  },
  challengeExplorer: {
    title: {
      line1: "Explore insights based on",
      line2: "your",
      highlight: "current challenge",
    },
    description: "Pick the challenge closest to what you're working through right now.",
    challenges: [
      {
        index: "01",
        label: "Improve User Retention",
        href: "#",
      },
      {
        index: "02",
        label: "Fix Onboarding Issues",
        href: "#",
      },
      {
        index: "03",
        label: "Validate a Product Idea",
        href: "#",
      },
      {
        index: "04",
        label: "Build a Design System",
        href: "#",
      },
      {
        index: "05",
        label: "Scale a SaaS Product",
        href: "#",
      },
      {
        index: "06",
        label: "Redesign an Existing Product",
        href: "#",
      },
    ],
  },
  intro: {
    title: {
      line1: "UI/UX design insights for",
      highlight: "startups, saas & digital products",
    },
    paragraphs: [
      "Resource hub for ui/ux, product strategy, and development - focused on better onboarding, retention, and scalable design systems for startups and SaaS.",
      "Helping you make smarter product decisions, reduce friction, and drive real growth.",
    ],
    tags: [
      "UI/UX Design",
      "SaaS Product Strategy",
      "Onboarding Optimization",
      "User Retention",
      "Design Systems",
      "Product Validation",
      "UX For Startups",
      "Product Growth",
    ],
    image: {
      src: "/assets/blog/blog-intro.png",
      alt: "UI UX product strategy dashboard preview",
    },
  },
  cta: {
    pill: "Get Started",
    title: {
      line1: "Insights Help.",
      highlight: "execution",
      line2: "Changes Everything.",
    },
    description:
      "If you're serious about improving your product, we can help you design, build, or optimize it for real results.",
    cta: {
      primary: "Start A Project",
      secondary: "Start A Project",
    },
  },
};

function imageUrl(image: SanityImg, fallback: string) {
  return urlFor(image)?.url() ?? fallback;
}

function mergeObject<T extends Record<string, unknown>>(fallback: T, value?: Partial<T>) {
  return { ...fallback, ...(value ?? {}) } as T;
}

function transformBlogPage(raw: RawBlogPage | null): BlogPageData {
  if (!raw) return blogPageDefaults;

  const defaults = blogPageDefaults;

  return {
    hero: {
      ...defaults.hero,
      ...raw.hero,
      title: mergeObject(defaults.hero.title, raw.hero?.title),
      cta: mergeObject(defaults.hero.cta, raw.hero?.cta),
      cards: {
        trusted: {
          ...defaults.hero.cards.trusted,
          ...raw.hero?.cards?.trusted,
          brands: raw.hero?.cards?.trusted?.brands?.length
            ? raw.hero.cards.trusted.brands.map((brand, index) => {
                const fallback = defaults.hero.cards.trusted.brands[index] ?? defaults.hero.cards.trusted.brands[0];
                return {
                  ...fallback,
                  ...brand,
                  logo: imageUrl(brand.logo, fallback.logo),
                };
              })
            : defaults.hero.cards.trusted.brands,
        },
        clients: {
          ...defaults.hero.cards.clients,
          ...raw.hero?.cards?.clients,
          image: imageUrl(raw.hero?.cards?.clients?.image, defaults.hero.cards.clients.image),
        },
        growth: {
          ...defaults.hero.cards.growth,
          ...raw.hero?.cards?.growth,
          vector: imageUrl(raw.hero?.cards?.growth?.vector, defaults.hero.cards.growth.vector),
        },
      },
    },
    featuredArticle: {
      ...defaults.featuredArticle,
      ...raw.featuredArticle,
      leftCard: {
        ...defaults.featuredArticle.leftCard,
        ...raw.featuredArticle?.leftCard,
        title: mergeObject(defaults.featuredArticle.leftCard.title, raw.featuredArticle?.leftCard?.title),
      },
      article: mergeObject(defaults.featuredArticle.article, raw.featuredArticle?.article),
    },
    challengeExplorer: {
      ...defaults.challengeExplorer,
      ...raw.challengeExplorer,
      title: mergeObject(defaults.challengeExplorer.title, raw.challengeExplorer?.title),
      challenges: raw.challengeExplorer?.challenges?.length
        ? raw.challengeExplorer.challenges
        : defaults.challengeExplorer.challenges,
    },
    intro: {
      ...defaults.intro,
      ...raw.intro,
      title: mergeObject(defaults.intro.title, raw.intro?.title),
      image: {
        src: imageUrl(raw.intro?.image?.image, defaults.intro.image.src),
        alt: raw.intro?.image?.alt ?? defaults.intro.image.alt,
      },
    },
    cta: {
      ...defaults.cta,
      ...raw.cta,
      title: mergeObject(defaults.cta.title, raw.cta?.title),
      cta: mergeObject(defaults.cta.cta, raw.cta?.cta),
    },
  };
}

export async function getBlogPageData(): Promise<BlogPageData> {
  const raw = await sanityFetch<RawBlogPage | null>({
    query: blogPageQuery,
    tags: ["blogPage"],
  });

  return transformBlogPage(raw);
}
