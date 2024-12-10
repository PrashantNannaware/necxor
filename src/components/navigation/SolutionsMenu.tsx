import React from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  RefreshCw, 
  Shield, 
  Database, 
  Users 
} from 'lucide-react';
import NavigationSection from './NavigationSection';

const solutionsData = [
  {
    title: 'Business Automation',
    icon: <Workflow />,
    description: 'Streamline operations with intelligent automation',
    items: [
      'Workflow automation with AI',
      'Process optimization',
      'Document automation',
      'Task management'
    ]
  },
  {
    title: 'Digital Transformation',
    icon: <RefreshCw />,
    description: 'Modernize your business for the digital age',
    items: [
      'Legacy system modernization',
      'Digital strategy consulting',
      'Technology implementation',
      'Change management'
    ]
  },
  {
    title: 'Data Security',
    icon: <Shield />,
    description: 'Protect your valuable data assets',
    items: [
      'Threat detection & response',
      'Compliance management',
      'Security auditing',
      'Data encryption'
    ]
  },
  {
    title: 'Scalable Infrastructure',
    icon: <Database />,
    description: 'Build robust, scalable systems',
    items: [
      'Cloud architecture',
      'Performance optimization',
      'Infrastructure monitoring',
      'Capacity planning'
    ]
  },
  {
    title: 'Customer Engagement',
    icon: <Users />,
    description: 'Enhance customer experience with AI',
    items: [
      'AI chatbots',
      'Personalization',
      'Analytics & insights',
      'Engagement automation'
    ]
  }
];

const SolutionsMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
    >
      {solutionsData.map((section, index) => (
        <NavigationSection
          key={index}
          {...section}
        />
      ))}
    </motion.div>
  );
};

export default SolutionsMenu;