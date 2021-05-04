import React, {useState, useEffect, useRef, useContext} from 'react'
import axios from 'axios';
import { Context } from '../../Context';
import { Form, SignUpTitle } from './styles';
import { StyledInput, DropDownButtonContainer, DropDownButton } from '../styled';


const SignUp = ({toggle}) => {
  const [payload, setPayload] = useState({});
  const [message, setMessage] = useState('Sign Up');
  const isRequest = useRef(false);
  const [credentials, setCredentials] = useState({password: '', email: '', username: '', passwordConfirmation: ''});
  const { setCurrentUser } = useContext(Context)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCredentials(prev => ({ ...prev,
      [name]:value
    }));
  };

  const handleSubmit = (e) => {
    const {
      password, passwordConfirmation, username, email
    } = credentials;

    e.preventDefault();

    if (password === passwordConfirmation) {
      isRequest.current = true
      setPayload({password,email,username});
    }
    else { setMessage('Passwords Must Match'); }
  };

  useEffect(() => {
    if (isRequest.current === false) return;
    isRequest.current = false;
    axios.post(
      '/users/signup',
      payload,
      {withCredentials: true}
    )
    .then(res => res.status === 201 && setCurrentUser(res.data))
    .catch(error => console.log(error));

  }, [payload]);


  return (
    <Form onSubmit={handleSubmit}>

      <SignUpTitle>{message}</SignUpTitle>

      <StyledInput
        onChange={handleChange}
        name={'email'}
        placeholder={'Email'}
        value={credentials.email}
      />

      <StyledInput
        onChange={handleChange}
        name={'username'}
        placeholder={'Username'}
        value={credentials.username}
      />

      <StyledInput
        onChange={handleChange}
        name={'password'}
        placeholder={'password'}
        value={credentials.password}
      />

      <StyledInput
        onChange={handleChange}
        name={'passwordConfirmation'}
        placeholder={'password Confirmation'}
        value={credentials.passwordConfirmation}
      />

      <DropDownButtonContainer>
        <DropDownButton type="submit" onClick={toggle}>Sign In</DropDownButton>
        <DropDownButton >Sign In</DropDownButton>
      </DropDownButtonContainer>

    </Form>
  );
};

export default SignUp;