import { useEffect, useState } from "react";

import { LOGIN } from "../../constant";
import axios from "axios";
import { io } from "socket.io-client";
import { urls } from "../../config";

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
      .then(res => {
        if (res.status === 200) { setCurrentUser(res.data); }
      })
      .catch(err => {
        if (err.response.status === 401) { return; }
        console.log(err);
      });
  }, []);

  // MAKE CONNECTION
  useEffect(() => {
    if (!currentUser.id) { return; }
    const { id, username } = currentUser;
    const socket = io(urls.statusSocket.url, { withCredentials: true });

    socket.emit(LOGIN, { id, username });

    return () => socket.disconnect();

  }, [currentUser]);

  return [currentUser, setCurrentUser];
}
