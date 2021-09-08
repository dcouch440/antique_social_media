import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import Timestamp from '../Timestamp';
import {
  Avatar,
  GoBack,
  Message,
  MessageContainer,
  Row,
  Rows,
  Username
} from './styles';
import { variants } from './variants';


export default function ChatRows ({ messages, socketRef }) {
  const history = useHistory();
  const messagesEndRef = useRef();

  useEffect(() => {
    handleScrollToBottom();
  }, [messages]);


  const handleScrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
    if (!history.goBack()) {
      history.push('/antiques');
    }
  };


  const chatRow = messages.map((message, key, i) => {
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
            alt='avatar'
            src={message.avatar.secure_url}
          />
          <Username>{message.username}: </Username>
          <Message>{message.message}</Message>
          <Timestamp message={message} />
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
    current: PropTypes.shape({
      disconnect: PropTypes.func
    })
  }),
  timeStamps: PropTypes.array
};