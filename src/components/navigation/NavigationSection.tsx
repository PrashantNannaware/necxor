import React from 'react';
import { motion } from 'framer-motion';

interface NavigationSectionProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

const NavigationSection: React.FC<NavigationSectionProps> = ({
  title,
  icon,
  description,
  items
}) => {
  return (
    <div className="group">
      <div className="flex items-start space-x-3 mb-4">
        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
          {React.cloneElement(icon as React.ReactElement, { size: 24 })}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {description}
          </p>
        </div>
      </div>
      <ul className="space-y-2 pl-9">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href="#"
              className="text-sm text-gray-300 hover:text-cyan-400 transition-colors block py-1"
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationSection;