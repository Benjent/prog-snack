# To do

## Architecture

-   JSON files used for database could be moved to a dedicated repository with an API (https://testfairy.com/blog/utilize-github-pages-as-json-api/ + https://towardsdatascience.com/using-github-pages-for-creating-global-api-76b296c4b3b5)
-   Handle similar albums in a standalone logic so that both albums are linked to one another
-   Create a real design system (use em/rem units)
-   Add a hook that prevent from committing `/cover` images that are not 300x300
-   Remove possible duplicates of github-pages build and deploy actions (package.json)
-   Use v-cloak to improve first UX

## Test

-   Write E2E tests
-   Bind E2E tests to CI (https://dev.to/ysfaran/how-to-use-playwright-with-github-actions-and-github-pages-4gdl)
-   Bind Vitest to CI

## Accessibility

-   Use `<select>` and `<option>` tags for `<Select>` component
-   Use https://wave.webaim.org/ and update README about that

## Content

-   Search for all _introuvable_ albums and add them to the database
-   Search for all _similar_ albums and bind them to related albums
-   List the instruments used in an album
-   List notables musicians to link albums and artists
-   Add _Beat_ criterium
-   Add _Synth-based_ criterium (for _Krautock_/_humble_ albums that tend to have no criteria)
-   Link albums to Discogs
-   Subgenres could be an album property, not the other way around
-   Fill in missing subgenre descriptions
-   Fill in missing gem descriptions

## Features

-   Deezer, Spotify, Discogs could be an API search with album title and year (instead of manually providing the id) to allow more flexibility

## User feedbacks

-   Open Attic filters by default
-   SEO
-   Canonical URL
-   OG metadada
-   Homepage should be Attic not Album
