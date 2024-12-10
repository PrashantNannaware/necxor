import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import IconWrapper from '../common/IconWrapper';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
    <Card variant="service" className="h-full">
      <IconWrapper 
        icon={icon} 
        className="group-hover:text-cyan-400 transition-colors duration-300"
      />
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </Card>
  </motion.div>
);

export default ServiceCard;