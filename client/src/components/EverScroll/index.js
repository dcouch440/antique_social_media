import {
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react';
import PaginateDatabase from './PaginateDatabase';
import AdvancePage from './AdvancePage';
import reducer from './reducer';
import * as A from './actions';

export default function EverScroll ({ limit, route }) {
  const [page, setPage] = useState(0);
  const BBRef = useRef(null);
  const lazyRef = useRef([]);

  const [{ data, fetching }, antiqueDispatch] = useReducer(reducer, { data:[], fetching: false });
  const [CallDB] = PaginateDatabase({ route, limit, page });

  useEffect(() => antiqueDispatch({ type: A.CLEAR_LIST, data: [] }), []);

  useEffect(() => {
    CallDB({ dispatch: antiqueDispatch });
  }, [CallDB, limit, page, route]);

  AdvancePage({ setPage, BBRef, lazyRef, data });

  return [BBRef, lazyRef, data, fetching];
}