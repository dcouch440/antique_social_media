const factory = require('factory-bot').factory;
const faker = require('faker');
const User = require('../../../models/user')
const Antique = require('../../../models/antique')

factory.define('antique', Antique, id => {
  return{
    name: faker.name.firstName(),
    year: faker.datatype.number({min: 900, max: 1900}),
    user_id: id
  }
})

factory.define('user', User, {
  name: faker.name.firstName(),
  username: faker.internet.userName(),
  password_digest: 'pass'
})


module.exports = factory;
// build one
// factory.build('user').then(user => {
//   console.log(user); // => User {username: 'Bob', score: 50}
// });

// build many
// factory.buildMany('post', 5).then(postsArray => {
//   // postsArray is an array of 5 Post instances
// });