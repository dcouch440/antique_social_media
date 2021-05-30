import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { LOGIN } from '../../constant';

export default function OnlineStatus ({ currentUser }) {
  useEffect(() => {
    if (!currentUser.id) {
      return;
    }
    const url = 'https://gentle-brushlands-14865.herokuapp.com';
    const socket = io(url, { withCredentials: true });

    socket.emit( LOGIN, { id: currentUser.id, username: currentUser.username } );

    return () => socket.disconnect();

  }, [currentUser]);
}
