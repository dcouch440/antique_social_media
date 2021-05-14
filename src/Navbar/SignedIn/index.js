import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignOut from '../SignOut';
import maximumLength from '../../utils/maxLength';
import capitalize from '../../utils/capitalize';

import {
  Grid,
  Username,
  HubLink
} from './styles';


export default function SingedIn ({ user, showAvatar }) {
  const capitalizedUsername = capitalize(user);
  const username = maximumLength(capitalizedUsername, 9);

  return (
    <Grid>
      <Username>
        <span>Welcome {username}</span>
      </Username>
      <HubLink><Link to='/antiques'>antiques</Link></HubLink>
      <HubLink><Link to='/antiques/new'>post</Link></HubLink>
      <HubLink><Link to='/posts'>your posts</Link></HubLink>
      <HubLink><Link to='/likes'>likes</Link></HubLink>
      <HubLink><Link to='/rooms'>rooms</Link></HubLink>
      <HubLink><Link to='/chat'>global chat</Link></HubLink>
      <HubLink onClick={showAvatar}><span>Avatar</span></HubLink>

      <SignOut />
    </Grid>
  );
}

SingedIn.propTypes = {
  user: PropTypes.string
};
