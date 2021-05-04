import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  width: inherit;
  height: inherit;
`;

const transition = {
  hidden: {
    position: 'absolute',
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {duration: .8, delay: 1}
  },
  timing: {
    duration: 2
  },
  transition: {
    type: 'tween'
  },
  exit: {
    x: '100vw',
    position: 'absolute',
    transition: { duration: .6, ease: 'easeInOut' }
  }
};

const PageTransition = (props) => (
  <Container as={motion.div}
    variants={transition}
    initial="hidden"
    animate="visible"
    timing="timing"
    transition="transition"
    exit="exit"
  >
    {props.children}
  </Container>
);

export default PageTransition;