const redirectIfNoUser = ({ Redirect, path, currentUser }) => {
  if (!currentUser.id) {
    return (
      <Redirect to={path} />
    );
  } else {
    return;
  }
};

export default redirectIfNoUser;