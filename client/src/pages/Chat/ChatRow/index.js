import { motion } from 'framer-motion';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import {
  Avatar,
  GoBack,
  Message,
  MessageContainer,
  Row,
  Rows,
  Time,
  Username
} from './styles';
import { variants } from './variants';


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
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
    history.goBack();
  };

  const chatRow = messages.map((message, key) => {
    return (
      <Row
        animate="visible"
        as={motion.div}
        exit="exit"
        initial="hidden"
        key={key}
        timing="timing"
        transition="transition"
        variants={variants}
      >
        <MessageContainer>
          <Avatar
            alt={'avatar'}
            src={message.avatar.secure_url}
          />
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
  messages: PropTypes.array,

  socketRef: PropTypes.shape({

    current: PropTypes.any
    
  })
};