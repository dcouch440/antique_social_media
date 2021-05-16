import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { LOGIN } from '../../constant';

export default function OnlineStatus ({ currentUser }) {
  useEffect(() => {
    if (!currentUser.id) {
      return;
    }

    const socket = io('http://127.0.0.1:3002', { withCredentials: true });
    socket.emit( LOGIN, { id: currentUser.id, username: currentUser.username } );

    return () => socket.disconnect();

  }, [currentUser]);
}
