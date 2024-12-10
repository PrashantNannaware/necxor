import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigationContext } from '../../contexts/NavigationContext';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';
import SolutionsMenu from './SolutionsMenu';
import ServicesMenu from './ServicesMenu';
import OperationsMenu from './OperationsMenu';
import ProductsMenu from './ProductsMenu';

const NavigationMenu = () => {
  const { isOpen, activeSection, closeMenu } = useNavigationContext();
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useClickOutside(menuRef, closeMenu, [navRef]);
  
  useKeyboardNavigation({
    onEscape: closeMenu,
    onTab: (event) => {
      const menu = menuRef.current;
      if (!menu) return;

      const focusableElements = menu.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    },
    isActive: isOpen
  });

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <nav ref={navRef} className="relative" role="navigation">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-screen bg-gray-900/95 backdrop-blur-sm border-t border-cyan-500/20 shadow-xl"
            role="menu"
            aria-orientation="vertical"
            aria-hidden={!isOpen}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {activeSection === 'products' && <ProductsMenu />}
              {activeSection === 'solutions' && <SolutionsMenu />}
              {activeSection === 'services' && <ServicesMenu />}
              {activeSection === 'operations' && <OperationsMenu />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationMenu;