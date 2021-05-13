import { useEffect, useReducer, useRef, useState } from 'react';
import PaginateDatabase from './PaginateDatabase';
import AdvancePage from './AdvancePage';
import reducer from './reducer';

export default function EverScroll ({ limit, route, validate = false, currentUser }) {
  const [page, setPage] = useState(0);
  const BBRef = useRef(null);
  const lazyRef = useRef([]);

  const [{ data, fetching }, AntiqueDispatch] = useReducer(reducer, { data:[], fetching: false });
  const [CallDB] = PaginateDatabase({ route, limit, page });

  useEffect(() => {

    CallDB({ dispatch: AntiqueDispatch });

  }, [CallDB, currentUser, limit, page, route, validate, currentUser]);

  AdvancePage({ setPage, BBRef, lazyRef, data });

  return [BBRef, lazyRef, data, fetching];
}