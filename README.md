## `Antique Social Media App Made With Node.js `
#### Created By David Couch

# About:

  This Project is an Work in Progress:

  This is API application made with Node.js that currently features,

    - HTTP only json web token authentication
    - bcrypt password hashing
    - cloudinary image upload routes
    - user antique image + avatar image join tables
    - sign in / out authentication
    - serialization for like / dislike status for current logged in user
    - like / dislike routes for antiques (posts)

  In the works:
    - Socket.io user online status
    - additional tests

  File Structure philosophy:

    Routes        :This file decides the routes and chosen controller
    Controller    :This file grabs the request and decides how to distribute it
    service       :This file parses through queries and altering incoming data
    DAO           :This file strictly interacts with the databases its named by
    Model         :This file holds relationship data through the objection package

  This is an evolving project focused on efficiently and effectively take advantage of the technologies node.js give to developers. This Back end will be paired with a front end currently being developed to provide a fast and user friendly experience.


### `Project Started 4 / 11 / 2021`

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

