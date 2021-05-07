import { useState, useEffect } from 'react';
import { MessageRow, ChatWindow } from './styles';
import Socket from "../../components/Socket";
import ChatRows from "./ChatRow";
import ChatInput from "./ChatInput";
import PageTransition from '../../Framer/PageTransition';

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
    <PageTransition attr={{direction: 'top'}}>

      <ChatWindow>
        <ChatInput sendMessage={sendMessage} />
        <MessageRow>
          <ChatRows messages={messages} users={users} />
        </MessageRow>

      </ChatWindow>
    </PageTransition>
  );

};

export default Chat;