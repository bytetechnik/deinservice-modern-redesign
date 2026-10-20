# AGENTS.md

Plain **Vite + React** SPA (no SSR, no TanStack Start).

## Stack

- React 19 + React Router 7 (`react-router-dom`, declarative `<Routes>`)
- Tailwind CSS v4 via `@tailwindcss/vite` (config lives in `src/styles.css`)
- shadcn/ui primitives in `src/components/ui` (Radix based)
- Vitest + Testing Library (`src/test`)

## Conventions

- Routing is centralized in `src/app.tsx`. Add pages under `src/routes/` as plain
  default-export components and register them in the route table there.
- Per-page `<title>`/meta is set with the `useSeo` hook from `src/lib/seo.ts`
  (there is no SSR `head()` anymore).
- Bilingual copy uses `useT` from `src/lib/i18n.tsx` with `{ de, en }` objects.
- Keep the visual design (Tailwind classes, animations) intact when editing.
