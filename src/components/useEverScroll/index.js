import { useEffect, useReducer, useRef, useState } from 'react';
import PaginateDatabase from './PaginateDatabase';
import AdvancePage from './AdvancePage';
import reducer from './reducer';
import * as A from './actions';

export default function useEverScroll ({ limit, route, validate = false, currentUser }) {
  const [page, setPage] = useState(0);
  const BBRef = useRef(null);
  const lazyRef = useRef([]);

  const [{ data, fetching }, antiqueDispatch] = useReducer(reducer, { data:[], fetching: false });
  const [CallDB] = PaginateDatabase({ route, limit, page });

  useEffect(() => antiqueDispatch({ type: A.CLEAR_LIST, data: [] }), []);

  useEffect(() => {
    CallDB({ dispatch: antiqueDispatch });
  }, [CallDB, currentUser, limit, page, route, validate, currentUser]);

  AdvancePage({ setPage, BBRef, lazyRef, data });

  return [BBRef, lazyRef, data, fetching];
}