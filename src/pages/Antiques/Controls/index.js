import PropTypes from 'prop-types';
import { ControlsPanel } from './styles';
import Slider from '../../../components/Slider';
import { SliderContainer, Slide, GridTitle,Count } from './styles';
import { controlVariants } from './variants';
import { motion } from 'framer-motion';


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
          <Slider onChange={n => setSlider(n)} min={3} max={4} /> <Count>{count}</Count>
        </Slide>
      </SliderContainer>
    </ControlsPanel>
  );
}
Controls.propTypes = {
  count: PropTypes.number,
  setSlider: PropTypes.func
};
