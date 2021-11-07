import {
  DropDownButton,
  DropDownButtonContainer,
  StyledInput
} from '../styled';
import { SignIngTitle, SignedIn } from './styles';
import { useContext, useState } from 'react';

import { Context } from '../../Context';
import PropTypes from 'prop-types';
import axios from 'axios';
import useLoginErrors from '../../hooks/useLoginErrors';

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

  const onSubmit = async e => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await axios
        .post('/users/signin',
          { email, password },
          { withCredentials: true }
        )
        .then(res => {
          setCurrentUser(res.data);
        });
    } catch (err) {
      const { data } = err.response;
      setLoginHasError(true);
      setErrors([...data.errors ?? [], data.message ?? '']);
      console.log(err);
    }
  };

  return (
    <SignedIn>
      <SignIngTitle>{loginHasError ? 'Something went wrong.. try again' : 'Please Sign In'}</SignIngTitle>
      {showErrors()}
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={handleChange}
        />
        <StyledInput
          autoComplete='current-password'
          name='password'
          placeholder='password'
          type='password'
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
          <DropDownButton type='submit'>Sign In</DropDownButton>
        </DropDownButtonContainer>
      </form>
    </SignedIn>
  );
}

SignIn.propTypes = {
  toggle: PropTypes.func
};
