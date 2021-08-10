import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import { OnlineCircle, OnlineContainer } from './styles';
import {
  loadingCircleTransition,
  loadingCircleVariants,
  loadingContainerVariants
} from './variants';

export default function OnlineAnimation ({ status }) {
  return (
    status ?
      <OnlineContainer
        animate="end"
        as={motion.div}
        initial="start"
        variants={loadingContainerVariants}
      >
        <OnlineCircle
          as={motion.span}
          transition={loadingCircleTransition}
          variants={loadingCircleVariants}
        />
      </OnlineContainer>
      :null
  );
}

OnlineAnimation.propTypes = {
  status: PropTypes.bool
};