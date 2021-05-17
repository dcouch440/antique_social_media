export const fromRightSide = {
  hidden: {
    x: '100vw',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 1.2, duration: 1 }
  },
  timing: {
    duration: 1
  },
  transition: {
    type: 'spring'
  },
  exit: {
    x: '100vw',
    transition: { duration: .5, ease: 'easeInOut' }
  }
};
