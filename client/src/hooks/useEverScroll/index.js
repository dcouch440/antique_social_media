import {
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react';
import reducer from './reducer';
import useAdvancePage from './useAdvancePage';
import usePagination from './usePagination';

/**
 * Returns images based on the.
 * @param {number} limit the limit of items the request should ask for.
 * @param {string} route the route where the images should be requested from.1
 *
 * @returns {MutableRefObject<any>} bottom boundary for jsx ref.
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
    advancePage({ node: BBRef.current, setPage });
  }, [BBRef, advancePage]);

  useEffect(() => {
    getImages({ dispatch, route, limit, page });
  }, [
    getImages,
    limit,
    page,
    route
  ]);

  return [BBRef, data, fetching];
}