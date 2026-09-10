# Brendon Pillay — Portfolio (React + Vite + Tailwind)

A redesign of the original portfolio site, built as separate React components
with Tailwind, using the "cyber grape / acid lime" techno theme.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/App.jsx` — page composition (scroll-expand intro + sections)
- `src/components/` — reusable/visual components
  - `ScrollExpand.jsx` — the opening scroll-driven reveal (React Bits)
  - `GhostFibers.jsx` — WebGL fiber background used behind the hero (React Bits, `ogl`)
  - `CurvedLoop.jsx` — curved marquee used for every section title (React Bits)
  - `InfiniteMenu.jsx` — the draggable 3D sphere used to browse projects (React Bits, `gl-matrix`)
  - `FaceFollowCursor.jsx` — custom component: the big portrait in the hero that
    tilts/shifts toward the pointer
- `src/sections/` — page sections (Nav, Hero, About, Projects, Skills, Contact, Footer)
- `public/face.jpg` — your portrait, used in the intro and the hero

## Notes / things to swap in

- `Projects.jsx` uses `placehold.co` placeholder tiles for the sphere — swap
  `PROJECT_ITEMS[].image` for real screenshots of Footprint Logger, the AI
  ChatBot and the 3D Planet Viewer.
- The contact form in `Contact.jsx` is UI-only; wire its `onSubmit` up to
  whatever backend/email service you use.
- Fonts: "Orbitron" (techno/display headings + curved loop) and
  "Share Tech Mono" (calculator-style monospace body) are loaded from Google
  Fonts in `src/index.css`.
- Colors live in `tailwind.config.js`: `grape` (#6D28D9), `grape-deep`
  (#2E1065), `grape-ink` (#0B0710 background), `lime` (#D7FF00).
- `GhostFibers` and `InfiniteMenu` use WebGL2 — both fail gracefully to a
  blank canvas on unsupported browsers, nothing else on the page depends on them.
