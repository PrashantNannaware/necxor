import React from 'react';
import { Shield, Bot, Globe, Cpu } from 'lucide-react';
import NavigationButton from './common/NavigationButton';
import CyberPattern from './effects/CyberPattern';
import InteractiveGrid from './effects/InteractiveGrid';
import ServiceIcon from './common/ServiceIcon';
import TypewriterText from './animations/TypewriterText';
import { motion } from 'framer-motion';

const Hero = () => {
  const services = [
    {
      icon: <Bot size={32} />,
      title: 'AI/ML',
      description: 'Advanced artificial intelligence solutions',
    },
    {
      icon: <Shield size={32} />,
      title: 'Security',
      description: 'Next-gen cybersecurity protection',
    },
    {
      icon: <Globe size={32} />,
      title: 'Cloud',
      description: 'Secure cloud infrastructure',
    },
    {
      icon: <Cpu size={32} />,
      title: 'DevOps',
      description: 'Automated deployment pipelines',
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <CyberPattern />
      <InteractiveGrid />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Next-Gen Cyber
              </span>
              <br />
              <span className="text-white">Operations</span>
            </h1>
            <div className="text-xl text-gray-300 mb-8">
              <TypewriterText
                text="Empowering businesses with advanced AI-driven cybersecurity solutions for the next generation of digital threats."
                delay={30}
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <NavigationButton
                variant="primary"
                targetSection="core-services"
                icon="arrow"
              >
                Get Started
              </NavigationButton>
              <NavigationButton
                variant="secondary"
                targetSection="about-us"
                icon="external"
              >
                Learn More
              </NavigationButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <ServiceIcon
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;