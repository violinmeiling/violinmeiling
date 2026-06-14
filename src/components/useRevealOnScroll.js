import { useEffect, useRef, useState } from "react";

export default function useRevealOnScroll(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    setIsVisible(false);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0,
      ...options,
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []); // IMPORTANT FIX

  return [ref, isVisible];
}