import {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { io } from 'socket.io-client';
import { urls } from '../../config';
import {
  DISCONNECTION,
  JOIN_ROOM,
  MESSAGE,
  SHOW_ROOM_USER_COUNT,
  USER_JOINED
} from '../../constant';
import { Context } from '../../Context';

export default function useChatSocket (roomId) {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(Context);
  const socketRef = useRef();
  const [roomData, setRoomData] = useState({
    activeUserRooms: [], activeRooms: []
  });

  useEffect(() => {
    if (!currentUser.username) { return; }

    // connection
    socketRef.current = io(urls.chatSocket.localHost, {
      withCredentials: true
    });

    // messages
    socketRef.current.on(MESSAGE, msg => {
      setMessages(prevMsgs => [...prevMsgs, msg.message]);
    });

    socketRef.current.on(DISCONNECTION, data => {
      setUsers(data.users);
      setMessages(prevMsgs => [...prevMsgs, data.message]);
    });

    // room logging
    socketRef.current.emit(JOIN_ROOM, {
      roomId, ...currentUser
    });

    socketRef.current.on(JOIN_ROOM, data => {
      setUsers(data.users);
      setMessages(prevMsgs => [...prevMsgs, data.message]);
    });

    socketRef.current.on(USER_JOINED, data => setUsers(data.users));

    socketRef.current.on(SHOW_ROOM_USER_COUNT, data => {
      setRoomData(data);
    });

    // get room count event
    socketRef.current.on(SHOW_ROOM_USER_COUNT, data => {
      setRoomData(data);
    });

    return () => { socketRef.current.disconnect(); };

  }, [currentUser, roomId]);

  return {
    messages, users, socketRef, roomData
  };
}