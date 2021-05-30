# `ANTIQUE SOCIAL MEDIA`

#### Created By David Couch
##### `Project Started 4 / 11 / 2021`
### This project is two previous projects combined

## `About`
See this app LIVE @ ( https://radiant-thicket-98181.herokuapp.com/ )

This Project is a Work in Progress

Please log in / sign-up to view content a fake email will work find but there are password rules that will display if you enter one without the correct rules.

This project is an application made to upload images of your favorite antiques and give a bit of information / backstory on it. Users can view your antique from the home page through the infinite scroll image display.
  

Currently the home page is set up too just view all antiques that are on the website but you can view all of a users posts by visiting that page.
### `Notes:`
  
- Cloudinary limits 500 image loads per day so if things are not loading, others might have viewed the website.
  
- Sockets are set up on remote repositories so it may take a few seconds for rooms to show up because heroku is starting the server.
  
- This app was made out of the love of exploration and design, no features are final.

## `Socket Servers`

Github:
  Chat Socket: ( https://github.com/dcouch440/antique_chat_socket )
  Online Status Socket: ( https://github.com/dcouch440/antique_online_socket )

# `front-end`

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
  - Likes page
  - Posts page
  - User Collections Page
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

# `PREVIEW`

<img src='img/front-end/antique-home.PNG' alt='antique'>
<img src='img/front-end/antique-upload.PNG' alt='antique'>
<img src='img/front-end/antique-uploaded.PNG' alt='antique'>
<img src='img/front-end/antique-new-upload.PNG' alt='antique'>
<img src='img/front-end/antique-likes.PNG' alt='antique'>
<img src='img/front-end/antique-rooms.PNG' alt='antique'>
<img src='img/front-end/antique-chat.PNG' alt='antique'>

# `Backend`

  This Project is an Work in Progress, This was mad for the love of javascript and exploration in a full stack javascript social media app.

  This app is made with Node.js that currently features,

    - HTTP only json web token authentication
    - bcrypt password hashing
    - cloudinary image upload routes ( cloud images merged through async array mapping )

  File Structure philosophy:

    Routes        :This file decides the routes and chosen controller
    Controller    :This file grabs the request and decides how to distribute it
    Serializer    :This file is used to combine logic from other files at the end of the chain and combine pictures from cloud
    service       :This file parses through queries and altering incoming data with limited importing
    DAO           :This file strictly interacts with the databases its named by
    Model         :This file holds relationship data through the objection package


# `Tech Used`
  * `bcrypt`
  * `express`
  * `express-jwt`
  * `jsonwebtoken`
  * `knex`
  * `moment`
  * `objection`
  * `socket.io`
  * `multer-storage-cloudinary`
  * `yup`
  * `pg`
  * `cloudinary`
  * `cookie-parser`
  * `cors`
  * `dotenv`
## `Dev Depends`
  * `eslint`
  * `faker`
  * `jest`
  * `jest-environment-node`
  * `supertest`
  * `uuid`

### `Route examples`

#### (currently under construction, some calls might not be exact)

## `SESSIONS`

<img src='img/back-end/http-only.PNG' alt='a route call'>
<img src='img/back-end/session.PNG' alt='a route call'>
<img src='img/back-end/signout.PNG' alt='a route call'>
<img src='img/back-end/cookie.PNG' alt='a route call'>

## `ANTIQUES`

<img src='img/back-end/antiques_get.PNG' alt='a route call'>
<img src='img/back-end/antiques_id.PNG' alt='a route call'>
<img src='img/back-end/antiques_delete.PNG' alt='a route call'>
<img src='img/back-end/antiques_images.PNG' alt='a route call'>
<img src='img/back-end/antiques_likes.PNG' alt='a route call'>
<img src='img/back-end/antiques_post.PNG' alt='a route call'>

## `AVATAR`
<img src='img/back-end/avatars_post.PNG' alt='a route call'>

## `IMAGES`

<img src='img/back-end/images_post.PNG' alt='a route call'>

## `LIKES`

<img src='img/back-end/likes_like.PNG' alt='a route call'>
<img src='img/back-end/likes_dislike.PNG' alt='a route call'>
<img src='img/back-end/likes_likes.PNG' alt='a route call'>

## `USER OBJECT SHAPE ( for demo )`
<img src='img/back-end/users_development_route.PNG' alt='a route call'>

## `USERS`

<img src='img/back-end/users_signin.PNG' alt='a route call'>
<img src='img/back-end/users_signup.PNG' alt='a route call'>
<img src='img/back-end/users_antiques.PNG' alt='a route call'>

### `Install`
requirements for install ( git - code editor )
- Go To ( https://github.com/dcouch440/antique_social_media )
- Click on the Green Code button
- Copy the code and clone the project
```
git clone https://github.com/dcouch440/antique_social_media.git
```
- then change directories to open the project
```
cd antique_social_media
```
- from here if you have vs code installed type
```
code .
```
- from here you can now view the project