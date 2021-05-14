## `Antique Social Media App Made With Node.js `
#### Created By David Couch
##### `Project Started 4 / 11 / 2021`

# `About:`

  This Project is an Work in Progress, This was mad for the love of javascript and exploration in a full stack javascript social media app.

  This is API application made with Node.js that currently features,

    - HTTP only json web token authentication
    - bcrypt password hashing
    - cloudinary image upload routes
    - socket.io for online status and chat rooms
    - async + state functions to handle integration with socket.io and database queries for user online

  File Structure philosophy:

    Routes        :This file decides the routes and chosen controller
    Controller    :This file grabs the request and decides how to distribute it
    service       :This file parses through queries and altering incoming data
    DAO           :This file strictly interacts with the databases its named by
    Model         :This file holds relationship data through the objection package

  This is an evolving project focused on efficiently and effectively take advantage of the technologies node.js give to developers. This Back end will be paired with a front end currently being developed to provide a fast and user friendly experience.




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

# `Install`

The Link Provided below can be found at (https://github.com/dcouch440/node-ant) after Clicking the green button

* Step 1: Clone the project
```
$ git clone https://github.com/dcouch440/node-ant.git
```

* step 2: change directory
```
cd node-ant
```

* step 3: open the project
```
code .
```

* step 4: install dependencies;
```
$ npm install
```

* step five, create a database in your postgres server and set up your knex file located in the /db folder if you need to.
* .env.example holds a template for you to create your .env files
* after those steps are complete run

```
npx knex migrate:latest --knexfile ./knexfile.js
```

then run
```
$ npm run dev
```

### `Route examples`

## `SESSIONS`

<img src='lib/img/README/http-only.PNG' alt='a route call'>
<img src='lib/img/README/session.PNG' alt='a route call'>
<img src='lib/img/README/signout.PNG' alt='a route call'>
<img src='lib/img/README/cookie.PNG' alt='a route call'>

## `ANTIQUES`

<img src='lib/img/README/antiques_get.PNG' alt='a route call'>
<img src='lib/img/README/antiques_id.PNG' alt='a route call'>
<img src='lib/img/README/antiques_delete.PNG' alt='a route call'>
<img src='lib/img/README/antiques_images.PNG' alt='a route call'>
<img src='lib/img/README/antiques_likes.PNG' alt='a route call'>
<img src='lib/img/README/antiques_post.PNG' alt='a route call'>

## `AVATAR`
<img src='lib/img/README/avatars_post.PNG' alt='a route call'>

## `IMAGES`

<img src='lib/img/README/images_post.PNG' alt='a route call'>

## `LIKES`

<img src='lib/img/README/likes_like.PNG' alt='a route call'>
<img src='lib/img/README/likes_dislike.PNG' alt='a route call'>
<img src='lib/img/README/likes_likes.PNG' alt='a route call'>

## `USER OBJECT SHAPE ( for demo )`
<img src='lib/img/README/users_development_route.PNG' alt='a route call'>

## `USERS`

<img src='lib/img/README/users_signin.PNG' alt='a route call'>
<img src='lib/img/README/users_signup.PNG' alt='a route call'>
<img src='lib/img/README/users_antiques.PNG' alt='a route call'>
<img src='lib/img/README/users_in_room_iterable.PNG' alt='a route call'>