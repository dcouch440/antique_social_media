module.exports = {
  message: 'ROUTES',
  antiques: {
    get_antiques_path: '/api/antiques',
    post_antique_path: '/api/antiques',
    get_user_antiques: '/api/antiques/users/:user_id',
    get_antique_likes: '/api/antiques/:id/likes',
    delete_antique_path: '/api/antiques',
    update_antique_path: '/api/antiques',
    get_antique_path: '/api/antiques/:id'
  },
  users: {
    post_signin_path: '/api/users/signin',
    post_signup_path: '/api/users/signup',
    get_session_path: '/api/users/session',
    get_users_in_room_path: '/api/users/in-room',
    get_signout_path: '/api/users/signout'
  },
  likes: {
    get_liked_path: '/api/:antique_id:',
    post_like_path: '/api/likes/:antique_id',
    delete_unlike_path: '/api/likes/:antique_id',
    get_likes_path: '/api/likes/like'
  },
  images: {
    get_images_path: '/api/images/:antique_id',
    post_images_path: '/api/images'
  },
  avatars: {
    post_avatars_path: '/api/avatars'
  }
};