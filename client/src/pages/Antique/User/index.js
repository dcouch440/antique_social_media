import {
  AboutMe,
  Avatar,
  AvatarContainer,
  Online
} from './styles';

import OnlineAnimation from '../../../Framer/OnlineAnimation';
import PropTypes from 'prop-types';
import { SessionContext } from '../../../context/Session';
import { useContext } from 'react';

export default function User ({ ownerInfo }) {
  const { currentUser: { id } } = useContext(SessionContext);
  const isCurrentUserPostOrUserOnline = (id === ownerInfo.id && id) ? true : ownerInfo.online;
  const onlineOfflineText = isCurrentUserPostOrUserOnline ? 'Online' : 'Offline';

  return (
    <AvatarContainer>
      <AboutMe>{ownerInfo.username}</AboutMe>
      <Avatar
        alt='avatar'
        src={ownerInfo.avatar?.secure_url}
        status={true}
      />
      <Online status={isCurrentUserPostOrUserOnline}>
        <OnlineAnimation status={isCurrentUserPostOrUserOnline} />
        {onlineOfflineText}
      </Online>
    </AvatarContainer>
  );
}

User.propTypes = {
  ownerInfo: PropTypes.shape({
    avatar: PropTypes.shape({
      secure_url: PropTypes.string,
      user_id: PropTypes.number,
    }),
    online: PropTypes.bool,
    username: PropTypes.string,
    id: PropTypes.number
  })
};
