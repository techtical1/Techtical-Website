import { createClient } from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return

  const content = fs.readFileSync(filePath, 'utf8')
  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const separator = trimmed.indexOf('=')
    if (separator === -1) continue

    const key = trimmed.slice(0, separator).trim()
    const value = trimmed
      .slice(separator + 1)
      .trim()
      .replace(/^['"]|['"]$/g, '')

    process.env[key] ??= value
  }
}

loadEnvFile(path.resolve(process.cwd(), '.env.local'))
loadEnvFile(path.resolve(process.cwd(), '.env'))

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-05-01'
const token = process.env.SANITY_API_TOKEN

if (!projectId || !dataset || !token) {
  throw new Error(
    'Missing Sanity environment variables. Required: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN.',
  )
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

const caseStudies = [
  {
    _id: 'home-case-sastastay',
    _type: 'caseStudy',
    title: 'SastaStay - Smarter Hostel Booking',
    slug: { _type: 'slug', current: 'sastastay-smarter-hostel-booking' },
    eyebrow: 'Case Study — SastaStay',
    client: 'SastaStay',
    tags: ['UX Research', 'UI Design', 'Interaction Design'],
    quote: 'You Can Throw Anything At Them, Their Team Will Make The Best Out Of It.',
    authorName: 'Marcus Klein',
    authorRole: 'Head of product, Arkade',
  },
  {
    _id: 'home-case-payaix',
    _type: 'caseStudy',
    title: 'PayAi-X - Secure Payment Experience',
    slug: { _type: 'slug', current: 'payaix-secure-payment-experience' },
    eyebrow: 'Case Study — PayAi-X',
    client: 'PayAi-X',
    tags: ['Fintech UX', 'UI Design', 'Design System'],
    quote: 'They Simplified A Complex Product Into A Clean, Trustworthy Experience.',
    authorName: 'Sarah Wilson',
    authorRole: 'Founder, PayAi-X',
  },
  {
    _id: 'home-case-lienfin',
    _type: 'caseStudy',
    title: 'LienFin - Tax Lien Investment Platform',
    slug: { _type: 'slug', current: 'lienfin-tax-lien-investment-platform' },
    eyebrow: 'Case Study — LienFin',
    client: 'LienFin',
    tags: ['SaaS UX', 'Dashboard', 'Product Strategy'],
    quote: 'They Simplified A Complex Product Into A Clean, Trustworthy Experience.',
    authorName: 'David Miller',
    authorRole: 'CEO, LienFin',
  },
]

const services = [
  {
    _id: 'home-service-ai-product-ux',
    _type: 'service',
    title: 'AI Product UX Design',
    slug: { _type: 'slug', current: 'ai-product-ux-design' },
    index: '01',
    description: 'for AI-native SaaS startups',
    imageAlt: 'AI Product UX Design preview',
    order: 1,
  },
  {
    _id: 'home-service-saas-platform',
    _type: 'service',
    title: 'SaaS Platform Design',
    slug: { _type: 'slug', current: 'saas-platform-design' },
    index: '02',
    description: 'for complex dashboards, onboarding, activation',
    imageAlt: 'SaaS Platform Design preview',
    order: 2,
  },
  {
    _id: 'home-service-product-design-partner',
    _type: 'service',
    title: 'Product Design Partner',
    slug: { _type: 'slug', current: 'product-design-partner' },
    index: '03',
    description: 'monthly retainer, embedded in your team',
    imageAlt: 'Product Design Partner preview',
    order: 3,
  },
]

const testimonials = [
  {
    _id: 'home-testimonial-marcus-klein',
    _type: 'testimonial',
    name: 'Marcus Klein',
    role: 'Head of product, Arkade',
    rating: 5,
  },
  {
    _id: 'home-testimonial-sarah-wilson',
    _type: 'testimonial',
    name: 'Sarah Wilson',
    role: 'Founder, SastaStay',
    rating: 5,
  },
  {
    _id: 'home-testimonial-david-miller',
    _type: 'testimonial',
    name: 'David Miller',
    role: 'CEO, WingAI',
    rating: 5,
  },
  {
    _id: 'home-testimonial-emma-clark',
    _type: 'testimonial',
    name: 'Emma Clark',
    role: 'Product Lead, FlickNite',
    rating: 5,
  },
  {
    _id: 'home-testimonial-alex-morgan',
    _type: 'testimonial',
    name: 'Alex Morgan',
    role: 'Founder, PayAi-X',
    rating: 5,
  },
]

const homePage = {
  _id: 'homePage',
  _type: 'homePage',
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
      'AI Product UX',
      'SaaS Platforms',
      'Design Systems',
      'Growth & Conversion',
      'Rapid MVP Sprints',
      'Motion & Interaction',
      'UX Audits',
      'Developer Tools',
    ],
  },
  trustedTeams: {
    heading: 'Trusted by teams building',
    subheading: 'serious products',
    logos: [
      { _key: 'the-strategist', name: 'The Strategist', width: 160, height: 44 },
      { _key: 'forbes', name: 'Forbes', width: 130, height: 44 },
      { _key: 'today', name: 'Today', width: 150, height: 44 },
      { _key: 'byrdie', name: 'Byrdie', width: 150, height: 44 },
      { _key: 'tinder', name: 'Tinder', width: 150, height: 44 },
    ],
  },
  featuredCaseStudies: caseStudies.map((item) => ({
    _key: item._id,
    _type: 'reference',
    _ref: item._id,
  })),
  problem: {
    headingLine1: "Let's Get Rid Of",
    headingHighlight: 'things like',
    description: 'Because users notice more than they say',
    items: ['Onboarding Drop-off', 'UX Confusion', 'Delayed Launch', 'No Design System', 'Design Mismatch'],
  },
  servicesIntro: {
    headingLine1: 'One partner everything',
    headingHighlight: 'your product needs',
    description:
      "Whether you're pre-launch or post-funding, we have a structured engagement for exactly where you are.",
    ctaLabel: 'Book A Free Strategy Call',
    ctaNote: "Book a free call - we'll tell you in 30 minutes.",
  },
  featuredServices: services.map((item) => ({
    _key: item._id,
    _type: 'reference',
    _ref: item._id,
  })),
  domainsSection: {
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
  plansIntro: {
    pillLabel: 'Selected Work',
    headingLine1: 'Designed for',
    headingLine2Prefix: 'where',
    headingHighlight: 'you are',
    description: 'Two entry points. one outcome - a product that works.',
    bottomText: 'From zero to launch in weeks. clean design, solid dev, no confusion.',
  },
  plans: [
    {
      _key: 'fix',
      id: 'fix',
      theme: 'light',
      title: "Fix What Isn't Working",
      features: ['UX audit + clarity report', 'Flow redesign', 'Delivery in 4 weeks'],
      ctaLabel: 'BOOK A FREE CALL',
      visualType: 'before-after',
    },
    {
      _key: 'build',
      id: 'build',
      theme: 'green',
      title: 'Build Right From Day One',
      features: ['Product strategy + roadmap', 'Full product design', 'development + launch'],
      ctaLabel: 'Text Here',
      visualType: 'laptop',
    },
  ],
  credibility: {
    heading: 'From fiverr projects to real',
    headingHighlight: 'clarity',
    subheading: 'Real products, real teams — delivering clarity, structure, and results.',
    marketplaceLogo: { name: 'Fiverr', width: 180, height: 60 },
    projectCount: '400+',
    projectCountLabel: 'Projects Delivered',
    projectCountDescription: 'Across industries, solving real product problems.',
    logos: [
      { _key: 'wingai', name: 'WingAI', width: 120, height: 36 },
      { _key: 'tinder', name: 'Tinder', width: 110, height: 36 },
      { _key: 'flicknite', name: 'FlickNite', width: 130, height: 36 },
      { _key: 'sastastay', name: 'SastaStay', width: 150, height: 36 },
    ],
    stats: [
      {
        _key: 'rating',
        id: 'rating',
        value: '4.5',
        label: 'Average Rating',
        description: 'Proof Of Consistency, And Trust.',
      },
      {
        _key: 'clients',
        id: 'clients',
        value: '120+',
        label: 'Clients Served',
        description: 'Trusted By Teams Across Industries.',
      },
    ],
    ctaLabel: 'View Fiverr Profile',
    ctaHref: '#work',
  },
  testimonialsIntro: {
    pillLabel: 'Across Fiverr & Client Projects',
    headingPrefix: 'From teams who needed',
    headingHighlight: 'clarity',
  },
  featuredTestimonials: testimonials.map((item) => ({
    _key: item._id,
    _type: 'reference',
    _ref: item._id,
  })),
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
  },
  startSmallCards: [
    {
      _key: 'ux-audit',
      id: 'ux-audit',
      eyebrow: 'Have A Product?',
      title: 'UX Audit',
      description: 'Issues, fixes, and a clear improvement roadmap.',
      ctaLabel: 'Text Here',
      href: '#contact',
    },
    {
      _key: 'strategy-planning',
      id: 'strategy-planning',
      eyebrow: 'Building New?',
      title: 'Strategy & Planning',
      description: 'Structure, flows, and direction from day one.',
      ctaLabel: 'Text Here',
      href: '#contact',
    },
  ],
  footer: {
    headline: 'Start With Clarity',
    description: "Have a product idea or something not working? let's figure it out together",
    ctaLabel: 'Book A Free Call',
    ctaHref: '#contact',
    exploreLinks: [
      { _key: 'home', label: 'Home', href: '/' },
      { _key: 'work', label: 'Work', href: '/work' },
      { _key: 'services', label: 'Services', href: '/services' },
      { _key: 'career', label: 'Career', href: '/career' },
      { _key: 'about-us', label: 'About us', href: '#' },
      { _key: 'contact', label: 'Contact', href: '#contact' },
    ],
    whatWeDoLinks: [
      { _key: 'product-foundation', label: 'Product Foundation', href: '#' },
      { _key: 'product-design', label: 'Product Design', href: '#' },
      { _key: 'design-systems', label: 'Design Systems', href: '#' },
      { _key: 'app-development', label: 'App Development', href: '#' },
      { _key: 'web-development', label: 'Web Development', href: '#' },
    ],
    socialLinks: [
      { _key: 'linkedin', label: 'LinkedIn', href: '#', text: 'in' },
      { _key: 'instagram', label: 'Instagram', href: '#', text: '◎' },
      { _key: 'x', label: 'X', href: '#', text: '𝕏' },
      { _key: 'fiverr', label: 'Fiverr', href: '#', text: 'fi' },
    ],
    email: 'hello@techtical.com',
    copyrightText: '© 2026 Techtical Solution. All Rights Reserved',
    legalLinks: [
      { _key: 'privacy-policy', label: 'Privacy Policy', href: '#' },
      { _key: 'terms-of-service', label: 'Terms Of Service', href: '#' },
    ],
  },
}

async function main() {
  const transaction = client.transaction()

  for (const document of [...caseStudies, ...services, ...testimonials, homePage]) {
    transaction.createOrReplace(document)
  }

  await transaction.commit()
  console.log('Seeded Home page Sanity documents.')
  console.log('Manual media upload still required for image fields. See docs/home-sanity-media-guide.md.')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
