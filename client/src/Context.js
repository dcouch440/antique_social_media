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
    id: null,
    username: null,
    email: null,
    admin: false
  });
  const scroll = scrollBehavior ? 'scroll' : 'hidden';

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

