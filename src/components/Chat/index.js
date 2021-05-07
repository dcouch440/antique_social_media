import { useState, useEffect } from 'react';
import { MessageRow, ChatWindow } from './styles';
import Socket from "../Socket";
import ChatRows from "./ChatRow";
import ChatInput from "./ChatInput";

const Chat = () => {
  const [refresh, setRefresh] = useState(true);
  const { messages, users, socketRef }  = Socket({roomId: 4});

  const sendMessage = (message) => {
    socketRef.current.emit('message', message);
  };

  useEffect(() => {
    const refresher = setTimeout(() => {
      setRefresh(prev => !prev);
    }, 20000);
    return () =>  clearTimeout(refresher);
  }, [refresh, messages]);

  return (
    <ChatWindow>
      <ChatInput sendMessage={sendMessage} />
      <MessageRow>
        <ChatRows messages={messages} users={users} />
      </MessageRow>

    </ChatWindow>
  );

};

export default Chat;