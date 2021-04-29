import { useEffect, useContext } from 'react';
import { Context } from './Context';
const io = require('socket.io-client');


export default function Socket() {
  const { currentUser } = useContext(Context);
  console.log(currentUser.id);
  useEffect(() => {
    if (currentUser.id)
    {
      const socket = io("http://localhost:4000", {withCredentials: true});
      socket.emit( 'login', {id: currentUser.id} );
      return () => socket.disconnect();
    }
  }, [currentUser]);

}