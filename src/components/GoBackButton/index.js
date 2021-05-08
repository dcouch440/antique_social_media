import { GoBackButton } from './styles';
import { motion } from 'framer-motion';
import { fromRightSide } from './variants';

export default function GoBack ({handleClick, text})
{
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