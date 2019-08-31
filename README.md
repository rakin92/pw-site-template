## PWA React App
[![Build Status](https://travis-ci.org/rakin92/pwa-react-app.svg?branch=master)](https://travis-ci.org/rakin92/pwa-react-app)
[![Node 10](https://img.shields.io/badge/npm-10.16.3-green.svg)](https://nodejs.org/en/download/)

This is my own personal website, and my first take on PWA concept. I decided to port my existing website which was built with react, and turn it into a progressive we app. Learn more about progressive web app [here](https://developers.google.com/web/progressive-web-apps/).

## Stack
* Framework : [React JS](https://reactjs.org/)
* Service Worker: [Workbox](https://developers.google.com/web/tools/workbox/guides/get-started)
* Hosting: [Firebase](https://firebase.google.com/docs/hosting)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance. Also builds the service worker.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run build-sw`

Builds the service worker for the application.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
