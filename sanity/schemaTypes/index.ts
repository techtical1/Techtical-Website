import { type SchemaTypeDefinition } from 'sanity'

// ─── Reusable object types ────────────────────────────────────────────────────

const logoObject: SchemaTypeDefinition = {
  name: 'logoObject',
  title: 'Logo',
  type: 'object',
  fields: [
    { name: 'name', title: 'Brand Name', type: 'string', validation: (R) => R.required() },
    { name: 'logo', title: 'Logo Image', type: 'image', options: { accept: '.svg,.png,.webp' } },
    { name: 'width', title: 'Display Width (px)', type: 'number' },
    { name: 'height', title: 'Display Height (px)', type: 'number' },
  ],
  preview: { select: { title: 'name', media: 'logo' } },
}

const navLinkObject: SchemaTypeDefinition = {
  name: 'navLink',
  title: 'Nav Link',
  type: 'object',
  fields: [
    { name: 'label', title: 'Label', type: 'string' },
    { name: 'href', title: 'URL', type: 'string' },
  ],
  preview: { select: { title: 'label', subtitle: 'href' } },
}

// ─── Collection document types ────────────────────────────────────────────────

const author: SchemaTypeDefinition = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (R) => R.required() },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'bio', title: 'Bio', type: 'text' },
  ],
}

const blogPost: SchemaTypeDefinition = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() },
    { name: 'isFeatured', title: 'Featured Post', type: 'boolean', initialValue: false },
    { name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'publishedAt', title: 'Published At', type: 'datetime', validation: (R) => R.required() },
    { name: 'image', title: 'Featured Image', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 4 },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'tag', title: 'Tag', type: 'string' },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
  ],
  preview: { select: { title: 'title', media: 'image' } },
}

const caseStudy: SchemaTypeDefinition = {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Title', type: 'string', validation: (R) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() },
    { name: 'eyebrow', title: 'Eyebrow Label', type: 'string', description: 'e.g. "Case Study — SastaStay"' },
    { name: 'client', title: 'Client Name', type: 'string' },
    { name: 'image', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Short Description', type: 'text' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'quote', title: 'Client Quote', type: 'text' },
    { name: 'authorName', title: 'Quote Author Name', type: 'string' },
    { name: 'authorRole', title: 'Quote Author Role', type: 'string' },
    { name: 'authorAvatar', title: 'Quote Author Avatar', type: 'image', options: { hotspot: true } },
    { name: 'challenge', title: 'Challenge', type: 'array', of: [{ type: 'block' }] },
    { name: 'solution', title: 'Solution', type: 'array', of: [{ type: 'block' }] },
    {
      name: 'results', title: 'Results', type: 'array',
      of: [{ type: 'object', fields: [{ name: 'metric', type: 'string' }, { name: 'value', type: 'string' }] }],
    },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
  ],
  preview: { select: { title: 'title', subtitle: 'client', media: 'image' } },
}

const service: SchemaTypeDefinition = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'index', title: 'Display Index', type: 'string', description: 'e.g. 01, 02, 03' },
    { name: 'description', title: 'Subtitle Description', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'image', title: 'Preview Image', type: 'image', options: { hotspot: true } },
    { name: 'imageAlt', title: 'Image Alt Text', type: 'string' },
    { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  preview: { select: { title: 'title', subtitle: 'description', media: 'image' } },
}

const teamMember: SchemaTypeDefinition = {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (R) => R.required() },
    { name: 'role', title: 'Role', type: 'string', validation: (R) => R.required() },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'bio', title: 'Bio', type: 'text' },
  ],
}

const testimonial: SchemaTypeDefinition = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (R) => R.required() },
    { name: 'role', title: 'Role / Company', type: 'string' },
    { name: 'quote', title: 'Quote', type: 'text' },
    { name: 'author', title: 'Author (legacy field)', type: 'string' },
    { name: 'thumbnail', title: 'Thumbnail Image', type: 'image', options: { hotspot: true }, description: 'Large image shown in the testimonial carousel' },
    { name: 'avatar', title: 'Avatar (small circle)', type: 'image', options: { hotspot: true } },
    { name: 'rating', title: 'Rating (1–5)', type: 'number', validation: (R) => R.min(1).max(5) },
    { name: 'company', title: 'Company', type: 'string' },
    { name: 'href', title: 'External Link (optional)', type: 'url' },
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'thumbnail' } },
}

