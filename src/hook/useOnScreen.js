
// useOnScreen.js
import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element is visible on screen.
 * @param {object} options - Options for the Intersection Observer (e.g., { threshold: 0.1 })
 * @returns {[object, boolean]} - [ref, isVisible]
 */
export const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update state when the element visibility changes
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};
