import axios from 'axios';
import React, {useEffect, useState, useContext} from 'react'
import { SignOutButton } from './styles';
import { Context } from '../../Context';

const SignOut = () => {
  const { setCurrentUser } = useContext(Context);

  const requestLogout = async () => {
    await axios
      .get('/users/signout', {withCredentials: true})
      .then(res => setCurrentUser({
        id: undefined, username: undefined, email: undefined
      }))
      .catch(err => console.error(err));
  }

  return (
    <SignOutButton type="button" onClick={requestLogout} >
      SIGNOUT
    </SignOutButton>
  )
}

export default SignOut;