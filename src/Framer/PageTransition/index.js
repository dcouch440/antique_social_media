import { motion } from 'framer-motion';
import { variants as transition } from './variants';
import { Container } from './styles';
import PropTypes from 'prop-types';


export default function PageTransition ({ attr, transitionTime, exitTime, ...props }) {

  return (
    <Container as={motion.div}
      variants={transition({ attr, transitionTime, exitTime })}
      initial="hidden"
      animate="visible"
      timing="timing"
      transition="transition"
      exit="exit"
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