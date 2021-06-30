import PropTypes from 'prop-types';
import { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../Context';
import useLoginErrors from '../../hooks/useLoginErrors';

import {
  Form,
  SignUpTitle
} from './styles';

import {
  StyledInput,
  DropDownButtonContainer,
  DropDownButton
} from '../styled';

export default function SignUp ({ toggle }) {
  const { setCurrentUser } = useContext(Context);
  const [payload, setPayload] = useState({});
  const [message, setMessage] = useState('Sign Up');
  const { setErrors, showErrors } = useLoginErrors();
  const isRequest = useRef(false);
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

  const handleSubmit = e => {
    const {
      password, passwordConfirmation, username, email
    } = credentials;

    e.stopPropagation();
    e.preventDefault();

    if (password === passwordConfirmation) {
      isRequest.current = true;
      setPayload({ password, email, username });
    } else {
      setMessage('Passwords Must Match');
    }
  };

  useEffect(() => {
    if (isRequest.current === false) {
       return;
    }
    isRequest.current = false;
    axios.post(
      '/users/signup',
      payload,
      { withCredentials: true }
    )
      .then(res => {
        if (res.status === 201) {
          setCurrentUser(res.data);
        } else {
          setErrors([...res.data.errors]);
        }
      })
      .catch(error => {
        console.log(error);
        setErrors([...error.response.data.errors]);
      });

      /// THE DATA IS KICKING BECAUSE ITS a 403?

  }, [payload, setCurrentUser, setErrors]);


  return (
    <Form onSubmit={handleSubmit}>
      {showErrors()}
      <SignUpTitle>{message}</SignUpTitle>

      <StyledInput
        onChange={handleChange}
        name={'email'}
        placeholder={'Email'}
        value={credentials.email}
        required
      />

      <StyledInput
        onChange={handleChange}
        name={'username'}
        placeholder={'Username'}
        value={credentials.username}
        required
      />

      <StyledInput
        onChange={handleChange}
        name={'password'}
        placeholder={'password'}
        type={'password'}
        value={credentials.password}
        required
      />

      <StyledInput
        onChange={handleChange}
        name={'passwordConfirmation'}
        placeholder={'password Confirmation'}
        type={'password'}
        value={credentials.passwordConfirmation}
        required
      />

      <DropDownButtonContainer>
        <DropDownButton type="submit" onClick={toggle}>Sign In</DropDownButton>
        <DropDownButton >Sign Up</DropDownButton>
      </DropDownButtonContainer>

    </Form>
  );
}

SignUp.propTypes = {
  toggle: PropTypes.func
};
