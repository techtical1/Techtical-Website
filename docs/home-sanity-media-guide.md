# Home Sanity Media Guide

The Home page text, lists, links, references, and ordering are seeded into Sanity by:

```bash
npm run sanity:seed-home
```

Image fields are Sanity asset references, so they need to be uploaded or selected manually in Sanity Studio after the text seed runs.

## Where To Upload Images

Open `/sanity` and edit the `Home Page` singleton.

### Hero Section

- `Founder Trust Bar Avatars`
  - `public/assets/hero/founder-1.png`
  - `public/assets/hero/founder-2.png`
  - `public/assets/hero/founder-3.png`
  - `public/assets/hero/founder-4.png`

### Trusted Teams Section

Upload each logo in `Trusted Teams Section > Brand Logos`:

- The Strategist: `public/assets/trusted-logos/TheStrategist.svg`
- Forbes: `public/assets/trusted-logos/Forbes.svg`
- Today: `public/assets/trusted-logos/Today.svg`
- Byrdie: `public/assets/trusted-logos/Byrdie.svg`
- Tinder: `public/assets/trusted-logos/Tinder.svg`

### Featured Case Studies

Open each referenced `Case Study` document and upload:

- SastaStay cover: `public/assets/case-studies/sastastay-cover.png`
- PayAi-X cover: `public/assets/case-studies/project-three-cover.png`
- LienFin cover: `public/assets/case-studies/project-three-cover.png`
- Quote author avatar: `public/assets/case-studies/marcus-klein.png`

### Featured Services

Open each referenced `Service` document and upload:

- AI Product UX Design: `public/assets/services/ai-product-ux.png`
- SaaS Platform Design: `public/assets/services/saas-platform.png`
- Product Design Partner: `public/assets/services/product-design-partner.png`

### Credibility Section

- Marketplace Logo: `public/assets/credibility/fiverr.svg`
- Client Logos:
  - `public/assets/credibility/wingai.svg`
  - `public/assets/credibility/tinder.svg`
  - `public/assets/credibility/flicknite.svg`
  - `public/assets/credibility/sastastays.svg`
- Stat Icons:
  - Rating: `public/assets/credibility/star.svg`
  - Clients: `public/assets/credibility/customer.svg`

### Testimonials

Open each referenced `Testimonial` document and upload:

- Marcus Klein thumbnail: `public/assets/testimonials/testimonial-01.png`
- Sarah Wilson thumbnail: `public/assets/testimonials/testimonial-02.png`
- David Miller thumbnail: `public/assets/testimonials/testimonial-03.png`
- Emma Clark thumbnail: `public/assets/testimonials/testimonial-04.png`
- Alex Morgan thumbnail: `public/assets/testimonials/testimonial-05.png`

Avatar files:

- `public/assets/testimonials/marcus-klein.png`
- `public/assets/testimonials/sarah-wilson.png`
- `public/assets/testimonials/david-miller.png`
- `public/assets/testimonials/emma-clark.png`
- `public/assets/testimonials/alex-morgan.png`

## Video

The current Home page schema does not render video fields. If Home videos are added later, use one of these approaches:

- For short hosted clips: add a Sanity `file` field and upload `.mp4` or `.webm`.
- For production video: add a provider field for Mux/Vimeo/YouTube URL and render it through a dedicated component.

Keep video filenames descriptive, compress before upload, and add a poster image field for mobile and slow connections.
