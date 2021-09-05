import axios from 'axios';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Context } from '../../Context';
import useLoginErrors from '../../hooks/useLoginErrors';
import sign from '../../utils/sign';
import {
  DropDownButton,
  DropDownButtonContainer,
  StyledInput
} from '../styled';
import { SignedIn, SignIngTitle } from './styles';

export default function SignIn ({ toggle }) {
  const { setCurrentUser } = useContext(Context);
  const [{ password, email }, setCredentials] = useState({ password: '', email: '' });
  const [loginHasError, setLoginHasError] = useState(false);
  const { setErrors, showErrors } = useLoginErrors();

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(Object.assign({ password, email },
      { [name]:value }
    ));
  };

  const onSubmit = e => {
    e.preventDefault();
    const token = sign({ email, password });

    try {
      axios
        .post(
          '/users/signin',
          { token },
          { withCredentials: true }
        )
        .then(res => {
          setCurrentUser(res.data);
        });
    } catch (err) {
      setLoginHasError(true);
      setErrors([...err.response.data.errors]);
      console.log(err);
    }
  };

  return (
    <SignedIn>
      <SignIngTitle>{loginHasError ? 'Something went wrong.. try again' : 'Please Sign In'}</SignIngTitle>
      {showErrors()}
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
          >
            Sign Up
          </DropDownButton>
          <DropDownButton type={'submit'}>Sign In</DropDownButton>
        </DropDownButtonContainer>
      </form>
    </SignedIn>
  );
}

SignIn.propTypes = {
  toggle: PropTypes.func
};
