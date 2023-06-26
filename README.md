# shareit-app
Shareit is a design display of pictures. The app displays pictures in various categories, there is a create pin functionality where a logged in user can create a pin, also a search functionality for performing searches. Aunthentication and authorization is implemented using google auth. Viewing each pin details gives the user the ability to view about the pin, comment on it and view related pins. The user profile page provides logout functionality, the logged in user can view all the pins he/she created or saved.

This is a foundational build of [keccakinsta](https://keccakinsta.netlify.app/) with next js, created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the installation of the app.

```bash
yarn
```

NB: engines are set to strict mode to use node lts/fermium and yarn for installation of modules.

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

you can start developing page in `pages/` by adding a parent component in the file with the router path as the file name... The page auto-updates as you edit the file.

## Git Hooks

make components are re-useable as possible and commit frequently.
git commits should have a subject and phrase description of your work.
your commits should look like the example.

```bash
git commit -m "docs: add readme docs"
```

## Learn

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!\\

You can learn how the app was setup

- [scalable next app](https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7)

## Deploy on Netlify

One of the easiest ways to deploy your Next.js app is to use the [Netlify Platform](https://www.netlify.com/)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

