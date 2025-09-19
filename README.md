# Hagley Golf Club Competitions — Starter

A minimal **Next.js (App Router) + Sanity** starter for documenting competition rules.

## Quick Start

1) **Use this repo**
- Download the zip or copy files into your GitHub repo.
- In your repo root, run:
```bash
npm i
npm run dev
```
2) **Create a Sanity project**
- Go to https://www.sanity.io/manage — create a project & dataset (e.g., `production`).
- In your project settings, note the **Project ID**.

3) **Configure environment**
- Copy `.env.local.example` to `.env.local` and set:
```
SANITY_PROJECT_ID=xxxx
SANITY_DATASET=production
SANITY_API_VERSION=2024-06-01
NEXT_PUBLIC_SITE_NAME=Hagley Golf Club Competitions
```
- Optional: set `SANITY_READ_TOKEN` if you want to read drafts on the server.

4) **Run the site**
```bash
npm run dev
```
- Studio is at **/admin**
- Rules list: **/rules**, Competitions: **/competitions**

5) **Deploy on Vercel**
- Import your GitHub repo in Vercel
- Add the same env vars in Project Settings → **Environment Variables**
- Redeploy

## Content Model
Defined in `sanity/schemas`. Key types:
- `competition` — fields for format, eligibility, schedule, handicap rules, entry/withdrawals, tees, prizes, body, effective_date, version.
- `ruleTopic` — general rule pages with summary and body.
- `notice`, `faq`, `download`

## Notes
- Styling via Tailwind; simple components.
- Print-friendly CSS included.
- You can extend with search, authentication, or result archives later.
