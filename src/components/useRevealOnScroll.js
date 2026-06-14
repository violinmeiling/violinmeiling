import { useEffect, useRef, useState } from "react";

export default function useRevealOnScroll(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // IMPORTANT: no fade out ever
        }
      },
      {
        threshold: 0.15,
        ...options,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}