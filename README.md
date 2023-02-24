# 💿 Prog Snack

![Prog Snack logo](./src/assets/img/preview.png)

Tiny web project with big music ambition: dusting old prog albums, some known as prog gems, to make them shine beside classic albums.

Browse albums, filter them by music criteria, discover similar albums and find out who designed that cover.

This is a [Vue.js v2](https://v2.vuejs.org/) project bootstrapped with [Vue CLI](https://cli.vuejs.org/).

[See it live](https://benjent.github.io/prog-snack/).

## Table of contents

- [💿 Prog Snack](#💿-prog-snack)
    - [Table of contents](#table-of-contents)
    - [Prerequisites](#prerequisites)
    - [Project setup](#project-setup)
    - [Workflow](#workflow)
    - [Guidelines](#guidelines)
    - [Documentation](#documentation)
    - [To do](#to-do)

## Prerequisites

- [Node](https://nodejs.org/en/)

## Project setup

1. Clone this repository
2. Install the dependencies: `npm install`
3. Run the development server (compiles and hot-reloads): `npm run serve`
4. See the local live server: `http://localhost:8080/prog-snack`
5. Build for production: `npm run build`
6. Lint and autofix files: `npm run lint`

**_Note:_** The 4th step is automated for the GitHub Pages on `/master` push.

## Workflow

The workflow is currently very basic. There are three main branches: `/master`, `/dev` and `/gh-pages`. Code updates are done in `/dev`, pull requests from `/dev` to `/master` and deployment from `/master` to `/gh-pages`.

## Guidelines

This project follows [Airbnb guidelines](https://www.npmjs.com/package/eslint-config-airbnb) for the scripting part, and is heavily influenced by [SMACSS](http://smacss.com/) and [BEM](http://getbem.com/).

## Documentation

### Vue

- [Vue.js](https://v2.vuejs.org/)
- [Vue CLI](https://cli.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vue Transitions](https://www.npmjs.com/package/vue2-transitions)
- [Vue MQ](https://www.npmjs.com/package/vue-mq)

### Style

- [Sass](https://sass-lang.com/)
- [BEM](https://getbem.com/)
- [SMACSS](http://smacss.com/)

### Lint

- [ES Lint](https://eslint.org/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [A11y](https://www.a11yproject.com/)

### Assets

- [Fonts](https://fonts.google.com/)
- [Material icons](https://fonts.google.com/icons?icon.style=Rounded)

## To do

### Infra

This project lacks of several good practice implementations, which are planned for the future, such as:
- Husky and commit hooks
- Prettify
- Design system consolidation and Storybook
- Accessibility (aria, contrast)
- Branch CLI and protections
- Automated versioning, releases, tags and changelogs
- Vite replacement of Webpack (latest attempt was successful but prevented from using dynamic asset path which is required for this project)
- Unit, UI and E2E tests
- External DB and DAO

### Features

This project is far from being done even though the 1000 albums milestone has been reached. It still needs:
- The remaining Prog-related albums (~9000 albums, including albums that are impossible to listen to entirely on the web)
- Some more criteria
- A Discogs/Youtube/Spotify/Deezer search API for album titles and artists
- Other features that I haven't thought of yet

