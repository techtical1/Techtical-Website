/**
 * Home page Sanity query + data transformer.
 *
 * One GROQ query fetches all homepage sections in a single API call.
 * Each `transform*` function converts raw Sanity data → the exact shape
 * the section components already expect (matching the local *-data.ts files),
 * so zero UI changes are needed in the components.
 */

import { sanityFetch } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'
import type { SanityImageSource } from '@sanity/image-url'

// ─── Raw Sanity types (mirrors the schema) ────────────────────────────────────

type SanityImg = SanityImageSource | null | undefined

type RawLogo = { name: string; logo?: SanityImg; width?: number; height?: number }
type RawNavLink = { label?: string; href?: string }
type RawSocialLink = { label?: string; href?: string; text?: string }

type RawStatCard = {
  id?: string; value?: string; label?: string; description?: string; icon?: SanityImg
}

type RawPlan = {
  id?: string
  theme?: 'light' | 'green'
  title?: string
  features?: string[]
  ctaLabel?: string
  visualType?: 'before-after' | 'laptop'
}

type RawStartSmallCard = {
  id?: string; eyebrow?: string; title?: string
  description?: string; ctaLabel?: string; href?: string
}

type RawCaseStudy = {
  _id: string; title?: string; eyebrow?: string; image?: SanityImg; tags?: string[]
  quote?: string; authorName?: string; authorRole?: string; authorAvatar?: SanityImg
}

type RawService = {
  _id: string; index?: string; title?: string; description?: string
  image?: SanityImg; imageAlt?: string
}

type RawTestimonial = {
  _id: string; name?: string; role?: string; thumbnail?: SanityImg; avatar?: SanityImg
  rating?: number; href?: string
}

type RawHomePage = {
  hero?: {
    headlineLine1?: string; headlineBold?: string; description?: string
    primaryCtaLabel?: string; primaryCtaHref?: string
    secondaryCtaLabel?: string; secondaryCtaHref?: string
    handwrittenNote?: string; founderTrustText?: string
    marqueeItems?: string[]; founderAvatars?: SanityImg[]
  }
  trustedTeams?: { heading?: string; subheading?: string; logos?: RawLogo[] }
  problem?: {
    headingLine1?: string; headingHighlight?: string; description?: string; items?: string[]
  }
  featuredCaseStudies?: RawCaseStudy[]
  problemItems?: string[]
  servicesIntro?: {
    headingLine1?: string; headingHighlight?: string; description?: string
    ctaLabel?: string; ctaNote?: string
  }
  featuredServices?: RawService[]
  domainsSection?: {
    pillLabel?: string; headingLine1?: string; headingHighlight?: string
    description?: string; ctaLabel?: string; ctaHref?: string; items?: string[]
  }
  domains?: string[]
  plansIntro?: {
    pillLabel?: string; headingLine1?: string; headingLine2Prefix?: string
    headingHighlight?: string; description?: string; bottomText?: string
  }
  plans?: RawPlan[]
  credibility?: {
    heading?: string; headingHighlight?: string; subheading?: string
    marketplaceLogo?: RawLogo
    projectCount?: string; projectCountLabel?: string; projectCountDescription?: string
    logos?: RawLogo[]; stats?: RawStatCard[]
    ctaLabel?: string; ctaHref?: string
  }
  testimonialsIntro?: { pillLabel?: string; headingPrefix?: string; headingHighlight?: string }
  featuredTestimonials?: RawTestimonial[]
  finalCta?: {
    eyebrow?: string; headlineLine1?: string; headlineLine2?: string
    headlineLine3?: string; headlineHighlight?: string
    description?: string; ctaLabel?: string; ctaHref?: string
  }
  startSmall?: { pillLabel?: string; headingPrefix?: string; headingHighlight?: string }
  startSmallCards?: RawStartSmallCard[]
  footer?: {
    headline?: string; description?: string; ctaLabel?: string; ctaHref?: string
    exploreLinks?: RawNavLink[]; whatWeDoLinks?: RawNavLink[]
    socialLinks?: RawSocialLink[]; email?: string; copyrightText?: string
    legalLinks?: RawNavLink[]
  }
}

// ─── GROQ query ───────────────────────────────────────────────────────────────

