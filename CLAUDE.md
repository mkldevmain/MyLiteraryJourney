# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"My Literary Journey: A Great Books Digital Portfolio" — a static, no-build personal portfolio site (plain HTML/CSS/vanilla JS). There is no package.json, bundler, linter, or test suite, and the directory is not a git repo. To run it, open `index.html` (or `profile.html`) in a browser, or serve the folder with any static server (e.g. `python -m http.server`).

## Architecture

- **Pages**: `profile.html` (home), `analyses.html`, `favorite.html`, `summary.html`, `reflection.html`. `index.html` is a byte-identical copy of `profile.html` — edit both together (or keep them in sync) when changing the home page.
- **Shared nav is duplicated**: each HTML file contains its own copy of the `<nav class="navbar">` block (links, theme toggle SVG). A nav change must be made in all six files, and the `active` class on the current page's link set per file.
- **One shared `script.js`** is loaded by every page and guards each feature with null checks on element IDs (`analysesGrid`, `readerModal`, etc.), so features silently no-op on pages lacking those elements. It handles:
  - The `analyses` data array (top of file): each entry has `id, title, author, lens, category, cover, snippet, full` (`full` is an HTML string of `<p>` paragraphs). `category` values drive the filter buttons (`.filter-btn`) in `analyses.html`.
  - Card rendering (`renderCards`), the reader modal with prev/next navigation over the *currently filtered* list, and keyboard handling.
  - Mobile nav toggle, dark/light theme (persisted in `localStorage` key `theme`, toggles `body.dark-mode`, falls back to `prefers-color-scheme`), back-to-top button.
  - A page-transition effect: internal link clicks are intercepted, add `page-leaving` to `<body>`, and navigate after 220ms (skipped for same-page, hash, modified clicks, `_blank`). `pageshow` removes the class on bfcache restore.
- **`styles.css`**: single stylesheet using `:root` CSS variables, overridden by `body.dark-mode` for the dark theme; fonts (Playfair Display, Source Sans 3) come from Google Fonts via `<link>` in each page.
- **Images**: `images/` holds book/cover images referenced by `cover` in the `analyses` array and by the HTML pages; filenames contain spaces and mixed case, so paths must match exactly. `images/PROFILE/` is a subfolder holding the student photo.

## Adding an analysis

Append an object to the `analyses` array in `script.js` with a unique `id`, a cover image in `images/`, and a `category` matching an existing filter button (or add a new `.filter-btn` with that `data-filter` value in `analyses.html` (the "All Works (13)" label is hardcoded)). The counter text and cards are generated automatically.
