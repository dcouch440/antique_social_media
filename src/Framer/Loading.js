import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
}

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
}

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
}

const pageVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {duration: .5}
  }
}

const LoadingContainer = styled.div`
  margin: auto;
  width: 5rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
`

const LoadingCircle = styled.span`
  display: block;
  width: 2vw;
  height: 2vh;
  background-color: black;
  border-radius: 1rem;
`

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
      initial='hidden'
      animate='visible'
    >
      {render}
    </motion.div>

)

export default Loading