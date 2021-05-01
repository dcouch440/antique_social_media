import React, {useState, useEffect} from "react";
import axios from 'axios';
const Context = React.createContext();

const ContextProvider = props => {
  const [currentUser, setCurrentUser] = useState({
    id: undefined, username: undefined, email: undefined
  });

  useEffect(() => {
    axios
      .get('/users/session', { withCredentials: true })
      .then(res => setCurrentUser(res.data))
      .catch(err => console.error(err));
  }, [currentUser])

  return (
    <Context.Provider value={{
      currentUser,
      setCurrentUser
    }}>
      {props.children}
    </Context.Provider>
  );

}

export {ContextProvider, Context};