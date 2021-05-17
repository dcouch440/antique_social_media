## `Antique Social Media App Front End`

#### Created By David Couch
###### `Date Created May 7, 2021`
# `About:`

  This Project is a Work in Progress

  This is a front end application for a node.js backend
  The current concept is chat rooms that are tied to a users antique

  #### Current Features

  - Framer Motion Slideshow and screen transitions
  - conditional user online with animation
  - Socket servers for
    - User online status
    - Chat messages / rooms
  - Page for Global chat rooms
  - Images grid size is assigned on image load for dynamic grids with respect to the original aspect ratio
  - Page for users to see how many people are talking in their chat rooms
  - Endless scroll loading intersection observer (new pictures load as the user scrolls)
  - Users can upload many images to their post and have a smooth slideshow to show them off
  - Users can change the image grid size with a slider option
  - Likes page (styling work in progress)
  - Posts page (styling work in progress)
  - Picture upload through cloudinary
  - HTTP Only session call on startup through Context

# `Tech Used`
- axios
- socket io - client `4.0.1`
- framer-motion `4.1.9`
- react-router-dom `5.2.0`
- styled-components `5.2.3`
- render-smooth-image-react `1.0.3`
- emojis-list `3.0.0`
- rc-slider `9.7.2`
## `Dev Depends`
- faker `5.5.3`
- babel-eslint `10.1.0`


## `To Come`
- users can upload their avatars! Route is created, integration is needed.

# `PREVIEW`

<img src='src/img/README/antique-home.PNG' alt='antique'>
<img src='src/img/README/antique-upload.PNG' alt='antique'>
<img src='src/img/README/antique-uploaded.PNG' alt='antique'>
<img src='src/img/README/antique-new-upload.PNG' alt='antique'>
<img src='src/img/README/antique-likes.PNG' alt='antique'>
<img src='src/img/README/antique-rooms.PNG' alt='antique'>
<img src='src/img/README/antique-chat.PNG' alt='antique'>

The Link Provided below can be found at (https://github.com/dcouch440/antique-frontend) after Clicking the green button

Note if you plan to download this and install: A lot went into this project and it has many parts.
Without the backend no pictures will be displayed.
Until a reliable source is found to host this complex app it will remain in github form.
Please see previews examples.

* Step 1: Clone the project
```
$ git clone https://github.com/dcouch440/antique-frontend.git
```

* step 2: change directory
```
cd antique-frontend
```

* step 3: open the project
```
code .
```

* step 4: install dependencies;
```
$ npm install
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
