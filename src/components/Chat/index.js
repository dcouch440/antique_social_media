import {MessageRow} from './styles';
import Socket from "../Socket";
import ChatRows from "./ChatRow";
import ChatInput from "./ChatInput";

const Chat = () => {
  const { messages, users, socketRef }  = Socket({roomId: 4});

  const sendMessage = (message) => {
    socketRef.current.emit('message', message);
  };


  console.log('messages', messages);
  console.log('users' ,users);

  return (
    <>
      <h1>
        Hello
      </h1>

      <ChatInput sendMessage={sendMessage} />
      <MessageRow>
        <ChatRows messages={messages} users={users} />
      </MessageRow>
    </>
  );

};

export default Chat;