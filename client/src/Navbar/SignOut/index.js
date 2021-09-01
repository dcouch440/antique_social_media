import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../../Context';
import { DropdownBottomLink } from '../styles';


export default function SignOut () {
  const { setCurrentUser } = useContext(Context);

  const requestLogout = async () => {
    try {
      await axios
        .get('/users/signout', { withCredentials: true })
        .then(res => {
          if (res.status === 202) {
            setCurrentUser({
              id: null,
              username: null,
              email: null
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DropdownBottomLink
      type="button"
      onClick={requestLogout}
    >
      Sign-Out
    </DropdownBottomLink>
  );
}
