import { useContext } from 'react';
import { Context } from '../../../Context';
import OnlineAnimation from '../../../Framer/OnlineAnimation';
import { Online, AvatarContainer, AboutMe, Avatar  } from './styles';

const User = ({ownerInfo}) => {
  const { currentUser: {id} } = useContext(Context);
  const isCurrentUserPostOrUserOnline = (id === ownerInfo.avatar.user_id && id) ? true : ownerInfo.online;
  const onlineOfflineText = isCurrentUserPostOrUserOnline ? 'Online' : 'Offline';

  return (
    <AvatarContainer>
      <AboutMe>{ownerInfo.username}</AboutMe>
      <Avatar
        status={true}
        src={ownerInfo.avatar?.image_url}
        alt={'avatar'}
      />
      <Online status={isCurrentUserPostOrUserOnline}>
        <OnlineAnimation status={isCurrentUserPostOrUserOnline}/>
        {onlineOfflineText}
      </Online>
    </AvatarContainer>
  );
};

export default User;