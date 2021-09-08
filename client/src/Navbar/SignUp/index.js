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
import { Form, SignUpTitle } from './styles';


export default function SignUp ({ toggle }) {
  const { setCurrentUser } = useContext(Context);
  const [message, setMessage] = useState('Sign Up');
  const { setErrors, showErrors } = useLoginErrors();
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

  const handleSubmit = async e => {
    const {
      password,
      passwordConfirmation,
      username,
      email
    } = credentials;

    e.preventDefault();
    e.stopPropagation();

    if (password !== passwordConfirmation) {
      setMessage('Passwords Must Match');
      return;
    }

    const token = sign({ username, email, password });
    try {
      await axios.post('/users/signup',
        { token },
        { withCredentials: true }
      )
        .then(res => {
          if (res.status === 201) {
            setCurrentUser(res.data);
          } else {
            setErrors([...res.data.errors]);
          }
        });
    } catch (err) {
      const { data } = err.response;
      setErrors([...data.errors ?? [], data.message ?? '']);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {showErrors()}
      <SignUpTitle>{message}</SignUpTitle>

      <StyledInput
        required
        autoComplete='email'
        name='email'
        placeholder='Email'
        value={credentials.email}
        onChange={handleChange}
      />

      <StyledInput
        required
        autoComplete='username'
        name='username'
        placeholder='Username'
        value={credentials.username}
        onChange={handleChange}
      />

      <StyledInput
        required
        autoComplete='current-password'
        name='password'
        placeholder='password'
        type={'password'}
        value={credentials.password}
        onChange={handleChange}
      />

      <StyledInput
        required
        autoComplete='current-password'
        name='passwordConfirmation'
        placeholder='password Confirmation'
        type='password'
        value={credentials.passwordConfirmation}
        onChange={handleChange}
      />

      <DropDownButtonContainer>
        <DropDownButton
          type="submit"
          onClick={toggle}
        >
          Sign In
        </DropDownButton>
        <DropDownButton>Sign Up</DropDownButton>
      </DropDownButtonContainer>

    </Form>
  );
}

SignUp.propTypes = {
  toggle: PropTypes.func
};
