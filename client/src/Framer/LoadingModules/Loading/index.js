import { motion } from 'framer-motion';
import { PropTypes } from 'prop-types';
import {
  LoadingCircle,
  LoadingContainer,
  MagnaGlass
} from '../styles';
import {
  loadingContainerVariants,
  loadingTransition,
  loadingVariants,
  pageVariants
} from '../variants';


export default function Loading ({ loadingState, afterLoad, version }) {
  return (
    loadingState ?

      <LoadingContainer
        animate="end"
        as={motion.div}
        initial="start"
        variants={loadingContainerVariants}
      >
        {

          version === 'MagnaGlass' ?

            <>
              <MagnaGlass
                as={motion.span}
                transition={loadingTransition}
                variants={loadingVariants}
              />
              <MagnaGlass
                as={motion.span}
                transition={loadingTransition}
                variants={loadingVariants}
              />
              <MagnaGlass
                as={motion.span}
                transition={loadingTransition}
                variants={loadingVariants}
              />
            </>

            :

            version === 'circle' ?

              <LoadingCircle
                as={motion.span}
                transition={loadingTransition}
                variants={loadingVariants}
              />

              :null

        }
      </LoadingContainer>

      : // done loading

      <motion.div
        animate='visible'
        initial='hidden'
        style={{ height: '100%', width: '100%' }}
        variants={pageVariants}
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
