import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { ChatWindow } from './styles';
import Socket from '../../components/Socket';
import ChatRows from './ChatRow';
import ChatInput from './ChatInput';
import PageTransition from '../../Framer/PageTransition';
import OnlineUserSidebar from './OnlineUserSidebar';
import { MESSAGE } from '../../constant/index';


export default function Chat ({ roomId }) {
  const [refresh, setRefresh] = useState(true);
  const { messages, users, socketRef } = Socket(roomId);

  const sendMessage = message => {
    socketRef.current.emit(MESSAGE, message);
  };

  useEffect(() => {
    const refresher = setTimeout(() => {
      setRefresh(prev => !prev);
    }, 20000);
    return () => clearTimeout(refresher);
  }, [refresh, messages]);

  return (
    <PageTransition attr={{ direction: 'bottom' }}>
      <OnlineUserSidebar users={users} />
      <ChatWindow>
        <ChatRows messages={messages} socketRef={socketRef} users={users} />
        <ChatInput sendMessage={sendMessage} />
      </ChatWindow>
    </PageTransition>
  );
}

Chat.propTypes = {
  roomId: PropTypes.string
};
