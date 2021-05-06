import React, { useState, useEffect } from "react";
import axios from 'axios';
import Socket from './Socket';
const Context = React.createContext();

const ContextProvider = props => {

  const [currentUser, setCurrentUser] = useState({
    id: undefined, username: undefined, email: undefined
  });

  Socket({currentUser});

  useEffect(() => {
    axios
      .get('/users/session', { withCredentials: true })
      .then(res => setCurrentUser(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Context.Provider value={{
      currentUser,
      setCurrentUser
    }}>
      {props.children}
    </Context.Provider>
  );

};

export {ContextProvider, Context};