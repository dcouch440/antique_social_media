module.exports = {
  message: "ROUTES",
  antiques: {
    get_antiques_path: '/antiques',
    post_antique_path: '/antiques',
    delete_antique_path: '/antiques',
    update_antique_path: '/antiques'
  },
  users: {
    post_signin_path: '/users/signin',
    post_signup_path: '/users/signup'
  },
  likes: {
    post_like_path: '/likes/like',
    post_unlike_path: '/likes/unlike',
  }
}