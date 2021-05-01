import { useRef } from 'react';

const LoadingSequence = ({condition}) => {
  const sequence = useRef(false)

  setTimeout(() => {
    sequence.current = true;
  }, 1000)

  if(sequence.current === false)
  {
    const interval = setInterval(() => {
      if (sequence.current === true) {
        clearInterval(interval);
        condition(false);
      }
    }, 300);
  }
  else condition(false);
}

export default LoadingSequence;