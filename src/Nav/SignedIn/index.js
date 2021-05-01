import React from 'react';
import SignOut from '../SignOut';
import { Username } from './styles';

const SignedIn = ({user}) => {
  return (
    <>
      <Username>Welcome {user.charAt(0).toUpperCase() + user.slice(1)} </Username>
      <SignOut />
    </>
  )
}

export default SignedIn;