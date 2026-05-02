import { type SanityImageSource } from '@sanity/image-url'
import { sanityFetch } from '@/lib/sanity.queries'

// ─── Types ────────────────────────────────────────────────────────────────────

export type SanityAuthor = {
  name: string
  email?: string
  image?: SanityImageSource
  bio?: string
}

export type SanityBlogPost = {
  _id: string
  title: string
  slug: { current: string }
  isFeatured?: boolean
  publishedAt: string
  image?: SanityImageSource
  description?: string
  excerpt?: string
  category?: string
  tag?: string
  author?: SanityAuthor
  body?: unknown[]
}

export type SanityCaseStudy = {
  _id: string
  title: string
  slug: { current: string }
  image?: SanityImageSource
  description?: string
  client?: string
  tags?: string[]
  challenge?: unknown[]
  solution?: unknown[]
  results?: { metric: string; value: string }[]
}

export type SanityTeamMember = {
  _id: string
  name: string
  role: string
  image?: SanityImageSource
  bio?: string
}

export type SanityTestimonial = {
  _id: string
  quote: string
  author: string
  role?: string
  company?: string
  image?: SanityImageSource
  rating?: number
}

// ─── Blog Posts ───────────────────────────────────────────────────────────────

const blogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    isFeatured,
    publishedAt,
    image,
    description,
    excerpt,
    category,
    tag,
    author->{
      name,
      image
    }
  }
`

const singleBlogPostQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    isFeatured,
    publishedAt,
    image,
    description,
    excerpt,
    category,
    tag,
    body,
    author->{
      name,
      email,
      image,
      bio
    }
  }
`

export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  return sanityFetch<SanityBlogPost[]>({
    query: blogPostsQuery,
    revalidate: 60,
    tags: ['blogPosts'],
  })
}

export async function getBlogPost(slug: string): Promise<SanityBlogPost | null> {
  return sanityFetch<SanityBlogPost | null>({
    query: singleBlogPostQuery,
    params: { slug },
    revalidate: 60,
    tags: ['blogPost', slug],
  })
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

const caseStudiesQuery = `
  *[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    image,
    description,
    client,
    tags
  }
`

const singleCaseStudyQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    image,
    description,
    client,
    tags,
    challenge,
    solution,
    results
  }
`

export async function getCaseStudies(): Promise<SanityCaseStudy[]> {
  return sanityFetch<SanityCaseStudy[]>({
    query: caseStudiesQuery,
    revalidate: 60,
    tags: ['caseStudies'],
  })
}

export async function getCaseStudy(slug: string): Promise<SanityCaseStudy | null> {
  return sanityFetch<SanityCaseStudy | null>({
    query: singleCaseStudyQuery,
    params: { slug },
    revalidate: 60,
    tags: ['caseStudy', slug],
  })
}

// ─── Team Members ─────────────────────────────────────────────────────────────

const teamMembersQuery = `
  *[_type == "teamMember"] {
    _id,
    name,
    role,
    image,
    bio
  }
`

export async function getTeamMembers(): Promise<SanityTeamMember[]> {
  return sanityFetch<SanityTeamMember[]>({
    query: teamMembersQuery,
    revalidate: 60,
    tags: ['teamMembers'],
  })
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const testimonialsQuery = `
  *[_type == "testimonial"] {
    _id,
    quote,
    author,
    role,
    company,
    image,
    rating
  }
`

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return sanityFetch<SanityTestimonial[]>({
    query: testimonialsQuery,
    revalidate: 60,
    tags: ['testimonials'],
  })
}
