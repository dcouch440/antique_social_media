import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';

const Container = styled.div`
  width: inherit;
  height: inherit;
`;

const transition = ({attr, transitionTime}) => ({
  hidden: {
    position: 'absolute',
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {duration: .8, delay: 1}
  },
  timing: {
    duration: transitionTime
  },
  transition: {
    type: 'tween'
  },
  exit: {
    x:attr.direction === 'right'  ? '100vw'  :
      attr.direction === 'left'   ? '-100vw' :null,
    y:attr.direction === 'bottom'    ? '100vh'  :
      attr.direction === 'top' ? '-100vh' :null,
    position: 'absolute',
    transition: { duration: .6, ease: 'easeInOut' }
  }
});

const PageTransition = ({attr, ...props}) => {
  const { inTransition, setInTransition } = useContext(Context);
  const transitionTime = 2;

  if (inTransition)
  {
    setTimeout(() => {
      setInTransition(false);
    }, (transitionTime * 1000));
  }

  return (
    <Container as={motion.div}
      variants={transition({attr, transitionTime})}
      initial="hidden"
      animate="visible"
      timing="timing"
      transition="transition"
      exit="exit"
    >
      {props.children}
    </Container>
  );
};

export default PageTransition;