import { useCallback } from 'react';

/**
 * @description useAdvancePage is not intended to be used as a global hook.
 * This module has the intended use of being used with useEverScroll.
 */

export default function useAdvancePage () {
  return useCallback(({ node, setPage }) => {
    new IntersectionObserver(entries => {
      const [first] = entries;
      if (first.intersectionRatio > 0) {
        setPage(prev => prev += 1);
      }
    })
      .observe(node);
  }, []);
}
