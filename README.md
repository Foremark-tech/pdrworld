# PDR World — Enterprise B2B Website

Premium multi-page B2B website for **PDR Videotronics India Pvt. Ltd.** — a Mumbai-based ISO 9001:2015 certified manufacturer of fiber optic infrastructure since 1985.

---

## Production Files

| File | Purpose |
|------|---------|
| `index.html` | Homepage — scrollytelling hero, product categories, stats, CTA bands |
| `products.html` | Full product catalogue — 50+ families, sticky nav, detail drawer, RFQ flow |
| `about.html` | Company story — 40-year timeline, manufacturing, certifications |
| `solutions.html` | Enterprise solutions — DAS, DTS, FTTx, fiber monitoring |
| `resources.html` | Support & partners — training, factory setup, channel programs |
| `contact.html` | Contact & RFQ — structured inquiry form, maps, direct channels |
| `404.html` | Branded error page with recovery links |
| `admin.html` | Internal dashboard prototype (not public-facing) |

## Assets

| File | Purpose |
|------|---------|
| `styles.css` | Shared design system — all design tokens, components, utilities |
| `phase5-polish.css` | UX polish layer — mobile, accessibility, micro-interactions |
| `favicon.svg` | PDR brand mark |
| `frames/` | Homepage scrollytelling animation frames (240 JPGs) |
| `robots.txt` | Search engine directives |
| `sitemap.xml` | XML sitemap for crawlers |

## Architecture

- **Static HTML** — no build step, no frameworks, no dependencies
- **Google Fonts** — Inter (body) + Manrope (display)
- **Inline SVG** icons — no external icon CDN
- **JS data-driven** product cards with detail drawer
- **Shared header/footer** baked into each page
- **Phase 5 CSS** layer for responsive polish and accessibility

## Design System

| Token | Value |
|-------|-------|
| Background | `#09090B` (dark) |
| Accent | `#E11D48` (crimson) |
| Surface | `#FFFFFF` / `#FAFAFA` |
| Typography | Manrope 800/700 (display), Inter 400–600 (body) |
| Radius | 14px cards, 99px pills, 18px panels |
| Motion | `cubic-bezier(.16,1,.3,1)` — 250–700ms |
| Grid | 1240px max-width |

## Company Data (verified)

- **PDR Videotronics India Pvt. Ltd.**
- HQ: 99 Old Prabhadevi Road, Mumbai 400025
- Factory: Filmcity Complex, Gen. A.K. Vaidya Marg, Goregaon East, Mumbai 400065
- Phone: +91-22-24306494, +91-22-24309536
- WhatsApp: +91 84199 16460
- Email: info@pdrworld.com, sales@pdrworld.com
- GSTIN: 27AAACP2446G1ZL
- Founded: 1985
- Certifications: ISO 9001:2015, RoHS, REACH, MIL-STD, TEC Approved

## Conversion Systems

- Product drawer with 4-action CTA (Quote, Datasheet, WhatsApp, Engineer)
- Page-aware floating mobile CTA
- Footer quick-action row (RFQ, WhatsApp, Email)
- Contact form with trust indicators and inline success state
- WhatsApp deep-links with prefilled product context

## SEO

Every page has:
- Unique `<title>` and `<meta description>`
- Canonical URL
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Proper heading hierarchy
- `lang="en"` attribute

## Deployment

Static site — upload all production files to any web server or CDN:

```
index.html, products.html, about.html, solutions.html,
resources.html, contact.html, 404.html,
styles.css, phase5-polish.css, favicon.svg,
frames/, robots.txt, sitemap.xml
```

Exclude: `_build_tools/`, `_archive_products_final.html`, `admin.html`, `scratch/`, `.git/`

---

## Development Archives

Build scripts and intermediate files are archived in `_build_tools/` — not needed for production.

