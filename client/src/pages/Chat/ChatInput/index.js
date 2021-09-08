import PropTypes from 'prop-types';
import { useState } from 'react';
import Emoji from '../Emoji';
import {
  ChatBox,
  ChatWindow,
  EmojiContainer,
  RelativeContainer,
  SubmitButton
} from './styles';


export default function ChatInput ({ sendMessage }) {
  const [{ message }, setMessage] = useState({ message: '' });
  const [show, setShow] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    // checking if message is valid.
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

  const handleClick = (emoji, e) => {
    e.stopPropagation();
    setMessage(prev => ({ message: prev.message + emoji }));
  };

  const handleDisplayChange = e => {
    e.stopPropagation();
    setShow(prev => !prev);
  };

  return (
    <ChatBox >
      <EmojiContainer>
        <RelativeContainer
          onClick={handleDisplayChange}
        >
          Emoji
        </RelativeContainer>
        <Emoji
          handleClick={handleClick}
          show={show}
        />
      </EmojiContainer>
      <ChatWindow
        name="message"
        value={message}
        onChange={handleChange}
        onKeyDown={onEnterPress}
      />
      <SubmitButton onClick={handleSubmit}>
        Send Message
      </SubmitButton>
    </ChatBox>
  );
}

ChatInput.propTypes = {
  sendMessage: PropTypes.func
};