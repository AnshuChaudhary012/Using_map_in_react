# React + Vite + React Router + Tailwind CSS

This project uses React with Vite, React Router, Tailwind CSS, and Oxlint.

Tailwind CSS is integrated through the Vite plugin in `vite.config.js` and imported in `src/index.css`. Use Tailwind utility classes directly in JSX.

## Routes

`BrowserRouter` is configured in `src/main.jsx`, and the app routes are defined in `src/App.jsx`.

- `/` — Home
- `/about` — Example page
- Any other path — Not-found page

Use React Router's `Link` component for internal navigation and add `Route` entries inside `Routes` to create pages.
The page components are in `src/pages/`, and reusable UI components are in `src/components/`.

## Shared UI examples

- `src/utility/cardData.js` exports the `cards` array used on the home page.
- `src/utility/reportData.js` exports the report data used by the report page.
- `src/utility/platformData.js` exports the listening platform links used on the About page.
- `src/components/Card.jsx` is a reusable card component that renders one card-data object.
- `src/components/ReportCard.jsx` renders each report card.
- `src/components/common/` contains reusable SVG components for cards, reports, and listening platforms.
- The home page maps over the card data once and renders each item with `Card`.

## Source structure

```text
src/
  assets/       Static images and assets
  components/   Shared UI components
    common/     Reusable SVG components
  pages/        Route-level pages
  utility/      Data used to render cards and reports
  App.jsx       Route definitions and shared layout
  main.jsx      React entry point and router setup
  index.css     Tailwind CSS import
```

## Development

```sh
npm install
npm run dev
```
