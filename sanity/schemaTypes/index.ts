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

// ─── Services Page singleton ──────────────────────────────────────────────────

const servicesPage: SchemaTypeDefinition = {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    {
      name: 'hero', title: 'Hero Section', type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow / Pill Label', type: 'string' },
        { name: 'titleLine1', title: 'Title Line 1', type: 'string' },
        { name: 'titleHighlight', title: 'Italic Highlight', type: 'string' },
        { name: 'titleLine3', title: 'Title Line 3', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 3 },
        {
          name: 'metrics', title: 'Hero Metrics', type: 'array',
          of: [{
            type: 'object', name: 'heroMetric',
            fields: [
              { name: 'value', title: 'Value', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' },
              { name: 'faded', title: 'Render Faded', type: 'boolean' },
            ],
            preview: { select: { title: 'label', subtitle: 'value' } },
          }],
          validation: (R) => R.max(4),
        },
        { name: 'ratingText', title: 'Rating Card Text', type: 'string' },
      ],
    },
    {
      name: 'metricsSection', title: 'Metrics Section', type: 'object',
      fields: [
        { name: 'titleMain', title: 'Title Main', type: 'string' },
        { name: 'titleHighlight', title: 'Italic Highlight', type: 'string' },
        {
          name: 'metrics', title: 'Metric Cards', type: 'array',
          of: [{
            type: 'object', name: 'serviceMetricCard',
            fields: [
              { name: 'icon', title: 'Icon', type: 'image' },
              { name: 'value', title: 'Value', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'string' },
            ],
            preview: { select: { title: 'title', subtitle: 'value', media: 'icon' } },
          }],
          validation: (R) => R.max(6),
        },
      ],
    },
    {
      name: 'productClarity', title: 'Product Clarity Section', type: 'object',
      fields: [
        { name: 'titleMain', title: 'Title Main', type: 'string' },
        { name: 'titleHighlight', title: 'Italic Highlight', type: 'string' },
        {
          name: 'items', title: 'Cards', type: 'array',
          of: [{
            type: 'object', name: 'productClarityCard',
            fields: [
              { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
              { name: 'imageAlt', title: 'Image Alt Text', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text', rows: 3 },
              { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
            ],
            preview: { select: { title: 'title', media: 'image' } },
          }],
          validation: (R) => R.max(6),
        },
      ],
    },
    {
      name: 'process', title: 'Process Section', type: 'object',
      fields: [
        { name: 'titleMain', title: 'Title Main', type: 'string' },
        { name: 'titleHighlight', title: 'Italic Highlight', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 3 },
      ],
    },
    {
      name: 'clarityCta', title: 'Clarity CTA Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        { name: 'titleTop', title: 'Title Top', type: 'string' },
        { name: 'titleHighlight', title: 'Italic Highlight', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
        { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
        { name: 'ctaHref', title: 'CTA Link', type: 'string' },
      ],
    },
    {
      name: 'faqs', title: 'FAQs Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        { name: 'titleLine1', title: 'Title Line 1', type: 'string' },
        { name: 'titleLine2', title: 'Title Line 2', type: 'string' },
        { name: 'titleHighlight', title: 'Italic Highlight', type: 'string' },
        { name: 'helperText', title: 'Helper Text Near Illustration', type: 'string' },
        {
          name: 'items', title: 'Questions', type: 'array',
          of: [{
            type: 'object', name: 'servicesFaqItem',
            fields: [
              { name: 'question', title: 'Question', type: 'string' },
              { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
            ],
            preview: { select: { title: 'question' } },
          }],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Services Page' }
    },
  },
}

// ─── Career Page singleton ───────────────────────────────────────────────────

const careerPage: SchemaTypeDefinition = {
  name: 'careerPage',
  title: 'Career Page',
  type: 'document',
  fields: [
    {
      name: 'hero', title: 'Hero Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'line1', title: 'Line 1', type: 'string' },
            { name: 'line2', title: 'Line 2', type: 'string' },
            { name: 'line3', title: 'Line 3', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        { name: 'description', title: 'Description', type: 'text', rows: 3 },
        {
          name: 'cta', title: 'CTA', type: 'object',
          fields: [
            { name: 'primary', title: 'Primary Label', type: 'string' },
            { name: 'note', title: 'Handwritten Note', type: 'string' },
          ],
        },
        {
          name: 'processCard', title: 'Process Card', type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'button', title: 'Button Label', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'smile', title: 'Smile Icon', type: 'image' },
          ],
        },
        { name: 'arrow', title: 'Arrow Image', type: 'image' },
      ],
    },
    {
      name: 'whoWeAre', title: 'Who We Are Section', type: 'object',
      fields: [
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'normal', title: 'Normal Text', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        { name: 'description', title: 'Description', type: 'text', rows: 3 },
        {
          name: 'cards', title: 'Cards', type: 'array',
          of: [{
            type: 'object', name: 'careerWhoWeAreCard',
            fields: [
              { name: 'icon', title: 'Icon', type: 'image' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text', rows: 3 },
            ],
            preview: { select: { title: 'title', media: 'icon' } },
          }],
        },
      ],
    },
    {
      name: 'whyWorkWithUs', title: 'Why Work With Us Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'normal', title: 'Normal Text', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
        {
          name: 'benefits', title: 'Benefit Cards', type: 'array',
          of: [{
            type: 'object', name: 'careerBenefit',
            fields: [
              { name: 'icon', title: 'Icon', type: 'image' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'string' },
              { name: 'className', title: 'Layout Class (advanced)', type: 'string' },
            ],
            preview: { select: { title: 'title', media: 'icon' } },
          }],
        },
      ],
    },
    {
      name: 'team', title: 'Team Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'normal', title: 'Normal Text', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        { name: 'description', title: 'Description', type: 'string' },
        {
          name: 'members', title: 'Team Members', type: 'array',
          of: [{
            type: 'object', name: 'careerTeamMember',
            fields: [
              { name: 'name', title: 'Name', type: 'string' },
              { name: 'role', title: 'Role', type: 'string' },
              { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
              { name: 'active', title: 'Active', type: 'boolean' },
            ],
            preview: { select: { title: 'name', subtitle: 'role', media: 'image' } },
          }],
        },
      ],
    },
    {
      name: 'beyondWork', title: 'Beyond Work Section', type: 'object',
      fields: [
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'normal', title: 'Normal Text', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 },
        { name: 'description', title: 'Description', type: 'text', rows: 3 },
        {
          name: 'images', title: 'Culture Images', type: 'array',
          of: [{
            type: 'object', name: 'careerCultureImage',
            fields: [
              { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
              { name: 'alt', title: 'Alt Text', type: 'string' },
              { name: 'className', title: 'Layout Class (advanced)', type: 'string' },
            ],
            preview: { select: { title: 'alt', media: 'image' } },
          }],
        },
      ],
    },
    {
      name: 'aiProcess', title: 'AI Process Section', type: 'object',
      fields: [
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'normal', title: 'Normal Text', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        {
          name: 'video', title: 'Video', type: 'object',
          fields: [
            { name: 'src', title: 'Fallback/Public Video URL', type: 'string' },
            { name: 'videoFile', title: 'Uploaded Video File', type: 'file', options: { accept: 'video/*' } },
            { name: 'poster', title: 'Poster Image', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    },
    {
      name: 'mission', title: 'Mission Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'normal', title: 'Normal Text', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        {
          name: 'card', title: 'Mission Card', type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'text' }] },
            { name: 'cta', title: 'CTA Label', type: 'string' },
          ],
        },
        {
          name: 'decor', title: 'Decorative Images', type: 'object',
          fields: [
            { name: 'topLeft', title: 'Top Left', type: 'image' },
            { name: 'leftMiddle', title: 'Left Middle', type: 'image' },
            { name: 'topRight', title: 'Top Right', type: 'image' },
            { name: 'tree', title: 'Tree', type: 'image' },
          ],
        },
      ],
    },
    {
      name: 'hiringCta', title: 'Hiring CTA Section', type: 'object',
      fields: [
        { name: 'badge', title: 'Badge', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description Paragraphs', type: 'array', of: [{ type: 'text' }] },
        {
          name: 'button', title: 'Button', type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
        {
          name: 'note', title: 'Handwritten Note', type: 'object',
          fields: [
            { name: 'line1', title: 'Line 1', type: 'string' },
            { name: 'line2', title: 'Line 2', type: 'string' },
          ],
        },
        {
          name: 'assets', title: 'Assets', type: 'object',
          fields: [
            { name: 'man', title: 'Illustration', type: 'image' },
            { name: 'arrow', title: 'Arrow', type: 'image' },
          ],
        },
      ],
    },
    {
      name: 'openPositions', title: 'Open Positions Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'normal', title: 'Normal Text', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        {
          name: 'positions', title: 'Positions', type: 'array',
          of: [{
            type: 'object', name: 'careerPosition',
            fields: [
              { name: 'id', title: 'Display ID', type: 'string' },
              { name: 'role', title: 'Role', type: 'string' },
              { name: 'type', title: 'Type / Location', type: 'string' },
              { name: 'isOpen', title: 'Open By Default', type: 'boolean' },
              { name: 'description', title: 'Description Paragraphs', type: 'array', of: [{ type: 'text' }] },
              {
                name: 'cta', title: 'CTA', type: 'object',
                fields: [
                  { name: 'label', title: 'Label', type: 'string' },
                  { name: 'href', title: 'Link', type: 'string' },
                ],
              },
              { name: 'emailText', title: 'Email Prompt', type: 'string' },
              { name: 'email', title: 'Email', type: 'string' },
              {
                name: 'footerText', title: 'Footer Text', type: 'object',
                fields: [
                  { name: 'normal', title: 'Normal Text', type: 'string' },
                  { name: 'highlight', title: 'Italic Highlight', type: 'string' },
                ],
              },
            ],
            preview: { select: { title: 'role', subtitle: 'type' } },
          }],
        },
      ],
    },
    {
      name: 'finalCta', title: 'Final CTA Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        {
          name: 'headingParts', title: 'Heading Parts', type: 'array',
          of: [{
            type: 'object', name: 'careerFinalCtaHeadingPart',
            fields: [
              { name: 'text', title: 'Text', type: 'string' },
              { name: 'highlight', title: 'Italic Highlight', type: 'boolean' },
              { name: 'newLine', title: 'Start On New Line', type: 'boolean' },
            ],
            preview: { select: { title: 'text' } },
          }],
        },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
        {
          name: 'buttons', title: 'Buttons', type: 'array',
          of: [{
            type: 'object', name: 'careerFinalCtaButton',
            fields: [
              { name: 'label', title: 'Label', type: 'string' },
              { name: 'href', title: 'Link', type: 'string' },
              { name: 'variant', title: 'Variant', type: 'string', options: { list: [{ title: 'Primary', value: 'primary' }, { title: 'Secondary', value: 'secondary' }] } },
            ],
            preview: { select: { title: 'label', subtitle: 'variant' } },
          }],
        },
      ],
    },
  ],
  preview: { prepare() { return { title: 'Career Page' } } },
}

