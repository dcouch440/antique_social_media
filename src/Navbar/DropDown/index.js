import React, { useContext } from 'react';
import { Context } from '../../Context';
import { DropMenuPlate } from './styles';
import SignIn from '../SignIn';
import SignedIn from '../SignedIn';
import Access from '../Access';

const DropDown = ({display}) => {
  const { currentUser } = useContext(Context)
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
};

export default DropDown;