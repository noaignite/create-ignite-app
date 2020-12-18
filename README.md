# Create Oakwood App

[Oakwood](https://oakwood.se) App Scaffolding built with [React](https://reactjs.org/) and [Material-UI](https://material-ui.com/).

## Getting started

- Edit `name` & `author` in package.json
- Generate favicons on [favicon.io](https://favicon.io/) and replace the files under /public/
- Add font files to /public/fonts/ and import them under /src/components/styles/privateOverrides/MuiCssBaseline.js and /src/pages/_document.js (We only preload woff2 as it's supported by all browser other than IE11, and adding the media-query wizardry for that doesn't feel worthy of 2020. Do note that the crossOrigin prop may need to change if you're using a different domain for CDN, or loading the font from somewhere else.)

## Deploying Styleguide to Now

- Edit `now.json` and change `name` to your project name
- Run `now`. To ensure you are deploying to the Oakwood team use `now --scope oakwood`
