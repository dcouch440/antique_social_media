import PropTypes from 'prop-types';
import { MESSAGE } from '../../constant/index';
import PageTransition from '../../Framer/PageTransition';
import useChatSocket from '../../hooks/useChatSocket';
import ChatInput from './ChatInput';
import ChatRows from './ChatRows';
import OnlineUserSidebar from './OnlineUserSidebar';
import { ChatWindow } from './styles';


export default function Chat ({ roomId }) {
  const { messages, users, socketRef } = useChatSocket(roomId);

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
