# Portfolio — Selene Inmaculada García Chacón

[![Deploy](https://github.com/SeleneInmaculada/portfolio-selene/actions/workflows/deploy.yml/badge.svg)](https://github.com/SeleneInmaculada/portfolio-selene/actions/workflows/deploy.yml)
[![Live](https://img.shields.io/badge/Live-Portfolio-blueviolet)](https://seleneinmaculada.github.io/portfolio-selene/)

Bilingual (ES/EN) personal portfolio built with **Astro**, deployed on **GitHub Pages**.

**Live site**: [seleneinmaculada.github.io/portfolio-selene](https://seleneinmaculada.github.io/portfolio-selene)

---

## Stack

| Technology | Purpose |
|---|---|
| **Astro** | Static Site Generator — 100% static output |
| **CSS vanilla** | Dark theme, responsive layout, IntersectionObserver animations |
| **Custom i18n** | ES/EN translations with URL-based detection |
| **GitHub Actions** | Automated CI/CD to GitHub Pages |
| **Font Awesome** | Iconography |

## Features

- **Dark theme** with purple/indigo accents
- **Bilingual** — Spanish / English toggle
- **Responsive** — Desktop and mobile with hamburger menu
- **SEO** — Open Graph, Twitter Cards, sitemap, canonical, robots.txt
- **No UI frameworks** — Vanilla JavaScript (no React/Vue/Svelte)
- **Custom 404 pages** in both languages

## Project structure

```
src/
├── components/     # Hero, About, Skills, Projects, Education, Contact
├── i18n/           # es.json, en.json, utils.ts
├── layouts/        # BaseLayout.astro
├── pages/          # index.astro, /en/index.astro, 404.astro
└── styles/         # global.css
```

## Local development

```bash
npm install
npm run dev       # http://localhost:4321/portfolio-selene/
npm run build     # Generates /dist
npm run preview   # Serves /dist locally
```

## Projects

| Project | Stack |
|---|---|
| **Maxmund — AI Assistant + RAG** | FastAPI, Groq (Llama 3.3), SQLite FTS5, Docker, HF Spaces |
| **Deadly Harmony** | Unity, C#, Pixel Art 2D |
| **Escuela de Arte de Toledo** | WordPress, PHP, MySQL |
| **Heaven Travel — Localization** | EN to ES localization, remote collaboration |
| **Creation-Of-Chatbot-AI** | Next.js, Firebase, LlamaIndex, Gemini, RAG |
| **Dune 2D** | Unity, C#, 2D Game |
| **Graphic Design** | Photoshop, Krita, Blender, 2D/3D Design |

## Contact

- **Email**: [selene.inmaculada@gmail.com](mailto:selene.inmaculada@gmail.com)
- **LinkedIn**: [linkedin.com/in/seleneinmaculadagarciachacon](https://linkedin.com/in/seleneinmaculadagarciachacon)
- **GitHub**: [github.com/SeleneInmaculada](https://github.com/SeleneInmaculada)

---

Built by Selene Inmaculada García Chacón
