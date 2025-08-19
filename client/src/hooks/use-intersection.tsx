import { useEffect, useRef, useState } from 'react';

interface UseIntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
}

export function useIntersection(options: UseIntersectionOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Safari optimization: use passive listener
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Use requestAnimationFrame for better performance
        if (typeof window !== 'undefined' && window.requestAnimationFrame) {
          window.requestAnimationFrame(() => {
            setIsVisible(entry.isIntersecting);
          });
        } else {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
        root: options.root || null,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, options.root]);

  return [ref, isVisible] as const;
}
