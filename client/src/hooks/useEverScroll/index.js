import {
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react';
import reducer from './reducer';
import useAdvancePage from './useAdvancePage';
import usePagination from './usePagination';

export default function useEverScroll ({ limit, route }) {
  const [page, setPage] = useState(0);
  const getImages = usePagination();
  const advancePage = useAdvancePage();
  const BBRef = useRef(null);
  const [{ data, fetching }, dispatch] = useReducer(
    reducer, { data:[], fetching: false }
  );

  useEffect(() => {
    BBRef.current && advancePage({ node: BBRef.current, setPage });
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