import { useState } from "react";
import {MessageRow} from './styles';
import Socket from "../Socket";
import ChatRows from "./ChatRow";

const Chat = () => {
  const [message, setMessage] = useState({message: ''});
  const { messages, users, socketRef }  = Socket({roomId: 4});

  const handleSubmit = () => {
    socketRef.current.emit('message', message);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setMessage(prev => ({...prev, [name]: value}));
  };

  console.log('messages', messages);
  console.log('users' ,users);

  return (
    <>
      <h1>
        Hello
      </h1>

      <input name='message' onChange={handleChange} value={message.message} />
      <button onClick={handleSubmit}>
        CLICK
      </button>
      <MessageRow>
        <ChatRows messages={messages} users={users} />
      </MessageRow>
    </>
  );

};

export default Chat;