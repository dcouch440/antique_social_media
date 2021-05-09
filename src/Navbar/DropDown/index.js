import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Context } from '../../Context';
import { DropMenuPlate } from './styles';
import SignedIn from '../SignedIn';
import Access from '../Access';

export default function DropDown ({ display }) {
  const { currentUser } = useContext(Context);
  const signedIn = currentUser.username;

  return (
    <DropMenuPlate display={display}>
      {
        signedIn ?
          <SignedIn user={currentUser.username}/>
          :
          <Access />
      }
    </DropMenuPlate>
  );
}

DropDown.propTypes = {
  display: PropTypes.string
};
