import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { urls } from '../../config';
import { LOGIN } from '../../constant';

export default function useOnlineStatus ({ currentUser }) {
  useEffect(() => {
    if (!currentUser.id) { return; }
    const { id, username } = currentUser;
    const socket = io(urls.statusSocket.localHost, { withCredentials: true });

    socket.emit(LOGIN, { id, username });

    return () => socket.disconnect();

  }, [currentUser]);
}
