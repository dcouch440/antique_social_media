import { useCallback, useEffect } from 'react';

export default function AdvancePage ({ setPage, BBRef }) {

  const scrollObserver = useCallback(node => {
    new IntersectionObserver(entries => entries.forEach(en => {
      en.intersectionRatio > 0 && setPage(prev => prev += 1);
    })).observe(node);
  }, [setPage]);

  useEffect(() => {
    BBRef.current && scrollObserver(BBRef.current);
  }, [scrollObserver, BBRef]);

}
