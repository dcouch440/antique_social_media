export const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const loadingCircleVariants = {
  start: {
    y: '45%',
  },
  end: {
    y: '80%',
  },
};

export const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
};