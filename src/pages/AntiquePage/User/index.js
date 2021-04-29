import faker from 'faker';
import OnlineAnimation from '../../../Framer/OnlineAnimation';
import { Online, AvatarContainer, AboutMe, Avatar  } from './styles';

const User = ({ownerInfo}) => (
  <AvatarContainer>
    {console.log(ownerInfo)}
    <AboutMe>{ownerInfo.username}</AboutMe>
    <Avatar
      status={true}
      src={ownerInfo.avatar?.image_url}
      alt={'avatar'}
    />
    <Online status={true}>
      <OnlineAnimation status={true}/>
      Online
    </Online>
  </AvatarContainer>
)

export default User;