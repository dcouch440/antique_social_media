import React, { useState } from 'react';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const Access = () => {
  const [accessChoice, setAccessChoice] = useState(true)

  const handleToggle = () => {
    setAccessChoice(prev => !prev);
  }

  return (
    <>
    {
      accessChoice ?
        <SignIn  toggle={handleToggle}/>
        :
        <SignUp toggle={handleToggle} />
    }
    </>
  )
}

export default Access;