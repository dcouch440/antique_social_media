import { useEffect, useReducer, useRef, useState } from 'react';
import PaginateDatabase from './PaginateDatabase';
import AdvancePage from './AdvancePage';
import reducer from './reducer';

const useEverScroll = ({limit, route}) => {
  const [page, setPage] = useState(0);
  const BBRef = useRef(null);
  const lazyRef = useRef([]);

  const [{data}, AntiqueDispatch] = useReducer(reducer, { data:[], fetching: false });
  const [CallDB] = PaginateDatabase({route, limit, page});

  useEffect(() => {
    CallDB({dispatch: AntiqueDispatch});
  }, [CallDB, limit, page, route]);

  AdvancePage({setPage, BBRef, lazyRef, data});

  return [BBRef, lazyRef, data];
};

export default useEverScroll;