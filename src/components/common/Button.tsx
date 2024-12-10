import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  icon?: 'arrow' | 'external';
  onClick?: () => void;
  disabled?: boolean;
  'aria-label'?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  icon,
  onClick,
  disabled = false,
  'aria-label': ariaLabel
}) => {
  const baseStyles = "px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black";
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-black hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-cyan-500",
    secondary: "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-transparent"
  };

  const icons = {
    arrow: <ArrowRight className="w-5 h-5" />,
    external: <ExternalLink className="w-5 h-5" />
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      role="button"
      tabIndex={0}
    >
      <span>{children}</span>
      {icon && icons[icon]}
    </button>
  );
};

export default Button;