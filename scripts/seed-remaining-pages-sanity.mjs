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

const careerPage = {
  _id: 'careerPage',
  _type: 'careerPage',
  hero: {
    pill: "We're Hiring",
    title: {
      line1: 'About Our UI/UX Design',
      line2: 'Agency Building High-',
      line3: 'Performing',
      highlight: 'digital products',
    },
    description:
      'We help startups and saas teams improve user experience, increase retention, and build scalable product systems.',
    cta: { primary: 'Book A Free Call', note: 'Have Something\nSimilar In Mind?' },
    processCard: { title: 'A Glimpse Into\nOur Process', button: 'View' },
  },
  whoWeAre: {
    title: { normal: 'Who We', highlight: 'are' },
    description:
      'We create digital products that blend strategy, design, and technology, helping startups and growing brands build experiences that drive real results.',
    cards: [
      {
        _key: 'design-build',
        title: 'Design & Build',
        description:
          "We craft thoughtful UI/UX, product design, and development solutions that transform ideas into seamless digital experiences built for today's users.",
      },
      {
        _key: 'who-we-work-with',
        title: 'Who We Work With',
        description:
          'We partner with startups, SaaS brands, and ambitious businesses looking to launch, grow, and scale with confidence.',
      },
      {
        _key: 'results',
        title: 'Results We Deliver',
        description:
          'We create products that improve usability, increase retention, strengthen engagement, and drive measurable business growth.',
      },
    ],
  },
  whyWorkWithUs: {
    pill: 'Why Work With Us',
    title: { normal: 'Why people', highlight: 'stay' },
    description:
      "We've kept things simple and clear. So you can focus on doing your best work",
    benefits: [
      { _key: 'impact', title: 'Real Product Impact', description: 'Create work that ships and matters.', className: 'rotate-0' },
      { _key: 'ownership', title: 'Ownership & Responsibility', description: 'Own decisions and drive outcomes.', className: 'rotate-[-2deg]' },
      { _key: 'growth', title: 'Growth-Focused Environment', description: 'Learn, improve, and grow fast.', className: 'rotate-[-3deg]' },
      { _key: 'culture', title: 'High-Quality Design Culture', description: 'Craft with detail and purpose.', className: 'rotate-[-3deg]' },
    ],
  },
  team: {
    pill: 'Our Team',
    title: { normal: 'The Product Team Behind', highlight: 'high-performing experiences' },
    description: 'A small team focused on clarity, collaboration, and real outcomes',
    members: [
      { _key: 'jigar', name: 'Jigar Rabdiya', role: 'Founder | CEO', active: true },
      { _key: 'anaya', name: 'Anaya Patel', role: 'Co - Founder', active: true },
      { _key: 'kavya', name: 'Kavya Joshi', role: 'UI/UX Designer', active: true },
      { _key: 'vihaan', name: 'Vihaan Shah', role: 'UI/UX Designer', active: true },
      { _key: 'meera', name: 'Meera Desai', role: 'UI/UX Designer', active: true },
    ],
  },
  beyondWork: {
    title: { normal: 'Beyond the', highlight: 'work' },
    subtitle:
      'We believe better teams build better products - and culture drives everything we create.',
    description:
      'At Techtical Solution, we focus on bringing clarity to digital products - designing and structuring experiences that feel simple, connected, and built to work in the real world',
    images: [
      { _key: 'culture-1', alt: 'Team activity', className: 'left-[0px] top-[250px] h-[420px] w-[330px]' },
      { _key: 'culture-2', alt: 'Team collaboration', className: 'left-[370px] top-[215px] h-[290px] w-[345px]' },
      { _key: 'culture-3', alt: 'Team celebration', className: 'left-[755px] top-[0px] h-[460px] w-[335px]' },
      { _key: 'culture-4', alt: 'Team discussion', className: 'right-[0px] top-[140px] h-[360px] w-[340px]' },
      { _key: 'culture-5', alt: 'Birthday celebration', className: 'left-[370px] top-[540px] h-[330px] w-[545px]' },
      { _key: 'culture-6', alt: 'Team meeting', className: 'right-[0px] top-[540px] h-[285px] w-[420px]' },
    ],
  },
  aiProcess: {
    title: { normal: 'Where AI Strengthens', highlight: 'our process' },
    subtitle: 'Used with intent - not as shortcuts',
    video: { src: '/assets/founder/founder-video-preview.mp4' },
  },
  mission: {
    pill: 'Our Mission',
    title: { normal: 'What We', highlight: 'build' },
    subtitle: 'a clearer way to build products',
    card: {
      title: 'Where Clarity Becomes Real',
      paragraphs: [
        "We believe SaaS products, web apps, and mobile apps shouldn't just exist - they should make sense.",
        "Most teams build features, flows, and systems, but when things don't connect, the product starts to break.",
        'We bring clarity into how products and design systems are thought, designed, and built - so they feel simple, work seamlessly, and actually move forward.',
      ],
      cta: 'OUR STORY',
    },
  },
  hiringCta: {
    badge: 'Remote · Full Time',
    title: "We're Actively Hiring Business Development Lead",
    description: [
      "We're looking for someone who can open the right doors and build meaningful relationships.",
      "You'll work closely with us to connect with startups, founders, and product teams - and turn conversations into real opportunities.",
    ],
    button: { label: 'Apply Now', href: '#apply' },
    note: { line1: 'Think This', line2: 'Is You?' },
  },
  openPositions: {
    pill: "We're Hiring",
    title: { normal: 'Open', highlight: 'positions' },
    positions: [
      {
        _key: 'ui-ux-designer',
        id: '01',
        role: 'UI/UX Designer',
        type: 'On site · Full time',
        isOpen: true,
        description: [
          "We're looking for a UI/UX Designer who cares about how products actually work - not just how they look.",
          "You'll work on real products across early-stage ideas, redesigns, and growing platforms - helping teams bring clarity to their product experience. From understanding problems to structuring flows and designing interfaces, your work will directly shape how users interact with the product.",
          "At Techtical, we focus on clarity and outcomes. You'll collaborate closely with the team, think in systems, and design solutions that are simple, usable, and built for real-world use.",
        ],
        cta: { label: 'APPLY NOW', href: '#apply' },
        emailText: 'Or send your work at',
        email: 'careers@techtical.com',
        footerText: { normal: 'Feeling', highlight: 'aligned?' },
      },
      { _key: 'product-designer', id: '02', role: 'Product Designer', type: 'On site · Part time', isOpen: false },
      { _key: 'frontend-developer', id: '03', role: 'Frontend Developer', type: 'Remote · Full time', isOpen: false },
    ],
  },
  finalCta: {
    pill: 'Get Started',
    headingParts: [
      { _key: 'part-1', text: 'Work With A Team That Builds' },
      { _key: 'part-2', text: 'products that actually work', highlight: true, newLine: true },
    ],
    description: 'one conversation. no obligation. just a clear picture of what to do next.',
    buttons: [
      { _key: 'start-project', label: 'Start A Project', href: '#contact', variant: 'primary' },
      { _key: 'join-team', label: 'Join Our Team', href: '#open-positions', variant: 'secondary' },
    ],
  },
}

