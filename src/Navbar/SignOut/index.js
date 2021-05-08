import axios from 'axios';
import { useContext } from 'react';
import { SignOutDiv } from './styles';
import { Context } from '../../Context';

export default function SignOut ()
{
  const { setCurrentUser } = useContext(Context);

  const requestLogout = async () => {

    await axios
      .get('/users/signout', { withCredentials: true })
      .then(res => res.status === 202 && setCurrentUser({
        id: undefined, username: undefined, email: undefined
      }))
      .catch(err => console.error(err));

  };

  return (
    <SignOutDiv type="button" onClick={requestLogout} >
      Sign-Out
    </SignOutDiv>
  );
}
