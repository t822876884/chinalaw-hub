# ChinaLaw Hub — MVP skeleton

A directory site that helps foreigners find PRC-licensed, English-speaking lawyers in China.
**Information matching only** — no online transaction, no payment, no case handling.
Visitors contact the lawyer directly over WhatsApp / WeChat / email.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3200
npm run build && npm run start
```

Stack: Next.js 15 (App Router, SSG) + Tailwind. No database — all listings live in `lib/data.ts`.

## Pages

| Route | Type | Notes |
| --- | --- | --- |
| `/` | Static | Hero, practice areas, cities, featured lawyers |
| `/lawyers` | Static | Client-side filter by city / practice / keyword |
| `/lawyers/[slug]` | SSG | Profile, credentials, verification links, contact buttons |
| `/city`, `/city/[city]` | SSG | City landing pages |
| `/city/[city]/[practice]` | SSG | **Programmatic SEO matrix — 42 pages** |
| `/practice`, `/practice/[area]` | SSG | Practice area pages |
| `/verify` | Static | Verification guide — the trust/differentiation page |

73 routes are prerendered at build time (including `/robots.txt` and `/sitemap.xml`).

## Technical SEO (implemented)

| Item | Where | Notes |
| --- | --- | --- |
| `robots.txt` | `app/robots.ts` | Allows all crawlers, points at the sitemap |
| `sitemap.xml` | `app/sitemap.ts` | 68 URLs: static pages, lawyers, cities, practices and all city×practice combos |
| Canonical base | `app/layout.tsx` | `metadataBase` — **change `SITE_URL` in `lib/data.ts`** |
| Per-page titles | each `page.tsx` | `generateMetadata` on dynamic routes |
| Structured data | `lib/schema.ts` | Attorney, LegalService, BreadcrumbList, ItemList, Service, FAQPage |
| FAQ block | `app/verify/page.tsx` | 5 real Q&As, visible on page **and** marked up as FAQPage |
| Anti-translation | `app/layout.tsx` | `translate="no"` + `notranslate` — prevents Chrome auto-translate from breaking React hydration |

`SITE_URL` in `lib/data.ts` is a placeholder (`https://example.com`). Set it to the real
domain before deploying, or the sitemap, robots host and all structured-data URLs will be wrong.

### SEO checklist for launch

1. Set `SITE_URL` to the production domain.
2. Verify the domain in Google Search Console, submit `sitemap.xml`, then do the same in Bing Webmaster Tools.
3. Validate structured data with the Rich Results Test on a lawyer page and on `/verify`.
4. Add `alternates: { canonical: "/..." }` to each page's metadata if you ever add query-string URLs or a second domain.
5. Add GA4 and confirm the `lawyer_contact_click` event fires (already wired to `dataLayer`).

## Replacing the sample data

Everything is in `lib/data.ts`. Three arrays: `CITIES`, `PRACTICES`, `LAWYERS`.

1. Add a city to `CITIES` → its city page and all city×practice combination pages are generated automatically. Same for `PRACTICES`.
2. Fill `LAWYERS` with real profiles. Every record **must** be marked `isSample: false` (or the field removed) once the data is real — the badge on the page is a reminder, not decoration.
3. `barNumber` must be the real practising certificate number. Run it through the Ministry of Justice register before publishing.
4. `contact.whatsapp` uses international format without the `+` or spaces, e.g. `8613800138000`.

All 8 sample profiles are fictional. Do not publish them.

## Sourcing real lawyers

- Local bar association foreign-related lawyer directories (Beijing, Shanghai publish these annually)
- 12348 China Legal Service Network (has an English entry point)
- International department partners listed on major firm websites
- AmCham China / EUCCC member referral lists

Then invite each lawyer to claim and correct their profile. Offer the first cohort free listing in exchange for real case highlights.

## WhatsApp deep links

`lib/contact.ts` builds a `wa.me` link with a prefilled message that includes the city and practice area, so the lawyer immediately knows what the enquiry is about. Example output:

```
https://wa.me/8613800138000?text=Hi%20Li%20Wenjun%2C%20I%20found%20your%20profile...
```

**Practical note:** WhatsApp is not directly reachable from mainland China. Lawyers need it on their phone with a working connection, which most foreign-facing practitioners already have. Always publish WeChat and email alongside WhatsApp so no enquiry is lost.

## Click tracking

`components/ContactButtons.tsx` pushes a `lawyer_contact_click` event to `window.dataLayer` (and to `gtag` if present). Add GA4 later — the events are already wired, no code change needed.

## Compliance rules baked into this build

These are the reasons the site is shaped the way it is. Do not undo them.

1. **No legal advice.** The site only displays information. Every page footer carries a disclaimer.
2. **No cut of legal fees.** Charging a lawyer a referral fee, or taking a percentage of a case, is prohibited. If you monetise later, charge the **law firm** a fixed listing fee or a flat per-lead fee — never a share of fees.
3. **Money never touches the platform.** Fees are paid directly to the law firm. The profile page says so.
4. **No outcome promises.** Do not publish or allow "no win no fee" or guaranteed-result claims; contingency fees are prohibited for divorce/inheritance, labour/wage, criminal and administrative matters.

## Deploying

Target users are outside mainland China, so deploy outside it — no ICP filing needed.

```bash
# Vercel
npx vercel deploy --prod
```

Set `metadataBase` in `app/layout.tsx` and the `hello@example.com` address in the footer to your real domain and email before going live.

## Suggested next steps

1. Replace sample data with 50–60 real, verified profiles.
2. Write the `/guides/*` English long-form articles — this is where the traffic comes from.
3. Add `sitemap.ts` + `robots.ts` and submit to Google Search Console.
4. Add a "claim your profile" form so lawyers can self-update.
