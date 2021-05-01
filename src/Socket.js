import { useContext, useEffect } from 'react';
import {Context} from './Context';
const io = require('socket.io-client');


export default function Socket() {
  const {currentUser} = useContext(Context);
  useEffect(() => {
    if (currentUser.id !== undefined)
    {
      const socket = io("http://localhost:4000", {withCredentials: true});
      socket.emit( 'login', {id: currentUser.id} );
      return () => socket.disconnect();
    }
  }, [currentUser, currentUser.id]);
}