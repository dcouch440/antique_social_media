import SignIn from '../SignIn';
import SignUp from '../SignUp';
import { useState } from 'react';

export default function Access () {
  const [accessChoice, setAccessChoice] = useState(true);
  const authType = accessChoice ? 'SignIn' : 'SignUp';
  const handleToggle = () => setAccessChoice(prev => !prev);

  return (
    accessChoice
      ? <SignIn
        authType={authType}
        toggle={handleToggle}
      />
      : <SignUp
        authType={authType}
        toggle={handleToggle}
      />
  );
}