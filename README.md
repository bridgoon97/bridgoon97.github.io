# bridgoon97.github.io

Personal site for Yue Qiao (乔越), built with [Astro](https://astro.build).
Bilingual (中文 + English), dark mode, deployed to GitHub Pages.

## Local development

Requires Node 18+ (Node 22 recommended; 24 works).

```bash
npm install
npm run dev
```

Then open <http://localhost:4321>.

If `npm install` is slow from inside China, set a mirror once:

```bash
npm config set registry https://registry.npmmirror.com
```

## Writing content

| What you want to change | Where to edit |
|---|---|
| Name, status pill, tagline, bio, social links | `src/data/site.ts` |
| Research highlight cards on home | `src/data/highlights.ts` |
| News items | `src/data/news.ts` |
| Publications | `src/data/publications.ts` |
| UI labels (nav, section headers) | `src/data/i18n.ts` |
| New blog post | drop a `.md` (or `.mdx`) into `src/content/blog/` |
| Visual styling | `src/styles/global.css` |
| Profile photo / PDFs | `public/assets/img` / `public/assets/pdf` |

### Adding a blog post

Create `src/content/blog/<slug>-zh.md` (or `-en.md` for English):

```yaml
---
title: 文章标题
date: 2026-06-01
description: 一行简短描述。  # optional
lang: zh                    # zh | en
tags: [audio, dsp]          # optional
draft: false                # set true to hide from the list
---

正文用 Markdown 写。
```

Posts are listed at `/blog`, filtered by the current site language. If only
the Chinese version of a post exists, it shows up only when the site is in
zh mode — and vice versa.

You can use MDX (`.mdx`) instead of `.md` if you want to embed components.

## Build & deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds on every push to `main`
and publishes to GitHub Pages.

**One-time setup on GitHub**: Settings → Pages → Source = **GitHub Actions**.

Local production build:

```bash
npm run build      # outputs to dist/
npm run preview    # serves dist/ at http://localhost:4321
```

## Project structure

```
src/
├── components/      # Nav, Hero, NewsList, etc.
├── content/blog/    # Markdown blog posts (one file per language)
├── data/            # Site data (TypeScript, typed)
├── layouts/         # Base, BlogPost
├── lib/             # Tiny utilities
├── pages/           # Routes — one file per route
└── styles/          # Global CSS
public/
└── assets/          # Static files (images, PDFs)
```

## History

The site previously ran on Jekyll (al-folio theme); legacy files were removed
in May 2026 and remain recoverable from git history.
