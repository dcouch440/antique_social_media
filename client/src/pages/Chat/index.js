import ChatInput from './ChatInput';
import ChatRows from './ChatRows';
import { ChatWindow } from './styles';
import { MESSAGE } from '../../constant/index';
import OnlineUserSidebar from './OnlineUserSidebar';
import PageTransition from '../../Framer/PageTransition';
import PropTypes from 'prop-types';
import useChatSocket from '../../hooks/useChatSocket';

export default function Chat () {
  const { messages, users, socketRef } = useChatSocket();

  const sendMessage = message => {
    socketRef.current.emit(MESSAGE, message);
  };


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
