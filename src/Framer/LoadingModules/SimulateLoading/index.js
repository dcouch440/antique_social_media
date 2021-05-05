import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LoadingCircle, LoadingContainer } from '../styles';
import {
  loadingContainerVariants, loadingVariants, loadingTransition, pageVariants
} from '../variants';


const SimulateLoading = ({render, time = 1000}) => {

  const [loadingState, setLoadingState] = useState(true);

  setTimeout(() => {
    setLoadingState(false);
  }, time);

  return loadingState ?

    <LoadingContainer
      as={motion.div}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <LoadingCircle
        as={motion.span}
        variants={loadingVariants}
        transition={loadingTransition}
      />

    </LoadingContainer>

    : // done loading

    <motion.div
      variants={pageVariants}
      initial='hidden'
      animate='visible'
    >
      {render}
    </motion.div>;

};

export default SimulateLoading;