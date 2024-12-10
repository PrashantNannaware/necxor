import { useEffect, RefObject } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: () => void,
  excludeRefs: RefObject<HTMLElement>[] = []
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      
      // Check if click is outside the main ref
      if (!ref.current?.contains(target)) {
        // Check if click is inside any of the excluded refs
        const isInsideExcluded = excludeRefs.some(
          excludeRef => excludeRef.current?.contains(target)
        );
        
        if (!isInsideExcluded) {
          handler();
        }
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, excludeRefs]);
};