# TensorShield website

Marketing site for TensorShield (continuous AI pentesting + SOC 2 / ISO 27001 VAPT reports).
Built with **Next.js 16 (App Router)**, React 19, TypeScript and plain CSS. No tracking scripts. Deploys to Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build (+ regenerates public/llms-full.txt)
npm run start      # serve the production build
npm run og         # re-render public/og.png after changing the tagline
```

## Deploy on Vercel

1. Push this folder to GitHub (or set `website` as the **Root Directory** if you push the whole repo).
2. In Vercel: **Add New → Project →** import the repo. Next.js is detected automatically.
3. Environment variables (Project → Settings → Environment Variables):

| Variable | Purpose |
|---|---|
| `SITE_URL` | Your final domain, e.g. `https://tensorshield.ai`. Used for canonical URLs, sitemap, schema, llms.txt, security.txt. If unset, Vercel's production URL is used. |
| `RESEND_API_KEY` | Lets the contact form email leads (free tier at resend.com). Without it the form falls back to opening the visitor's email app. |
| `CONTACT_TO` | Optional. Inbox for leads (default `tensorshield@gmail.com`). |
| `CONTACT_FROM` | Optional. Verified sender, e.g. `TensorShield <hello@yourdomain>`. |

4. Add your custom domain under Vercel → Domains, then redeploy.
5. Submit `https://yourdomain/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## Where to edit things

| What | File |
|---|---|
| Phone, email, founder, company identifiers (CIN, GSTIN, address) | `lib/site.ts` |
| All prices and plan features | `lib/pricing.ts` |
| Colours, fonts, spacing tokens | `app/globals.css` (`:root`) |
| Home page | `app/page.tsx` + `app/home.css` |
| Other pages | `app/<route>/page.tsx` (styles in `app/pages.css`) |
| Shared UI (nav, footer, pricing cards, comparison table…) | `components/` |
| Contact form email sending | `app/api/contact/route.ts` |
| Security headers / CSP | `next.config.ts` |

Styling convention: each component or page has a root class (`ts-nav`, `pg-home`, …) and its CSS is prefixed with it, so styles never leak between pages.

## SEO and agentic SEO built in

- Per-page titles, descriptions, canonical URLs, Open Graph and Twitter cards (`lib/seo.ts`)
- JSON-LD: Organization, WebSite, Person (founder), Service, Product + Offers, FAQPage, BreadcrumbList, AboutPage, ContactPage
- `/sitemap.xml`, `/robots.txt` that explicitly welcomes AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …)
- `/llms.txt` (site summary for AI assistants), `/llms-full.txt` (whole site as text), `/pricing.json` (machine-readable pricing)
- `/.well-known/security.txt` (RFC 9116) and a responsible disclosure policy

## Before launch

- Fill in `legal` in `lib/site.ts` once incorporated (shown in the footer; needed for Razorpay).
- Have a lawyer review `app/legal/*`.
- Confirm the WhatsApp link works for +91 80049 20400, or remove it from `lib/site.ts` and the contact page.
