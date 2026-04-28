# PDR World — Static Website Redesign (v2)

Single-file, premium B2B industrial website for **PDR Videotronics India Pvt. Ltd.** (PDR World), a Mumbai-based manufacturer of active and passive fiber optic infrastructure since 1985.

This redesign replaces the earlier brochure-style page with a complete, conversion-focused enterprise site that preserves every important fact from the original [pdrworld.com](https://pdrworld.com).

---

## ✅ Currently Implemented Features

### Information architecture
- Sticky desktop header with **6-category Products mega-menu** (Passive · Active · Cable Management · Test & Measuring · Specialty · Tools)
- Sticky **WhatsApp icon** + **Request Quote** CTA in nav
- Full-screen **mobile hamburger overlay** with collapsible Products submenu
- Floating mobile **"Request Engineering Consultation"** CTA bar
- Smooth-scroll anchor navigation; scrolled-header background fade
- Section reveal animations (IntersectionObserver) with staggered delays
- Honest, animated stat counters (40+ years · 3,000+ buyers · 15+ countries · 50+ product families)

### Content sections (in order)
1. **Hero** — Mumbai-engineered headline · live production indicator · twin CTAs
2. **Trust strip** — 7 buyer-segment trust signals
3. **Stats bar** — 4 verifiable claims with sub-context
4. **Industries served** (8 cards) — Telecom · Defence · Data Centres · 5G · Metro & Railway · Power · FTTH · Broadcast
5. **Product catalogue** — 54 real products extracted from the old site, filterable by category, with live full-text search and prefill of RFQ on click
6. **Why PDR** (6 differentiator cards) — Engineering · Quality · Speed · Scale · Support · Compliance
7. **Manufacturing capability** — narrative + 3-image production grid + 4-point capability list
8. **Compliance** (5 badges) — ISO 9001:2015 · RoHS · REACH · MIL-STD · TEC
9. **Services & Resources** (6 cards) — Tech support · Custom mfg · Same-day shipping · Channel partner · Setup-a-factory · Training
10. **Contact / RFQ** — both Mumbai addresses, both phones, WhatsApp deep-link, structured RFQ form (name, email, company, country, category, buyer-type, BoM textarea)
11. **Footer** — 5-column layout with full product taxonomy, all industries, full resource list, both addresses, both phones, social links (LinkedIn, Facebook, Instagram, YouTube), GSTIN, dynamic year

### Trust & accuracy upgrades
- Both real Mumbai locations preserved: **HQ — 99 Old Prabhadevi Rd, 400025**; **Mfg — Filmcity Complex, Goregaon East, 400065**
- Both phones (24306494, 24309536) + WhatsApp (+91 84199 16460)
- Real social handles (LinkedIn / Facebook / Instagram / YouTube) from old site
- GSTIN preserved: 27AAACP2446G1ZL
- Removed unverifiable claims ("200 skilled operators", "British Certifications Inc")

### Technical
- Single self-contained `index.html` (no build step, no frameworks)
- Google Fonts only (Inter + Manrope)
- Inline SVG product icons for every category — no external icon CDN
- Custom-rendered product cards (driven by JS data array → easy maintenance)
- Fully responsive: desktop / tablet / mobile breakpoints at 1100 / 900 / 560 px
- `prefers-reduced-motion` honored
- Full keyboard accessibility (focus rings, semantic landmarks, ARIA labels)

---

## 🌐 Functional URIs / Anchors

| URI | Purpose |
|---|---|
| `/` or `#top` | Home / hero |
| `#industries` | Industries served |
| `#products` | Product catalogue |
| `#products` + `?cat=passive\|active\|cable\|test\|specialty\|tools` (via mega-menu) | Filtered category view |
| `#why` | Why PDR / differentiators |
| `#capabilities` | Manufacturing capability |
| `#compliance` | Certifications |
| `#resources` | Services & resources |
| `#contact` | Contact + RFQ form |
| `tel:+912224306494` / `tel:+912224309536` | Direct phone |
| `mailto:info@pdrworld.com` | Email |
| `https://wa.me/918419916460` | WhatsApp |

Each product card's "Request specs →" link prefills the RFQ textarea with the product name and a structured spec template.

---

## 🚧 Not Yet Implemented (recommended next iterations)

1. **Per-product pages** — current site is single-page; the old site has 50+ standalone product pages with detailed specs.
2. **Real backend RFQ submission** — form currently shows a confirmation alert only (static-site limitation; integrate with Formspree / a serverless function on deployment).
3. **Live product imagery** — products use elegant SVG iconography. Replacing with real product photography (sourced from PDR's media library) would further elevate trust.
4. **Case studies / project references** — old site has no public case studies; PDR could add 3–6 anonymised deployment stories.
5. **Resources downloads** — datasheets, polishing guides, MPO polarity charts as downloadable PDFs.
6. **Multi-language** — Hindi / Arabic / French for export markets.
7. **Live OTDR / spec-finder tool** — interactive selector that recommends a SKU based on application + connector + distance.
8. **Channel-partner login portal** — gated pricing & order-status portal.
9. **Blog / Insights** — fiber-industry articles for SEO and authority.

---

## 📊 Data Model

No backend tables / database used. Content sources:

- **Product catalogue (54 items)** — encoded as JS array `PRODUCTS` inside `index.html`. Schema: `{cat, name, desc, ic, tag}`. Categories: `passive | active | cable | test | specialty | tools`.
- **Icon system** — inline SVG dictionary `ICONS` keyed by `ic` (patch, mpo, split, wave, fan, conn, loop, adapt, cable, rack, box, closure, sfp, olp, meter, laser, scope, mic, tool).
- All other content is static HTML.

To add or edit a product, modify the `PRODUCTS` array in the script tag at the bottom of `index.html`.

---

## 🎨 Design System

- **Colors:** `#040A15` deep navy · `#F26B26` signal orange · `#FFFFFF` surface · `#F7F9FC` muted surface · `#10B981` live green
- **Typography:** Manrope 800/700/600 (display) · Inter 400/500/600 (body)
- **Radius:** 14 px (cards), 99 px (chips/pills), 18 px (hero panel)
- **Motion:** 250–900 ms `cubic-bezier(.16,1,.3,1)` Apple-style easing
- **Grid max-width:** 1240 px

---

## 🚀 Deployment

To deploy and make the website live, please use the **Publish tab** — it will package `index.html` and deploy to a public URL automatically.
