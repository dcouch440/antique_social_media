import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'framer-motion';
import { OnlineCircle, OnlineContainer } from './styles';
import {
  loadingContainerVariants, loadingCircleVariants, loadingCircleTransition
} from './variants';

export default function OnlineAnimation ({ status }) {
  return (
    status&&
      <OnlineContainer
        as={motion.div}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <OnlineCircle
          as={motion.span}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </OnlineContainer>
  );
}

OnlineAnimation.propTypes = {
  status: PropTypes.bool
};