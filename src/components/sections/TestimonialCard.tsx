import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  testimonial,
  image
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6"
  >
    <Quote className="text-cyan-400 mb-4" size={32} />
    <p className="text-gray-300 mb-6 italic">{testimonial}</p>
    <div className="flex items-center">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="text-white font-medium">{name}</h4>
        <p className="text-gray-400 text-sm">
          {role} at {company}
        </p>
      </div>
    </div>
  </motion.div>
);

export default TestimonialCard;