import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const scrollContainer = document.querySelector(
      '[data-scroll-container="main"]'
    ) as HTMLElement | null;

    const calculateScrollProgress = () => {
      const container = scrollContainer;

      const scrollTop = container ? container.scrollTop : window.scrollY;
      const viewportHeight = container ? container.clientHeight : window.innerHeight;
      const scrollHeight = container
        ? container.scrollHeight
        : document.documentElement.scrollHeight;

      const maxScroll = scrollHeight - viewportHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    const scrollTarget: HTMLElement | Window = scrollContainer ?? window;

    // Calculate on mount
    calculateScrollProgress();

    // Add scroll listener
    scrollTarget.addEventListener('scroll', calculateScrollProgress, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, { passive: true });

    return () => {
      scrollTarget.removeEventListener('scroll', calculateScrollProgress as EventListener);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

  return scrollProgress;
};
