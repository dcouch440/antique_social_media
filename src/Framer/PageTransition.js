import { motion } from 'framer-motion';
import { useContext, useRef, useEffect } from 'react';
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

const PageTransition = ({attr, transitionTime, ...props}) => {
  const { inTransition, setInTransition } = useContext(Context);

  useEffect(() => {

    const transitioning = setTimeout(
      () => setInTransition(false), (transitionTime * 1000)
    );

    return () => clearTimeout(transitioning);

  }, [inTransition, setInTransition, transitionTime]);


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

PageTransition.defaultProps = {
  attr: {
    direction: 'right'
  },
  transitionTime: 2
};

export default PageTransition;