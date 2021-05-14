import PropTypes from 'prop-types';
import SignedIn from '../SignedIn';
import Access from '../Access';
import { DropMenuPlate } from './styles';

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
