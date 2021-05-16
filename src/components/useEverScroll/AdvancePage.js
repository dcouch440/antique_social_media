import { useCallback, useEffect } from 'react';

export default function AdvancePage ({ setPage, BBRef, lazyRef, data }) {
  const scrollObserver = useCallback(node => {

    new IntersectionObserver(entries => entries.forEach(en => {
      console.log(en.intersectionRatio);
      en.intersectionRatio > 0 && setPage(prev => prev += 1);
    })).observe(node);

  }, [setPage]);

  useEffect(() => {
    BBRef.current && scrollObserver(BBRef.current);
  }, [scrollObserver, BBRef]);

  const observer = useCallback(node => {
    if (node === null) {
      return;
    }
    const intObs = new IntersectionObserver(entries => entries
      .forEach(en => {
        if (en.intersectionRatio > 0) {
          let currentImg = node.children[0].children[0];
          const newImgSrc = currentImg.src;

          if (!newImgSrc) {
            console.error('Image source is invalid');
          } else {
            currentImg.src = newImgSrc;
          }

          intObs.unobserve(node);
        }
      })
    );

    intObs.observe(node);

  }, []);

  useEffect(() => {
    if (lazyRef.current) {
      lazyRef.current.forEach(data => observer(data));
    }
  }, [observer, lazyRef, data]);
}