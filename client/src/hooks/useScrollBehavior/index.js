import { useState } from 'react';

export default function useScrollBehavior () {
  const [scrollBehavior, setScrollBehavior] = useState(true);
  const scroll = scrollBehavior ? 'scroll' : 'hidden';

  return [scroll, setScrollBehavior];
}
