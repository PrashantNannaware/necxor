import React from 'react';
import { Bot, Code2, Globe, Database, Monitor, Network, Shield, Cpu } from 'lucide-react';
import ServiceCard from './ServiceCard';
import FadeIn from '../animations/FadeIn';

const services = [
  {
    icon: <Bot />,
    title: "AI/ML Solutions",
    description: "Advanced artificial intelligence and machine learning solutions for predictive security",
    delay: 0.1
  },
  {
    icon: <Code2 />,
    title: "Software Development",
    description: "Secure software development with built-in security measures",
    delay: 0.2
  },
  {
    icon: <Globe />,
    title: "Cloud Security",
    description: "Comprehensive cloud infrastructure protection and monitoring",
    delay: 0.3
  },
  {
    icon: <Database />,
    title: "Data Protection",
    description: "Enterprise-grade data encryption and security protocols",
    delay: 0.4
  },
  {
    icon: <Shield />,
    title: "Threat Detection",
    description: "Real-time threat detection powered by advanced AI algorithms",
    delay: 0.5
  },
  {
    icon: <Cpu />,
    title: "AI Automation",
    description: "Automated security processes with intelligent decision making",
    delay: 0.6
  },
  {
    icon: <Monitor />,
    title: "Security Monitoring",
    description: "24/7 real-time security monitoring and incident response",
    delay: 0.7
  },
  {
    icon: <Network />,
    title: "Network Security",
    description: "Advanced network protection against sophisticated cyber threats",
    delay: 0.8
  }
];

const ServiceGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <FadeIn key={index} delay={service.delay} direction={index % 2 === 0 ? 'left' : 'right'}>
          <ServiceCard
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        </FadeIn>
      ))}
    </div>
  );
};

export default ServiceGrid;