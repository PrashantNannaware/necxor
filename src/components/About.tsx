import React from 'react';
import { Target, Zap, Users } from 'lucide-react';
import Card from './common/Card';
import IconWrapper from './common/IconWrapper';

const About = () => {
  return (
    <div id="about-us" className="bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            About NECXOR
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Leading the future of cybersecurity with innovative AI-driven solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card variant="feature">
            <IconWrapper icon={<Target />} />
            <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
            <p className="text-gray-400">
              To empower organizations with cutting-edge cybersecurity solutions that protect against evolving digital threats.
            </p>
          </Card>

          <Card variant="feature">
            <IconWrapper icon={<Zap />} />
            <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
            <p className="text-gray-400">
              To revolutionize cybersecurity through AI innovation and become the global leader in next-gen cyber operations.
            </p>
          </Card>

          <Card variant="feature">
            <IconWrapper icon={<Users />} />
            <h3 className="text-xl font-semibold text-white mb-2">Our Team</h3>
            <p className="text-gray-400">
              A diverse group of cybersecurity experts, AI specialists, and software engineers dedicated to your security.
            </p>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose NECXOR?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span className="text-gray-300">Industry-leading AI-powered security solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span className="text-gray-300">24/7 real-time threat monitoring and response</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span className="text-gray-300">Customized security strategies for your business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span className="text-gray-300">Continuous innovation and research in cybersecurity</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;