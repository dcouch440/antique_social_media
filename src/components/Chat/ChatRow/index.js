import { motion } from 'framer-motion';
import React from 'react';
import { Row, Avatar, Username, Message, MessageContainer } from './styles';

const transition = {
  hidden: {
    x: '100vw',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: .3}
  },
  timing: {
    duration: 1
  },
  transition: {
    type: 'spring'
  },
  exit: {
    x: '100vw',
    transition: { duration: .5, ease: 'easeInOut' }
  }
};

const ChatRows = ({users, messages}) => {


  const chatRow = messages.map(message => {

    const indexOfUser = users => {
      return users.username === message.username;
    };

    const user = users[users.findIndex(indexOfUser)];
    return (
      <Row
        as={motion.div}
        variants={transition}
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
        </MessageContainer>
      </Row>
    );

  });
  return chatRow;

};

export default ChatRows;