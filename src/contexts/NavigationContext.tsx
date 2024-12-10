import React, { createContext, useContext, useState, useCallback } from 'react';

interface NavigationContextType {
  isOpen: boolean;
  activeSection: string | null;
  openMenu: (section: string) => void;
  closeMenu: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const openMenu = useCallback((section: string) => {
    if (activeSection === section) {
      setIsOpen(false);
      setActiveSection(null);
    } else {
      setActiveSection(section);
      setIsOpen(true);
    }
  }, [activeSection]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveSection(null);
  }, []);

  return (
    <NavigationContext.Provider value={{ isOpen, activeSection, openMenu, closeMenu }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
};