import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Shield, Cloud, GitBranch } from 'lucide-react';
import NavigationSection from './NavigationSection';

const productsData = [
  {
    title: 'AI Automation Tools',
    icon: <Bot />,
    description: 'Enterprise-grade solutions for business process automation',
    items: [
      'Workflow automation platforms',
      'Process optimization tools',
      'Intelligent task management',
      'Business rules automation'
    ]
  },
  {
    title: 'Chatbot & Voice AI',
    icon: <MessageSquare />,
    description: 'Intelligent conversational interfaces for customer engagement',
    items: [
      'AI-powered chatbots',
      'Voice recognition systems',
      'Natural language processing',
      'Conversation analytics'
    ]
  },
  {
    title: 'Cybersecurity Platforms',
    icon: <Shield />,
    description: 'Advanced threat detection and security response systems',
    items: [
      'Threat detection systems',
      'Security monitoring tools',
      'Incident response platforms',
      'Compliance management'
    ]
  },
  {
    title: 'Cloud Management Software',
    icon: <Cloud />,
    description: 'Comprehensive cloud infrastructure control solutions',
    items: [
      'Cloud resource management',
      'Performance monitoring',
      'Cost optimization tools',
      'Multi-cloud orchestration'
    ]
  },
  {
    title: 'DevOps Solutions',
    icon: <GitBranch />,
    description: 'Streamlined deployment and CI/CD automation tools',
    items: [
      'CI/CD pipelines',
      'Infrastructure as code',
      'Container orchestration',
      'Deployment automation'
    ]
  }
];

const ProductsMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
    >
      {productsData.map((section, index) => (
        <NavigationSection
          key={index}
          {...section}
        />
      ))}
    </motion.div>
  );
};

export default ProductsMenu;