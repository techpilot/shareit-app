# shareit-app
Shareit is a design display of pictures. The app displays images in various categories, there is a create pin functionality where a logged-in user can create a pin, also a search functionality for performing searches. Authentication and authorization are implemented using Google auth. Viewing each pin detail gives the user the ability to view the pin, comment on it and view related pins. The user profile page provides logout functionality, the logged-in user can view all the pins he/she created or saved.

This is a foundational build of [keccakinsta](https://keccakinsta.netlify.app/) with react js and sanity.io, created with [`create-react-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the installation of the app.

```bash
yarn
```

NB: engines are set to strict mode to use node lts/fermium and yarn for the installation of modules.

```bash
  "engines": {
    "node": ">=14.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  },
```

if installation completes successfully, you can run the app with the yarn command.

```bash
yarn dev
```

open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

you can start developing a page in `pages/` by adding a parent component in the file with the router path as the file name... The page auto-updates as you edit the file.

## Git Hooks

Make components re-useable as possible and commit frequently.
git commits should have a subject and phrase description of your work.
your commits should look like the example.

```bash
git commit -m "docs: add readme docs"
```

## Learn

To learn more about React, take a look at the following resources:

- [Learn React](https://react.dev/learn) - an interactive React tutorial.

You can check out [the React GitHub repository](https://github.com/reactjs) - your feedback and contributions are welcome!\\

You can learn how the app was setup

- [scalable app](https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7)

## Deploy on Netlify

One of the easiest ways to deploy your React app is to use the [Netlify Platform](https://www.netlify.com/)

