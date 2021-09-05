import axios from "axios";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { urls } from "../../config";
import { LOGIN } from "../../constant";

export default function useSession () {
  const [currentUser, setCurrentUser] = useState({
    id: null,
    username: null,
    email: null,
    admin: false
  });

  // LOAD SESSION
  useEffect(() => {
    axios
      .get('/users/session', { withCredentials: true })
      .then(res => setCurrentUser(res.data))
      .catch(err => console.error(err));
  }, []);

  // MAKE CONNECTION
  useEffect(() => {
    if (!currentUser.id) { return; }
    const { id, username } = currentUser;
    const socket = io(urls.statusSocket.localHost, { withCredentials: true });

    socket.emit(LOGIN, { id, username });

    return () => socket.disconnect();

  }, [currentUser]);

  return [currentUser, setCurrentUser];
}
