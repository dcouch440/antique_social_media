import { AuthorizeTitle, FormContainer } from './styles';
import {
  DropDownButton,
  DropDownButtonContainer,
  StyledInput
} from '../styled';

import PropTypes from 'prop-types';
import { useState } from 'react';

export default function AuthorizeForm ({ onSubmit, errors, withSignup, formTitle, toggle, authType }) {
  const [credentials, setCredentials] = useState({
    password: '',
    email: '',
    username: '',
    passwordConfirmation: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev,
      [name]:value
    }));
  };

  const getButtonText = status => status ? 'Sign Up' : 'Sign In';

  const handleSubmit = e => {
    const { password, email, username, passwordConfirmation } = credentials;
    e.preventDefault();
    e.stopPropagation();

    return onSubmit({
      password,
      email,
      username,
      passwordConfirmation
    });
  };


  return (
    <FormContainer onSubmit={handleSubmit}>
      {errors()}
      <AuthorizeTitle>{formTitle}</AuthorizeTitle>
      <StyledInput
        required
        autoComplete='email'
        name='email'
        placeholder='Email'
        value={credentials.email}
        onChange={handleChange}
      />
      {withSignup && <StyledInput
        required
        autoComplete='username'
        name='username'
        placeholder='Username'
        value={credentials.username}
        onChange={handleChange}
      />}
      <StyledInput
        required
        autoComplete='current-password'
        name='password'
        placeholder='password'
        type={'password'}
        value={credentials.password}
        onChange={handleChange}
      />
      {withSignup && <StyledInput
        required
        autoComplete='current-password'
        name='passwordConfirmation'
        placeholder='password Confirmation'
        type='password'
        value={credentials.passwordConfirmation}
        onChange={handleChange}
      />}
      <DropDownButtonContainer>
        <DropDownButton
          type='button'
          onClick={toggle}
        >
          {getButtonText(authType)}
        </DropDownButton>
        <DropDownButton type='submit'>
          {getButtonText(!authType)}
        </DropDownButton>
      </DropDownButtonContainer>
    </FormContainer>
  );
}

AuthorizeForm.propTypes = {
  authType: PropTypes.bool,
  errors: PropTypes.func,
  formTitle: PropTypes.string,
  onSubmit: PropTypes.func,
  toggle: PropTypes.func,
  withSignup: PropTypes.bool
};
