import { sanityFetch } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.image'
import type { SanityImageSource } from '@sanity/image-url'

type SanityImg = SanityImageSource | null | undefined

type RawMetric = {
  value?: string
  label?: string
  title?: string
  description?: string
  icon?: SanityImg
  faded?: boolean
}

type RawProductClarityItem = {
  title?: string
  description?: string
  tags?: string[]
  image?: SanityImg
  imageAlt?: string
}

type RawFaqItem = {
  question?: string
  answer?: string
}

type RawServicesPage = {
  hero?: {
    eyebrow?: string
    titleLine1?: string
    titleHighlight?: string
    titleLine3?: string
    description?: string
    metrics?: RawMetric[]
    ratingText?: string
  }
  metricsSection?: {
    titleMain?: string
    titleHighlight?: string
    metrics?: RawMetric[]
  }
  productClarity?: {
    titleMain?: string
    titleHighlight?: string
    items?: RawProductClarityItem[]
  }
  process?: {
    titleMain?: string
    titleHighlight?: string
    description?: string
  }
  clarityCta?: {
    pill?: string
    titleTop?: string
    titleHighlight?: string
    description?: string
    ctaLabel?: string
    ctaHref?: string
  }
  faqs?: {
    pill?: string
    titleLine1?: string
    titleLine2?: string
    titleHighlight?: string
    helperText?: string
    items?: RawFaqItem[]
  }
}

const servicesPageQuery = `
  *[_type == "servicesPage"][0] {
    hero {
      eyebrow, titleLine1, titleHighlight, titleLine3, description, ratingText,
      metrics[] { value, label, faded }
    },
    metricsSection {
      titleMain, titleHighlight,
      metrics[] { value, title, label, description, icon { asset-> } }
    },
    productClarity {
      titleMain, titleHighlight,
      items[] { title, description, tags, imageAlt, image { asset-> } }
    },
    process {
      titleMain, titleHighlight, description
    },
    clarityCta {
      pill, titleTop, titleHighlight, description, ctaLabel, ctaHref
    },
    faqs {
      pill, titleLine1, titleLine2, titleHighlight, helperText,
      items[] { question, answer }
    }
  }
`

export type ServicesHeroMetric = {
  value: string
  label: string
  faded?: boolean
}

export type ServicesHeroData = {
  eyebrow: string
  titleLine1: string
  titleHighlight: string
  titleLine3: string
  description: string
  metrics: ServicesHeroMetric[]
  ratingText: string
}

export type ServicesMetricItem = {
  icon: string
  value: string
  label: string
  description: string
}

export type ServicesMetricsData = {
  titleMain: string
  titleHighlight: string
  metrics: ServicesMetricItem[]
}

export type ProductClarityItem = {
  image: string
  imageAlt: string
  title: string
  description: string
  tags: string[]
}

export type ProductClarityData = {
  titleMain: string
  titleHighlight: string
  items: ProductClarityItem[]
}

export type ServicesProcessData = {
  titleMain: string
  titleHighlight: string
  description: string
}

