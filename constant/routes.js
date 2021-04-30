module.exports = {
  message: "ROUTES",
  antiques: {
    get_antiques_path: '/antiques',
    post_antique_path: '/antiques',
    delete_antique_path: '/antiques',
    update_antique_path: '/antiques',
    get_antique_path: '/antiques/:id'
  },
  users: {
    post_signin_path: '/users/signin',
    post_signup_path: '/users/signup',
    get_session_path: '/users/signup'
  },
  likes: {
    post_like_path: '/likes/like',
    post_unlike_path: '/likes/unlike',
  },
  images: {
    post_images_path: 'images/upload'
  },
  avatars: {
    post_avatars_path: '/avatars/upload'
  }

};