import React from 'react';
import FadeIn from '../animations/FadeIn';

const ServiceHeader: React.FC = () => {
  return (
    <FadeIn>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Our Core Services
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Next-generation cybersecurity solutions powered by advanced AI technology
        </p>
      </div>
    </FadeIn>
  );
}

export default ServiceHeader;