// ─── Work Page singleton ─────────────────────────────────────────────────────

const workPage: SchemaTypeDefinition = {
  name: 'workPage',
  title: 'Work Page',
  type: 'document',
  fields: [
    {
      name: 'hero', title: 'Hero Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'line1', title: 'Line 1', type: 'string' },
            { name: 'line2', title: 'Line 2', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        { name: 'description', title: 'Description', type: 'text', rows: 3 },
        {
          name: 'cta', title: 'CTA', type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'note', title: 'Handwritten Note', type: 'string' },
          ],
        },
        { name: 'year', title: 'Year Label', type: 'string' },
        {
          name: 'visuals', title: 'Visuals', type: 'object',
          fields: [
            { name: 'arrow', title: 'Arrow', type: 'image' },
            { name: 'path', title: 'Path', type: 'image' },
            { name: 'top', title: 'Top Card', type: 'image', options: { hotspot: true } },
            { name: 'main', title: 'Main Card', type: 'image', options: { hotspot: true } },
            { name: 'bottom', title: 'Bottom Card', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    },
    {
      name: 'approach', title: 'Approach Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'line1', title: 'Line 1', type: 'string' },
            { name: 'line2', title: 'Line 2', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        { name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'text' }] },
        { name: 'footerNote', title: 'Footer Note', type: 'string' },
        { name: 'logo', title: 'Logo', type: 'image' },
      ],
    },
    {
      name: 'gallery', title: 'Project Gallery Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'line1', title: 'Line 1', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        { name: 'description', title: 'Description', type: 'string' },
        {
          name: 'categories', title: 'Filter Categories', type: 'array',
          of: [{
            type: 'object', name: 'workProjectCategory',
            fields: [
              { name: 'id', title: 'ID', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' },
            ],
            preview: { select: { title: 'label', subtitle: 'id' } },
          }],
        },
        {
          name: 'projects', title: 'Projects', type: 'array',
          of: [{
            type: 'object', name: 'workProject',
            fields: [
              { name: 'id', title: 'ID', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'subtitle', title: 'Subtitle', type: 'string' },
              { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
              { name: 'category', title: 'Category ID', type: 'string' },
              { name: 'featured', title: 'Featured', type: 'boolean' },
            ],
            preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
          }],
        },
      ],
    },
    {
      name: 'featuredCase', title: 'Featured Case Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'line1', title: 'Line 1', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
            { name: 'line2', title: 'Line 2', type: 'string' },
          ],
        },
        {
          name: 'labels', title: 'Labels', type: 'object',
          fields: [
            { name: 'before', title: 'Before Label', type: 'string' },
            { name: 'after', title: 'After Label', type: 'string' },
          ],
        },
        {
          name: 'visuals', title: 'Visuals', type: 'object',
          fields: [
            { name: 'phones', title: 'Before/After Visual', type: 'image', options: { hotspot: true } },
            { name: 'arrow', title: 'Arrow', type: 'image' },
          ],
        },
        {
          name: 'metrics', title: 'Metric Cards', type: 'array',
          of: [{
            type: 'object', name: 'workFeaturedCaseMetric',
            fields: [
              { name: 'id', title: 'ID', type: 'string' },
              { name: 'value', title: 'Value', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' },
              { name: 'icon', title: 'Icon', type: 'image' },
              { name: 'className', title: 'Layout Class (advanced)', type: 'string' },
            ],
            preview: { select: { title: 'label', subtitle: 'value', media: 'icon' } },
          }],
        },
      ],
    },
  ],
  preview: { prepare() { return { title: 'Work Page' } } },
}