const careerJob: SchemaTypeDefinition = {
  name: 'careerJob',
  title: 'Career Job',
  type: 'document',
  fields: [
    { name: 'title', title: 'Job Title', type: 'string', validation: (R) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() },
    { name: 'department', title: 'Department', type: 'string' },
    { name: 'location', title: 'Location', type: 'string' },
    {
      name: 'type', title: 'Job Type', type: 'string',
      options: { list: [{ title: 'Full-time', value: 'full-time' }, { title: 'Part-time', value: 'part-time' }, { title: 'Contract', value: 'contract' }, { title: 'Internship', value: 'internship' }] },
    },
    { name: 'isOpen', title: 'Actively Hiring', type: 'boolean', initialValue: true },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'responsibilities', title: 'Responsibilities', type: 'array', of: [{ type: 'string' }] },
    { name: 'requirements', title: 'Requirements', type: 'array', of: [{ type: 'string' }] },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
  ],
  preview: { select: { title: 'title', subtitle: 'department' } },
}

const faq: SchemaTypeDefinition = {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string', validation: (R) => R.required() },
    { name: 'answer', title: 'Answer', type: 'text', validation: (R) => R.required() },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  preview: { select: { title: 'question', subtitle: 'category' } },
}

const siteSettings: SchemaTypeDefinition = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'title', title: 'Site Title', type: 'string' },
    { name: 'description', title: 'Site Description', type: 'text' },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'email', title: 'Contact Email', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    {
      name: 'socialLinks', title: 'Social Links', type: 'object',
      fields: [
        { name: 'twitter', title: 'Twitter / X', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'github', title: 'GitHub', type: 'url' },
      ],
    },
  ],
  preview: { select: { title: 'title' } },
}

// ─── Home Page singleton ──────────────────────────────────────────────────────