export type ServicesClarityCtaData = {
  pill: string
  titleTop: string
  titleHighlight: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export type ServicesFaqItem = {
  question: string
  answer: string
}

export type ServicesFaqsData = {
  pill: string
  titleLine1: string
  titleLine2: string
  titleHighlight: string
  helperText: string
  items: ServicesFaqItem[]
}

export type ServicesPageData = {
  hero?: ServicesHeroData
  metrics?: ServicesMetricsData
  productClarity?: ProductClarityData
  process?: ServicesProcessData
  clarityCta?: ServicesClarityCtaData
  faqs?: ServicesFaqsData
}

export const servicesPageDefaults: Required<ServicesPageData> = {
  hero: {
    eyebrow: 'Our Services',
    titleLine1: 'Fix your product.',
    titleHighlight: 'increase retention.',
    titleLine3: 'ship faster.',
    description:
      'We design and build high-converting digital products with clear systems, better UX, and measurable results.',
    metrics: [
      { value: '120+', label: 'Long-Term Partners', faded: true },
      { value: '96%', label: 'Success Rate' },
      { value: '250+', label: 'Projects Delivered' },
      { value: '98%', label: 'On-Time Delivery', faded: true },
    ],
    ratingText: 'Rated 4.5/5',
  },
  metrics: {
    titleMain: 'Numbers That Build',
    titleHighlight: 'Confidence',
    metrics: [
      {
        icon: '/assets/service/metric/cup.svg',
        value: '50+',
        label: 'Products Designed',
        description: 'Turning ideas into real product',
      },
      {
        icon: '/assets/service/metric/clients.svg',
        value: '120+',
        label: 'Clients Served',
        description: 'Trusted by teams across industries.',
      },
      {
        icon: '/assets/credibility/star.svg',
        value: '4.8',
        label: 'Average Rating',
        description: 'Proof of consistency, and trust.',
      },
    ],
  },
  productClarity: {
    titleMain: 'Where Products Get',
    titleHighlight: 'Clarity',
    items: [
      {
        image: '/assets/service/product-clarity/saas-platform.png',
        imageAlt: 'SaaS dashboard project',
        title: 'Experts In SaaS Development & Scalable Digital Products',
        description:
          'We build scalable SaaS platforms and high-performing digital products from concept to launch-focused on usability, retention, and long-term product growth.',
        tags: [
          'SaaS Development',
          'Dashboard & Admin Panels',
          'Data Analytics',
          'Multi-Tenant Architecture',
          'Subscription Systems',
          'User Management',
          'Product Scaling',
          'Continuous Improvement',
        ],
      },
      {
        image: '/assets/service/product-clarity/landing-page.png',
        imageAlt: 'High converting landing page project',
        title: 'High-Converting Landing Pages For Better Conversion Rates',
        description:
          'We create modern, conversion-optimized landing pages that clearly communicate your brand, enhance user experience, and drive higher engagement and results.',
        tags: [
          'Business Websites',
          'Landing Pages',
          'E-Commerce Solutions',
          'Responsive Design',
          'CMS Development',
          'Speed Optimization',
          'Conversion Optimization',
          'UI/UX Design',
        ],
      },
      {
        image: '/assets/service/product-clarity/app-redesign.png',
        imageAlt: 'Mobile app redesign project',
        title: 'App Redesign That Increased User Retention By 25%',
        description:
          'We design and develop high-performance mobile and web apps aligned with your business goals-focused on usability, scalability, and measurable user engagement.',
        tags: [
          'Mobile Apps (IOS & Android)',
          'Web Applications',
          'Custom App Development',
          'Scalable Architecture',
          'API Integrations',
          'Performance Optimization',
          'User Experience Design',
          'Secure Systems',
        ],
      },
    ],
  },
  process: {
    titleMain: 'How we bring clarity to',
    titleHighlight: 'products',
    description:
      'A structured process that removes confusion and creates forward momentum - at every stage.',
  },
  clarityCta: {
    pill: 'Get Started',
    titleTop: 'Start with',
    titleHighlight: 'clarity',
    description: 'one conversation. no obligation. just a clear picture of what to do next.',
    ctaLabel: 'Book A Free Call',
    ctaHref: '#contact',
  },
  faqs: {
    pill: 'FAQs',
    titleLine1: 'Answers to the',
    titleLine2: 'questions we hear',
    titleHighlight: 'most often',
    helperText: 'Got Questions?',
    items: [
      {
        question: 'Do You Take On Small Projects?',
        answer:
          'Yes. We can start with a focused audit, landing page, redesign sprint, or a single product flow before moving into a larger engagement.',
      },
      {
        question: 'Can You Work With An Existing Brand?',
        answer:
          'Yes. We can work within your existing brand system or improve it where needed without changing the core identity.',
      },
      {
        question: "What's Your Typical Project Timeline?",
        answer:
          'Most focused projects take 2–4 weeks. Larger product design or redesign projects depend on scope, screens, and feedback cycles.',
      },
      {
        question: 'What Happens After I Reach Out?',
        answer:
          'We review your requirement, ask key questions, suggest the right scope, and share a clear next-step plan.',
      },
      {
        question: 'Do You Offer Free Consultations Or Discovery Calls?',
        answer:
          'Yes. We offer an initial clarity call to understand your product, goals, and whether we are the right fit.',
      },
      {
        question: "Can I Reach Out If I'm Not Sure What I Need Yet?",
        answer:
          'Absolutely. We can help you identify whether you need UX strategy, redesign, product design, or a smaller audit first.',
      },
      {
        question: 'Do You Work With Startups Or Only Established Brands?',
        answer:
          'We work with both early-stage founders and established teams, depending on the product goal and design maturity.',
      },
      {
        question: 'How Do You Handle Feedback And Revisions?',
        answer:
          'We follow structured review rounds with clear feedback tracking, so revisions stay organized and aligned with the goal.',
      },
    ],
  },
}

function imgUrl(src: SanityImg, opts?: { w?: number; h?: number }): string | null {
  if (!src) return null
  let builder = urlFor(src)
  if (!builder) return null
  if (opts?.w) builder = builder.width(opts.w)
  if (opts?.h) builder = builder.height(opts.h)
  return builder.url()
}

function transformHero(raw: RawServicesPage['hero']): ServicesHeroData | undefined {
  if (!raw) return undefined
  return {
    eyebrow: raw.eyebrow ?? servicesPageDefaults.hero.eyebrow,
    titleLine1: raw.titleLine1 ?? servicesPageDefaults.hero.titleLine1,
    titleHighlight: raw.titleHighlight ?? servicesPageDefaults.hero.titleHighlight,
    titleLine3: raw.titleLine3 ?? servicesPageDefaults.hero.titleLine3,
    description: raw.description ?? servicesPageDefaults.hero.description,
    metrics: (raw.metrics ?? []).map((metric, index) => ({
      value: metric.value ?? '',
      label: metric.label ?? '',
      faded: metric.faded ?? servicesPageDefaults.hero.metrics[index]?.faded,
    })),
    ratingText: raw.ratingText ?? servicesPageDefaults.hero.ratingText,
  }
}

function transformMetrics(raw: RawServicesPage['metricsSection']): ServicesMetricsData | undefined {
  if (!raw) return undefined
  return {
    titleMain: raw.titleMain ?? servicesPageDefaults.metrics.titleMain,
    titleHighlight: raw.titleHighlight ?? servicesPageDefaults.metrics.titleHighlight,
    metrics: (raw.metrics ?? []).map((metric, index) => ({
      icon:
        imgUrl(metric.icon, { w: 96, h: 96 }) ??
        servicesPageDefaults.metrics.metrics[index]?.icon ??
        '/assets/credibility/star.svg',
      value: metric.value ?? '',
      label: metric.title ?? metric.label ?? '',
      description: metric.description ?? '',
    })),
  }
}

function transformProductClarity(raw: RawServicesPage['productClarity']): ProductClarityData | undefined {
  if (!raw) return undefined
  return {
    titleMain: raw.titleMain ?? servicesPageDefaults.productClarity.titleMain,
    titleHighlight: raw.titleHighlight ?? servicesPageDefaults.productClarity.titleHighlight,
    items: (raw.items ?? []).map((item, index) => ({
      image:
        imgUrl(item.image, { w: 1240, h: 1000 }) ??
        servicesPageDefaults.productClarity.items[index]?.image ??
        '/assets/service/product-clarity/saas-platform.png',
      imageAlt:
        item.imageAlt ??
        servicesPageDefaults.productClarity.items[index]?.imageAlt ??
        item.title ??
        '',
      title: item.title ?? '',
      description: item.description ?? '',
      tags: item.tags ?? [],
    })),
  }
}

function transformProcess(raw: RawServicesPage['process']): ServicesProcessData | undefined {
  if (!raw) return undefined
  return {
    titleMain: raw.titleMain ?? servicesPageDefaults.process.titleMain,
    titleHighlight: raw.titleHighlight ?? servicesPageDefaults.process.titleHighlight,
    description: raw.description ?? servicesPageDefaults.process.description,
  }
}

function transformClarityCta(raw: RawServicesPage['clarityCta']): ServicesClarityCtaData | undefined {
  if (!raw) return undefined
  return {
    pill: raw.pill ?? servicesPageDefaults.clarityCta.pill,
    titleTop: raw.titleTop ?? servicesPageDefaults.clarityCta.titleTop,
    titleHighlight: raw.titleHighlight ?? servicesPageDefaults.clarityCta.titleHighlight,
    description: raw.description ?? servicesPageDefaults.clarityCta.description,
    ctaLabel: raw.ctaLabel ?? servicesPageDefaults.clarityCta.ctaLabel,
    ctaHref: raw.ctaHref ?? servicesPageDefaults.clarityCta.ctaHref,
  }
}

function transformFaqs(raw: RawServicesPage['faqs']): ServicesFaqsData | undefined {
  if (!raw) return undefined
  return {
    pill: raw.pill ?? servicesPageDefaults.faqs.pill,
    titleLine1: raw.titleLine1 ?? servicesPageDefaults.faqs.titleLine1,
    titleLine2: raw.titleLine2 ?? servicesPageDefaults.faqs.titleLine2,
    titleHighlight: raw.titleHighlight ?? servicesPageDefaults.faqs.titleHighlight,
    helperText: raw.helperText ?? servicesPageDefaults.faqs.helperText,
    items: (raw.items ?? []).map((item) => ({
      question: item.question ?? '',
      answer: item.answer ?? '',
    })),
  }
}

function mergeServicesPageData(data: ServicesPageData): Required<ServicesPageData> {
  return {
    hero: {
      ...servicesPageDefaults.hero,
      ...data.hero,
      metrics: data.hero?.metrics?.length ? data.hero.metrics : servicesPageDefaults.hero.metrics,
    },
    metrics: {
      ...servicesPageDefaults.metrics,
      ...data.metrics,
      metrics: data.metrics?.metrics?.length ? data.metrics.metrics : servicesPageDefaults.metrics.metrics,
    },
    productClarity: {
      ...servicesPageDefaults.productClarity,
      ...data.productClarity,
      items: data.productClarity?.items?.length
        ? data.productClarity.items
        : servicesPageDefaults.productClarity.items,
    },
    process: {
      ...servicesPageDefaults.process,
      ...data.process,
    },
    clarityCta: {
      ...servicesPageDefaults.clarityCta,
      ...data.clarityCta,
    },
    faqs: {
      ...servicesPageDefaults.faqs,
      ...data.faqs,
      items: data.faqs?.items?.length ? data.faqs.items : servicesPageDefaults.faqs.items,
    },
  }
}

export async function getServicesPageData(): Promise<Required<ServicesPageData>> {
  try {
    const raw = await sanityFetch<RawServicesPage>({
      query: servicesPageQuery,
      revalidate: 60,
      tags: ['servicesPage'],
    })

    if (!raw) return servicesPageDefaults

    return mergeServicesPageData({
      hero: transformHero(raw.hero),
      metrics: transformMetrics(raw.metricsSection),
      productClarity: transformProductClarity(raw.productClarity),
      process: transformProcess(raw.process),
      clarityCta: transformClarityCta(raw.clarityCta),
      faqs: transformFaqs(raw.faqs),
    })
  } catch {
    return servicesPageDefaults
  }
}
