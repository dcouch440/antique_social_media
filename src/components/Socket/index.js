import { useContext, useEffect, useRef, useState, } from 'react';
import { io } from 'socket.io-client';
import { Context } from '../../Context';
import { JOIN_ROOM, USER_JOINED, MESSAGE, DISCONNECTION } from '../../constant';

export default function Socket (roomId)
{
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(Context);
  const socketRef = useRef();

  useEffect(() => {
    if (!currentUser.username) { return; }

    socketRef.current = io('http://localhost:4001', { withCredentials: true});

    socketRef.current.on( MESSAGE, msg => {
      console.log('message - ', msg);
      setMessages(prevMsgs => [...prevMsgs, msg.message]
      );
    });

    socketRef.current.on( DISCONNECTION, data => {
      setUsers(data.users);
      setMessages(prevMsgs => [...prevMsgs, data.message]);
    });

  }, [currentUser, setMessages]);

  useEffect(() => {
    if (!currentUser.username) { return; }

    socketRef.current.emit( JOIN_ROOM, {roomId, ...currentUser});
    socketRef.current.on( JOIN_ROOM, data => {
      console.log('join - room' ,data);
      setUsers(data.users);
      setMessages(prevMsgs => [...prevMsgs, data.message]);
    });

    socketRef.current.on( USER_JOINED, data => setUsers(data.users));

  }, [currentUser, roomId]);

  return { messages, users, socketRef };
}