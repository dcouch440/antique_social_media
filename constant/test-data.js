const testUser = () => (
  {
    email: 'test_user440@test.com',
    username: 'test_user',
    password: 'Pass123^'
  }
)

const testAntique = (userId) => (
  {
    name: 'bottle',
    year: 1234,
    user_id: userId
  }
)

module.exports = { testUser, testAntique }