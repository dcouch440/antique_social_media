import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import PropTypes from 'prop-types';
import {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { SlideShow } from './styles';
import { variants } from './variants';


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
      <AnimatePresence
        custom={direction}
        initial={true}
      >
        <motion.img
          animate="center"
          custom={direction}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          exit="exit"
          initial="enter"
          key={page}
          src={antiqueImages[imageIndex].secure_url}
          transition='transition'
          variants={variants}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </AnimatePresence>
      <div
        className="next"
        onClick={() => paginate(1)}
      >
        {'‣'}
      </div>
      <div
        className="prev"
        onClick={() => paginate(-1)}
      >
        {'‣'}
      </div>
    </SlideShow>
  );
}

AntiquesSlideShow.defaultProps = {
  antiqueImages: []
};

AntiquesSlideShow.propTypes = {
  antiqueImages: PropTypes.array,
  newUpload: PropTypes.bool,
  setNewUpload: PropTypes.func
};
