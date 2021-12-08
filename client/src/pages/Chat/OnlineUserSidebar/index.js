import {
  Avatar,
  AvatarContainer,
  UserContainer,
  Username
} from './styles';

import PropTypes from "prop-types";

export default function OnlineUserSidebar ({ users }) {
  const mappedUsers = users && users.map(user => {
    return (
      <AvatarContainer key={user.username}>
        <Avatar
          alt='avatar'
          src={user.avatar}
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
