import axios from 'axios';
import PropTypes from 'prop-types';
import {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { Context } from '../../Context';
import {
  DropDownButton,
  DropDownButtonContainer,
  StyledInput
} from '../styled';
import { SignedIn, SignIngTitle } from './styles';


export default function SignIn ({ toggle }) {
  const { setCurrentUser } = useContext(Context);
  const [{ password, email }, setCredentials] = useState({ password: '', email: '' });
  const [payload, setPayload] = useState({});
  const [error, setError] = useState(false);

  const isRequest = useRef(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(Object.assign({ password, email },
      { [name]:value }
    ));
  };

  const onSubmit = e => {
    e.preventDefault();
    isRequest.current = true;
    setPayload({ password, email });
  };

  useEffect(() => {
    if (!isRequest.current) {
      return;
    }
    isRequest.current = false;

    axios
      .post(
        '/users/signin',
        { email, password },
        { withCredentials: true }
      )
      .then(res => {
        setCurrentUser(res.data);
      })
      .catch(error => {
        setError(true);
        console.log(error);
      });

  }, [email, password, payload, setCurrentUser]);


  return (
    <SignedIn>
      <SignIngTitle>{error ? 'Something went wrong.. try again' : 'Please Sign In'}</SignIngTitle>
      <form onSubmit={onSubmit}>
        <StyledInput
          name={'email'}
          placeholder={'Email'}
          value={email}
          onChange={handleChange}
        />
        <StyledInput
          name={'password'}
          placeholder={'password'}
          type={'password'}
          value={password}
          onChange={handleChange}
        />
        <DropDownButtonContainer>
          <DropDownButton
            type='button'
            onClick={toggle}
          >Sign Up</DropDownButton>
          <DropDownButton type={'submit'}>Sign In</DropDownButton>
        </DropDownButtonContainer>
      </form>
    </SignedIn>
  );
}

SignIn.propTypes = {
  toggle: PropTypes.func
};
