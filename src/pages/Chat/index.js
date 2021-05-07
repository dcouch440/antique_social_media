import { useState, useEffect } from 'react';
import { MessageRow, ChatWindow } from './styles';
import Socket from "../../components/Socket";
import ChatRows from "./ChatRow";
import ChatInput from "./ChatInput";
import PageTransition from '../../Framer/PageTrasition';

const Chat = ({roomId}) => {
  const [refresh, setRefresh] = useState(true);
  console.log('roomid before socket', roomId);
  const { messages, users, socketRef }  = Socket(roomId);

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