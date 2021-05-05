import React, {useState, useEffect, useRef, useContext} from 'react';
import axios from 'axios';
import { Context } from '../../Context';
import { SignIngTitle, SignedIn } from './styles';
import { StyledInput, DropDownButton, DropDownButtonContainer } from '../styled';

const SignIn = ({toggle}) => {
  const [payload, setPayload] = useState({});
  const [error, setError] = useState(false);
  const [{password, email}, setCredentials] = useState({password: '', email: ''});
  const isRequest = useRef(false);

  const { setCurrentUser } = useContext(Context);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCredentials(Object.assign({password, email},
      {[name]:value}
    ));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    isRequest.current = true;
    setPayload({password, email});
  };

  useEffect(() => {
    if (!isRequest.current) return;
    isRequest.current = false;
    axios.post(
      '/users/signin',
      { email, password },
      { withCredentials: true }
    )
      .then(res => {
        console.log(res);
        setCurrentUser(res.data);
      })
      .catch(error => {
        setError(true);
        console.log(error);
      });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload]);


  return (
    <SignedIn>
      <SignIngTitle>{error ? 'Something went wrong.. try again' : 'Please Sign In'}</SignIngTitle>
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
        <DropDownButtonContainer>
          <DropDownButton type='button' onClick={toggle}>Sign Up</DropDownButton>
          <DropDownButton type={'submit'}>Sign In</DropDownButton>
        </DropDownButtonContainer>
      </form>
    </SignedIn>
  );
};

export default SignIn;