export const variants = ({attr, transitionTime, exitTime}) => ({
  hidden: {
    position: 'absolute',
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {duration: .8, delay: 1}
  },
  timing: {
    duration: transitionTime
  },
  transition: {
    type: 'tween'
  },
  exit: {
    x:attr.direction === 'right'  ? '100vw'  :
      attr.direction === 'left'   ? '-100vw' :null,
    y:attr.direction === 'bottom'    ? '100vh'  :
      attr.direction === 'top' ? '-100vh' :null,
    position: 'absolute',
    transition: { duration: exitTime, ease: 'easeInOut' }
  }
});