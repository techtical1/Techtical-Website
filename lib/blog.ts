import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tag: string;
  image: string;
  isFeatured?: boolean;
  publishedAt: string;
  readingTime: string;
  content: string;
};

export function getAllBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);

      return {
        slug: data.slug || file.replace(".mdx", ""),
        title: data.title,
        description: data.description,
        category: data.category,
        tag: data.tag,
        image: data.image,
        isFeatured: data.isFeatured || false,
        publishedAt: data.publishedAt,
        readingTime: readingTime(content).text,
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    );
}

export function getFeaturedPost() {
  return getAllBlogPosts().find((post) => post.isFeatured);
}

export function getRegularPosts() {
  return getAllBlogPosts().filter((post) => !post.isFeatured);
}