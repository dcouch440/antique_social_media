// gives a default time for animation loading

export default function loadingSequence ({ condition, ref, timeBeforeCheck = 1000 })
{
  setTimeout(() => {
    ref.current = true;
  }, timeBeforeCheck);

  if (ref.current === false)
  {
    const interval = setInterval(() => {
      if (ref.current === true) {
        clearInterval(interval);
        condition(false);
      }
    }, 300);
  }

  else { condition(false); }
}