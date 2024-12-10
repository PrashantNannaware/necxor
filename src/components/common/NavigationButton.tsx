import React from 'react';
import Button from './Button';
import { useScrollToSection } from '../../hooks/useScrollToSection';

interface NavigationButtonProps {
  variant: 'primary' | 'secondary';
  targetSection: string;
  icon?: 'arrow' | 'external';
  children: React.ReactNode;
  className?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  variant,
  targetSection,
  icon,
  children,
  className = ''
}) => {
  const scrollToSection = useScrollToSection();

  const handleClick = () => {
    scrollToSection(targetSection);
  };

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      icon={icon}
      className={className}
      aria-label={`Navigate to ${targetSection.replace('-', ' ')}`}
    >
      {children}
    </Button>
  );
};

export default NavigationButton;