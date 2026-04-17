# Savdo Landing Page

Marketing site for **Savdo** — cloud retail management platform for Central Asia.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · next-intl · Framer Motion

**Locales:** Tajik (tj) · Russian (ru, default) · English (en) · Uzbek (uz)

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to `/ru`.

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

```bash
npx vercel          # first time
npx vercel --prod   # production
```

The `vercel.json` sets the region to `fra1` (Frankfurt) for low latency to Central Asia.

### Before production

1. Update `siteConfig.url` in `i18n.config.ts` to your real domain.
2. Replace placeholder OG image at `public/og.png` (1200×630).
3. Add Google Search Console + Yandex Webmaster verification meta tags in `app/[locale]/layout.tsx`.
4. Native-speaker review of `messages/uz.json` and `messages/tj.json`.
5. Swap the SVG `<Logo>` component in `components/Logo.tsx` for your final brand file if desired.

## SEO

- Per-locale URLs (`/tj`, `/ru`, `/en`, `/uz`) with `hreflang` alternates
- JSON-LD: Organization + SoftwareApplication
- `sitemap.xml` and `robots.txt` auto-generated
- OG/Twitter metadata per locale
- Self-hosted Google fonts (Inter + Manrope) with Cyrillic subsets

## File structure

```
app/
  [locale]/
    layout.tsx      — html lang + i18n provider + JSON-LD
    page.tsx        — landing composition
  sitemap.ts
  robots.ts
  globals.css
components/         — Header, Hero, Features, Solutions, Integrations,
                     Testimonials, Pricing, FAQ, FinalCTA, Footer, Logo, LanguageSwitcher
messages/           — tj.json, ru.json, en.json, uz.json
lib/                — i18n.ts, seo.ts
i18n.config.ts      — locales, defaultLocale, siteConfig (phone, socials, URL)
middleware.ts       — next-intl locale routing
```
