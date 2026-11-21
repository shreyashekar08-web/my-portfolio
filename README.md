# Shreya T C — Portfolio

A premium, glassmorphism-styled personal portfolio built with React (Vite), React Router, and Framer Motion. The whole site is framed around a subtle terminal/command-line motif — fitting for a security-minded developer — from the `whoami` hero eyebrow to the `git log` timeline.

## Stack
- React 18 + Vite
- React Router (page transitions via `AnimatePresence`)
- Framer Motion (scroll reveals, tilt cards, magnetic buttons, typing animation)
- Plain CSS3 with CSS variables — no Bootstrap, no Tailwind, no jQuery
- `react-icons` for iconography

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build → /dist
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/       # one component + matching .css per section
  data/
    portfolioData.js  # ALL resume content lives here — edit this file to update copy
  hooks/
    useTypewriter.js  # hero role-cycling animation
    useCountUp.js      # animated statistics
  App.jsx             # routes + page transition wrapper
  main.jsx             # React Router + app bootstrap
  index.css            # design tokens, reset, shared utility classes
public/
  robots.txt
```

## Customizing

- **Content** — everything (name, roles, projects, skills, timeline, services) is centralized in `src/data/portfolioData.js`. Edit there instead of hunting through components.
- **Resume** — drop your PDF at `public/Shreya_TC_Resume.pdf` (the Download Resume button already points here).
- **Photo** — the About and Hero sections currently use styled placeholders (initials/icon) instead of a real photo. Swap `.about__image-placeholder` in `About.jsx` and `.hero__avatar` in `Hero.jsx` for an `<img loading="lazy" ... />` once you have a headshot.
- **Contact form** — `Contact.jsx` currently simulates a submission. Wire the `handleSubmit` function to Formspree, EmailJS, or your own API endpoint.
- **Colors/type** — all design tokens live at the top of `src/index.css` under `:root`.

## Notes
- Respects `prefers-reduced-motion`.
- Keyboard-focus states are visible throughout (`:focus-visible`).
- Code-split by route/vendor via `vite.config.js` `manualChunks`.
