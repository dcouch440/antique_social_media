import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const pageVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {duration: 1}
  }
};

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingCircle = styled.span`
  font-size: 3em;
  width: 0.4em;
  box-sizing: content-box;
  height: 0.4em;
  border: 0.1em solid black;
  position: relative;
  border-radius: 0.35em;
  margin: 13px;
    &:before {
      content: "";
      display: inline-block;
      position: absolute;
      right: -0.25em;
      bottom: -0.1em;
      border-width: 0;
      background: black;
      width: 0.35em;
      height: 0.08em;
      transform: rotate(45deg);
    }
`;

const Loading = ({loadingState, render}) => (

  loadingState ?

    <LoadingContainer
      as={motion.div}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <LoadingCircle
        as={motion.span}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <LoadingCircle
        as={motion.span}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <LoadingCircle
        as={motion.span}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </LoadingContainer>

    :

    <motion.div
      variants={pageVariants}
      style={{height: '100%', width: '100%'}}
      initial='hidden'
      animate='visible'
    >
      {render}
    </motion.div>

);

export default Loading;