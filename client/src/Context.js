import PropTypes from 'prop-types';
import { createContext } from 'react';
import useScrollBehavior from './hooks/useScrollBehavior';
import useSession from './hooks/useSession';
import axiosSetup from './utils/axiosSetup';
const Context = createContext();

function ContextProvider (props) {
  const [scrollCSSValue, setScrollBehavior] = useScrollBehavior();
  const [currentUser, setCurrentUser] = useSession();

  axiosSetup(currentUser);

  return (
    <Context.Provider
      value={{
        currentUser,
        setCurrentUser,
        setScrollBehavior,
        scrollCSSValue
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