const workPage = {
  _id: 'workPage',
  _type: 'workPage',
  hero: {
    pill: 'Our Work',
    title: { line1: 'UI/UX case studies', line2: 'that boost', highlight: 'retention & growth' },
    description:
      'Explore real projects where we solved UX problems, improved usability, and delivered measurable results.',
    cta: { label: 'Book A Free Call', note: 'Have Something\nSimilar In Mind?' },
    year: '2019',
  },
  approach: {
    pill: 'Our Approach',
    title: { line1: 'We Design And Build Digital', line2: 'Products That', highlight: 'drive growth.' },
    paragraphs: [
      'We design and build digital products for startups and SaaS companies.',
      'From UX audits to full product design systems, our work focuses on improving usability, increasing engagement, and helping teams ship faster.',
      'Our expertise in UI UX design, SaaS UX, and web app design helps businesses create scalable, high-performing digital experiences that drive growth and long-term success.',
    ],
    footerNote: 'Built With Clarity,',
  },
  gallery: {
    pill: 'Selected Work',
    title: { line1: 'Products used by real teams,', highlight: 'solving real problems' },
    description: 'Each Project Started With Confusion - And Ended With Clarity',
    categories: [
      { _key: 'all', id: 'all', label: 'All' },
      { _key: 'saas', id: 'saas', label: 'SaaS Products' },
      { _key: 'mobile', id: 'mobile', label: 'Mobile Apps' },
      { _key: 'web', id: 'web', label: 'Web Applications' },
      { _key: 'dashboard', id: 'dashboard', label: 'Dashboards' },
      { _key: 'design-system', id: 'design-system', label: 'Design Systems' },
    ],
    projects: [
      { _key: 'buildflow', id: 'buildflow', title: 'BuildFlow - SaaS Productivity App Design', subtitle: 'Low User Engagement And Unclear Onboarding', category: 'saas', featured: true },
      { _key: 'design-system', id: 'design-system', title: 'Design System - Scalable UI Framework', subtitle: 'Inconsistent UI And Slow Development Cycles', category: 'design-system' },
      { _key: 'heppins-snap', id: 'heppins-snap', title: 'Heppins Snap - Social Rewards App UX', subtitle: 'Low App Installs And Poor User Activation', category: 'mobile' },
      { _key: 'style-guide', id: 'style-guide', title: 'Design Style Guide - Component System', subtitle: 'Design Inconsistency And Reusable Component Issues', category: 'design-system' },
      { _key: 'agenai', id: 'agenai', title: 'AgenAI - AI Team Workflow Platform', subtitle: 'Manual Workflows And Inefficient Task Execution', category: 'saas' },
      { _key: 'edtech', id: 'edtech', title: 'Educational Language Learning - EdTech UX Platform', subtitle: 'Low Learning Engagement And Inconsistent Progress', category: 'web' },
      { _key: 'insightflow', id: 'insightflow', title: 'InsightFlow - Data Analytics Dashboard', subtitle: 'Scattered Data And Lack Of Actionable Insights', category: 'dashboard' },
      { _key: 'food-delivery', id: 'food-delivery', title: 'Food Delivery App - UX Optimization', subtitle: 'Slow Ordering Experience And Low Customer Satisfaction', category: 'mobile' },
    ],
  },
  featuredCase: {
    pill: 'Featured Case',
    title: { line1: 'From Poor UX To', highlight: 'high-converting', line2: 'Product Experiences' },
    labels: { before: 'Before', after: 'After' },
    metrics: [
      { _key: 'engagement', id: 'engagement', value: '+40%', label: 'Engagement', className: 'left-[80px] bottom-[210px] rotate-[-12deg] z-[7] w-[315px]' },
      { _key: 'turnaround', id: 'turnaround', value: '48 Hr', label: 'Fast Turnaround', className: 'left-[405px] bottom-[245px] rotate-[1deg] z-[6] w-[330px]' },
      { _key: 'countries', id: 'countries', value: '10+', label: 'Countries Served', className: 'left-[255px] bottom-[90px] rotate-[8deg] z-[8] w-[345px]' },
    ],
  },
}

