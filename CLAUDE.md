# CLAUDE.md

Personal website for Yue Qiao (乔越) — bilingual (中文/English) academic-personal site
built with **Astro**, deployed to **GitHub Pages**.

## Commands

```bash
npm run dev       # dev server at http://localhost:4321
npm run build     # production build → dist/
npm run preview   # serve dist/ locally
```

Deploy is automatic: push to `master`/`main` triggers `.github/workflows/deploy.yml`
(build + publish to GitHub Pages). GitHub Pages source must be set to "GitHub Actions".

## Architecture

All content is **data-driven TypeScript** in `src/data/` — pages import from there.
No CMS, no markdown parsing for site copy (only blog posts use Markdown).

| File | Contents |
|---|---|
| `src/data/site.ts` | Name, email, status pill, tagline, bio, quickfacts, social links |
| `src/data/publications.ts` | All publications (typed array, template comment at bottom) |
| `src/data/news.ts` | News items (bilingual HTML strings, template at bottom) |
| `src/data/highlights.ts` | Research highlight cards on home |
| `src/data/i18n.ts` | Short UI labels (nav, section headers) |
| `src/content/blog/` | Blog posts, one Markdown file per language |
| `src/styles/global.css` | The entire "Studio" theme (single CSS file, no framework) |
| `public/assets/` | Images (`img/`) and PDFs (`pdf/`) — served at `/assets/...` |

Layouts: `src/layouts/Base.astro` (nav + footer + theme/lang scripts),
`src/layouts/BlogPost.astro`. Components in `src/components/`.

## Bilingual system (important)

- The whole site renders **both** languages into HTML; visibility is CSS-only:
  `html[lang="zh"] .en-only { display:none }` and vice versa. No page reload on switch.
- Default language: **zh**. User choice persists in `localStorage.lang`.
  An inline script in `<head>` (ThemeLangScript.astro) sets `lang` + `data-theme`
  attributes **before first paint** — do not move it into the body or a bundled script.
- Anything user-visible needs both `<span class="zh-only">` and `<span class="en-only">`
  variants (or bilingual fields in data files).
- **Exceptions that stay English**: paper titles, author names, venue names (academic
  convention — do not translate these).
- Blog posts are per-language files (`slug-zh.md` / `slug-en.md`, `lang:` in frontmatter).
  A post without a translation simply doesn't appear in the other language's list.
  Use hyphens in filenames, not dots (Astro strips dots from slugs).

## Theme

Light/dark via CSS variables on `:root`; follows system by default, manual toggle
persists in `localStorage.theme`. Both `@media (prefers-color-scheme: dark)` and
`:root[data-theme]` selectors must stay in sync in `global.css`.

Design language ("Studio"): Inter + JetBrains Mono (+ Noto Sans/Serif SC for zh),
single blue accent, hairline borders, mono uppercase section headers (`// 研究方向`).
Keep new UI consistent with this — no new colors/fonts without reason.

## Adding content (quick reference)

- **News**: copy the template at the bottom of `src/data/news.ts` (both zh + en required).
- **Publication**: template at bottom of `src/data/publications.ts`. `selected: true`
  puts it on the home page. PDFs go in `public/assets/pdf/`.
- **Blog post**: new file in `src/content/blog/` with frontmatter
  `title / date / lang / description? / tags? / draft?`.

## History

The site previously ran on Jekyll (al-folio theme); all legacy files were removed
in May 2026 (recoverable from git history). Publications were migrated from
`_bibliography/papers.bib` into `src/data/publications.ts`.
