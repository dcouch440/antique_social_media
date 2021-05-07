import { useEffect } from 'react';
import { io } from 'socket.io-client';

const OnlineStatus = ({currentUser}) => {
  useEffect(() => {
    if (!currentUser.id) return;
    const socket = io("http://localhost:4000", { withCredentials: true});
    socket.emit('login', {id: currentUser.id, username: currentUser.username} );

    return () => socket.disconnect();

  }, [currentUser]);
};

export default OnlineStatus;