const blogPage = {
  _id: 'blogPage',
  _type: 'blogPage',
  hero: {
    pill: 'Insights For Builders',
    title: {
      line1: 'UI/UX design, product',
      line2: 'strategy &',
      highlight: 'SaaS growth',
      line3: 'insights',
    },
    description:
      'Learn how to design, build, and improve digital products with actionable insights on ux design, product strategy, onboarding, retention, and scalable systems - tailored for startups and saas teams.',
    cta: { primary: 'Book A Free Strategy Call', secondary: 'See Our Work' },
    cards: {
      trusted: {
        title: 'Trusted By\n100+ Product Teams',
        brands: [
          { _key: 'flicknite', name: 'FlickNite' },
          { _key: 'wingai', name: 'WingAI' },
        ],
        badge: '+98',
        text: 'Founders, PMs and designers rely on these insights to make better product decisions.',
      },
      clients: {
        title: 'Insights From Real\nClient Work',
        text: 'Every article is grounded in real-world challenges - not academic theory.',
      },
      growth: {
        title: 'Focused On UX,\nRetention & Growth',
        text: 'Practical frameworks that drive measurable improvements in usability and retention.',
      },
    },
  },
  featuredArticle: {
    leftCard: {
      pill: 'Start Here',
      title: { line1: 'What actually makes a', highlight: 'product work' },
      description:
        'Not all product problems are obvious. start with the insight that has helped hundreds of founders understand the root of their challenges.',
    },
    article: {
      title: 'Why Most Digital Products Fail',
      highlight: '(And How UX Fixes It)',
      description:
        'Most Products Fail Due To Poor User Experience, Unclear Onboarding, And Lack Of Product Direction - Not Bad Ideas. This Guide Explains How To Identify And Fix The Real Issues Affecting Product Performance.',
      tags: ['Improve Retention', 'Fix Onboarding', 'Increase Usability'],
    },
  },
  challengeExplorer: {
    title: { line1: 'Explore insights based on', line2: 'your', highlight: 'current challenge' },
    description: "Pick the challenge closest to what you're working through right now.",
    challenges: [
      { _key: 'retention', index: '01', label: 'Improve User Retention', href: '#' },
      { _key: 'onboarding', index: '02', label: 'Fix Onboarding Issues', href: '#' },
      { _key: 'validate', index: '03', label: 'Validate a Product Idea', href: '#' },
      { _key: 'design-system', index: '04', label: 'Build a Design System', href: '#' },
      { _key: 'scale-saas', index: '05', label: 'Scale a SaaS Product', href: '#' },
      { _key: 'redesign', index: '06', label: 'Redesign an Existing Product', href: '#' },
    ],
  },
  intro: {
    title: { line1: 'UI/UX design insights for', highlight: 'startups, saas & digital products' },
    paragraphs: [
      'Resource hub for ui/ux, product strategy, and development - focused on better onboarding, retention, and scalable design systems for startups and SaaS.',
      'Helping you make smarter product decisions, reduce friction, and drive real growth.',
    ],
    tags: [
      'UI/UX Design',
      'SaaS Product Strategy',
      'Onboarding Optimization',
      'User Retention',
      'Design Systems',
      'Product Validation',
      'UX For Startups',
      'Product Growth',
    ],
    image: { alt: 'UI UX product strategy dashboard preview' },
  },
  cta: {
    pill: 'Get Started',
    title: { line1: 'Insights Help.', highlight: 'execution', line2: 'Changes Everything.' },
    description:
      "If you're serious about improving your product, we can help you design, build, or optimize it for real results.",
    cta: { primary: 'Start A Project', secondary: 'Start A Project' },
  },
}

async function main() {
  await Promise.all([
    client.createOrReplace(careerPage),
    client.createOrReplace(workPage),
    client.createOrReplace(blogPage),
  ])

  console.log('Seeded Career, Work, and Blog page Sanity documents.')
  console.log('Manual media upload still required for image and video fields. See docs/remaining-pages-sanity-media-guide.md.')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
