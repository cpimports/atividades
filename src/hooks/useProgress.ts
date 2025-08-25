
'use client';

import { useState, useEffect } from 'react';

// This hook is now self-contained and manages its own state and interval,
// which is safer for static exports as it avoids module-level side effects.
export function useProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start with an initial value to avoid layout shifts
    const initialProgress = 40;
    setProgress(initialProgress);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 95) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 25000); // Increases every 25 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  return progress;
}
