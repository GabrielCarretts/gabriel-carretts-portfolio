# Carlos Gabriel — Portfolio

A minimalist, responsive, bilingual personal portfolio built with **HTML, CSS, and vanilla JavaScript**.

## Features

- **PT-BR / EN-US** language switcher (persists across visits)
- **Light / dark mode**, with system preference as default and a saved manual override
- **Project filters** (all, programming logic & data, web) and a live visible-project counter
- Four featured projects verified against their actual GitHub folders
- Responsive layout, keyboard focus styles, skip link, semantic sections, and reduced-motion support
- No dependencies, build tools, or API keys

## Projects

1. [AllInOne — C# / .NET](https://github.com/GabrielCarretts/college-c-sharp/tree/main/AllInOne): modular menu of nine algorithms and utilities.
2. [Library Database — C++](https://github.com/GabrielCarretts/college-c-plus-plus/tree/main/library_database): dynamic vectors, validation and collection analytics.
3. [Hotel Sono Bom — C++](https://github.com/GabrielCarretts/college-c-plus-plus/tree/main/hotel_sono_bom_manager): billing logic, additional charges, and taxes.
4. [Task List — JavaScript](https://github.com/GabrielCarretts/college-html-css-js/tree/main/task-list-app): task interactions, DOM manipulation, theme and progress counters.

## Run locally

Clone this repository and open `index.html` in a browser. You can also use VS Code's Live Server extension. No install or compilation needed.

## Structure

- `index.html` — accessible, semantic page and project cards.
- `style.css` — responsive components and CSS light/dark design tokens.
- `script.js` — translations, language/theme persistence, filters and counter.
- `img/foto-curriculo.jpeg` — existing portrait image from the original portfolio.

## Customize

- Update copy in the `translations` object in `script.js` (and the Portuguese HTML fallback).
- Update projects in the `#project-grid` section of `index.html`. Each card uses `data-category="logic"` or `data-category="web"`.
- Adjust CSS custom properties at the top of `style.css` for colors.

The previous portfolio is preserved in Git history. The updated portfolio works as a static website and is compatible with GitHub Pages.