const homePage: SchemaTypeDefinition = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Hero
    {
      name: 'hero', title: 'Hero Section', type: 'object',
      fields: [
        { name: 'headlineLine1', title: 'Headline Line 1', type: 'string', description: 'e.g. "We Build Products"' },
        { name: 'headlineBold', title: 'Headline Bold Line', type: 'string', description: 'e.g. "Founders Can Ship."' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'primaryCtaLabel', title: 'Primary CTA Label', type: 'string' },
        { name: 'primaryCtaHref', title: 'Primary CTA Link', type: 'string' },
        { name: 'secondaryCtaLabel', title: 'Secondary CTA Label', type: 'string' },
        { name: 'secondaryCtaHref', title: 'Secondary CTA Link', type: 'string' },
        { name: 'handwrittenNote', title: 'Handwritten Note (below CTAs)', type: 'string' },
        { name: 'founderTrustText', title: 'Founder Trust Bar Text', type: 'string' },
        { name: 'marqueeItems', title: 'Capability Marquee Items', type: 'array', of: [{ type: 'string' }] },
        { name: 'founderAvatars', title: 'Founder Trust Bar Avatars', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
      ],
    },
    // Trusted Teams
    {
      name: 'trustedTeams', title: 'Trusted Teams Section', type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'subheading', title: 'Italic Subheading', type: 'string' },
        { name: 'logos', title: 'Brand Logos', type: 'array', of: [{ type: 'logoObject' }] },
      ],
    },
    // Case Studies
    {
      name: 'featuredCaseStudies', title: 'Featured Case Studies', type: 'array',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
      validation: (R) => R.max(5),
    },
    // Problem
    {
      name: 'problem', title: 'Problem Section', type: 'object',
      fields: [
        { name: 'headingLine1', title: 'Heading Line 1', type: 'string' },
        { name: 'headingHighlight', title: 'Italic Highlight', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
        {
          name: 'items',
          title: 'Problem Rotator Items',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Items cycling in the "Let\'s Get Rid Of" section',
        },
      ],
    },
    {
      name: 'problemItems', title: 'Legacy Problem Rotator Items', type: 'array',
      of: [{ type: 'string' }],
      description: 'Kept for backwards compatibility. Prefer Problem Section > Problem Rotator Items.',
      hidden: true,
    },
    // Services
    {
      name: 'servicesIntro', title: 'Services Section Copy', type: 'object',
      fields: [
        { name: 'headingLine1', title: 'Heading Line 1', type: 'string' },
        { name: 'headingHighlight', title: 'Italic Highlight', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 3 },
        { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
        { name: 'ctaNote', title: 'Handwritten Note Below CTA', type: 'string' },
      ],
    },
    {
      name: 'featuredServices', title: 'Featured Services', type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      validation: (R) => R.max(6),
    },
    // Domains
    {
      name: 'domainsSection', title: 'Domains Section', type: 'object',
      fields: [
        { name: 'pillLabel', title: 'Pill Label', type: 'string' },
        { name: 'headingLine1', title: 'Heading Line 1', type: 'string' },
        { name: 'headingHighlight', title: 'Italic Highlight', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 3 },
        { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
        { name: 'ctaHref', title: 'CTA Link', type: 'string' },
        {
          name: 'items',
          title: 'Industry Domains',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Industries shown in the spinning orbit',
        },
      ],
    },
    {
      name: 'domains', title: 'Legacy Industry Domains', type: 'array',
      of: [{ type: 'string' }],
      description: 'Kept for backwards compatibility. Prefer Domains Section > Industry Domains.',
      hidden: true,
    },
    // Plans
    {
      name: 'plansIntro', title: 'Plans Section Copy', type: 'object',
      fields: [
        { name: 'pillLabel', title: 'Pill Label', type: 'string' },
        { name: 'headingLine1', title: 'Heading Line 1', type: 'string' },
        { name: 'headingLine2Prefix', title: 'Heading Line 2 Prefix', type: 'string', description: 'e.g. "where"' },
        { name: 'headingHighlight', title: 'Italic Highlight', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
        { name: 'bottomText', title: 'Bottom Support Text', type: 'text', rows: 2 },
      ],
    },
    {
      name: 'plans', title: 'Plans', type: 'array',
      of: [{
        type: 'object', name: 'plan', title: 'Plan',
        fields: [
          { name: 'id', title: 'ID (unique)', type: 'string' },
          { name: 'theme', title: 'Theme', type: 'string', options: { list: [{ title: 'Light', value: 'light' }, { title: 'Green', value: 'green' }] } },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'features', title: 'Feature Bullets', type: 'array', of: [{ type: 'string' }] },
          { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
          { name: 'visualType', title: 'Visual Type', type: 'string', options: { list: [{ title: 'Before / After', value: 'before-after' }, { title: 'Laptop', value: 'laptop' }] } },
        ],
        preview: { select: { title: 'title', subtitle: 'theme' } },
      }],
      validation: (R) => R.max(3),
    },
    // Credibility
    {
      name: 'credibility', title: 'Credibility Section', type: 'object',
      fields: [
        { name: 'heading', title: 'Heading Prefix', type: 'string', description: 'Text before the green italic word.' },
        { name: 'headingHighlight', title: 'Italic Highlight', type: 'string' },
        { name: 'subheading', title: 'Subheading', type: 'string' },
        { name: 'marketplaceLogo', title: 'Marketplace Logo', type: 'logoObject' },
        { name: 'projectCount', title: 'Project Count', type: 'string', description: 'e.g. "400+"' },
        { name: 'projectCountLabel', title: 'Project Count Label', type: 'string', description: 'e.g. "Projects Delivered"' },
        { name: 'projectCountDescription', title: 'Project Count Sub-label', type: 'string' },
        { name: 'logos', title: 'Client Logos', type: 'array', of: [{ type: 'logoObject' }] },
        {
          name: 'stats', title: 'Stat Cards', type: 'array',
          of: [{
            type: 'object', name: 'statCard',
            fields: [
              { name: 'id', title: 'ID', type: 'string' },
              { name: 'value', title: 'Value', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' },
              { name: 'description', title: 'Description', type: 'string' },
              { name: 'icon', title: 'Icon', type: 'image' },
            ],
            preview: { select: { title: 'label', subtitle: 'value' } },
          }],
          validation: (R) => R.max(4),
        },
        { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
        { name: 'ctaHref', title: 'CTA Link', type: 'string' },
      ],
    },
    // Testimonials
    {
      name: 'testimonialsIntro', title: 'Testimonials Section Copy', type: 'object',
      fields: [
        { name: 'pillLabel', title: 'Pill Label', type: 'string' },
        { name: 'headingPrefix', title: 'Heading Prefix', type: 'string' },
        { name: 'headingHighlight', title: 'Italic Highlight', type: 'string' },
      ],
    },
    {
      name: 'featuredTestimonials', title: 'Featured Testimonials', type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
      validation: (R) => R.max(8),
    },
    // Final CTA
    {
      name: 'finalCta', title: 'Final CTA Section', type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow Text', type: 'string' },
        { name: 'headlineLine1', title: 'Headline Line 1', type: 'string' },
        { name: 'headlineLine2', title: 'Headline Line 2', type: 'string' },
        { name: 'headlineLine3', title: 'Headline Line 3', type: 'string' },
        { name: 'headlineHighlight', title: 'Italic Highlight (appended to line 3)', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
        { name: 'ctaHref', title: 'CTA Link', type: 'string' },
      ],
    },
    // Start Small
    {
      name: 'startSmall', title: 'Start Small Section Copy', type: 'object',
      fields: [
        { name: 'pillLabel', title: 'Pill Label', type: 'string' },
        { name: 'headingPrefix', title: 'Heading Prefix', type: 'string' },
        { name: 'headingHighlight', title: 'Italic Highlight', type: 'string' },
      ],
    },
    {
      name: 'startSmallCards', title: 'Start Small Cards', type: 'array',
      of: [{
        type: 'object', name: 'startSmallCard', title: 'Card',
        fields: [
          { name: 'id', title: 'ID', type: 'string' },
          { name: 'eyebrow', title: 'Eyebrow Label', type: 'string' },
          { name: 'title', title: 'Card Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
          { name: 'href', title: 'CTA Link', type: 'string' },
        ],
        preview: { select: { title: 'title', subtitle: 'eyebrow' } },
      }],
      validation: (R) => R.max(4),
    },
    // Footer
    {
      name: 'footer', title: 'Footer', type: 'object',
      fields: [
        { name: 'headline', title: 'CTA Headline', type: 'string' },
        { name: 'description', title: 'CTA Description', type: 'text', rows: 2 },
        { name: 'ctaLabel', title: 'CTA Button Label', type: 'string' },
        { name: 'ctaHref', title: 'CTA Button Link', type: 'string' },
        { name: 'exploreLinks', title: 'Explore Column Links', type: 'array', of: [{ type: 'navLink' }] },
        { name: 'whatWeDoLinks', title: 'What We Do Column Links', type: 'array', of: [{ type: 'navLink' }] },
        {
          name: 'socialLinks', title: 'Social Links', type: 'array',
          of: [{
            type: 'object', name: 'socialLink',
            fields: [
              { name: 'label', title: 'Label', type: 'string' },
              { name: 'href', title: 'URL', type: 'url' },
              { name: 'text', title: 'Display Character', type: 'string', description: 'e.g. "in", "◎", "𝕏"' },
            ],
            preview: { select: { title: 'label', subtitle: 'href' } },
          }],
        },
        { name: 'email', title: 'Contact Email', type: 'string' },
        { name: 'copyrightText', title: 'Copyright Text', type: 'string' },
        { name: 'legalLinks', title: 'Legal Links', type: 'array', of: [{ type: 'navLink' }] },
      ],
    },
  ],
  preview: {
    select: { title: 'hero.headlineLine1' },
    prepare({ title }: { title?: string }) {
      return { title: title ?? 'Home Page' }
    },
  },
}

// ─── Export ───────────────────────────────────────────────────────────────────

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    logoObject,
    navLinkObject,
    blogPost,
    author,
    caseStudy,
    teamMember,
    testimonial,
    service,
    careerJob,
    faq,
    siteSettings,
    homePage,
  ],
}
