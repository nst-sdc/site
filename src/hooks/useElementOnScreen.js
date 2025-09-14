import { useEffect, useRef, useState } from "react";

/**
 * A hook to detect when an element is visible in the viewport
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - How much of the element should be visible (0-1)
 * @param {boolean} options.reappear - Whether to trigger visibility each time element enters viewport
 * @param {string} options.root - The element that is used as the viewport (null = browser viewport)
 * @param {boolean} options.freezeOnceVisible - Once visible, keep isVisible true even when scrolled away
 * @returns {[React.RefObject, boolean]} - A ref to attach to the element and a boolean indicating visibility
 */
const useElementOnScreen = (options = {}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const { 
    threshold = 0.5, 
    reappear = false, 
    root = null, 
    freezeOnceVisible = false 
  } = options;

  useEffect(() => {
    const makeAppear = (entries) => {
      const [entry] = entries;
      // If we only want the element to appear once and it's already appeared, do nothing
      if (freezeOnceVisible && isVisible) return;
      
      // Otherwise set visibility based on intersection
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else if (reappear) {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(makeAppear, { 
      threshold,
      root: root ? document.querySelector(root) : null
    });
    
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, freezeOnceVisible, reappear, isVisible]);

  return [containerRef, isVisible];
};

export default useElementOnScreen;
