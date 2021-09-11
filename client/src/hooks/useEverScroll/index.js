import axios from 'axios';
import {
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react';
import * as A from './actions';
import reducer from './reducer';
import useAdvancePage from './useAdvancePage';
import usePagination from './usePagination';

/**
 * @description Returns images based on the specifications.
 * @param {number} limit the limit of items the request should ask for.
 * @param {string} route the route where the images should be requested from.1
 *
 * @returns {MutableRefObject} bottom boundary for jsx ref.
 * @returns {Array} stacked images from request.
 * @returns {boolean} weather the hook is actively fetching.
 */

export default function useEverScroll ({ limit, route }) {
  const [page, setPage] = useState(0);
  const getImages = usePagination();
  const advancePage = useAdvancePage();
  const BBRef = useRef(null);
  const [{ data, fetching }, dispatch] = useReducer(
    reducer, { data:[], fetching: false }
  );

  useEffect(() => {
    new IntersectionObserver(entries => {
      const [first] = entries;
      if (first.intersectionRatio > 0) {
        setPage(prev => prev += 1);
      }
    })
      .observe(BBRef.current);
  }, [BBRef, advancePage]);

  useEffect(() => {
    const url = `${route}?LIMIT=${limit}&OFFSET=${limit * page}`;
    dispatch({ type: A.FETCHING_DATA, fetching: true });
    axios
      .get(url, { withCredentials: true })
      .then(resp => {
        dispatch({ type: A.STACK_DATA, data: resp.data });
        dispatch({ type: A.FETCHING_DATA, fetching: false });
      })
      .catch(err => {
        dispatch({ type: 'FETCHING_DATA', fetching: false });
        console.error(err);
      });
  }, [
    getImages,
    limit,
    page,
    route
  ]);

  return [BBRef, data, fetching];
}