const homePageQuery = `
  *[_type == "homePage"][0] {
    hero {
      headlineLine1, headlineBold, description,
      primaryCtaLabel, primaryCtaHref,
      secondaryCtaLabel, secondaryCtaHref,
      handwrittenNote, founderTrustText,
      marqueeItems,
      founderAvatars[] { asset-> }
    },
    trustedTeams {
      heading, subheading,
      logos[] { name, logo { asset-> }, width, height }
    },
    problem {
      headingLine1, headingHighlight, description, items
    },
    "featuredCaseStudies": featuredCaseStudies[]-> {
      _id, title, eyebrow, tags, quote, authorName, authorRole,
      image { asset-> },
      authorAvatar { asset-> }
    },
    problemItems,
    servicesIntro {
      headingLine1, headingHighlight, description, ctaLabel, ctaNote
    },
    "featuredServices": featuredServices[]-> {
      _id, index, title, description, imageAlt,
      image { asset-> }
    },
    domainsSection {
      pillLabel, headingLine1, headingHighlight, description, ctaLabel, ctaHref, items
    },
    domains,
    plansIntro {
      pillLabel, headingLine1, headingLine2Prefix, headingHighlight, description, bottomText
    },
    plans[] { id, theme, title, features, ctaLabel, visualType },
    credibility {
      heading, headingHighlight, subheading, projectCount, projectCountDescription,
      marketplaceLogo { name, logo { asset-> }, width, height },
      projectCountLabel,
      logos[] { name, logo { asset-> }, width, height },
      stats[] { id, value, label, description, icon { asset-> } },
      ctaLabel, ctaHref
    },
    testimonialsIntro {
      pillLabel, headingPrefix, headingHighlight
    },
    "featuredTestimonials": featuredTestimonials[]-> {
      _id, name, role, rating, href,
      thumbnail { asset-> },
      avatar { asset-> }
    },
    finalCta {
      eyebrow, headlineLine1, headlineLine2, headlineLine3,
      headlineHighlight, description, ctaLabel, ctaHref
    },
    startSmall {
      pillLabel, headingPrefix, headingHighlight
    },
    startSmallCards[] { id, eyebrow, title, description, ctaLabel, href },
    footer {
      headline, description, ctaLabel, ctaHref,
      exploreLinks[] { label, href },
      whatWeDoLinks[] { label, href },
      socialLinks[] { label, href, text },
      email, copyrightText,
      legalLinks[] { label, href }
    }
  }
`

// ─── Public types (what section components receive) ───────────────────────────

export type SanityLogoItem = { name: string; src: string; width: number; height: number }

export type SanityHeroData = {
  headlineLine1: string; headlineBold: string; description: string
  primaryCtaLabel: string; primaryCtaHref: string
  secondaryCtaLabel: string; secondaryCtaHref: string
  handwrittenNote: string; founderTrustText: string
  marqueeItems: string[][]; founderAvatars: string[]
}

export type SanityTrustedTeamsData = {
  heading: string; subheading: string; logos: SanityLogoItem[]
}

export type SanityCaseStudyItem = {
  eyebrow: string; title: string; image: string; tags: string[]
  quote: string; author: { name: string; role: string; avatar: string }
}

export type SanityServiceItem = {
  id: string; index: string; title: string; description: string
  image: string; imageAlt: string
}

export type SanityProblemData = {
  headingLine1: string; headingHighlight: string; description: string; items: string[]
}

export type SanityServicesData = {
  headingLine1: string; headingHighlight: string; description: string
  ctaLabel: string; ctaNote: string; services: SanityServiceItem[]
}

export type SanityDomainsData = {
  pillLabel: string; headingLine1: string; headingHighlight: string
  description: string; ctaLabel: string; ctaHref: string; items: string[]
}

export type SanityPlanItem = {
  id: string; theme: 'light' | 'green'; title: string
  features: string[]; ctaLabel: string; visualType: 'before-after' | 'laptop'
}

export type SanityPlansData = {
  pillLabel: string; headingLine1: string; headingLine2Prefix: string
  headingHighlight: string; description: string; bottomText: string; plans: SanityPlanItem[]
}

export type SanityTestimonialItem = {
  id: string; name: string; role: string
  thumbnail: string; avatar: string; rating: number; href?: string
}

export type SanityCredibilityData = {
  heading: string; headingHighlight: string; subheading: string
  marketplaceLogo: SanityLogoItem
  projectCount: string; projectCountLabel: string; projectCountDescription: string
  logos: SanityLogoItem[]
  stats: Array<{ id: string; value: string; label: string; description: string; icon: string }>
  ctaLabel: string; ctaHref: string
}

export type SanityTestimonialsData = {
  pillLabel: string; headingPrefix: string; headingHighlight: string
  testimonials: SanityTestimonialItem[]
}

export type SanityFinalCtaData = {
  eyebrow: string; headlineLine1: string; headlineLine2: string
  headlineLine3: string; headlineHighlight: string
  description: string; ctaLabel: string; ctaHref: string
}

export type SanityStartSmallCard = {
  id: string; eyebrow: string; title: string
  description: string; ctaLabel: string; href: string
}

export type SanityStartSmallData = {
  pillLabel: string; headingPrefix: string; headingHighlight: string
  cards: SanityStartSmallCard[]
}

export type SanityFooterData = {
  headline: string; description: string; ctaLabel: string; ctaHref: string
  exploreLinks: Array<{ label: string; href: string }>
  whatWeDoLinks: Array<{ label: string; href: string }>
  socialLinks: Array<{ label: string; href: string; text: string }>
  email: string; copyrightText: string
  legalLinks: Array<{ label: string; href: string }>
}

export type HomePageSanityData = {
  hero?: SanityHeroData
  trustedTeams?: SanityTrustedTeamsData
  caseStudies?: SanityCaseStudyItem[]
  problem?: SanityProblemData
  services?: SanityServicesData
  domains?: SanityDomainsData
  plans?: SanityPlansData
  credibility?: SanityCredibilityData
  testimonials?: SanityTestimonialsData
  finalCta?: SanityFinalCtaData
  startSmall?: SanityStartSmallData
  footer?: SanityFooterData
}

