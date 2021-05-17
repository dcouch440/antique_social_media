import PropTypes from 'prop-types';
import { ControlsPanel } from './styles';
import Slider from '../../../components/Slider';
import { controlVariants } from './variants';
import { motion } from 'framer-motion';

import {
  SliderContainer,
  Slide,
  GridTitle,Count
} from './styles';

export default function Controls ({ setSlider, count }) {
  return (
    <ControlsPanel
      as={motion.div}
      variants={controlVariants}
      initial='start'
      whileHover={{ x: 0 }}
    >
      <GridTitle>
        Set Grid Count
      </GridTitle>
      <SliderContainer>
        <Slide>
          <Slider onChange={n => setSlider(n)} min={4} max={5} /> <Count>{count}</Count>
        </Slide>
      </SliderContainer>
    </ControlsPanel>
  );
}

Controls.propTypes = {
  count: PropTypes.number,
  setSlider: PropTypes.func
};
