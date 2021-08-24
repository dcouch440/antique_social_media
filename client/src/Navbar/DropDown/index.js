import PropTypes from 'prop-types';
import Access from '../Access';
import SignedIn from '../SignedIn';
import { DropMenuPlate } from './styles';

export default function DropDown ({ display, showAvatar, currentUser }) {
  const signedIn = currentUser.username;

  return (
    <DropMenuPlate display={display}>
      {
        signedIn ?
          <SignedIn
            showAvatar={showAvatar}
            user={currentUser.username}
          />
          :
          <Access />
      }
    </DropMenuPlate>
  );
}

DropDown.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.any
  }),
  display: PropTypes.string,
  showAvatar: PropTypes.any
};
