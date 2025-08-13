# Okoret UI

Open‑source, motion‑forward React component library. Clean primitives, subtle animations, and a tiny API surface.

## Quickstart

```bash
npm install
npm run dev
```

Visit the local URL printed by Vite to view the landing page and component previews.

## Install (library consumers)

```bash
npm i @okoret/ui
# or
pnpm add @okoret/ui
```

## Tech

- React + Vite
- Tailwind CSS via `@tailwindcss/vite`

## Project structure

```
Okoret UI/
  src/
    App.jsx        # Landing + previews
    index.css      # Tailwind import + base font
    main.jsx       # App mount
  vite.config.js   # Vite + Tailwind plugin
  index.html       # App shell
```

## Development

1. Install deps: `npm install`
2. Start dev: `npm run dev`
3. Edit `src/App.jsx` to add components or previews

Tailwind is already configured:

- `vite.config.js` includes `@tailwindcss/vite`
- `src/index.css` imports `@import "tailwindcss";`

## Contributing

Built by [Kartik Sabale](https://Kartikfx.cloud).

1. Fork and create a feature branch
2. Make edits with small, focused commits
3. Run `npm run dev` to preview
4. Open a PR with a clear description and screenshots/gifs

## License

MIT © Okoret UI — Crafted with care by Kartik Sabale
