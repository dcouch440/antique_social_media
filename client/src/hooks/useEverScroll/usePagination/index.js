import axios from 'axios';
import { useCallback } from 'react';
import * as A from '../actions';

/**
 * @description usePagination is not intended to be used as a global hook.
 * This module has the intended use of being used with useEverScroll.
 */

export default function usePagination () {
  return useCallback(({ dispatch, route, limit, page  }) => {

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

  }, []);
}