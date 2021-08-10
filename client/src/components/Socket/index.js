import {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { io } from 'socket.io-client';
import {
  DISCONNECTION,
  JOIN_ROOM,
  MESSAGE,
  SHOW_ROOM_USER_COUNT,
  USER_JOINED
} from '../../constant';
import { Context } from '../../Context';

export default function Socket (roomId) {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(Context);
  const [roomData, setRoomData] = useState({ activeUserRooms: [], activeRooms: [] });
  const socketRef = useRef();

  useEffect(() => {
    if (!currentUser.username) {
      return;
    }

    const url = 'https://sleepy-beyond-81756.herokuapp.com';
    socketRef.current = io(url, { withCredentials: true });

    socketRef.current.on(MESSAGE, msg => {
      setMessages(prevMsgs => [...prevMsgs, msg.message]);
    });

    return () => {
      socketRef.current.disconnect();
    };

  }, [currentUser, setMessages]);

  useEffect(() => {
    if (!currentUser.username) {
      return;
    }

    socketRef.current.on(DISCONNECTION, data => {
      setUsers(data.users);
      setMessages(prevMsgs => [...prevMsgs, data.message]);
    });

    socketRef.current.emit(JOIN_ROOM, { roomId, ...currentUser });
    socketRef.current.on(JOIN_ROOM, data => {
      setUsers(data.users);
      setMessages(prevMsgs => [...prevMsgs, data.message]);
    });

    socketRef.current.on(USER_JOINED, data => setUsers(data.users));

    return () => {
      socketRef.current.disconnect();
    };

  }, [currentUser, roomId]);

  useEffect(() => {
    if (!currentUser.username) {
      return;
    }

    socketRef.current.on(SHOW_ROOM_USER_COUNT, data => {
      setRoomData(data);
    });

    return () => {
      socketRef.current.disconnect();
    };

  }, [currentUser, setRoomData]);

  return { messages, users, socketRef, roomData };
}