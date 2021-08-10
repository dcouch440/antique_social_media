import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import { variants } from './variants';

export default function NewPage ({ transition, direction, ...props }) {
  return (
    <motion.button
      animate="visible"
      exit="exit"
      initial="hidden"
      timing="timing"
      transition="transition"
      variants={variants}
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
