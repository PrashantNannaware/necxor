import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Shield,
  Globe,
  Code2,
  Cloud,
  GitBranch
} from 'lucide-react';
import NavigationSection from './NavigationSection';

const servicesData = [
  {
    title: 'AI Development',
    icon: <Bot />,
    description: 'Custom AI solutions for your business',
    items: [
      'Machine learning models',
      'Natural language processing',
      'Computer vision',
      'Predictive analytics'
    ]
  },
  {
    title: 'Cybersecurity Services',
    icon: <Shield />,
    description: 'Comprehensive security solutions',
    items: [
      'Security assessments',
      'Penetration testing',
      'Incident response',
      'Security training'
    ]
  },
  {
    title: 'Web Application Development',
    icon: <Globe />,
    description: 'Modern web solutions',
    items: [
      'Frontend development',
      'Backend systems',
      'API development',
      'Progressive web apps'
    ]
  },
  {
    title: 'Software Development',
    icon: <Code2 />,
    description: 'Custom software solutions',
    items: [
      'Desktop applications',
      'Mobile apps',
      'Enterprise software',
      'System integration'
    ]
  },
  {
    title: 'Cloud Solutions',
    icon: <Cloud />,
    description: 'Cloud infrastructure services',
    items: [
      'Cloud migration',
      'Cloud optimization',
      'Serverless architecture',
      'Multi-cloud strategy'
    ]
  },
  {
    title: 'DevOps Consulting',
    icon: <GitBranch />,
    description: 'Streamline development operations',
    items: [
      'CI/CD implementation',
      'Infrastructure as code',
      'Container orchestration',
      'Monitoring & logging'
    ]
  }
];

const ServicesMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8"
    >
      {servicesData.map((section, index) => (
        <NavigationSection
          key={index}
          {...section}
        />
      ))}
    </motion.div>
  );
};

export default ServicesMenu;