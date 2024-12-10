import React from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import { Toaster } from 'sonner';

const Contact = () => {
  return (
    <div id="contact" className="bg-black py-24 relative">
      <Toaster position="top-right" />
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help secure your digital assets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;