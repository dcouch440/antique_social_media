import PropTypes from 'prop-types';
import { useEffect, useState, useRef, useCallback } from 'react';
import { variants } from './variants';
import { wrap } from 'popmotion';
import { AnimatePresence, motion } from 'framer-motion';
import { SlideShow } from './styles';

export default function AntiquesSlideShow ({ antiqueImages, newUpload, setNewUpload }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [nextSlide, setNextSlide] = useState(0);
  const isTapped = useRef(false);

  const imageIndex = wrap(0, antiqueImages.length, page);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback(newDirection => {
    setPage([page + newDirection, newDirection]);
  }, [page, setPage]);

  useEffect(() => {
      if (!newUpload) {
        return;
      }
      setPage([antiqueImages.length, 1]);
      setNewUpload(false);
  }, [antiqueImages.length, newUpload, setNewUpload]);

  useEffect(() => {
    if (antiqueImages.length === 1) {
      return;
    }

    const timer = setTimeout(

      () => {
        if (!isTapped.current) {
          paginate(1);
        } else {
          setNextSlide(prev=> prev += 1);
        }
      }, 10000

    );

    return () => clearTimeout(timer);

  }, [page, paginate, nextSlide, antiqueImages.length]);

  const handleMouseEnter = () => isTapped.current = true;
  const handleMouseLeave = () => isTapped.current = false;

  return (
    <SlideShow>
      <AnimatePresence initial={true} custom={direction}>
        <motion.img
          key={page}
          src={antiqueImages[imageIndex].image_url}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition='transition'
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
        {'‣'}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {'‣'}
      </div>
    </SlideShow>
  );
}

AntiquesSlideShow.propTypes = {
  antiqueImages: PropTypes.array
};
