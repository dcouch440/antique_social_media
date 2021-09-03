import axios from 'axios';
import PropTypes from 'prop-types';
import {
  createContext,
  useEffect,
  useState
} from 'react';
import useOnlineStatus from './hooks/useOnlineStatus';
const Context = createContext();

function ContextProvider (props) {
  const [scrollBehavior, setScrollBehavior] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    username: null,
    email: null,
    admin: false
  });
  useOnlineStatus({ currentUser });

  const scroll = scrollBehavior ? 'scroll' : 'hidden';
  axios.defaults.baseURL = '/api';
  axios.defaults.headers.user_id = currentUser.id;

  // LOAD SESSION
  useEffect(() => {
    axios
      .get('/users/session', {
        withCredentials: true
      })
      .then(res => setCurrentUser(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Context.Provider
      value={{
        currentUser,
        setCurrentUser,
        setScrollBehavior,
        scroll
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.any
};

export { ContextProvider, Context };