export const homePageDefaults: Required<HomePageSanityData> = {
  hero: {
    headlineLine1: 'We Build Products',
    headlineBold: 'Founders Can Ship.',
    description:
      'We design apps, websites, and digital products that look right, work right, and help your business grow for founders building something worth using.',
    primaryCtaLabel: 'Book A Free Strategy Call',
    primaryCtaHref: '#contact',
    secondaryCtaLabel: 'See Our Work',
    secondaryCtaHref: '#work',
    handwrittenNote:
      "Free 30-minute call. No pitch. We'll tell you exactly what your product needs — even if you don't hire us.",
    founderTrustText: 'Trusted by 120+ founders across 18 countries',
    marqueeItems: [
      ['AI Product', 'UX'],
      ['SaaS Platforms'],
      ['Design', 'Systems'],
      ['Growth & Conversion'],
      ['Rapid', 'MVP', 'Sprints'],
      ['Motion & Interaction'],
      ['UX', 'Audits'],
      ['Developer Tools'],
    ],
    founderAvatars: [
      '/assets/hero/founder-1.png',
      '/assets/hero/founder-2.png',
      '/assets/hero/founder-3.png',
      '/assets/hero/founder-4.png',
    ],
  },
  trustedTeams: {
    heading: 'Trusted by teams building',
    subheading: 'serious products',
    logos: [
      { name: 'The Strategist', src: '/assets/trusted-logos/TheStrategist.svg', width: 160, height: 44 },
      { name: 'Forbes', src: '/assets/trusted-logos/Forbes.svg', width: 130, height: 44 },
      { name: 'Today', src: '/assets/trusted-logos/Today.svg', width: 150, height: 44 },
      { name: 'Byrdie', src: '/assets/trusted-logos/Byrdie.svg', width: 150, height: 44 },
      { name: 'Tinder', src: '/assets/trusted-logos/Tinder.svg', width: 150, height: 44 },
    ],
  },
  caseStudies: [
    {
      eyebrow: 'Case Study — SastaStay',
      title: 'SastaStay - Smarter Hostel Booking',
      image: '/assets/case-studies/sastastay-cover.png',
      tags: ['UX Research', 'UI Design', 'Interaction Design'],
      quote: 'You Can Throw Anything At Them, Their Team Will Make The Best Out Of It.',
      author: {
        name: 'Marcus Klein',
        role: 'Head of product, Arkade',
        avatar: '/assets/case-studies/marcus-klein.png',
      },
    },
    {
      eyebrow: 'Case Study — PayAi-X',
      title: 'PayAi-X - Secure Payment Experience',
      image: '/assets/case-studies/project-three-cover.png',
      tags: ['Fintech UX', 'UI Design', 'Design System'],
      quote: 'They Simplified A Complex Product Into A Clean, Trustworthy Experience.',
      author: {
        name: 'Sarah Wilson',
        role: 'Founder, PayAi-X',
        avatar: '/assets/case-studies/marcus-klein.png',
      },
    },
    {
      eyebrow: 'Case Study — LienFin',
      title: 'LienFin - Tax Lien Investment Platform',
      image: '/assets/case-studies/project-three-cover.png',
      tags: ['SaaS UX', 'Dashboard', 'Product Strategy'],
      quote: 'They Simplified A Complex Product Into A Clean, Trustworthy Experience.',
      author: {
        name: 'David Miller',
        role: 'CEO, LienFin',
        avatar: '/assets/case-studies/marcus-klein.png',
      },
    },
  ],
  problem: {
    headingLine1: "Let's Get Rid Of",
    headingHighlight: 'things like',
    description: 'Because users notice more than they say',
    items: ['Onboarding Drop-off', 'UX Confusion', 'Delayed Launch', 'No Design System', 'Design Mismatch'],
  },
  services: {
    headingLine1: 'One partner everything',
    headingHighlight: 'your product needs',
    description:
      "Whether you're pre-launch or post-funding, we have a structured engagement for exactly where you are.",
    ctaLabel: 'Book A Free Strategy Call',
    ctaNote: "Book a free call - we'll tell you in 30 minutes.",
    services: [
      {
        id: 'ai-product-ux',
        index: '01',
        title: 'AI Product UX Design',
        description: 'for AI-native SaaS startups',
        image: '/assets/services/ai-product-ux.png',
        imageAlt: 'AI Product UX Design preview',
      },
      {
        id: 'saas-platform',
        index: '02',
        title: 'SaaS Platform Design',
        description: 'for complex dashboards, onboarding, activation',
        image: '/assets/services/saas-platform.png',
        imageAlt: 'SaaS Platform Design preview',
      },
      {
        id: 'product-design-partner',
        index: '03',
        title: 'Product Design Partner',
        description: 'monthly retainer, embedded in your team',
        image: '/assets/services/product-design-partner.png',
        imageAlt: 'Product Design Partner preview',
      },
    ],
  },
  domains: {
    pillLabel: 'Industries',
    headingLine1: "We've Worked In Your",
    headingHighlight: 'Domain Before',
    description:
      "we've built and improved products across multiple industries - chances are we already understand how your space works.",
    ctaLabel: 'Explore Our Work',
    ctaHref: '#work',
    items: [
      'SaaS',
      'Fintech',
      'Travel & Booking',
      'E-commerce',
      'Dating & Social',
      'Marketplaces',
      'EdTech',
      'Healthcare',
      'AI Products',
      'Productivity Tools',
      'Creator Platforms',
      'On-Demand Services',
      'Logistics & Delivery',
      'Real Estate',
      'Fitness & Wellness',
      'Media & Content',
      'Dating',
      'Entertainment',
    ],
  },
  plans: {
    pillLabel: 'Selected Work',
    headingLine1: 'Designed for',
    headingLine2Prefix: 'where',
    headingHighlight: 'you are',
    description: 'Two entry points. one outcome - a product that works.',
    bottomText: 'From zero to launch in weeks. clean design, solid dev, no confusion.',
    plans: [
      {
        id: 'fix',
        theme: 'light',
        title: "Fix What Isn't Working",
        features: ['UX audit + clarity report', 'Flow redesign', 'Delivery in 4 weeks'],
        ctaLabel: 'BOOK A FREE CALL',
        visualType: 'before-after',
      },
      {
        id: 'build',
        theme: 'green',
        title: 'Build Right From Day One',
        features: ['Product strategy + roadmap', 'Full product design', 'development + launch'],
        ctaLabel: 'Text Here',
        visualType: 'laptop',
      },
    ],
  },
  credibility: {
    heading: 'From fiverr projects to real',
    headingHighlight: 'clarity',
    subheading: 'Real products, real teams — delivering clarity, structure, and results.',
    marketplaceLogo: { name: 'Fiverr', src: '/assets/credibility/fiverr.svg', width: 180, height: 60 },
    projectCount: '400+',
    projectCountLabel: 'Projects Delivered',
    projectCountDescription: 'Across industries, solving real product problems.',
    logos: [
      { name: 'WingAI', src: '/assets/credibility/wingai.svg', width: 120, height: 36 },
      { name: 'Tinder', src: '/assets/credibility/tinder.svg', width: 110, height: 36 },
      { name: 'FlickNite', src: '/assets/credibility/flicknite.svg', width: 130, height: 36 },
      { name: 'SastaStay', src: '/assets/credibility/sastastays.svg', width: 150, height: 36 },
    ],
    stats: [
      {
        id: 'rating',
        icon: '/assets/credibility/star.svg',
        value: '4.5',
        label: 'Average Rating',
        description: 'Proof Of Consistency, And Trust.',
      },
      {
        id: 'clients',
        icon: '/assets/credibility/customer.svg',
        value: '120+',
        label: 'Clients Served',
        description: 'Trusted By Teams Across Industries.',
      },
    ],
    ctaLabel: 'View Fiverr Profile',
    ctaHref: '#work',
  },
  testimonials: {
    pillLabel: 'Across Fiverr & Client Projects',
    headingPrefix: 'From teams who needed',
    headingHighlight: 'clarity',
    testimonials: [
      {
        id: 'marcus-klein',
        name: 'Marcus Klein',
        role: 'Head of product, Arkade',
        thumbnail: '/assets/testimonials/testimonial-01.png',
        avatar: '/assets/testimonials/marcus-klein.png',
        rating: 5,
      },
      {
        id: 'sastastay',
        name: 'Sarah Wilson',
        role: 'Founder, SastaStay',
        thumbnail: '/assets/testimonials/testimonial-02.png',
        avatar: '/assets/testimonials/sarah-wilson.png',
        rating: 5,
      },
      {
        id: 'wingai',
        name: 'David Miller',
        role: 'CEO, WingAI',
        thumbnail: '/assets/testimonials/testimonial-03.png',
        avatar: '/assets/testimonials/david-miller.png',
        rating: 5,
      },
      {
        id: 'flicknite',
        name: 'Emma Clark',
        role: 'Product Lead, FlickNite',
        thumbnail: '/assets/testimonials/testimonial-04.png',
        avatar: '/assets/testimonials/emma-clark.png',
        rating: 5,
      },
      {
        id: 'payaix',
        name: 'Alex Morgan',
        role: 'Founder, PayAi-X',
        thumbnail: '/assets/testimonials/testimonial-05.png',
        avatar: '/assets/testimonials/alex-morgan.png',
        rating: 5,
      },
    ],
  },
  finalCta: {
    eyebrow: 'Take The Next Step',
    headlineLine1: "Let's make your",
    headlineLine2: 'product the thing',
    headlineLine3: 'users',
    headlineHighlight: "don't complain about.",
    description:
      "A 30-minute intro call. No pitch deck, no pressure. We'll listen to where you're stuck, tell you honestly if we can help, and if we can — we'll propose a 3-day trial so you can see the work before you commit.",
    ctaLabel: 'Book A Intro Call',
    ctaHref: '#contact',
  },
  startSmall: {
    pillLabel: 'Where To Begin',
    headingPrefix: 'Start from a',
    headingHighlight: 'small task',
    cards: [
      {
        id: 'ux-audit',
        eyebrow: 'Have A Product?',
        title: 'UX Audit',
        description: 'Issues, fixes, and a clear improvement roadmap.',
        ctaLabel: 'Text Here',
        href: '#contact',
      },
      {
        id: 'strategy-planning',
        eyebrow: 'Building New?',
        title: 'Strategy & Planning',
        description: 'Structure, flows, and direction from day one.',
        ctaLabel: 'Text Here',
        href: '#contact',
      },
    ],
  },
  footer: {
    headline: 'Start With Clarity',
    description: "Have a product idea or something not working? let's figure it out together",
    ctaLabel: 'Book A Free Call',
    ctaHref: '#contact',
    exploreLinks: [
      { label: 'Home', href: '/' },
      { label: 'Work', href: '/work' },
      { label: 'Services', href: '/services' },
      { label: 'Career', href: '/career' },
      { label: 'About us', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
    whatWeDoLinks: [
      { label: 'Product Foundation', href: '#' },
      { label: 'Product Design', href: '#' },
      { label: 'Design Systems', href: '#' },
      { label: 'App Development', href: '#' },
      { label: 'Web Development', href: '#' },
    ],
    socialLinks: [
      { label: 'LinkedIn', href: '#', text: 'in' },
      { label: 'Instagram', href: '#', text: '◎' },
      { label: 'X', href: '#', text: '𝕏' },
      { label: 'Fiverr', href: '#', text: 'fi' },
    ],
    email: 'hello@techtical.com',
    copyrightText: '© 2026 Techtical Solution. All Rights Reserved',
    legalLinks: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms Of Service', href: '#' },
    ],
  },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function imgUrl(src: SanityImg, opts?: { w?: number; h?: number }): string | null {
  if (!src) return null
  let builder = urlFor(src)
  if (!builder) return null
  if (opts?.w) builder = builder.width(opts.w)
  if (opts?.h) builder = builder.height(opts.h)
  return builder.url()
}

function transformLogo(raw: RawLogo, fallbackSrc = ''): SanityLogoItem {
  return {
    name: raw.name ?? '',
    src: imgUrl(raw.logo) ?? fallbackSrc,
    width: raw.width ?? 150,
    height: raw.height ?? 44,
  }
}

// ─── Transformers ─────────────────────────────────────────────────────────────

function transformHero(raw: RawHomePage['hero']): SanityHeroData | undefined {
  if (!raw) return undefined
  return {
    headlineLine1: raw.headlineLine1 ?? 'We Build Products',
    headlineBold: raw.headlineBold ?? 'Founders Can Ship.',
    description: raw.description ?? '',
    primaryCtaLabel: raw.primaryCtaLabel ?? 'Book A Free Strategy Call',
    primaryCtaHref: raw.primaryCtaHref ?? '#contact',
    secondaryCtaLabel: raw.secondaryCtaLabel ?? 'See Our Work',
    secondaryCtaHref: raw.secondaryCtaHref ?? '#work',
    handwrittenNote: raw.handwrittenNote ?? "Free 30-minute call. No pitch. We'll tell you exactly what your product needs — even if you don't hire us.",
    founderTrustText: raw.founderTrustText ?? 'Trusted by 120+ founders across 18 countries',
    // Marquee: each item stored as a string becomes a single-item group
    marqueeItems: (raw.marqueeItems ?? []).map((item) => [item]),
    founderAvatars: (raw.founderAvatars ?? [])
      .map((img) => imgUrl(img, { w: 80, h: 80 }) ?? '')
      .filter(Boolean),
  }
}

function transformTrustedTeams(raw: RawHomePage['trustedTeams']): SanityTrustedTeamsData | undefined {
  if (!raw) return undefined
  const hasContent = raw.heading || raw.subheading || raw.logos?.length
  if (!hasContent) return undefined
  return {
    heading: raw.heading ?? 'Trusted by teams building',
    subheading: raw.subheading ?? 'serious products',
    logos: (raw.logos ?? []).map((l) => transformLogo(l)),
  }
}

function transformCaseStudies(raw: RawCaseStudy[] | undefined): SanityCaseStudyItem[] | undefined {
  if (!raw?.length) return undefined
  return raw.map((cs) => ({
    eyebrow: cs.eyebrow ?? `Case Study — ${cs.title}`,
    title: cs.title ?? '',
    image: imgUrl(cs.image, { w: 1200, h: 800 }) ?? '/assets/case-studies/sastastay-cover.png',
    tags: cs.tags ?? [],
    quote: cs.quote ?? '',
    author: {
      name: cs.authorName ?? '',
      role: cs.authorRole ?? '',
      avatar: imgUrl(cs.authorAvatar, { w: 80, h: 80 }) ?? '/assets/case-studies/marcus-klein.png',
    },
  }))
}

function transformServices(raw: RawService[] | undefined): SanityServiceItem[] | undefined {
  if (!raw?.length) return undefined
  return raw.map((s, i) => ({
    id: s._id,
    index: s.index ?? String(i + 1).padStart(2, '0'),
    title: s.title ?? '',
    description: s.description ?? '',
    image: imgUrl(s.image, { w: 800, h: 600 }) ?? `/assets/services/ai-product-ux.png`,
    imageAlt: s.imageAlt ?? s.title ?? '',
  }))
}

function transformProblem(raw: RawHomePage['problem'], legacyItems: string[] | undefined): SanityProblemData | undefined {
  const items = raw?.items?.length ? raw.items : legacyItems
  const hasContent = raw?.headingLine1 || raw?.headingHighlight || raw?.description || items?.length
  if (!hasContent) return undefined
  return {
    headingLine1: raw?.headingLine1 ?? "Let's Get Rid Of",
    headingHighlight: raw?.headingHighlight ?? 'things like',
    description: raw?.description ?? 'Because users notice more than they say',
    items: items?.length ? items : [],
  }
}

function transformServicesSection(
  raw: RawHomePage['servicesIntro'],
  services: RawService[] | undefined,
): SanityServicesData | undefined {
  const transformedServices = transformServices(services) ?? []
  const hasContent =
    raw?.headingLine1 ||
    raw?.headingHighlight ||
    raw?.description ||
    raw?.ctaLabel ||
    raw?.ctaNote ||
    transformedServices.length
  if (!hasContent) return undefined
  return {
    headingLine1: raw?.headingLine1 ?? 'One partner everything',
    headingHighlight: raw?.headingHighlight ?? 'your product needs',
    description: raw?.description ?? "Whether you're pre-launch or post-funding, we have a structured engagement for exactly where you are.",
    ctaLabel: raw?.ctaLabel ?? 'Book A Free Strategy Call',
    ctaNote: raw?.ctaNote ?? "Book a free call - we'll tell you in 30 minutes.",
    services: transformedServices,
  }
}

function transformDomains(raw: RawHomePage['domainsSection'], legacyItems: string[] | undefined): SanityDomainsData | undefined {
  const items = raw?.items?.length ? raw.items : legacyItems
  const hasContent =
    raw?.pillLabel ||
    raw?.headingLine1 ||
    raw?.headingHighlight ||
    raw?.description ||
    raw?.ctaLabel ||
    raw?.ctaHref ||
    items?.length
  if (!hasContent) return undefined
  return {
    pillLabel: raw?.pillLabel ?? 'Industries',
    headingLine1: raw?.headingLine1 ?? "We've Worked In Your",
    headingHighlight: raw?.headingHighlight ?? 'Domain Before',
    description: raw?.description ?? "we've built and improved products across multiple industries - chances are we already understand how your space works.",
    ctaLabel: raw?.ctaLabel ?? 'Explore Our Work',
    ctaHref: raw?.ctaHref ?? '#work',
    items: items?.length ? items : [],
  }
}

function transformPlans(raw: RawPlan[] | undefined): SanityPlanItem[] | undefined {
  if (!raw?.length) return undefined
  return raw.map((p, i) => ({
    id: p.id ?? `plan-${i}`,
    theme: p.theme ?? (i === 0 ? 'light' : 'green'),
    title: p.title ?? '',
    features: p.features ?? [],
    ctaLabel: p.ctaLabel ?? 'BOOK A FREE CALL',
    visualType: p.visualType ?? (i === 0 ? 'before-after' : 'laptop'),
  }))
}

function transformPlansSection(
  raw: RawHomePage['plansIntro'],
  plans: RawPlan[] | undefined,
): SanityPlansData | undefined {
  const transformedPlans = transformPlans(plans) ?? []
  const hasContent =
    raw?.pillLabel ||
    raw?.headingLine1 ||
    raw?.headingLine2Prefix ||
    raw?.headingHighlight ||
    raw?.description ||
    raw?.bottomText ||
    transformedPlans.length
  if (!hasContent) return undefined
  return {
    pillLabel: raw?.pillLabel ?? 'Selected Work',
    headingLine1: raw?.headingLine1 ?? 'Designed for',
    headingLine2Prefix: raw?.headingLine2Prefix ?? 'where',
    headingHighlight: raw?.headingHighlight ?? 'you are',
    description: raw?.description ?? 'Two entry points. one outcome - a product that works.',
    bottomText: raw?.bottomText ?? 'From zero to launch in weeks. clean design, solid dev, no confusion.',
    plans: transformedPlans,
  }
}

function transformCredibility(raw: RawHomePage['credibility']): SanityCredibilityData | undefined {
  if (!raw) return undefined
  return {
    heading: raw.heading ?? 'From fiverr projects to real',
    headingHighlight: raw.headingHighlight ?? 'clarity',
    subheading: raw.subheading ?? 'Real products, real teams — delivering clarity, structure, and results.',
    marketplaceLogo: transformLogo(raw.marketplaceLogo ?? { name: 'Fiverr' }, '/assets/credibility/fiverr.svg'),
    projectCount: raw.projectCount ?? '400+',
    projectCountLabel: raw.projectCountLabel ?? 'Projects Delivered',
    projectCountDescription: raw.projectCountDescription ?? 'Across industries, solving real product problems.',
    logos: (raw.logos ?? []).map((l) => transformLogo(l)),
    stats: (raw.stats ?? []).map((s) => ({
      id: s.id ?? s.label ?? '',
      value: s.value ?? '',
      label: s.label ?? '',
      description: s.description ?? '',
      icon: imgUrl(s.icon) ?? '/assets/credibility/star.svg',
    })),
    ctaLabel: raw.ctaLabel ?? 'View Fiverr Profile',
    ctaHref: raw.ctaHref ?? '#work',
  }
}

function transformTestimonials(raw: RawTestimonial[] | undefined): SanityTestimonialItem[] | undefined {
  if (!raw?.length) return undefined
  return raw.map((t) => ({
    id: t._id,
    name: t.name ?? '',
    role: t.role ?? '',
    thumbnail: imgUrl(t.thumbnail, { w: 600, h: 700 }) ?? '/assets/testimonials/testimonial-01.png',
    avatar: imgUrl(t.avatar, { w: 80, h: 80 }) ?? '',
    rating: t.rating ?? 5,
    href: t.href,
  }))
}

function transformTestimonialsSection(
  raw: RawHomePage['testimonialsIntro'],
  testimonials: RawTestimonial[] | undefined,
): SanityTestimonialsData | undefined {
  const transformedTestimonials = transformTestimonials(testimonials) ?? []
  const hasContent =
    raw?.pillLabel ||
    raw?.headingPrefix ||
    raw?.headingHighlight ||
    transformedTestimonials.length
  if (!hasContent) return undefined
  return {
    pillLabel: raw?.pillLabel ?? 'Across Fiverr & Client Projects',
    headingPrefix: raw?.headingPrefix ?? 'From teams who needed',
    headingHighlight: raw?.headingHighlight ?? 'clarity',
    testimonials: transformedTestimonials,
  }
}

function transformFinalCta(raw: RawHomePage['finalCta']): SanityFinalCtaData | undefined {
  if (!raw) return undefined
  return {
    eyebrow: raw.eyebrow ?? 'TAKE THE NEXT STEP',
    headlineLine1: raw.headlineLine1 ?? "Let's make your",
    headlineLine2: raw.headlineLine2 ?? 'product the thing',
    headlineLine3: raw.headlineLine3 ?? 'users',
    headlineHighlight: raw.headlineHighlight ?? "don't complain about.",
    description: raw.description ?? "A 30-minute intro call. No pitch deck, no pressure. We'll listen to where you're stuck, tell you honestly if we can help, and if we can — we'll propose a 3-day trial so you can see the work before you commit.",
    ctaLabel: raw.ctaLabel ?? 'BOOK A INTRO CALL',
    ctaHref: raw.ctaHref ?? '#contact',
  }
}

function transformStartSmall(raw: RawStartSmallCard[] | undefined): SanityStartSmallCard[] | undefined {
  if (!raw?.length) return undefined
  return raw.map((c, i) => ({
    id: c.id ?? `card-${i}`,
    eyebrow: c.eyebrow ?? '',
    title: c.title ?? '',
    description: c.description ?? '',
    ctaLabel: c.ctaLabel ?? 'Text Here',
    href: c.href ?? '#contact',
  }))
}

function transformStartSmallSection(
  raw: RawHomePage['startSmall'],
  cards: RawStartSmallCard[] | undefined,
): SanityStartSmallData | undefined {
  const transformedCards = transformStartSmall(cards) ?? []
  const hasContent =
    raw?.pillLabel ||
    raw?.headingPrefix ||
    raw?.headingHighlight ||
    transformedCards.length
  if (!hasContent) return undefined
  return {
    pillLabel: raw?.pillLabel ?? 'Where To Begin',
    headingPrefix: raw?.headingPrefix ?? 'Start from a',
    headingHighlight: raw?.headingHighlight ?? 'small task',
    cards: transformedCards,
  }
}

function transformFooter(raw: RawHomePage['footer']): SanityFooterData | undefined {
  if (!raw) return undefined
  const hasContent =
    raw.headline ||
    raw.description ||
    raw.ctaLabel ||
    raw.ctaHref ||
    raw.exploreLinks?.length ||
    raw.whatWeDoLinks?.length ||
    raw.socialLinks?.length ||
    raw.legalLinks?.length
  if (!hasContent) return undefined
  return {
    headline: raw.headline ?? 'Start With Clarity',
    description: raw.description ?? "Have a product idea or something not working? let's figure it out together",
    ctaLabel: raw.ctaLabel ?? 'Book A Free Call',
    ctaHref: raw.ctaHref ?? '#contact',
    exploreLinks: (raw.exploreLinks ?? []).map((l) => ({ label: l.label ?? '', href: l.href ?? '#' })),
    whatWeDoLinks: (raw.whatWeDoLinks ?? []).map((l) => ({ label: l.label ?? '', href: l.href ?? '#' })),
    socialLinks: (raw.socialLinks ?? []).map((l) => ({ label: l.label ?? '', href: l.href ?? '#', text: l.text ?? '' })),
    email: raw.email ?? 'hello@techtical.com',
    copyrightText: raw.copyrightText ?? '© 2026 Techtical Solution. All Rights Reserved',
    legalLinks: (raw.legalLinks ?? []).map((l) => ({ label: l.label ?? '', href: l.href ?? '#' })),
  }
}

function mergeHomePageData(data: HomePageSanityData): Required<HomePageSanityData> {
  return {
    hero: {
      ...homePageDefaults.hero,
      ...data.hero,
      marqueeItems: data.hero?.marqueeItems?.length
        ? data.hero.marqueeItems
        : homePageDefaults.hero.marqueeItems,
      founderAvatars: data.hero?.founderAvatars?.length
        ? data.hero.founderAvatars
        : homePageDefaults.hero.founderAvatars,
    },
    trustedTeams: {
      ...homePageDefaults.trustedTeams,
      ...data.trustedTeams,
      logos: data.trustedTeams?.logos?.length
        ? data.trustedTeams.logos
        : homePageDefaults.trustedTeams.logos,
    },
    caseStudies: data.caseStudies?.length ? data.caseStudies : homePageDefaults.caseStudies,
    problem: {
      ...homePageDefaults.problem,
      ...data.problem,
      items: data.problem?.items?.length ? data.problem.items : homePageDefaults.problem.items,
    },
    services: {
      ...homePageDefaults.services,
      ...data.services,
      services: data.services?.services?.length
        ? data.services.services
        : homePageDefaults.services.services,
    },
    domains: {
      ...homePageDefaults.domains,
      ...data.domains,
      items: data.domains?.items?.length ? data.domains.items : homePageDefaults.domains.items,
    },
    plans: {
      ...homePageDefaults.plans,
      ...data.plans,
      plans: data.plans?.plans?.length ? data.plans.plans : homePageDefaults.plans.plans,
    },
    credibility: {
      ...homePageDefaults.credibility,
      ...data.credibility,
      marketplaceLogo: data.credibility?.marketplaceLogo?.src
        ? data.credibility.marketplaceLogo
        : homePageDefaults.credibility.marketplaceLogo,
      logos: data.credibility?.logos?.length ? data.credibility.logos : homePageDefaults.credibility.logos,
      stats: data.credibility?.stats?.length ? data.credibility.stats : homePageDefaults.credibility.stats,
    },
    testimonials: {
      ...homePageDefaults.testimonials,
      ...data.testimonials,
      testimonials: data.testimonials?.testimonials?.length
        ? data.testimonials.testimonials
        : homePageDefaults.testimonials.testimonials,
    },
    finalCta: {
      ...homePageDefaults.finalCta,
      ...data.finalCta,
    },
    startSmall: {
      ...homePageDefaults.startSmall,
      ...data.startSmall,
      cards: data.startSmall?.cards?.length ? data.startSmall.cards : homePageDefaults.startSmall.cards,
    },
    footer: {
      ...homePageDefaults.footer,
      ...data.footer,
      exploreLinks: data.footer?.exploreLinks?.length
        ? data.footer.exploreLinks
        : homePageDefaults.footer.exploreLinks,
      whatWeDoLinks: data.footer?.whatWeDoLinks?.length
        ? data.footer.whatWeDoLinks
        : homePageDefaults.footer.whatWeDoLinks,
      socialLinks: data.footer?.socialLinks?.length
        ? data.footer.socialLinks
        : homePageDefaults.footer.socialLinks,
      legalLinks: data.footer?.legalLinks?.length ? data.footer.legalLinks : homePageDefaults.footer.legalLinks,
    },
  }
}

// ─── Main query function ──────────────────────────────────────────────────────

export async function getHomePageData(): Promise<Required<HomePageSanityData>> {
  try {
    const raw = await sanityFetch<RawHomePage>({
      query: homePageQuery,
      revalidate: 60,
      tags: ['homePage'],
    })

    if (!raw) return homePageDefaults

    return mergeHomePageData({
      hero: transformHero(raw.hero),
      trustedTeams: transformTrustedTeams(raw.trustedTeams),
      caseStudies: transformCaseStudies(raw.featuredCaseStudies),
      problem: transformProblem(raw.problem, raw.problemItems),
      services: transformServicesSection(raw.servicesIntro, raw.featuredServices),
      domains: transformDomains(raw.domainsSection, raw.domains),
      plans: transformPlansSection(raw.plansIntro, raw.plans),
      credibility: transformCredibility(raw.credibility),
      testimonials: transformTestimonialsSection(raw.testimonialsIntro, raw.featuredTestimonials),
      finalCta: transformFinalCta(raw.finalCta),
      startSmall: transformStartSmallSection(raw.startSmall, raw.startSmallCards),
      footer: transformFooter(raw.footer),
    })
  } catch {
    return homePageDefaults
  }
}
