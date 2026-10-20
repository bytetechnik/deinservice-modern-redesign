# Dein Service – Modern Redesign

https://deinservice.gmbh/

Bilingual (primary German, secondary English), modern, animated multi-page marketing
site for Dein Service GmbH (telecommunications, fiber and infrastructure).

Built with **Vite + React** (plain SPA), **Tailwind CSS v4**, **shadcn/ui + Radix** and
**React Router**.

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm install
npm run dev
```

## Scripts

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start the Vite dev server                  |
| `npm run build`   | Build the production site to `dist/`        |
| `npm run preview` | Preview the production build locally       |
| `npm run typecheck` | Type-check the project with `tsc`        |
| `npm run lint`    | Run ESLint                                 |
| `npm run format`  | Format files with Prettier                 |
| `npm test`        | Run the Vitest test suite                  |

## Project structure

- `index.html` – SPA entry document (global `<head>`, fonts, favicon)
- `src/main.tsx` – React bootstrap + `BrowserRouter`
- `src/app.tsx` – Route table, layout, 404 and error boundary
- `src/routes/` – One page component per route (`/`, `/leistungen`, `/projekte`, `/ueber-uns`, `/karriere`, `/kontakt`)
- `src/components/` – Shared site chrome (header/footer/CTA) and `ui/` primitives
- `src/lib/` – i18n, images, services data, SEO hook and utilities
