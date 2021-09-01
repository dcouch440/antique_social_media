import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from '../../../Context';
import OnlineAnimation from '../../../Framer/OnlineAnimation';
import {
  AboutMe,
  Avatar,
  AvatarContainer,
  Online
} from './styles';


export default function User ({ ownerInfo }) {
  const { currentUser: { id } } = useContext(Context);
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
    id: PropTypes.string
  })
};
