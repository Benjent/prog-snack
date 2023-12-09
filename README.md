# ![Prog Snack logo](./src/assets/img/preview.png)

![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat) ![GitHub CI](https://github.com/Benjent/prog-snack/actions/workflows/main.yml/badge.svg)

![GitHub Pages badge](https://img.shields.io/badge/GitHub_Pages-222222?logo=github&logoColor=white) ![Vue.js badge](https://img.shields.io/badge/Vue.js_2-42b883?logo=vuedotjs&logoColor=white) ![Sass badge](https://img.shields.io/badge/Sass-cf649a?logo=sass&logoColor=white) ![Conventional commits badge](https://img.shields.io/badge/Conventional_commits-fa6673?logo=conventionalcommits&logoColor=white) ![ESLint badge](https://img.shields.io/badge/ESLint-4b32c3?logo=eslint&logoColor=white) ![Prettier badge](https://img.shields.io/badge/Prettier-f6914d?logo=prettier&logoColor=white) ![A11y badge](https://img.shields.io/badge/A11y-9299ce?logo=a11y&logoColor=white) ![Husky badge](https://img.shields.io/badge/Husky-42b983?logo=husky&logoColor=white) ![JS Doc badge](https://img.shields.io/badge/JS_Doc-006fbb?logo=jsdoc&logoColor=white) ![Vitest badge](https://img.shields.io/badge/Vitest-acd268?logo=vitest&logoColor=white) ![Storybook badge](https://img.shields.io/badge/Storybook-ff4785?logo=storybook&logoColor=white)

Tiny web project with big music ambition: dusting old prog albums, some known as prog gems, to make them shine beside classic albums.

Browse albums, filter them by music criteria, discover similar albums and find out who designed that cover.

This is a [Vue.js v2](https://v2.vuejs.org/) project bootstrapped with [Vite](https://vitejs.dev/).

[See it live](https://benjent.github.io/prog-snack/).

## Table of contents

-   [Prerequisites](#prerequisites)
-   [Project setup](#project-setup)
-   [Workflow](#workflow)
-   [Guidelines](#guidelines)
-   [Documentation](#documentation)
-   [To do](#to-do)

## Prerequisites

-   [Node](https://nodejs.org/en/)

## Project setup

1. Clone this repository
2. Install the dependencies: `npm install`

## Development tips

1. Follow the __Project setup__ instructions above
2. Run the development server (compiles and hot-reloads): `npm run dev`
3. See the local live server: `http://127.0.0.1:5173/`
4. Run the storybook server (compiles and hot-reloads): `npm run storybook`
5. See the local live storybook server: `http://localhost:6006/`

- Prettify files: `npm run prettify`
- Lint files: `npm run lint`
- Run unit and component tests: `npm run test:unit`
- Build for production: `npm run build`

## Workflow

The workflow is currently very basic. There are three main branches: `/master`, `/dev` and `/gh-pages`. Code updates are done in `/dev`, pull requests from `/dev` to `/master` and deployment from `/master` to `/gh-pages` on each `/master` update.

## Guidelines

This project is heavily influenced by [SMACSS](http://smacss.com/) and [BEM](http://getbem.com/), and uses [Vue option API](https://v2.vuejs.org/v2/guide/migration-vue-2-7#Behavior-Differences-from-Vue-3). It relies on [ESLint](https://eslint.org/) for linting, [Prettier](https://prettier.io/) coupled with [EditorConfig](https://editorconfig.org/) for formatting, [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit structuration ; all of which triggered on pre-commit hooks with [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged).

## Documentation

### Vue

-   [Vue.js](https://v2.vuejs.org/)
-   [Vite](https://vitejs.dev/)
-   [Vuex](https://vuex.vuejs.org/)
-   [Vue Router](https://router.vuejs.org/)
-   [Vue Transitions](https://www.npmjs.com/package/vue2-transitions)
-   [Vue MQ](https://www.npmjs.com/package/vue-mq)

### Style

-   [Sass](https://sass-lang.com/)
-   [BEM](https://getbem.com/)
-   [SMACSS](http://smacss.com/)

### Lint

-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [EditorConfig](https://editorconfig.org/)
-   [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
-   [A11y](https://www.a11yproject.com/)
-   [JS Doc](https://jsdoc.app/)

### Automation

-   [Husky](https://typicode.github.io/husky/)
-   [Lint-staged](https://github.com/lint-staged/lint-staged)
-   [GitHub actions](https://github.com/features/actions)

### Assets

-   [Fonts](https://fonts.google.com/)
-   [Material icons](https://fonts.google.com/icons?icon.style=Rounded)

### Test

-   [Vitest](https://vitest.dev/)

## To do

## Since Vue 2.7 migration from 2.6

- Fix wrapper.emitted() empty result
- Fix tsc broken config

### Infra

This project would benefit from several implementations, which are planned for the future, such as:

-   Design system consolidation
-   Accessibility (aria, contrast)
-   Branch CLI and protections
-   Automated versioning, releases, tags and changelogs
-   Unit, UI and E2E tests
-   External DB and DAO

### Features

This project is far from being done even though the 1000 albums milestone has been reached. It still needs:

-   The remaining Prog-related albums (~9000 albums, including albums that are impossible to listen to entirely on the web)
-   Some more criteria
-   A Discogs/Youtube/Spotify/Deezer search API for album titles and artists
-   Other features that I haven't thought of yet
