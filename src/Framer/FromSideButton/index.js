import React from 'react';
import { variants } from './variants';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function NewPage ({ transition, direction, ...props }) {
  return (
    <motion.button
      variants={variants}
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

NewPage.defaultProps = {
  transition: { delay: 5, duration: 1 },
  direction: 'right'
};

NewPage.propTypes = {
  children: PropTypes.object.isRequired,
  direction: PropTypes.any,
  transition: PropTypes.any
};
