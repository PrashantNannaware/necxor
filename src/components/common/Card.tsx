import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'feature' | 'service';
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, variant = 'feature', className = '' }) => {
  const variants = {
    feature: "bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-colors",
    service: "group bg-gray-900/30 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all hover:transform hover:-translate-y-1"
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;