# Isuru Ruwantha — Portfolio

Personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Deployed via **Vercel**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Hosting:** Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Home page
├── components/
│   ├── layout/           # Navbar, Footer
│   └── sections/         # Hero, About, Experience, Skills, Projects, Contact
├── data/                 # Static data: projects, experience, skills
├── public/
│   └── CV_Isuru_Ruwantha.pdf        # ← Add your CV here
└── styles/
    └── globals.css       # Global styles + Tailwind config
```

## Customisation Checklist

- [ ] Replace `isuru@example.com` with your real email
- [ ] Replace `github.com/isuruRuwantha` with your GitHub URL
- [ ] Replace `linkedin.com/in/isururuwantha` with your LinkedIn URL
- [ ] Add your CV as `public/CV_Isuru_Ruwantha.pdf`
- [ ] Update `data/projects.ts` with real GitHub links and screenshots
- [ ] Update `data/experience.ts` with accurate dates and descriptions
- [ ] Update Open Graph URL in `app/layout.tsx`
- [ ] Add project screenshots to `public/projects/`

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select the repo → Deploy
4. Done — Vercel auto-deploys on every push to `main`

## Phase Roadmap

- [x] Phase 1: Project setup, Tailwind, folder structure
- [x] Phase 2: Layout, navigation, dark theme, responsive
- [x] Phase 3: All sections, project data, animations
- [ ] Phase 4: SEO optimisation, metadata, Open Graph images
- [ ] Phase 5: Blog, project filtering, search
