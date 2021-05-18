import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { LOGIN } from '../../constant';

export default function OnlineStatus ({ currentUser }) {
  useEffect(() => {
    if (!currentUser.id) {
      return;
    }

    const socket = io('https://radiant-thicket-98181.herokuapp.com:3002', { withCredentials: true });
    socket.emit( LOGIN, { id: currentUser.id, username: currentUser.username } );

    return () => socket.disconnect();

  }, [currentUser]);
}
