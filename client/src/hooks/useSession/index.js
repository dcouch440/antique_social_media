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
      .then(({ status, data }) => {
        if (status === 200) { setCurrentUser(data); }
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
    const socket = io(urls.statusSocket.localHost, { withCredentials: true });

    socket.emit(LOGIN, { id, username });

    return () => socket.disconnect();

  }, [currentUser]);

  return [currentUser, setCurrentUser];
}
