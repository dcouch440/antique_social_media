import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { MESSAGE } from '../../constant/index';
import PageTransition from '../../Framer/PageTransition';
import useChatSocket from '../../hooks/useChatSocket';
import ChatInput from './ChatInput';
import ChatRows from './ChatRow';
import OnlineUserSidebar from './OnlineUserSidebar';
import { ChatWindow } from './styles';


export default function Chat ({ roomId }) {
  const [refresh, setRefresh] = useState(true);
  const { messages, users, socketRef } = useChatSocket(roomId);

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
        <ChatRows
          messages={messages}
          socketRef={socketRef}
          users={users}
        />
        <ChatInput sendMessage={sendMessage} />
      </ChatWindow>
    </PageTransition>
  );
}

Chat.propTypes = {
  roomId: PropTypes.string
};
