import React from 'react';
import ServiceHeader from './sections/ServiceHeader';
import ServiceGrid from './sections/ServiceGrid';
import GlowingBorder from './animations/GlowingBorder';

const Services = () => {
  return (
    <div id="core-services" className="bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ServiceHeader />
        <GlowingBorder>
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8">
            <ServiceGrid />
          </div>
        </GlowingBorder>
      </div>
    </div>
  );
};

export default Services;