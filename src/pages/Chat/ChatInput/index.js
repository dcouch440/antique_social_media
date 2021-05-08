import { useState } from 'react';
import PropTypes from 'prop-types';
import { SubmitButton, ChatWindow, ChatBox } from './styles';

export default function ChatInput ({ sendMessage })
{
  const [{ message }, setMessage] = useState({ message: '' });

  const handleSubmit = e => {
    e.preventDefault();

    if (message.trim().split('<br>').join('') === '') { return; }

    sendMessage(message);
    setMessage({ message: '' });

  };

  const onEnterPress = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      handleSubmit(e);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setMessage(prev => Object.assign({}, prev, { [name]: value }));
  };

  return (
    <ChatBox>
      <ChatWindow onKeyDown={onEnterPress} value={message} name="message" onChange={handleChange} />
      <SubmitButton onClick={handleSubmit}>
        Send Message
      </SubmitButton>
    </ChatBox>
  );
}

ChatInput.propTypes = {
  sendMessage: PropTypes.func
};