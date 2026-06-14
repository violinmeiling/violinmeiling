import { useEffect, useRef, useState } from "react";

export default function useRevealOnScroll(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reset on mount (important for tab switching)
    setIsVisible(false);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);

        // Disconnect AFTER triggering once
        // (prevents repeated triggers but avoids stale observers)
        observer.disconnect();
      }
    }, {
      threshold: 0.15,
      ...options,
    });

    observer.observe(el);

    // Fallback for mobile / missed intersection cases
    const fallbackCheck = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.9 &&
        rect.bottom > 0;

      if (inView) {
        setIsVisible(true);
        observer.disconnect();
      }
    };

    // Run fallback after layout settles
    const timeout = setTimeout(fallbackCheck, 50);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [options]);

  return [ref, isVisible];
}