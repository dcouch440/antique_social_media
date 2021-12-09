import {
  useCallback,
  useRef,
  useState
} from "react";

/**
 *
 * @param {number} ms - minimum number to wait before loading.
 * @returns [ loading: boolean, isDone: func ]
 */

export default function useMinimumLoadingTime ({ ms = 1000 } = {}) {
  // standard loading bool
  const [loading, setLoading] = useState(true);
  // makes sure the minimum value is met
  const minimumTimeIsMet = useRef(false);
  // used in the async .then
  const apiRequestIsDone = useRef(false);
  // invoke when apiRequestIsDone

  // is done can be invoked isDone() to notify the loading sequence.
  const isDone = useCallback(() => {
    apiRequestIsDone.current = true;
  }, []);

  // interval will check the conditions every 300ms
  // if the minValue and api request is not done return and try again
  useState(() => {
    const interval = setInterval(() => {
      const condition1 = minimumTimeIsMet.current === true;
      const condition2 = apiRequestIsDone.current === true;

      if (!(condition1 && condition2)) { return; }
      clearInterval(interval);
      setLoading(false);

    }, 300);

    setTimeout(() => {
      minimumTimeIsMet.current = true;
    }, ms);

  }, [ms]);

  return [loading, isDone];
}