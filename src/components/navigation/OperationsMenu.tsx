import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  GitMerge,
  Shield,
  BarChart3
} from 'lucide-react';
import NavigationSection from './NavigationSection';

const operationsData = [
  {
    title: 'Remote Workforce Management',
    icon: <Users />,
    description: 'AI-powered tools for remote team management',
    items: [
      'Team collaboration platforms',
      'Performance tracking systems',
      'Resource allocation tools',
      'Productivity analytics'
    ]
  },
  {
    title: 'Automation Pipelines',
    icon: <GitMerge />,
    description: 'Streamlined workflow automation solutions',
    items: [
      'CI/CD pipeline automation',
      'Process orchestration',
      'Task automation tools',
      'Workflow optimization'
    ]
  },
  {
    title: 'Cyber Operations Monitoring',
    icon: <Shield />,
    description: 'Real-time security monitoring and response',
    items: [
      '24/7 threat monitoring',
      'Incident response systems',
      'Security analytics',
      'Compliance tracking'
    ]
  },
  {
    title: 'Data Analytics',
    icon: <BarChart3 />,
    description: 'Advanced analytics and reporting tools',
    items: [
      'Business intelligence dashboards',
      'Predictive analytics',
      'Performance metrics',
      'Custom reporting tools'
    ]
  }
];

const OperationsMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {operationsData.map((section, index) => (
        <NavigationSection
          key={index}
          {...section}
        />
      ))}
    </motion.div>
  );
};

export default OperationsMenu;