import { useContext, useState } from 'react';

import AuthorizeForm from '../AuthorizeForm';
import PropTypes from 'prop-types';
import { SessionContext } from '../../context/Session';
import axios from 'axios';
import useLoginErrors from '../../hooks/useLoginErrors';

export default function SignIn ({ toggle, authType }) {
  const { setCurrentUser } = useContext(SessionContext);
  const [loginHasError, setLoginHasError] = useState(false);
  const { setErrors, showErrors } = useLoginErrors();

  const handleSubmit = async ({ email, password }) => {
    try {
      await axios
        .post('/users/signin',
          { email, password },
          { withCredentials: true }
        )
        .then(res => {
          setCurrentUser(res.data);
        });
    } catch (err) {
      const { data } = err.response;
      setLoginHasError(true);
      setErrors([...data.errors ?? [], data.message ?? '']);
      console.log(err);
    }
  };

  return (
    <AuthorizeForm
      authType={authType}
      errors={showErrors}
      formTitle={loginHasError ? 'Something went wrong.. try again' : 'Please Sign In'}
      toggle={toggle}
      onSubmit={handleSubmit}
    />
  );
}

SignIn.propTypes = {
  authType: PropTypes.bool,
  toggle: PropTypes.func
};
