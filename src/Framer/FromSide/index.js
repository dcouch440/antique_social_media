import React from 'react';
import { variants } from './variants';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function NewPage (props) {
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

NewPage.propTypes = {
  children: PropTypes.object.isRequired
};
