import { NavigationSection } from '../types/navigation';

export const navigationData: NavigationSection[] = [
  {
    title: 'Products',
    description: 'Advanced technological solutions powered by AI and automation',
    items: [
      {
        title: 'AI-Powered Solutions',
        description: 'Cutting-edge artificial intelligence platforms',
        items: [
          {
            title: 'Predictive Analytics Engine',
            description: 'Advanced forecasting and trend analysis',
            features: [
              { name: 'Machine Learning Models', description: 'Custom-trained models for your data' },
              { name: 'Real-time Processing', description: 'Instant insights from streaming data' },
              { name: 'Automated Reports', description: 'AI-generated business intelligence' },
              { name: 'Pattern Recognition', description: 'Advanced anomaly detection' }
            ],
            audience: 'Data scientists and business analysts',
            benefits: ['Improved decision making', 'Reduced operational costs', 'Proactive problem solving']
          },
          {
            title: 'Neural Network Platform',
            description: 'Deep learning solution for complex problems',
            features: [
              { name: 'Deep Learning Models', description: 'Pre-trained and custom neural networks' },
              { name: 'GPU Acceleration', description: 'High-performance computing' },
              { name: 'Model Visualization', description: 'Interactive neural network visualization' },
              { name: 'AutoML Capabilities', description: 'Automated model optimization' }
            ],
            audience: 'AI researchers and developers',
            benefits: ['Faster model development', 'Improved accuracy', 'Scalable AI solutions']
          }
        ]
      },
      {
        title: 'Automation Tools',
        description: 'Streamline operations with intelligent automation',
        items: [
          {
            title: 'Process Automation Suite',
            description: 'End-to-end business process automation',
            features: [
              { name: 'Visual Workflow Builder', description: 'Drag-and-drop automation design' },
              { name: 'Smart Triggers', description: 'Event-based automation initiation' },
              { name: 'Process Analytics', description: 'Real-time performance monitoring' },
              { name: 'Integration Hub', description: 'Connect with existing systems' }
            ],
            audience: 'Business process managers and IT teams',
            benefits: ['Increased efficiency', 'Reduced errors', 'Improved compliance']
          }
        ]
      }
    ]
  },
  {
    title: 'Solutions',
    description: 'Comprehensive business solutions for digital transformation',
    items: [
      {
        title: 'Cybersecurity',
        description: 'Advanced security solutions for modern threats',
        items: [
          {
            title: 'Threat Detection System',
            description: 'AI-powered security monitoring',
            features: [
              { name: 'Real-time Monitoring', description: '24/7 threat surveillance' },
              { name: 'AI Threat Analysis', description: 'Advanced pattern recognition' },
              { name: 'Automated Response', description: 'Instant threat mitigation' }
            ],
            audience: 'Security teams and IT administrators',
            benefits: ['Enhanced security posture', 'Reduced response time', 'Comprehensive protection']
          }
        ]
      }
    ]
  },
  {
    title: 'Services',
    description: 'Expert consulting and implementation services',
    items: [
      {
        title: 'Technical Consulting',
        description: 'Strategic technology advisory services',
        items: [
          {
            title: 'Architecture Design',
            description: 'Custom system architecture planning',
            features: [
              { name: 'System Assessment', description: 'Current architecture evaluation' },
              { name: 'Future State Design', description: 'Scalable architecture planning' },
              { name: 'Migration Strategy', description: 'Phased implementation planning' }
            ],
            audience: 'CTOs and technical leaders',
            benefits: ['Optimized infrastructure', 'Reduced technical debt', 'Improved scalability']
          }
        ]
      }
    ]
  },
  {
    title: 'Operations',
    description: 'Streamlined operational management and monitoring',
    items: [
      {
        title: 'Workflow Management',
        description: 'Comprehensive operational control',
        items: [
          {
            title: 'Task Management System',
            description: 'Intelligent work allocation and tracking',
            features: [
              { name: 'Smart Scheduling', description: 'AI-powered resource allocation' },
              { name: 'Progress Tracking', description: 'Real-time task monitoring' },
              { name: 'Performance Analytics', description: 'Team productivity insights' }
            ],
            audience: 'Operations managers and team leads',
            benefits: ['Improved productivity', 'Better resource utilization', 'Enhanced collaboration']
          }
        ]
      }
    ]
  }
];