import React from 'react';

interface IconWrapperProps {
  icon: React.ReactNode;
  size?: number;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, size = 32, className = '' }) => {
  return (
    <div className={`text-cyan-400 mb-4 ${className}`}>
      {React.cloneElement(icon as React.ReactElement, { size })}
    </div>
  );
};

export default IconWrapper;