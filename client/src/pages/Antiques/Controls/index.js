import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Slider from '../../../components/Slider';
import {
  ControlsPanel,
  Count,
  GridTitle,
  Slide,
  SliderContainer
} from './styles';
import { controlVariants } from './variants';


export default function Controls ({ setSlider, count }) {
  return (
    <ControlsPanel
      as={motion.div}
      initial='start'
      variants={controlVariants}
      whileHover={{
        x: 0
      }}
    >
      <GridTitle>
        Set Grid Count
      </GridTitle>
      <SliderContainer>
        <Slide>
          <Slider
            max={4}
            min={3}
            onChange={n => setSlider(n)}
          /> <Count>{count}</Count>
        </Slide>
      </SliderContainer>
    </ControlsPanel>
  );
}

Controls.propTypes = {
  count: PropTypes.number,
  setSlider: PropTypes.func
};
