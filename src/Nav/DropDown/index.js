import React, { useContext } from 'react';
import { Context } from '../../Context';
import * as styles from './styles';
import SignIn from '../../components/SignIn';
import SignOut from '../../components/SignOut';

const DropDown = ({display}) => {
  const { currentUser } = useContext(Context)

  return (
    <styles.DropMenuPlate display={display}>
      {currentUser.username}
      <SignIn />
      <SignOut />
    </styles.DropMenuPlate>
  );
};

export default DropDown;