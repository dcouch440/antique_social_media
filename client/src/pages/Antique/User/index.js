import {
  AboutMe,
  Avatar,
  AvatarContainer,
  Online
} from './styles';

import { Context } from '../../../Context';
import OnlineAnimation from '../../../Framer/OnlineAnimation';
import PropTypes from 'prop-types';
import { useContext } from 'react';

export default function User ({ ownerInfo }) {
  const { currentUser: { id } } = useContext(Context);
  const isCurrentUserPostOrUserOnline = (id === ownerInfo.id && id) ? true : ownerInfo.online;
  const onlineOfflineText = isCurrentUserPostOrUserOnline ? 'Online' : 'Offline';

  return (
    <AvatarContainer>
      <AboutMe>{ownerInfo.username}</AboutMe>
      <Avatar
        alt='avatar'
        src={ownerInfo.avatar}
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
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool,
    username: PropTypes.string,
    id: PropTypes.number
  })
};
