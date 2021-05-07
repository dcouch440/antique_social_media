import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SubmitButton, ChatWindow } from './styles';

const ChatInput = ({sendMessage}) => {
  const [message, setMessage] = useState({message: '', time: ''});

  const handleSubmit = e => {
    e.preventDefault();
    setMessage(prev => Object.assign({}, prev, {time: new Date()}));
    sendMessage(message);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setMessage(prev => Object.assign({}, prev, {[name]: value}));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ChatWindow name="message" onChange={handleChange} />
        <SubmitButton>
          Send Message
        </SubmitButton>
      </form>
    </>
  );
};

ChatInput.propTypes = {
  sendMessage: PropTypes.func
};

export default ChatInput;