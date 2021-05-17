import { motion } from 'framer-motion';
import { PropTypes } from 'prop-types';
import { LoadingCircle, LoadingContainer, MagnaGlass } from '../styles';
import {
  loadingContainerVariants, loadingVariants, loadingTransition, pageVariants
} from '../variants';


export default function Loading ({ loadingState, afterLoad, version }) {
  return (
    loadingState ?

      <LoadingContainer
        as={motion.div}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        {

          version === 'MagnaGlass' ?

            <>
              <MagnaGlass
                as={motion.span}
                variants={loadingVariants}
                transition={loadingTransition}
              />
              <MagnaGlass
                as={motion.span}
                variants={loadingVariants}
                transition={loadingTransition}
              />
              <MagnaGlass
                as={motion.span}
                variants={loadingVariants}
                transition={loadingTransition}
              />
            </>

            :

            version === 'circle' ?

              <LoadingCircle
                as={motion.span}
                variants={loadingVariants}
                transition={loadingTransition}
              />

              :null

        }
      </LoadingContainer>

      : // done loading

      <motion.div
        variants={pageVariants}
        style={{ height: '100%', width: '100%' }}
        initial='hidden'
        animate='visible'
      >
        {afterLoad}
      </motion.div>
  );
}

Loading.propTypes = {
  loadingState: PropTypes.bool.isRequired,
  afterLoad: PropTypes.object.isRequired,
  version: PropTypes.string
};

Loading.defaultProps = {
  version: 'MagnaGlass'
};
