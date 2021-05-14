import PropTypes from 'prop-types';
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import OnlineStatus from './components/OnlineStatus';
const Context = createContext();

function ContextProvider (props) {
  const [currentUser, setCurrentUser] = useState({
    id: undefined, username: undefined, email: undefined, admin: false
  });
  const [scrollBehavior, setScrollBehavior] = useState(true);
  OnlineStatus({ currentUser });
  useEffect(() => {

    axios
      .get('/users/session', { withCredentials: true })
      .then(res => setCurrentUser(res.data))
      .catch(err => console.error(err));

  }, []);
  const scroll = scrollBehavior ? 'scroll' : 'hidden';

  return (
    <Context.Provider value={{
      currentUser,
      setCurrentUser,
      setScrollBehavior,
      scroll
    }}>
      {props.children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.any
};

export { ContextProvider, Context };