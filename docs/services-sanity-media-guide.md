# Services Sanity Media Guide

The Services page text, lists, metrics, cards, CTA, and FAQs are seeded into Sanity by:

```bash
npm run sanity:seed-services
```

Image fields are Sanity asset references, so upload or select these manually in Sanity Studio after the seed runs.

## Where To Upload Images

Open `/sanity` and edit the `Services Page` singleton.

### Metrics Section

Upload each icon in `Metrics Section > Metric Cards`:

- Products Designed: `public/assets/service/metric/cup.svg`
- Clients Served: `public/assets/service/metric/clients.svg`
- Average Rating: `public/assets/credibility/star.svg`

### Product Clarity Section

Upload each card image in `Product Clarity Section > Cards`:

- SaaS platform card: `public/assets/service/product-clarity/saas-platform.png`
- Landing page card: `public/assets/service/product-clarity/landing-page.png`
- App redesign card: `public/assets/service/product-clarity/app-redesign.png`

### FAQs Illustration

The FAQ illustration is still a static decorative asset in code:

- Person illustration: `public/assets/service/faqs/man.svg`
- Arrow illustration: `public/assets/service/faqs/arrow.svg`

Move these into Sanity only if you want editors to change the illustration itself. Right now Sanity controls the FAQ heading, helper text, questions, and answers.

## Shared Sections On Services Page

The Services page also renders shared Home sections:

- Trusted Teams
- Problem
- Plans
- Start Small
- Footer

Those are controlled from the `Home Page` singleton in Sanity, because the same components/content are reused across pages.

## Video

The current Services page schema does not render video fields. If you add video later:

- Use a Sanity `file` field for uploaded `.mp4` or `.webm` clips.
- Use a provider URL field for Mux/Vimeo/YouTube embeds.
- Add a poster image field and keep the poster editable in Sanity.
