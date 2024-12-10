import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
        <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <Mail className="text-cyan-400 mr-4" />
            <div>
              <p className="text-gray-300">Email</p>
              <a href="mailto:contactnecxor@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                contactnecxor@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <Phone className="text-cyan-400 mr-4" />
            <div>
              <p className="text-gray-300">Phone</p>
              <a href="tel:+918830017120" className="text-white hover:text-cyan-400 transition-colors">
                +91-8830017120
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="text-cyan-400 mr-4" />
            <div>
              <p className="text-gray-300">Address</p>
              <p className="text-white">705 Celosia Nagpur Maharashtra India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
        <div className="flex items-center mb-4">
          <Clock className="text-cyan-400 mr-2" />
          <h3 className="text-xl font-semibold text-white">Business Hours</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-gray-300">Monday - Friday</p>
            <p className="text-white">9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-300">Saturday</p>
            <p className="text-white">10:00 AM - 4:00 PM</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-300">Sunday</p>
            <p className="text-white">Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;