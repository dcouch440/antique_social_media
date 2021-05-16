module.exports = {
  message: 'ROUTES',
  antiques: {
    get_antiques_path: '/antiques',
    post_antique_path: '/antiques',
    get_user_antiques: '/antiques/users/:user_id',
    get_antique_likes: '/antiques/:id/likes',
    delete_antique_path: '/antiques',
    update_antique_path: '/antiques',
    get_antique_path: '/antiques/:id'
  },
  users: {
    post_signin_path: '/users/signin',
    post_signup_path: '/users/signup',
    get_session_path: '/users/session',
    get_users_in_room_path: '/users/in-room',
    get_signout_path: '/users/signout'
  },
  likes: {
    get_liked_path: '/:antique_id:',
    post_like_path: '/likes/:antique_id',
    delete_unlike_path: '/likes/:antique_id',
    get_likes_path: '/likes/like'
  },
  images: {
    get_images_path: '/images/:antique_id',
    post_images_path: '/images'
  },
  avatars: {
    post_avatars_path: '/avatars'
  }
};