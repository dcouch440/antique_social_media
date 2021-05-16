import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignOut from '../SignOut';
import maximumLength from '../../utils/maxLength';
import capitalize from '../../utils/capitalize';

import {
  Grid,
  Username,
  HubLink
} from './styles';


export default function SingedIn ({ user, showAvatar }) {
  const history = useHistory();
  const capitalizedUsername = capitalize(user);
  const username = maximumLength(capitalizedUsername, 9);
  const sleeping = useRef(false);

  const handleClick = (e, route) => {
    e.stopPropagation();
    if (sleeping.current) {
      return;
    }
    sleeping.current = true;
    history.push(route);
    setTimeout(() => {
      sleeping.current = false;
    }, 1500);
  };

  return (
    <Grid>
      <Username><span>Welcome {username}</span></Username>
      <HubLink onClick={e => handleClick(e, '/antiques')}><span >antiques</span></HubLink>
      <HubLink onClick={e => handleClick(e, '/antiques/new')}><span>post</span></HubLink>
      <HubLink onClick={e => handleClick(e, '/posts')}><span>your posts</span></HubLink>
      <HubLink onClick={e => handleClick(e, '/likes')}><span>likes</span></HubLink>
      <HubLink onClick={e => handleClick(e, 'rooms')}><span>rooms</span></HubLink>
      <HubLink onClick={e => handleClick(e, '/chat')}><span>global chat</span></HubLink>
      <HubLink onClick={showAvatar}><span>Avatar</span></HubLink>
      <SignOut />
    </Grid>
  );
}

SingedIn.propTypes = {
  user: PropTypes.string,
  showAvatar: PropTypes.func
};
