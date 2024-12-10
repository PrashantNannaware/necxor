import { useCallback } from 'react';

export const useContactNavigation = () => {
  const handleContactClick = useCallback(() => {
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
      const navbarHeight = 64; // Height of the fixed navbar
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
        duration: 800
      });
    }
  }, []);

  return handleContactClick;
};