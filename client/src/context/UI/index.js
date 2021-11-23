import React, { createContext } from 'react';

import PropTypes from "prop-types";
import useScrollBehavior from '../../hooks/useScrollBehavior';

const UIContext = createContext();

function UIProvider ({ children }) {
  const [scrollCSSValue, setScrollBehavior] = useScrollBehavior();

  return (
    <UIContext.Provider
      Context={UIContext}
      value={{
        scrollCSSValue,
        setScrollBehavior
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export { UIContext, UIProvider };

UIProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
