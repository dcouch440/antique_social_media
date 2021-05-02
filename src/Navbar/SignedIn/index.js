import React from 'react';
import Places from '../Places';
import SignOut from '../SignOut';
import { Username, SignedInContainer } from './styles';

const SignedIn = ({user}) => {
  return (
    <SignedInContainer>
      <Username>Welcome {user.charAt(0).toUpperCase() + user.slice(1)} </Username>
      <Places />
      <SignOut />
    </SignedInContainer>
  )
}

export default SignedIn;