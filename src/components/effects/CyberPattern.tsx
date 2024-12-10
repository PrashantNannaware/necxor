import React from 'react';
import { motion } from 'framer-motion';

const CyberPattern = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute bottom-40 right-40 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default CyberPattern;