import React, {useState, useEffect, useRef, useContext} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { Context } from '../Context';

const StyledInput = styled.input``;

const SignIn = () => {
  const [payload, setPayload] = useState({});
  const [{password, email}, setCredentials] = useState({password: '', email: ''});
  const isMounted = useRef(false)

  const { setCurrentUser } = useContext(Context)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCredentials(Object.assign({password, email},
      {[name]:value}
    ));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    isMounted.current = true;
    setPayload({password,email});
  };

  useEffect(() => {
    if (!isMounted.current) return
    axios.post(
      '/users/signin',
      { email, password },
      { withCredentials: true }
    )
    .then(res => {
      setCurrentUser(res.data)
    })
    .catch(error => console.log(error));

  }, [email, password, payload, setCurrentUser]);


  return (
    <>
      <p>Please Sign In</p>
      <form onSubmit={onSubmit}>
        <StyledInput
          onChange={handleChange}
          name={'email'}
          placeholder={'Email'}
          value={email}
        />
        <StyledInput
          onChange={handleChange}
          name={'password'}
          placeholder={'password'}
          value={password}
        />
        <button type={'submit'}>SUBMIT</button>
      </form>
    </>
  );
};

export default SignIn;