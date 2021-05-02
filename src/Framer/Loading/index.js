import React from 'react';
import { motion } from 'framer-motion';
import { LoadingCircle, LoadingContainer, HourGlass } from './styles'
import {
  loadingContainerVariants, loadingVariants, loadingTransition, pageVariants
} from './variants'


const Loading = ({loadingState, render, version}) => (

  loadingState ?

    <LoadingContainer
      as={motion.div}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      {

        version === 'hourglass' ?

          <>
            <HourGlass
              as={motion.span}
              variants={loadingVariants}
              transition={loadingTransition}
            />
            <HourGlass
              as={motion.span}
              variants={loadingVariants}
              transition={loadingTransition}
            />
            <HourGlass
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
      style={{height: '100%', width: '100%'}}
      initial='hidden'
      animate='visible'
    >
      {render}
    </motion.div>

);

export default Loading;