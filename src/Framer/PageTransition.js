import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  width: inherit;
  height: inherit;
`;

const transition = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {duration: 1}
  },
  timing: {
    duration: 2
  },
  transition: {
    type: 'tween'
  },
  exit: {
    x: '100vw',
    transition: { duration: .5, ease: 'easeInOut' }
  }
};

const NewPage = (props) => (
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

export default NewPage;