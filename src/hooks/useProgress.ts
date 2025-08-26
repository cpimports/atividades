
'use client';

import { useState, useEffect, RefObject } from 'react';

// This hook animates the progress bar to 40% when it becomes visible,
// and then continues to increment slowly.
export function useProgress(ref: RefObject<Element>) {
  const [progress, setProgress] = useState(0);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  useEffect(() => {
    if (isIntersecting) {
      // Animate to 40%
      setProgress(40);

      // After the initial animation, start the slow increment
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 95) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 25000); // Increases every 25 seconds

      return () => clearInterval(interval);
    }
  }, [isIntersecting]);

  return progress;
}
