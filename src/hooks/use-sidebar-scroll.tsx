import { useState, useEffect, RefObject } from 'react';

export const useSidebarScroll = (ref: RefObject<HTMLElement>) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const calculateScrollProgress = () => {
      const scrollTop = element.scrollTop;
      const scrollHeight = element.scrollHeight;
      const clientHeight = element.clientHeight;
      
      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    calculateScrollProgress();

    element.addEventListener('scroll', calculateScrollProgress, { passive: true });

    return () => {
      element.removeEventListener('scroll', calculateScrollProgress);
    };
  }, [ref]);

  return scrollProgress;
};
