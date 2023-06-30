# shareit-app
Shareit is a picture design display platform that showcases images across different categories. It offers a create pin feature, allowing logged-in users to generate their own pins. The app also incorporates a search functionality for conducting searches. Google authentication is employed for authentication and authorization purposes. By accessing the details of each pin, users can view the pin itself, leave comments, and explore related pins. The user profile page includes a logout option and enables logged-in users to view their created or saved pins.

This is a foundational build of [keccakinsta](https://keccakinsta.netlify.app/) with react js and sanity.io, created with [`create-react-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Rundown of features
- Utilized Redux for state management, ensuring efficient data flow and seamless interaction between
components.
- Implemented features such as creating boards, saving, organizing, and categorizing pins.
- Utilized Sanity.io as the database to store and manage user profiles, pins, and boards.
- Implemented a user-friendly search functionality using React and Redux, allowing visitors to easily find
individual pins and categories of pins.
- Implemented a comment functionality, allowing visitors to write some comments on pins.
- Implemented authentication using Google Auth API. Collaborated with the backend development
team to ensure smooth integration and functionality of the authentication system. Improved the user
experience by allowing users to access personalized content based on their authentication status.
Increased user engagement by 20% and received positive feedback regarding the ease of use and
security of the authentication system.

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

### The project is currently available for a live preview [here](https://keccakinsta.netlify.app/)
