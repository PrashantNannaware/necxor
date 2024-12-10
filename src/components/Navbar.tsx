import React from 'react';
import { Shield, Terminal, Settings2, Activity, Menu, Package } from 'lucide-react';
import Button from './common/Button';
import { useContactNavigation } from '../hooks/useContactNavigation';
import NavigationMenu from './navigation/NavigationMenu';
import { useNavigationContext } from '../contexts/NavigationContext';

const Navbar = () => {
  const handleContactClick = useContactNavigation();
  const { openMenu, closeMenu, activeSection } = useNavigationContext();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  const navItems = [
    {
      icon: <Package size={18} />,
      text: 'Products',
      section: 'products'
    },
    {
      icon: <Terminal size={18} />,
      text: 'Solutions',
      section: 'solutions'
    },
    {
      icon: <Settings2 size={18} />,
      text: 'Services',
      section: 'services'
    },
    {
      icon: <Activity size={18} />,
      text: 'Operations',
      section: 'operations'
    }
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="text-cyan-400 text-2xl font-bold tracking-wider hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-md"
            >
              NECXOR
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className={`text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1 ${
                    activeSection === item.section ? 'text-cyan-400' : ''
                  }`}
                  onClick={() => openMenu(item.section)}
                  onMouseEnter={() => openMenu(item.section)}
                  aria-expanded={item.section === activeSection}
                  aria-controls={`${item.section}-menu`}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              ))}
              <Button 
                variant="primary" 
                className="px-4 py-2 text-sm"
                onClick={handleContactClick}
                aria-label="Contact Us"
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Toggle menu"
              onClick={() => openMenu('mobile')}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      <NavigationMenu />
    </nav>
  );
};

export default Navbar;