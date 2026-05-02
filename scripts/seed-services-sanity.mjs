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

const servicesPage = {
  _id: 'servicesPage',
  _type: 'servicesPage',
  hero: {
    eyebrow: 'Our Services',
    titleLine1: 'Fix your product.',
    titleHighlight: 'increase retention.',
    titleLine3: 'ship faster.',
    description:
      'We design and build high-converting digital products with clear systems, better UX, and measurable results.',
    metrics: [
      { _key: 'partners', value: '120+', label: 'Long-Term Partners', faded: true },
      { _key: 'success-rate', value: '96%', label: 'Success Rate' },
      { _key: 'projects-delivered', value: '250+', label: 'Projects Delivered' },
      { _key: 'on-time-delivery', value: '98%', label: 'On-Time Delivery', faded: true },
    ],
    ratingText: 'Rated 4.5/5',
  },
  metricsSection: {
    titleMain: 'Numbers That Build',
    titleHighlight: 'Confidence',
    metrics: [
      {
        _key: 'products-designed',
        value: '50+',
        title: 'Products Designed',
        description: 'Turning ideas into real product',
      },
      {
        _key: 'clients-served',
        value: '120+',
        title: 'Clients Served',
        description: 'Trusted by teams across industries.',
      },
      {
        _key: 'average-rating',
        value: '4.8',
        title: 'Average Rating',
        description: 'Proof of consistency, and trust.',
      },
    ],
  },
  productClarity: {
    titleMain: 'Where Products Get',
    titleHighlight: 'Clarity',
    items: [
      {
        _key: 'saas-platform',
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
        _key: 'landing-page',
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
        _key: 'app-redesign',
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
        _key: 'small-projects',
        question: 'Do You Take On Small Projects?',
        answer:
          'Yes. We can start with a focused audit, landing page, redesign sprint, or a single product flow before moving into a larger engagement.',
      },
      {
        _key: 'existing-brand',
        question: 'Can You Work With An Existing Brand?',
        answer:
          'Yes. We can work within your existing brand system or improve it where needed without changing the core identity.',
      },
      {
        _key: 'timeline',
        question: "What's Your Typical Project Timeline?",
        answer:
          'Most focused projects take 2–4 weeks. Larger product design or redesign projects depend on scope, screens, and feedback cycles.',
      },
      {
        _key: 'after-reach-out',
        question: 'What Happens After I Reach Out?',
        answer:
          'We review your requirement, ask key questions, suggest the right scope, and share a clear next-step plan.',
      },
      {
        _key: 'free-consultations',
        question: 'Do You Offer Free Consultations Or Discovery Calls?',
        answer:
          'Yes. We offer an initial clarity call to understand your product, goals, and whether we are the right fit.',
      },
      {
        _key: 'not-sure',
        question: "Can I Reach Out If I'm Not Sure What I Need Yet?",
        answer:
          'Absolutely. We can help you identify whether you need UX strategy, redesign, product design, or a smaller audit first.',
      },
      {
        _key: 'startups-or-brands',
        question: 'Do You Work With Startups Or Only Established Brands?',
        answer:
          'We work with both early-stage founders and established teams, depending on the product goal and design maturity.',
      },
      {
        _key: 'feedback-revisions',
        question: 'How Do You Handle Feedback And Revisions?',
        answer:
          'We follow structured review rounds with clear feedback tracking, so revisions stay organized and aligned with the goal.',
      },
    ],
  },
}

async function main() {
  await client.createOrReplace(servicesPage)
  console.log('Seeded Services page Sanity document.')
  console.log('Manual media upload still required for image fields. See docs/services-sanity-media-guide.md.')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
