import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { variants } from './variants';


export default function PageTransition ({ attr, transitionTime, exitTime, ...props }) {

  return (
    <Container
      animate="visible"
      as={motion.div}
      exit="exit"
      initial="hidden"
      timing="timing"
      transition="transition"
      variants={variants({ attr, transitionTime, exitTime })}
    >
      {props.children}
    </Container>
  );
}

PageTransition.propTypes = {
  attr: PropTypes.object,
  children: PropTypes.any.isRequired,
  direction: PropTypes.string,
  exitTime: PropTypes.number,
  transitionTime: PropTypes.number
};

PageTransition.defaultProps = {
  attr: {
    direction: 'right'
  },
  exitTime: .6,
  transitionTime: 2
};