import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import PaginateDatabase from './PaginateDatabase';
import AdvancePage from './AdvancePage';
import reducer from './reducer';
import * as A from './actions';
import { Context } from '../../Context';

export default function EverScroll ({ limit, route, validate = false }) {
  const { currentUser } = useContext(Context);
  const [page, setPage] = useState(0);
  const BBRef = useRef(null);
  const lazyRef = useRef([]);

  const [{ data, fetching }, antiqueDispatch] = useReducer(reducer, { data:[], fetching: false });
  const [CallDB] = PaginateDatabase({ route, limit, page });

  useEffect(() => antiqueDispatch({ type: A.CLEAR_LIST, data: [] }), []);

  useEffect(() => {
    if (currentUser.id === undefined) {
      return;
    }
    CallDB({ dispatch: antiqueDispatch });
  }, [CallDB, currentUser, limit, page, route, validate]);

  AdvancePage({ setPage, BBRef, lazyRef, data });

  return [BBRef, lazyRef, data, fetching];
}