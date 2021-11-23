import React, { createContext } from 'react';

import PropTypes from "prop-types";
import axiosSetup from '../../utils/axiosSetup';
import useSession from '../../hooks/useSession';

const SessionContext = createContext();

function SessionProvider ({ children }) {
  const [currentUser, setCurrentUser] = useSession();

  axiosSetup(currentUser);

  return (
    <SessionContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export { SessionContext, SessionProvider };

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
