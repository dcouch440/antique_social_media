import { GoBackButton } from './styles';
import { motion } from 'framer-motion';
import { fromRightSide } from './variants';

const GoBack = ({handleClick, text}) => (
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
)
export default GoBack;