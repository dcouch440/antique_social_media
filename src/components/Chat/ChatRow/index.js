import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import {
  Row, Rows, Avatar, Username, Message, MessageContainer, Time
} from './styles';
import { variants } from './variants';
import moment from 'moment';
import { useEffect, useRef } from 'react';

const ChatRows = ({users, messages}) => {

  const messagesEndRef = useRef();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const chatRow = messages.map(message => {

    const indexOfUser = users => {
      return users.username === message.username;
    };

    const user = users[users.findIndex(indexOfUser)];
    return (
      <Row
        as={motion.div}
        variants={variants}
        initial="hidden"
        animate="visible"
        timing="timing"
        transition="transition"
        exit="exit"
      >
        <MessageContainer>
          <Avatar src={user.avatar.image_url} alt={'avatar'}/>
          <Username>{message.username}: </Username>
          <Message>{message.message}</Message>
          <Time>{ moment(message.timestamp).fromNow() }</Time>
        </MessageContainer>
      </Row>
    );

  });

  return (
    <Rows>
      {chatRow}
      <div ref={messagesEndRef}></div>
    </Rows>
  );

};

ChatRows.propTypes = {
  users: PropTypes.array,
  messages: PropTypes.array
};

export default ChatRows;