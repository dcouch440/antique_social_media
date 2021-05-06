import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../../Context';
import { ChatWindow } from './styles';

const Chat = ({antiqueId, chatting}) => {
  const { Socket: { setChatting, setRoom, users, messages, setNewMessage } } = useContext(Context);
  const [form, setForm] = useState({message: 'this is a message to you'});

  useEffect(() => {
    setChatting(chatting);
    setRoom(prev => ({...prev, room: 4, inRoom: false}));

    return () => {
      setChatting(false);
      setRoom(prev => ({...prev, leaving: true}));
    };
  }, [antiqueId, chatting, setChatting, setRoom]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => Object.assign({}, prev, {[name]: value}));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewMessage({message: form.message, newMessage: true});
  };

  console.log(users);
  return (
    <ChatWindow>
      { users.map(d => <h1> Welcome {d.username} </h1>) }
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name='message' type='text' />
        <button>SUBMIT</button>
      </form>
    </ChatWindow>
  );
};

export default Chat;