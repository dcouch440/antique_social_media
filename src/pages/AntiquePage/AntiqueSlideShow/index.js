import React, { useEffect, useState } from 'react';
import wide from '../../../antiques-mock/img/bottle-wide.jpg'
import tall from '../../../antiques-mock/img/bottle-tall.jpg'
import { variants } from './variants';
import { wrap } from "popmotion";
import { AnimatePresence, motion } from 'framer-motion';
import * as styled from './styles';



const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const AntiquesSlideShow = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const images = [wide,tall]
  const imageIndex = wrap(0, images.length, page);

  useEffect(() => {

    const timer = setTimeout(() => {
      paginate(1);
    }, 2000)

    return  () => clearTimeout(timer);

  }, [page]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  }

  return (
      <styled.SlideShow>
        <AnimatePresence initial={true} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div className="next" onClick={() => paginate(1)}>
          {"‣"}
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
          {"‣"}
        </div>
      </styled.SlideShow>
  )
}

export default AntiquesSlideShow