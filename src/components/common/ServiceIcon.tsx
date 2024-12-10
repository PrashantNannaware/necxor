import React from 'react';
import { motion } from 'framer-motion';

interface ServiceIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 transition-colors hover:border-cyan-500/40"
    >
      <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceIcon;