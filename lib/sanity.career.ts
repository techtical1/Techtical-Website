import { sanityFetch } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import type { SanityImageSource } from "@sanity/image-url";

type SanityImg = SanityImageSource | null | undefined;

type RawCareerPage = {
  hero?: Partial<CareerHeroData> & {
    processCard?: Partial<CareerHeroData["processCard"]> & { image?: SanityImg; smile?: SanityImg };
    arrow?: SanityImg;
  };
  whoWeAre?: Partial<WhoWeAreData> & {
    cards?: (Partial<WhoWeAreCard> & { icon?: SanityImg })[];
  };
  whyWorkWithUs?: Partial<WhyWorkWithUsData> & {
    benefits?: (Partial<CareerBenefit> & { icon?: SanityImg })[];
  };
  team?: Partial<CareerTeamData> & {
    members?: (Partial<CareerTeamMember> & { image?: SanityImg })[];
  };
  beyondWork?: Partial<BeyondWorkData> & {
    images?: (Partial<BeyondWorkImage> & { image?: SanityImg })[];
  };
  aiProcess?: Partial<AiProcessData> & {
    video?: Partial<AiProcessData["video"]> & {
      poster?: SanityImg;
      videoFile?: { asset?: { url?: string } };
    };
  };
  mission?: Partial<MissionData> & {
    decor?: Partial<Record<keyof MissionData["decor"], SanityImg>>;
  };
  hiringCta?: Partial<HiringCtaData> & {
    assets?: Partial<Record<keyof HiringCtaData["assets"], SanityImg>>;
  };
  openPositions?: Partial<OpenPositionsData>;
  finalCta?: Partial<CareerFinalCtaData>;
};

const careerPageQuery = `
  *[_type == "careerPage"][0] {
    hero {
      pill, title, description, cta,
      processCard { title, button, image { asset-> }, smile { asset-> } },
      arrow { asset-> }
    },
    whoWeAre {
      title, description,
      cards[] { icon { asset-> }, title, description }
    },
    whyWorkWithUs {
      pill, title, description,
      benefits[] { icon { asset-> }, title, description, className }
    },
    team {
      pill, title, description,
      members[] { name, role, image { asset-> }, active }
    },
    beyondWork {
      title, subtitle, description,
      images[] { image { asset-> }, alt, className }
    },
    aiProcess {
      title, subtitle,
      video { src, videoFile { asset-> { url } }, poster { asset-> } }
    },
    mission {
      pill, title, subtitle,
      card { title, paragraphs, cta },
      decor {
        topLeft { asset-> },
        leftMiddle { asset-> },
        topRight { asset-> },
        tree { asset-> }
      }
    },
    hiringCta {
      badge, title, description,
      button { label, href },
      note { line1, line2 },
      assets { man { asset-> }, arrow { asset-> } }
    },
    openPositions {
      pill, title,
      positions[] {
        id, role, type, isOpen, description,
        cta { label, href },
        emailText, email,
        footerText { normal, highlight }
      }
    },
    finalCta {
      pill, headingParts, description,
      buttons[] { label, href, variant }
    }
  }
`;

export type CareerTitle = {
  normal: string;
  highlight: string;
};

export type CareerHeroData = {
  pill: string;
  title: {
    line1: string;
    line2: string;
    line3: string;
    highlight: string;
  };
  description: string;
  cta: {
    primary: string;
    note: string;
  };
  processCard: {
    title: string;
    button: string;
    image: string;
    smile: string;
  };
  arrow: string;
};

export type WhoWeAreCard = {
  icon: string;
  title: string;
  description: string;
};

export type WhoWeAreData = {
  title: CareerTitle;
  description: string;
  cards: WhoWeAreCard[];
};

export type CareerBenefit = {
  icon: string;
  title: string;
  description: string;
  className?: string;
};

export type WhyWorkWithUsData = {
  pill: string;
  title: CareerTitle;
  description: string;
  benefits: CareerBenefit[];
};

export type CareerTeamMember = {
  name: string;
  role: string;
  image: string;
  active?: boolean;
};

export type CareerTeamData = {
  pill: string;
  title: CareerTitle;
  description: string;
  members: CareerTeamMember[];
};

export type BeyondWorkImage = {
  src: string;
  alt: string;
  className?: string;
};

export type BeyondWorkData = {
  title: CareerTitle;
  subtitle: string;
  description: string;
  images: BeyondWorkImage[];
};

export type AiProcessData = {
  title: CareerTitle;
  subtitle: string;
  video: {
    src: string;
    poster: string;
  };
};

export type MissionData = {
  pill: string;
  title: CareerTitle;
  subtitle: string;
  card: {
    title: string;
    paragraphs: string[];
    cta: string;
  };
  decor: {
    topLeft: string;
    leftMiddle: string;
    topRight: string;
    tree: string;
  };
};

export type HiringCtaData = {
  badge: string;
  title: string;
  description: string[];
  button: {
    label: string;
    href: string;
  };
  note: {
    line1: string;
    line2: string;
  };
  assets: {
    man: string;
    arrow: string;
  };
};

export type OpenPosition = {
  id: string;
  role: string;
  type: string;
  isOpen: boolean;
  description?: string[];
  cta?: {
    label: string;
    href: string;
  };
  emailText?: string;
  email?: string;
  footerText?: CareerTitle;
};

export type OpenPositionsData = {
  pill: string;
  title: CareerTitle;
  positions: OpenPosition[];
};

export type CareerHeadingPart = {
  text: string;
  highlight?: boolean;
  newLine?: boolean;
};

export type CareerCtaButton = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type CareerFinalCtaData = {
  pill: string;
  headingParts: CareerHeadingPart[];
  description: string;
  buttons: CareerCtaButton[];
};

export type CareerPageData = {
  hero?: CareerHeroData;
  whoWeAre?: WhoWeAreData;
  whyWorkWithUs?: WhyWorkWithUsData;
  team?: CareerTeamData;
  beyondWork?: BeyondWorkData;
  aiProcess?: AiProcessData;
  mission?: MissionData;
  hiringCta?: HiringCtaData;
  openPositions?: OpenPositionsData;
  finalCta?: CareerFinalCtaData;
};

