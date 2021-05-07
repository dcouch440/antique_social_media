import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Row, Avatar, Username, Message, MessageContainer, Time } from './styles';
import { variants } from './variants';
import moment from 'moment';

const ChatRows = ({users, messages}) => {

  const chatRow = messages.map(message => {

    const indexOfUser = users => {
      return users.username === message.username;
    };

    const user = users[users.findIndex(indexOfUser)];
    console.log(message);
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
  return chatRow;

};

ChatRows.PropTypes = {
  users: PropTypes.array,
  message: PropTypes.object
};

export default ChatRows;