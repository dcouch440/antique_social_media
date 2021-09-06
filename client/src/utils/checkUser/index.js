// checks if user is valid or not.
const checkUser = ({ currentUser, user_id }) => {
  if (currentUser.admin) {
    return true;
  } else if (currentUser.id === user_id) {
    return true;
  } else {
    return false;
  }
};

export default checkUser;