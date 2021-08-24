import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import capitalize from '../../utils/capitalize';
import maximumLength from '../../utils/maxLength';
import SignOut from '../SignOut';
import {
  DropdownGrid,
  DropdownHubLink,
  DropdownUsername
} from '../styles';


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
    <DropdownGrid>
      <DropdownUsername><span>Welcome {username}</span></DropdownUsername>
      <DropdownHubLink onClick={e => handleClick(e, '/antiques')}><span >antiques</span></DropdownHubLink>
      <DropdownHubLink onClick={e => handleClick(e, '/antiques/new')}><span>post</span></DropdownHubLink>
      <DropdownHubLink onClick={e => handleClick(e, '/posts')}><span>your posts</span></DropdownHubLink>
      <DropdownHubLink onClick={e => handleClick(e, '/likes')}><span>likes</span></DropdownHubLink>
      <DropdownHubLink onClick={e => handleClick(e, '/rooms')}><span>rooms</span></DropdownHubLink>
      <DropdownHubLink onClick={e => handleClick(e, '/chat')}><span>global chat</span></DropdownHubLink>
      <DropdownHubLink onClick={showAvatar}><span>avatar</span></DropdownHubLink>
      <SignOut />
    </DropdownGrid>
  );
}

SingedIn.propTypes = {
  user: PropTypes.string,
  showAvatar: PropTypes.func
};
