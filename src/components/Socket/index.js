import {  useContext, useEffect, useRef, useState, } from 'react';
import { io } from "socket.io-client";
import { Context } from '../../Context';

const Socket = ({roomId}) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(Context);
  const socketRef = useRef();



  useEffect(() => {

    if (!currentUser.username) return;
    socketRef.current = io("http://localhost:4001", { withCredentials: true});
    socketRef.current.on('message', msg => setMessages(prevMsgs => [...prevMsgs, msg]));
    socketRef.current.on('disconnection', data => {
      setUsers(data.users);
      setMessages(prevMsgs => [...prevMsgs, data.message]);
    });

  }, [currentUser, setMessages]);

  useEffect(() => {

    if (!currentUser.username) return;
    socketRef.current.emit('join-room', {roomId, ...currentUser});
    socketRef.current.on('join-room', data => {console.log(data);});
    socketRef.current.on('user-joined', data => setUsers(data.users));

  }, [currentUser, roomId]);


  return { messages, users, socketRef };
};

export default Socket;