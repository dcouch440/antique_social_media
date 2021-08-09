import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fromRightSide } from './variants';

import { GoBackButton } from './styles';

export default function GoBack ({ handleClick, text }) {
  return (
    <GoBackButton
      variants={fromRightSide}
      initial="hidden"
      animate="visible"
      timing="timing"
      transition="transition"
      exit="exit"
      as={motion.button}
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
