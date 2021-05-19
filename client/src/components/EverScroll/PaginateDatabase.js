import { useCallback } from 'react';
import * as A from './actions';
import axios from 'axios';

export default function PaginateDatabase ({ route, limit, page }) {
  const url = `${route}?LIMIT=${limit}&OFFSET=${limit * page}`;
  const call = useCallback(

    ({ dispatch }) => {

      dispatch({ type: A.FETCHING_DATA, fetching: true });
      console.log(dispatch);
      axios
        .get(url, { withCredentials: true })
        .then(resp => {
          console.log(resp);
          dispatch({ type: A.STACK_DATA, data: resp.data });
          dispatch({ type: A.FETCHING_DATA, fetching: false });
        })
        .catch(err => {
          dispatch({ type: 'FETCHING_DATA', fetching: false });
          console.error(err);
        });

    }, [url]);

  return [call];
}