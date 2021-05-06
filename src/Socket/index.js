import {  useEffect, useRef, useState } from 'react';
import { io } from "socket.io-client";



const Socket = ({currentUser}) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const [chatting, setChatting] = useState(false);
  const [{room, leaving}, setRoom] = useState({room: 4, leaving: false});
  const [{message, newMessage}, setNewMessage] = useState({message: {}, newMessage: false});
  const inRoom = useRef(false);

  useEffect(() => {
    if (currentUser.id !== undefined)
    {
      const socket = io("http://localhost:4000", { withCredentials: true});
      const isInRoom = inRoom.current;

      if(loggedIn === false) {
        socket.emit('login', {id: currentUser.id, username: currentUser.username} );
        setLoggedIn(true);
      }


      if (chatting && loggedIn)
      {

        if (!isInRoom)
        {
          socket.emit( 'join-room' , {
            room_id: room,
            user_id: currentUser.id,
            username: currentUser.username
          });
          inRoom.current = true;
        }

        socket.on('room-updated' , data => {
          console.log(data);
          setUsers(Object.values(data.users));
          setMessages(data.messages);
        });

        socket.on( 'message' , data => {
          setUsers(data.users);
          setMessages(data.messages);
        });

        if (newMessage)
        {
          console.log('new-message', {
            room_id: room,
            username: currentUser.username,
            message,
          });
          socket.emit( 'new-message' , {
            room_id: room,
            username: currentUser.username,
            message,
          });

          setNewMessage({message: {}, newMessage: false});
        }

        if (leaving)
        {

          socket.emit( 'leave-room' , {
            room_id: room,
            user_id: currentUser.id
          });

          setRoom({room: null, leaving: false});

        }

        return () => socket.disconnect();
      }
    }
  }, [chatting, currentUser.id, currentUser.username, leaving, loggedIn, message, newMessage, room]);

  return [ users, messages, setRoom, setChatting, setNewMessage ];

};

export default Socket;