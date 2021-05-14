import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Context } from '../../Context';
import { DropMenuPlate } from './styles';
import SignedIn from '../SignedIn';
import Access from '../Access';

export default function DropDown ({ display, showAvatar, currentUser }) {
  const signedIn = currentUser.username;

  return (
    <DropMenuPlate display={display}>
      {
        signedIn ?
          <SignedIn user={currentUser.username} showAvatar={showAvatar}/>
          :
          <Access />
      }
    </DropMenuPlate>
  );
}

DropDown.propTypes = {
  display: PropTypes.string
};
