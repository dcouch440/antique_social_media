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
      staggerChildren: 0.1,
    },
  },
}

const loadingCircleVariants = {
  start: {
    y: "45%",
  },
  end: {
    y: "75%",
  },
}

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
}

const OnlineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const OnlineCircle = styled.span`
  font-size: 3em;
  width: 6px;
  height: 6px;
  position: absolute;
  right: 60px;
  bottom: 10px;
  box-shadow: 0 0 2px green;
  border-radius: 50%;
  color: green;
  background-color: green;
`

const OnlineAnimation = ({status}) => (
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
)

export default OnlineAnimation