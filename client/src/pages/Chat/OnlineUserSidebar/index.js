import PropTypes from "prop-types";
import {
  Avatar,
  AvatarContainer,
  UserContainer,
  Username
} from './styles';


export default function OnlineUserSidebar ({ users }) {
  const mappedUsers = users && users.map(user => {
    return (
      <AvatarContainer key={user.username}>
        <Avatar
          alt='avatar'
          src={user.avatar.secure_url}
        />
        <Username>{user.username}</Username>
      </AvatarContainer>
    );
  });

  return (
    <UserContainer>
      {mappedUsers}
    </UserContainer>
  );
}
OnlineUserSidebar.propTypes = {
  users: PropTypes.array
};