// ─── Blog Page singleton ─────────────────────────────────────────────────────

const blogPage: SchemaTypeDefinition = {
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fields: [
    {
      name: 'hero', title: 'Hero Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'line1', title: 'Line 1', type: 'string' },
            { name: 'line2', title: 'Line 2', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
            { name: 'line3', title: 'Line 3', type: 'string' },
          ],
        },
        { name: 'description', title: 'Description', type: 'text', rows: 3 },
        {
          name: 'cta', title: 'Buttons', type: 'object',
          fields: [
            { name: 'primary', title: 'Primary Label', type: 'string' },
            { name: 'secondary', title: 'Secondary Label', type: 'string' },
          ],
        },
        {
          name: 'cards', title: 'Insight Cards', type: 'object',
          fields: [
            {
              name: 'trusted', title: 'Trusted Card', type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                {
                  name: 'brands', title: 'Brands', type: 'array',
                  of: [{
                    type: 'object', name: 'blogHeroBrand',
                    fields: [
                      { name: 'name', title: 'Name', type: 'string' },
                      { name: 'logo', title: 'Logo', type: 'image' },
                    ],
                    preview: { select: { title: 'name', media: 'logo' } },
                  }],
                },
                { name: 'badge', title: 'Badge', type: 'string' },
                { name: 'text', title: 'Description', type: 'text', rows: 2 },
              ],
            },
            {
              name: 'clients', title: 'Client Work Card', type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'image', title: 'Image', type: 'image' },
                { name: 'text', title: 'Description', type: 'text', rows: 2 },
              ],
            },
            {
              name: 'growth', title: 'Growth Card', type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'vector', title: 'Vector Image', type: 'image' },
                { name: 'text', title: 'Description', type: 'text', rows: 2 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'featuredArticle', title: 'Featured Article Section', type: 'object',
      fields: [
        {
          name: 'leftCard', title: 'Left Card', type: 'object',
          fields: [
            { name: 'pill', title: 'Pill Label', type: 'string' },
            {
              name: 'title', title: 'Title', type: 'object',
              fields: [
                { name: 'line1', title: 'Line 1', type: 'string' },
                { name: 'highlight', title: 'Italic Highlight', type: 'string' },
              ],
            },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
          ],
        },
        {
          name: 'article', title: 'Article Copy', type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'highlight', title: 'Highlight', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 4 },
            { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    },
    {
      name: 'challengeExplorer', title: 'Challenge Explorer Section', type: 'object',
      fields: [
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'line1', title: 'Line 1', type: 'string' },
            { name: 'line2', title: 'Line 2', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        { name: 'description', title: 'Description', type: 'string' },
        {
          name: 'challenges', title: 'Challenge Links', type: 'array',
          of: [{
            type: 'object', name: 'blogChallengeLink',
            fields: [
              { name: 'index', title: 'Display Index', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' },
              { name: 'href', title: 'Link', type: 'string' },
            ],
            preview: { select: { title: 'label', subtitle: 'index' } },
          }],
        },
      ],
    },
    {
      name: 'intro', title: 'Intro Section', type: 'object',
      fields: [
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'line1', title: 'Line 1', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
          ],
        },
        { name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'text' }] },
        { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
        {
          name: 'image', title: 'Image', type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'cta', title: 'CTA Section', type: 'object',
      fields: [
        { name: 'pill', title: 'Pill Label', type: 'string' },
        {
          name: 'title', title: 'Title', type: 'object',
          fields: [
            { name: 'line1', title: 'Line 1', type: 'string' },
            { name: 'highlight', title: 'Italic Highlight', type: 'string' },
            { name: 'line2', title: 'Line 2', type: 'string' },
          ],
        },
        { name: 'description', title: 'Description', type: 'text', rows: 3 },
        {
          name: 'cta', title: 'Buttons', type: 'object',
          fields: [
            { name: 'primary', title: 'Primary Label', type: 'string' },
            { name: 'secondary', title: 'Secondary Label', type: 'string' },
          ],
        },
      ],
    },
  ],
  preview: { prepare() { return { title: 'Blog Page' } } },
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
    servicesPage,
    careerPage,
    workPage,
    blogPage,
    homePage,
  ],
}
