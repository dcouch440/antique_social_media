class APIConcerns
{
  isLoggedIn(user_id)
  {
    return  user_id === undefined ? false : true;
  }
}

module.exports = APIConcerns;