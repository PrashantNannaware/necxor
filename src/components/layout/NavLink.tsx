import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, text }) => (
  <a href="#" className="text-gray-300 hover:text-cyan-400 flex items-center space-x-2 transition-colors">
    {React.cloneElement(icon as React.ReactElement, { size: 18 })}
    <span>{text}</span>
  </a>
);

export default NavLink;