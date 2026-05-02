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

// ─── Main query function ──────────────────────────────────────────────────────

export async function getHomePageData(): Promise<HomePageSanityData> {
  try {
    const raw = await sanityFetch<RawHomePage>({
      query: homePageQuery,
      revalidate: 60,
      tags: ['homePage'],
    })

    if (!raw) return {}

    return {
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
    }
  } catch {
    return {}
  }
}
