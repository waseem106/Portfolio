# Waseem Aziz — Portfolio

Personal portfolio built with **React + Vite + Tailwind CSS** and deployed to **GitHub Pages**.

- **Live**: `https://waseem106.github.io/Portfolio/`

## Tech stack

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion
- **UI/Icons**: react-icons, react-simple-typewriter
- **Deployment**: GitHub Pages (GitHub Actions)

## Getting started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deploy (GitHub Pages)

This repo deploys automatically on every push to `main` via `.github/workflows/pages.yml`.

Important details:

- The production build output is `dist/`.
- `vite.config.mjs` uses `base: "/Portfolio/"` so assets resolve correctly on GitHub Pages.

## Project structure (high level)

- `src/components/` — UI sections (Banner, Resume, Projects, Contact, Footer)
- `src/data/data.jsx` — “What I Do” section content
- `src/assets/` — images and exports
- `public/` — static files (including the CV PDF)

## CV file

The CV is served from `public/`:

- `public/Waseem_Aziz_CV.pdf`
