export const variants = ({direction, transition}) => ({
  hidden: {
    x:direction === 'right' ? '100vw' :
      direction === 'left' ? '-100vw' :null,
    y:direction === 'bottom' ? '100vh' :
      direction === 'top' ? '-100vh' :null,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: transition,
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
});