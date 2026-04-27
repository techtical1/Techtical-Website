import { defineConfig, defineCollection, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(120),
      description: s.string().max(220),
      date: s.isodate(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).default([]),
      cover: s.image().optional(),
      author: s.string().default("Techtical"),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const caseStudies = defineCollection({
  name: "CaseStudy",
  pattern: "work/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string(),
      client: s.string(),
      industry: s.string(),
      summary: s.string(),
      services: s.array(s.string()).default([]),
      year: s.number().optional(),
      date: s.isodate(),
      cover: s.image().optional(),
      featured: s.boolean().default(false),
      metrics: s
        .array(s.object({ label: s.string(), value: s.string() }))
        .default([]),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, caseStudies },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
