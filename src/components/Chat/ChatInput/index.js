import { useState } from 'react';
import PropTypes from 'prop-types';
import { SubmitButton, ChatWindow, ChatBox } from './styles';

const ChatInput = ({sendMessage}) => {
  const [message, setMessage] = useState({message: ''});

  const handleSubmit = e => {
    e.preventDefault();
    const newMessage = Object.assign( {},  message, {
      timestamp: new Date()
    });
    sendMessage(newMessage);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setMessage(prev => Object.assign({}, prev, {[name]: value}));
  };

  return (
    <ChatBox>
      <ChatWindow name="message" onChange={handleChange} />
      <SubmitButton onClick={handleSubmit}>
        Send Message
      </SubmitButton>
    </ChatBox>
  );
};

ChatInput.propTypes = {
  sendMessage: PropTypes.func
};

export default ChatInput;