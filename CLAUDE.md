# CLAUDE.md — Product Soch Website

This file provides context for working on the Product Soch community website.

---

## Project Overview

**Product Soch** is a Pakistani-first, globally connected product management community.
- Chapters: Karachi, Lahore, Islamabad, Canada, Dubai — plus emerging chapters UK, USA, Saudi Arabia
- Founded 2019 · 2,000+ members · Free to join
- Primary CTA: "Join Product Soch" → `/join`
- Canada chapter is distinct: separate join form (Google Form, not Notion), separate activities

**Project path:** `C:\Users\User\Documents\AI Projects\ProductSoch`

---

## Tech Stack

- **React 18 + Vite 5 + TypeScript** (strict mode)
- **Tailwind CSS** — custom design tokens (see below)
- **React Router DOM v6** — BrowserRouter + Layout outlet in `src/App.tsx`
- **Lucide React** for icons
- No backend. All content is hardcoded or embeds (YouTube, Notion/Google Forms).

### Design Tokens (`tailwind.config.js`)
```
primary:      #F6A801  (amber — NEVER use white text on this, use text-dark)
primary-dark: #D4920A
dark:         #111111
warm:         #FDF8F0  (off-white background)
```

### Custom Animations (`src/index.css`)
- `animate-fade-up`, `animate-fade-in`, `animate-scale-in`
- `useScrollAnimation(threshold?)` hook → `{ ref, isVisible }` for scroll-triggered reveals

### Button Classes
- `btn-primary` — amber bg + dark text
- `btn-ghost` — transparent + border
- `btn-outline` — outlined variant
- `btn-dark` — dark bg + white text

---

## File Structure

```
src/
├── App.tsx                        # Routes + BrowserRouter
├── index.css                      # Global styles + button classes
├── hooks/
│   └── useScrollAnimation.ts      # IntersectionObserver hook
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Nav + chapters dropdown (3 groups)
│   │   └── Footer.tsx             # Logo Secondary.png (white version)
│   ├── VideoModal.tsx             # Inline YouTube embed (Escape to close)
│   ├── ChapterPageTemplate.tsx    # Reusable template for all chapter pages
│   └── sections/
│       ├── Hero.tsx               # Full-viewport, karachi-session.jpg bg
│       ├── Mission.tsx            # 2x2 grid, 4 pillars, numbered badges
│       ├── SocialProof.tsx        # Stats + 4-col × 3-row photo grid w/ captions
│       ├── ChapterCards.tsx       # 6 established + 2 emerging chapter cards
│       ├── CommunityLife.tsx      # 6 activity cards on dark bg
│       ├── YouTubePreview.tsx     # 6 videos, inline VideoModal on click
│       ├── ClipsSection.tsx       # 3 vertical phone-frame videos in one row
│       ├── EventsSpotlight.tsx    # Returns null when upcomingEvent = null
│       └── FinalCTA.tsx           # Dark band → /join
├── pages/
│   ├── Home.tsx
│   ├── Join.tsx                   # Tabbed: Pakistan (Notion) / Canada (Google Form)
│   ├── About.tsx
│   ├── Chapters.tsx               # Overview of all chapters
│   ├── Events.tsx
│   ├── Library.tsx                # YouTube video grid
│   └── chapters/
│       ├── Karachi.tsx
│       ├── Lahore.tsx
│       ├── Islamabad.tsx
│       ├── Canada.tsx             # isCanada flag — navy hero, separate form
│       ├── Dubai.tsx
│       ├── UK.tsx
│       ├── SaudiArabia.tsx
│       └── USA.tsx
public/
├── logos/
│   ├── Primary.png                # Amber P + black text (on light bg)
│   └── Secondary.png              # Amber P + white text (on dark bg)
└── photos/                        # All images and videos served as static files
```

---

## Key Implementation Details

### Header Nav — Chapters Dropdown
Three groups: Pakistan (Karachi / Islamabad / Lahore) · International (Canada / Dubai) · Emerging (UK / Saudi Arabia / USA)

### Canada's Distinct Treatment
- Own chapter page at `/chapters/canada`
- `isCanada={true}` prop on ChapterPageTemplate → navy hero (`#0D1B2A`)
- Join page has two tabs: Pakistan uses Notion form embed, Canada uses Google Form embed
- Constants in `src/pages/Join.tsx`: `NOTION_FORM_URL` and `CANADA_FORM_URL` (update with real URLs)

### VideoModal (`src/components/VideoModal.tsx`)
- Fixed overlay, YouTube `<iframe>` with `autoplay=1&rel=0`
- Escape key closes, body scroll locked while open
- Used in YouTubePreview.tsx via `useState<string | null>`

### Photo Captions (SocialProof)
4-col × 3-row explicit grid (not CSS `columns`). Each photo: gradient overlay with `"Chapter · Type"` caption.

### ClipsSection
3 vertical phone-frame videos in one row: Islamabad PoT, Canada session, Karachi panel. All `autoPlay muted loop playsInline`. Single mute toggle at bottom.

### Mission Section
2×2 grid. Numbered amber circle badge (not large faded background number). Photos use `object-top` where faces might be cut.

### EventsSpotlight
Set `upcomingEvent = null` → section hidden entirely. Populate the object to show a real event card.

---

## Photos Reference

Key photos used across the site (all in `public/photos/`):
- Hero bg: `karachi-session.jpg`
- Mission pillars: `pocket-meetup.jpg`, `canada-speaker-2.jpeg`, `karachi-session.jpg`, `dubai-session-2.jpg`
- CommunityLife: `karachi-session-2.jpeg`, `canada-pocket-meetup-1.jpeg`, YouTube thumbnail (Marty Cagan), `canada-panel.jpg`, `islamabad-product-of-tomorrow-1.jpeg`
- Videos: `islamabad-product-of-tomorrow-short-video.mp4`, `canada-session-video.mp4`, `karachi-panel-video.mp4`, `VID-20240916-WA0001.mp4`
- KSA chapter card: `ksa-pocket-meetup.jpeg`

---

## Common Tasks

### Add a real event to the homepage
Edit `src/components/sections/EventsSpotlight.tsx` — replace `null` with the event object (see commented example in file).

### Update join form URLs
Edit `src/pages/Join.tsx` — replace `NOTION_FORM_URL` and `CANADA_FORM_URL` constants at top of file.

### Add a new chapter page
1. Create `src/pages/chapters/NewCity.tsx` using `ChapterPageTemplate`
2. Add route in `src/App.tsx`
3. Add to header dropdown in `src/components/layout/Header.tsx`
4. Add card to `src/components/sections/ChapterCards.tsx`

### Dev + build
```bash
cd "C:\Users\User\Documents\AI Projects\ProductSoch"
npm run dev      # local dev server
npm run build    # TypeScript check + Vite build
```

### Deploy
Push to GitHub → Vercel (recommended). Free tier. Connect repo, auto-deploys on push.
No CMS needed — content is hardcoded. Only EventsSpotlight, Join form URLs, and Library need periodic updates.

---

## SEO Notes

- Currently CSR (client-side rendering). Google will index it but requires JS rendering.
- For branded searches ("Product Soch"), CSR is fine.
- For generic terms ("Pakistani PM community"), consider migrating to Astro for static HTML output.
- Quick win: add `<meta>` title/description per page via react-helmet or Vite html plugin.
- Hosting: Vercel free tier is recommended over Lovable for collaborator access.
