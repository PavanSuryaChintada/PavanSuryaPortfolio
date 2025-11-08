import { useState, useEffect } from 'react';

/**
 * Custom hook to manage page loading states
 * Simulates data fetching and provides loading state control
 * 
 * @param initialLoading - Initial loading state (default: true)
 * @param minLoadingTime - Minimum loading time in ms (default: 1500ms)
 * @returns Object containing loading state and control functions
 */
export const usePageLoading = (initialLoading = true, minLoadingTime = 1500) => {
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    if (initialLoading) {
      // Simulate data fetch with minimum loading time
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, minLoadingTime);

      return () => clearTimeout(timer);
    }
  }, [initialLoading, minLoadingTime]);

  // Manual control functions
  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading,
    setIsLoading,
  };
};
