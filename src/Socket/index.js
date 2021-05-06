import {  useContext, useEffect, } from 'react';
import { io } from "socket.io-client";
import { Context } from '../Context';

const Socket = ({currentUser}) => {


  useEffect(() => {
    const socket = io("http://localhost:4000", { withCredentials: true});
    console.log(currentUser);
    socket.emit('login', {id: currentUser.id, username: currentUser.username} );

    return () => socket.disconnect();

  }, [currentUser]);

};

export default Socket;