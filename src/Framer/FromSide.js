import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const transition = {
  hidden: {
    x: '100vw',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 5, duration: 1 }
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

export default function NewPage (props) {
  return (
    <motion.button
      variants={transition}
      initial="hidden"
      animate="visible"
      timing="timing"
      transition="transition"
      exit="exit"
    >
      {props.children}
    </motion.button>
  );
}

NewPage.propTypes = {
  children: PropTypes.object.isRequired
};
