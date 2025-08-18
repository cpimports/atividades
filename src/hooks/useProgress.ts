
'use client';

import { useState, useEffect } from 'react';

// Single store for the progress state
let progressState = 0;
const listeners = new Set<(progress: number) => void>();

const setProgress = (updater: (prev: number) => number) => {
  progressState = updater(progressState);
  listeners.forEach((listener) => listener(progressState));
};

// Initialize the progress logic once
const initialProgress = 40;
setTimeout(() => {
  setProgress(() => initialProgress);
}, 500);

const interval = setInterval(() => {
  setProgress((prev) => {
    if (prev < 95) {
      return prev + 1;
    }
    clearInterval(interval);
    return prev;
  });
}, 25000); // Increases every 25 seconds


export function useProgress() {
  const [progress, setLocalProgress] = useState(progressState);

  useEffect(() => {
    const listener = (newProgress: number) => {
      setLocalProgress(newProgress);
    };
    
    listeners.add(listener);
    // Sync with the current state on mount
    setLocalProgress(progressState); 

    return () => {
      listeners.delete(listener);
    };
  }, []);

  return progress;
}
