import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { GoBackButton } from './styles';
import { fromRightSide } from './variants';


export default function GoBack ({ handleClick, text }) {
  return (
    <GoBackButton
      animate="visible"
      as={motion.button}
      exit="exit"
      initial="hidden"
      timing="timing"
      transition="transition"
      variants={fromRightSide}
      onClick={handleClick}
    >
      {text}
    </GoBackButton>
  );
}

GoBack.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string
};
