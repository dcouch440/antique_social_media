export const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const loadingVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
};

export const loadingTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
};

export const pageVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 }
  }
};
