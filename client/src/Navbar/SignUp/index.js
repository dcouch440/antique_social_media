import { useContext, useState } from 'react';

import AuthorizeForm from '../AuthorizeForm';
import PropTypes from 'prop-types';
import { SessionContext } from '../../context/Session';
import axios from 'axios';
import useLoginErrors from '../../hooks/useLoginErrors';

export default function SignUp ({ toggle }) {
  const { setCurrentUser } = useContext(SessionContext);
  const [message, setMessage] = useState('Sign Up');
  const { setErrors, showErrors } = useLoginErrors();

  const handleSubmit = async ({
    password,
    passwordConfirmation,
    username,
    email
  }) => {

    if (password !== passwordConfirmation) {
      setMessage('Passwords Must Match');
      return;
    }

    try {
      await axios.post('/users/signup',
        { username, email, password },
        { withCredentials: true }
      )
        .then(res => {
          if (res.status === 201) {
            setCurrentUser(res.data);
          } else {
            setErrors([...res.data.errors]);
          }
        });
    } catch (err) {
      const { data } = err.response;
      setErrors([...data.errors ?? [], data.message ?? '']);
    }
  };

  return (
    <AuthorizeForm
      withSignup
      errors={showErrors}
      formTitle={message}
      toggle={toggle}
      onSubmit={handleSubmit}
    />
  );
}

SignUp.propTypes = {
  toggle: PropTypes.func
};
