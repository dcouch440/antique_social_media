import { useState } from 'react';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

export default function Access () {
  const [accessChoice, setAccessChoice] = useState(true);

  const handleToggle = () => setAccessChoice(prev => !prev);

  return (
    accessChoice ?
      <SignIn toggle={handleToggle} />
      :
      <SignUp toggle={handleToggle} />
  );
}