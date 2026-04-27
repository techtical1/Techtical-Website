# Techtical Solution Implementation Notes

## 1. Project folder structure

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  brand/
  cta/
  motion/
  nav/
  navigation/
  sections/
    hero/
  ui/
docs/
lib/
public/
```

## 2. Global design tokens

Design tokens live in `app/globals.css` using Tailwind CSS v4 `@theme inline`. The token set covers fonts, semantic colors, brand green, ink, paper, radii, shadows, grid backgrounds, and focus states.

## 3. Layout setup

`app/layout.tsx` wires `next/font`, global CSS, Vercel Analytics, canonical metadata, Open Graph metadata, Twitter metadata, keywords, and robots directives.

## 4. Header and floating UI

The optional header remains available in `components/nav/navbar.tsx`. The active homepage floating navigation lives in `components/navigation/floating-bottom-nav.tsx`, and the owner chat CTA lives in `components/cta/owner-chat-cta.tsx`.

## 5. Homepage sections

The active homepage renders the hero, floating bottom navigation, and owner chat CTA. Hero code is split across `components/sections/hero/` into background, trust row, marquee, data, motion helpers, and the main section composition.

## 6. Mobile responsive behavior

The layout uses breakpoint-specific Tailwind classes, mobile-first spacing, full-width CTAs on small screens, collapsed mobile navigation, and responsive grids that become single-column on small devices.

## 7. Animation strategy

Animations use Framer Motion for entrance reveals, navbar transitions, mobile menu presence, and the capability marquee. Motion is kept subtle and scoped to client components.

## 8. Deployment steps for Vercel

Deployment guidance lives in `docs/vercel-deployment.md`.
