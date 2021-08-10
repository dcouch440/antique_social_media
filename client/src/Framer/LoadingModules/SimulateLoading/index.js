import { motion } from 'framer-motion';
import PropTypes from "prop-types";
import { useState } from 'react';
import { LoadingCircle, LoadingContainer } from '../styles';
import {
  loadingContainerVariants,
  loadingTransition,
  loadingVariants,
  pageVariants
} from '../variants';

export default function SimulateLoading ({ render, time = 1000 }) {
  const [loadingState, setLoadingState] = useState(true);

  setTimeout(() => {
    setLoadingState(false);
  }, time);

  return (
    loadingState ?

      <LoadingContainer
        animate="end"
        as={motion.div}
        initial="start"
        variants={loadingContainerVariants}
      >
        <LoadingCircle
          as={motion.span}
          transition={loadingTransition}
          variants={loadingVariants}
        />

      </LoadingContainer>

      : // done loading

      <motion.div
        animate='visible'
        initial='hidden'
        variants={pageVariants}
      >
        {render}
      </motion.div>

  );
}

SimulateLoading.propTypes = {
  render: PropTypes.any,
  time: PropTypes.number
};
