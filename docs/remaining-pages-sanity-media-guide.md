# Remaining Pages Sanity Media Guide

Run `npm run sanity:seed-remaining` first. That creates the Career Page, Work Page, and Blog Page singleton documents with all editable text, links, lists, cards, positions, categories, and CTA copy.

Images and video still need to be uploaded manually in Sanity Studio because the seed keeps local assets as code fallbacks. After upload, the live site will use Sanity media automatically.

## Career Page

Upload these under **Career Page**:

- Hero > Process Card > Image: `public/assets/career/team-process.png`
- Hero > Process Card > Smile Icon: `public/assets/career/smile.svg`
- Hero > Arrow Image: `public/assets/work/arrow.png`
- Who We Are cards: `public/assets/career/design.svg`, `globe.svg`, `result.svg`
- Why Work With Us benefits: `product-impact.svg`, `ownership.svg`, `growth.svg`, `design-culture.svg`
- Team members: files in `public/assets/career/team/`
- Beyond Work images: files in `public/assets/career/beyond-work/`
- AI Process > Video File: `public/assets/founder/founder-video-preview.mp4`
- AI Process > Poster Image: `public/assets/founder/thumbnail.png`
- Mission decor: files in `public/assets/career/mission/`
- Hiring CTA assets: `public/assets/service/faqs/man.svg`, `left-arow.svg`

## Work Page

Upload these under **Work Page**:

- Hero visuals: `public/assets/work/arrow.png`, `path.png`, `case-1.png`, `case-main.png`, `case-3.png`
- Approach logo: `public/assets/hero/techtical-solution-logo.svg`
- Project gallery images: files in `public/assets/projects/`
- Featured Case visuals: `public/assets/featured-case/before-after-demo.png`, `Vector.svg`
- Featured Case metric icons: `engagement.svg`, `time.svg`, `Countries.svg`

## Blog Page

Upload these under **Blog Page**:

- Hero trusted brand logos: `public/assets/credibility/FlickNite.svg`, `wingai.svg`
- Hero client image: `public/assets/credibility/customer.svg`
- Hero growth vector: `public/assets/blog/growth-vector.svg`
- Intro image: `public/assets/blog/blog-intro.png`

## Notes

- Keep advanced layout class fields unchanged unless you intentionally want to adjust card placement.
- Blog articles in **Latest Insights** are already powered by `blogPost` documents.
- Shared sections are reused from existing singletons: Career and Work FAQs come from **Services Page**, and footers/shared Home sections come from **Home Page**.
