import { useContext } from 'react';
import { Context } from '../../../Context';
import OnlineAnimation from '../../../Framer/OnlineAnimation';
import { Online, AvatarContainer, AboutMe, Avatar  } from './styles';

const User = ({ownerInfo}) => {
  const { currentUser: {id} } = useContext(Context);
  const isCurrentUserPost = id === ownerInfo.avatar.user_id ? true : ownerInfo.online;

  return (
    <AvatarContainer>
      <AboutMe>{ownerInfo.username}</AboutMe>
      <Avatar
        status={true}
        src={ownerInfo.avatar?.image_url}
        alt={'avatar'}
      />
      <Online status={isCurrentUserPost}>
        <OnlineAnimation status={isCurrentUserPost}/>
        Online
      </Online>
    </AvatarContainer>
  )
}

export default User;