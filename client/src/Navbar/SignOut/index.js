import { useContext } from 'react';
import axios from 'axios';
import { Context } from '../../Context';

import { SignOutDiv } from './styles';

export default function SignOut () {
  const { setCurrentUser } = useContext(Context);

  const requestLogout = async () => {
    try {
      await axios
        .get('/users/signout', { withCredentials: true })
        .then(res => {
          if (res.status === 202) {
            setCurrentUser({
              id: undefined,
              username: undefined,
              email: undefined
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SignOutDiv type="button" onClick={requestLogout} >
      Sign-Out
    </SignOutDiv>
  );
}
