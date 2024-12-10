import { useEffect } from 'react';

interface KeyboardNavigationProps {
  onEscape?: () => void;
  onTab?: (event: KeyboardEvent) => void;
  isActive?: boolean;
}

export const useKeyboardNavigation = ({
  onEscape,
  onTab,
  isActive = true
}: KeyboardNavigationProps) => {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onEscape?.();
          break;
        case 'Tab':
          onTab?.(event);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEscape, onTab, isActive]);
};