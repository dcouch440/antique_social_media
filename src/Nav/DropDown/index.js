import React from 'react';
import * as styles from './styles';

const DropDown = ({display, currentUser}) => {
  return (
    <styles.DropMenuPlate display={display}>
      {currentUser.username}
    </styles.DropMenuPlate>
  )
}

export default DropDown;