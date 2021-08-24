import PropTypes from "prop-types";
import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import {
  DropdownBottomLink,
  DropdownGrid,
  DropdownHubLink,
  DropdownUsername
} from '../styles';

export default function SingedOut ({ handleShowLogin }) {
  const history = useHistory();
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
      <DropdownUsername><span>Please Sign In</span></DropdownUsername>
      <DropdownHubLink onClick={e => handleClick(e, '/antiques')}><span >antiques</span></DropdownHubLink>
      <DropdownHubLink onClick={e => handleClick(e, '/rooms')}><span>rooms</span></DropdownHubLink>
      <DropdownHubLink onClick={e => handleClick(e, '/chat')}><span>global chat</span></DropdownHubLink>
      <DropdownBottomLink
        onClick={handleShowLogin}
      >
        Sign-In
      </DropdownBottomLink>
    </DropdownGrid>
  );
}

SingedOut.propTypes = {
  handleShowLogin: PropTypes.func
};
