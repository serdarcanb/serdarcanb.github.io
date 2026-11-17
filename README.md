# serdarcanb.github.io

Personal site of Serdarcan Büyükdereli. Static HTML built with Astro and Tailwind CSS, in English (`/`), Turkish (`/tr/`) and Spanish (`/es/`).

## Editing content

All text lives in three files with the same shape. Change the English file first, then mirror the change in the other two.

```
src/i18n/
  en.ts   English, also defines the content type
  tr.ts   Turkish
  es.ts   Spanish
  index.ts  contact links and calendar invite URLs
```

The page itself is `src/components/Page.astro`. Colors, fonts and the radius rule are at the top of `src/styles/global.css`.

## Commands

```bash
npm install
npm run dev       # local preview on http://localhost:4321
npm run build     # writes dist/
npm run deploy    # builds and pushes dist/ to the gh-pages branch
```

Node 22.23 or newer is required.

## Social preview image

`public/og.png` is a screenshot of `scripts/og.html` at 1200x630. Regenerate it after changing the name, title or photo.