export const careerPageDefaults: Required<CareerPageData> = {
  hero: {
    pill: "We're Hiring",
    title: {
      line1: "About Our UI/UX Design",
      line2: "Agency Building High-",
      line3: "Performing",
      highlight: "digital products",
    },
    description:
      "We help startups and saas teams improve user experience, increase retention, and build scalable product systems.",
    cta: {
      primary: "Book A Free Call",
      note: "Have Something\nSimilar In Mind?",
    },
    processCard: {
      title: "A Glimpse Into\nOur Process",
      button: "View",
      image: "/assets/career/team-process.png",
      smile: "/assets/career/smile.svg",
    },
    arrow: "/assets/work/arrow.png",
  },
  whoWeAre: {
    title: {
      normal: "Who We",
      highlight: "are",
    },
    description:
      "We create digital products that blend strategy, design, and technology, helping startups and growing brands build experiences that drive real results.",
    cards: [
      {
        icon: "/assets/career/design.svg",
        title: "Design & Build",
        description:
          "We craft thoughtful UI/UX, product design, and development solutions that transform ideas into seamless digital experiences built for today's users.",
      },
      {
        icon: "/assets/career/globe.svg",
        title: "Who We Work With",
        description:
          "We partner with startups, SaaS brands, and ambitious businesses looking to launch, grow, and scale with confidence.",
      },
      {
        icon: "/assets/career/result.svg",
        title: "Results We Deliver",
        description:
          "We create products that improve usability, increase retention, strengthen engagement, and drive measurable business growth.",
      },
    ],
  },
  whyWorkWithUs: {
    pill: "Why Work With Us",
    title: {
      normal: "Why people",
      highlight: "stay",
    },
    description:
      "We've kept things simple and clear. So you can focus on doing your best work",
    benefits: [
      {
        icon: "/assets/career/product-impact.svg",
        title: "Real Product Impact",
        description: "Create work that ships and matters.",
        className: "rotate-0",
      },
      {
        icon: "/assets/career/ownership.svg",
        title: "Ownership & Responsibility",
        description: "Own decisions and drive outcomes.",
        className: "rotate-[-2deg]",
      },
      {
        icon: "/assets/career/growth.svg",
        title: "Growth-Focused Environment",
        description: "Learn, improve, and grow fast.",
        className: "rotate-[-3deg]",
      },
      {
        icon: "/assets/career/design-culture.svg",
        title: "High-Quality Design Culture",
        description: "Craft with detail and purpose.",
        className: "rotate-[-3deg]",
      },
    ],
  },
  team: {
    pill: "Our Team",
    title: {
      normal: "The Product Team Behind",
      highlight: "high-performing experiences",
    },
    description: "A small team focused on clarity, collaboration, and real outcomes",
    members: [
      {
        name: "Jigar Rabdiya",
        role: "Founder | CEO",
        image: "/assets/career/team/jigar-rabdiya.png",
        active: true,
      },
      {
        name: "Anaya Patel",
        role: "Co - Founder",
        image: "/assets/career/team/anaya-patel.png",
        active: true,
      },
      {
        name: "Kavya Joshi",
        role: "UI/UX Designer",
        image: "/assets/career/team/kavya-joshi.png",
        active: true,
      },
      {
        name: "Vihaan Shah",
        role: "UI/UX Designer",
        image: "/assets/career/team/vihaan-shah.png",
        active: true,
      },
      {
        name: "Meera Desai",
        role: "UI/UX Designer",
        image: "/assets/career/team/meera-desai.png",
        active: true,
      },
    ],
  },
  beyondWork: {
    title: {
      normal: "Beyond the",
      highlight: "work",
    },
    subtitle:
      "We believe better teams build better products - and culture drives everything we create.",
    description:
      "At Techtical Solution, we focus on bringing clarity to digital products - designing and structuring experiences that feel simple, connected, and built to work in the real world",
    images: [
      {
        src: "/assets/career/beyond-work/i-1.png",
        alt: "Team activity",
        className: "left-[0px] top-[250px] h-[420px] w-[330px]",
      },
      {
        src: "/assets/career/beyond-work/i-2.png",
        alt: "Team collaboration",
        className: "left-[370px] top-[215px] h-[290px] w-[345px]",
      },
      {
        src: "/assets/career/beyond-work/i-3.png",
        alt: "Team celebration",
        className: "left-[755px] top-[0px] h-[460px] w-[335px]",
      },
      {
        src: "/assets/career/beyond-work/i-4.png",
        alt: "Team discussion",
        className: "right-[0px] top-[140px] h-[360px] w-[340px]",
      },
      {
        src: "/assets/career/beyond-work/i-5.png",
        alt: "Birthday celebration",
        className: "left-[370px] top-[540px] h-[330px] w-[545px]",
      },
      {
        src: "/assets/career/beyond-work/i-6.png",
        alt: "Team meeting",
        className: "right-[0px] top-[540px] h-[285px] w-[420px]",
      },
    ],
  },
  aiProcess: {
    title: {
      normal: "Where AI Strengthens",
      highlight: "our process",
    },
    subtitle: "Used with intent - not as shortcuts",
    video: {
      src: "/assets/founder/founder-video-preview.mp4",
      poster: "/assets/founder/thumbnail.png",
    },
  },
  mission: {
    pill: "Our Mission",
    title: {
      normal: "What We",
      highlight: "build",
    },
    subtitle: "a clearer way to build products",
    card: {
      title: "Where Clarity Becomes Real",
      paragraphs: [
        "We believe SaaS products, web apps, and mobile apps shouldn't just exist - they should make sense.",
        "Most teams build features, flows, and systems, but when things don't connect, the product starts to break.",
        "We bring clarity into how products and design systems are thought, designed, and built - so they feel simple, work seamlessly, and actually move forward.",
      ],
      cta: "OUR STORY",
    },
    decor: {
      topLeft: "/assets/career/mission/top-left.png",
      leftMiddle: "/assets/career/mission/left-middle.png",
      topRight: "/assets/career/mission/top-right.png",
      tree: "/assets/career/mission/Tree.png",
    },
  },
  hiringCta: {
    badge: "Remote · Full Time",
    title: "We're Actively Hiring Business Development Lead",
    description: [
      "We're looking for someone who can open the right doors and build meaningful relationships.",
      "You'll work closely with us to connect with startups, founders, and product teams - and turn conversations into real opportunities.",
    ],
    button: {
      label: "Apply Now",
      href: "#apply",
    },
    note: {
      line1: "Think This",
      line2: "Is You?",
    },
    assets: {
      man: "/assets/service/faqs/man.svg",
      arrow: "/assets/service/faqs/left-arow.svg",
    },
  },
  openPositions: {
    pill: "We're Hiring",
    title: {
      normal: "Open",
      highlight: "positions",
    },
    positions: [
      {
        id: "01",
        role: "UI/UX Designer",
        type: "On site · Full time",
        isOpen: true,
        description: [
          "We're looking for a UI/UX Designer who cares about how products actually work - not just how they look.",
          "You'll work on real products across early-stage ideas, redesigns, and growing platforms - helping teams bring clarity to their product experience. From understanding problems to structuring flows and designing interfaces, your work will directly shape how users interact with the product.",
          "At Techtical, we focus on clarity and outcomes. You'll collaborate closely with the team, think in systems, and design solutions that are simple, usable, and built for real-world use.",
        ],
        cta: {
          label: "APPLY NOW",
          href: "#apply",
        },
        emailText: "Or send your work at",
        email: "careers@techtical.com",
        footerText: {
          normal: "Feeling",
          highlight: "aligned?",
        },
      },
      {
        id: "02",
        role: "Product Designer",
        type: "On site · Part time",
        isOpen: false,
      },
      {
        id: "03",
        role: "Frontend Developer",
        type: "Remote · Full time",
        isOpen: false,
      },
    ],
  },
  finalCta: {
    pill: "Get Started",
    headingParts: [
      { text: "Work With A Team That Builds" },
      {
        text: "products that actually work",
        highlight: true,
        newLine: true,
      },
    ],
    description:
      "one conversation. no obligation. just a clear picture of what to do next.",
    buttons: [
      {
        label: "Start A Project",
        href: "#contact",
        variant: "primary",
      },
      {
        label: "Join Our Team",
        href: "#open-positions",
        variant: "secondary",
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

function mergeArrayByIndex<T>(
  fallback: T[],
  value: Partial<T>[] | undefined,
  mapper: (item: Partial<T>, fallbackItem: T) => T,
) {
  if (!value?.length) return fallback;

  return value.map((item, index) => mapper(item, fallback[index] ?? fallback[0]));
}

function buttonVariant(value?: string): CareerCtaButton["variant"] {
  return value === "secondary" ? "secondary" : "primary";
}

function transformCareerPage(raw: RawCareerPage | null): CareerPageData {
  if (!raw) return careerPageDefaults;

  const defaults = careerPageDefaults;

  return {
    hero: {
      ...defaults.hero,
      ...raw.hero,
      title: mergeObject(defaults.hero.title, raw.hero?.title),
      cta: mergeObject(defaults.hero.cta, raw.hero?.cta),
      processCard: {
        ...defaults.hero.processCard,
        ...raw.hero?.processCard,
        image: imageUrl(raw.hero?.processCard?.image, defaults.hero.processCard.image),
        smile: imageUrl(raw.hero?.processCard?.smile, defaults.hero.processCard.smile),
      },
      arrow: imageUrl(raw.hero?.arrow, defaults.hero.arrow),
    },
    whoWeAre: {
      ...defaults.whoWeAre,
      ...raw.whoWeAre,
      title: mergeObject(defaults.whoWeAre.title, raw.whoWeAre?.title),
      cards: mergeArrayByIndex(defaults.whoWeAre.cards, raw.whoWeAre?.cards, (card, fallback) => ({
        ...fallback,
        ...card,
        icon: imageUrl(card.icon as SanityImg, fallback.icon),
      })),
    },
    whyWorkWithUs: {
      ...defaults.whyWorkWithUs,
      ...raw.whyWorkWithUs,
      title: mergeObject(defaults.whyWorkWithUs.title, raw.whyWorkWithUs?.title),
      benefits: mergeArrayByIndex(defaults.whyWorkWithUs.benefits, raw.whyWorkWithUs?.benefits, (benefit, fallback) => ({
        ...fallback,
        ...benefit,
        icon: imageUrl(benefit.icon as SanityImg, fallback.icon),
      })),
    },
    team: {
      ...defaults.team,
      ...raw.team,
      title: mergeObject(defaults.team.title, raw.team?.title),
      members: mergeArrayByIndex(defaults.team.members, raw.team?.members, (member, fallback) => ({
        ...fallback,
        ...member,
        image: imageUrl(member.image as SanityImg, fallback.image),
      })),
    },
    beyondWork: {
      ...defaults.beyondWork,
      ...raw.beyondWork,
      title: mergeObject(defaults.beyondWork.title, raw.beyondWork?.title),
      images: mergeArrayByIndex(defaults.beyondWork.images, raw.beyondWork?.images, (image, fallback) => ({
        ...fallback,
        ...image,
        src: imageUrl((image as Partial<BeyondWorkImage> & { image?: SanityImg }).image, fallback.src),
      })),
    },
    aiProcess: {
      ...defaults.aiProcess,
      ...raw.aiProcess,
      title: mergeObject(defaults.aiProcess.title, raw.aiProcess?.title),
      video: {
        ...defaults.aiProcess.video,
        ...raw.aiProcess?.video,
        src: raw.aiProcess?.video?.videoFile?.asset?.url ?? raw.aiProcess?.video?.src ?? defaults.aiProcess.video.src,
        poster: imageUrl(raw.aiProcess?.video?.poster, defaults.aiProcess.video.poster),
      },
    },
    mission: {
      ...defaults.mission,
      ...raw.mission,
      title: mergeObject(defaults.mission.title, raw.mission?.title),
      card: mergeObject(defaults.mission.card, raw.mission?.card),
      decor: {
        topLeft: imageUrl(raw.mission?.decor?.topLeft, defaults.mission.decor.topLeft),
        leftMiddle: imageUrl(raw.mission?.decor?.leftMiddle, defaults.mission.decor.leftMiddle),
        topRight: imageUrl(raw.mission?.decor?.topRight, defaults.mission.decor.topRight),
        tree: imageUrl(raw.mission?.decor?.tree, defaults.mission.decor.tree),
      },
    },
    hiringCta: {
      ...defaults.hiringCta,
      ...raw.hiringCta,
      button: mergeObject(defaults.hiringCta.button, raw.hiringCta?.button),
      note: mergeObject(defaults.hiringCta.note, raw.hiringCta?.note),
      assets: {
        man: imageUrl(raw.hiringCta?.assets?.man, defaults.hiringCta.assets.man),
        arrow: imageUrl(raw.hiringCta?.assets?.arrow, defaults.hiringCta.assets.arrow),
      },
    },
    openPositions: {
      ...defaults.openPositions,
      ...raw.openPositions,
      title: mergeObject(defaults.openPositions.title, raw.openPositions?.title),
      positions: mergeArrayByIndex(defaults.openPositions.positions, raw.openPositions?.positions, (position, fallback) => ({
        ...fallback,
        ...position,
        cta: mergeObject(fallback.cta ?? { label: "APPLY NOW", href: "#apply" }, position.cta),
        footerText: mergeObject(fallback.footerText ?? { normal: "Feeling", highlight: "aligned?" }, position.footerText),
      })),
    },
    finalCta: {
      ...defaults.finalCta,
      ...raw.finalCta,
      buttons: (raw.finalCta?.buttons?.length ? raw.finalCta.buttons : defaults.finalCta.buttons).map((button, index) => ({
        ...defaults.finalCta.buttons[index],
        ...button,
        variant: buttonVariant(button.variant),
      })),
    },
  };
}

export async function getCareerPageData(): Promise<CareerPageData> {
  const raw = await sanityFetch<RawCareerPage | null>({
    query: careerPageQuery,
    tags: ["careerPage"],
  });

  return transformCareerPage(raw);
}
