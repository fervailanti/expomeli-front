# Expomeli Web App 🔍

Web app for searching MercadoLibre products.<br />
See it in action at [expomeli.web.app](https://expomeli.web.app/) 🔥

## Stack

The project is builded with [React](https://es.reactjs.org/) (hooks), [React Router](https://reactrouter.com/), [TailwindCSS](https://tailwindcss.com/), [Axios](https://github.com/axios/axios), [Testing Library](https://testing-library.com/docs/react-testing-library/intro) and a couple more dependencies detailed in the `package.json`.

The application also makes use of a BFF (Backend For Frontend) API builded with [Node.js](https://nodejs.org/en/). You can see more at [expomeli-api](https://github.com/fervailanti/expomeli-api).

## CI And Hosting

This proyect is hosted and deployed via [Firebase](https://firebase.google.com/), and this is integrated in an continuous deployment way with GitHub Actions.

Every time you push to `main` the action is dispatched, it runs all the tests, prepare all the builds and finally will deploy through Firebase at https://expomeli.web.app/ and https://expomeli.firebaseapp.com/.

## Available Scripts

In the project directory, you can run:

##### `yarn start`

Will build css and runs the app in the development mode at [http://localhost:3000](http://localhost:3000).

##### `yarn build:css`

Will only build css in development mode.

##### `yarn build:dev`

Will build css in development mode and build the app for production to the `build` folder.

##### `yarn build:prod`

Will build css in production mode and build the app for production to the `build` folder.

##### `yarn test`

Launches the test runner in the interactive watch mode.<br />

##### `yarn eject`

This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
