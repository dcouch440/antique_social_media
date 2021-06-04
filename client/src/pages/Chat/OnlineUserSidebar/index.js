import {
  Username,
  Avatar,
  UserContainer,
  AvatarContainer
} from './styles';

export default function OnlineUserSidebar ({ users }) {

  const mappedUsers = users && users.map(user => {
    return (
      <AvatarContainer key={user.username}>
        <Avatar src={user.avatar.secure_url} alt='avatar' />
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