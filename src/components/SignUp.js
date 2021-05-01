import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';

const StyledInput = styled.input``;

const SignUp = () => {
  const [payload, setPayload] = useState();
  const [message, setMessage] = useState('Sign Up');
  const [
    {password, email, username, passwordConfirmation}, setCredentials
  ] = useState({password: '', email: '', username: '', passwordConfirmation: ''});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCredentials(Object.assign({password, email, username},
      {[name]:value}
    ));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === passwordConfirmation) {
      setPayload({password,email,username});
    }
    else { setMessage('Passwords Do Not Match'); }
  };

  useEffect(() => {
    axios.post('/users/signup',
      {
        email,
        username,
        password
      }
    )
    .then(res => {
      console.log(res.data.token)
    })
    .catch(error => console.log(error));

  }, [payload]);


  return (
    <>
      <p>{message}</p>
      <form onSubmit={onSubmit}>
        <StyledInput
          onChange={handleChange}
          name={'email'}
          placeholder={'Email'}
          value={email}
        />
        <StyledInput
          onChange={handleChange}
          name={'username'}
          placeholder={'Username'}
          value={username}
        />
        <StyledInput
          onChange={handleChange}
          name={'password'}
          placeholder={'password'}
          value={password}
        />
        <StyledInput
          onChange={handleChange}
          name={'passwordConfirmation'}
          placeholder={'passwordConfirmation'}
          value={passwordConfirmation}
        />
        <button type={'submit'}>SUBMIT</button>
      </form>
    </>
  );
};

export default SignUp;