import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { variants } from './variants';
import moment from 'moment';
import { motion } from 'framer-motion';
import {
  Row, Rows, Avatar, Username, Message, MessageContainer, Time, GoBack
} from './styles';

export default function ChatRows ({ messages, socketRef }) {
  const history = useHistory();
  const messagesEndRef = useRef();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = () => {
    socketRef.current.disconnect();
    history.goBack();
  };

  const chatRow = messages.map((message, key) => {
    return (
      <Row
        key={key}
        as={motion.div}
        variants={variants}
        initial="hidden"
        animate="visible"
        timing="timing"
        transition="transition"
        exit="exit"
      >
        <MessageContainer>
          <Avatar src={message.avatar.image_url} alt={'avatar'}/>
          <Username>{message.username}: </Username>
          <Message>{message.message}</Message>
          <Time>{ moment(message.timestamp).fromNow() }</Time>
        </MessageContainer>
      </Row>
    );
  });

  return (
    <Rows>
      <GoBack onClick={handleClick}>
        Go Back
      </GoBack>
      {chatRow}
      <div ref={messagesEndRef}></div>
    </Rows>
  );
}

ChatRows.propTypes = {
  messages: PropTypes.array
};