import axios from "axios";

const axiosSetup = currentUser => {
  // set axios defaults
  // run in context after current user has been initialized

  axios.defaults.baseURL = '/api';
  axios.defaults.headers.user_id = currentUser.id;

};

export default axiosSetup;
