export const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  transition: {
    x: {
      type: "spring",
      stiffness: 300,
      damping: 30
    },
    opacity: { duration: 0.2 }
  }
};
