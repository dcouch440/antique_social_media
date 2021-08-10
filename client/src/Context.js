import axios from 'axios';
import PropTypes from 'prop-types';
import {
  createContext,
  useEffect,
  useState
} from 'react';
import OnlineStatus from './components/OnlineStatus';
const Context = createContext();

function ContextProvider (props) {
  const [scrollBehavior, setScrollBehavior] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    id: undefined,
    username: undefined,
    email: undefined,
    admin: false
  });

  OnlineStatus({
    currentUser
  });

  axios.defaults.baseURL = '/api';
  axios.defaults.headers.user_id = currentUser.id;

  useEffect(() => {
    axios
      .get('/users/session', {
        withCredentials: true
      })
      .then(res => setCurrentUser(res.data))
      .catch(err => console.error(err));
  }, []);

  const scroll = scrollBehavior ? 'scroll' : 'hidden';
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

