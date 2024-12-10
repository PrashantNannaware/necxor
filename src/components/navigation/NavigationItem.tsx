import React from 'react';
import { MenuItem } from '../../types/navigation';

interface NavigationItemProps {
  item: MenuItem;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ item }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
        {item.title}
      </h3>
      {item.description && (
        <p className="text-sm text-gray-400 mb-2">{item.description}</p>
      )}
      {item.items.length > 0 && (
        <div className="space-y-6 pl-4">
          {item.items.map((subItem, index) => (
            <div key={index} className="space-y-3">
              <h4 className="text-cyan-400 font-medium">{subItem.title}</h4>
              <p className="text-gray-300 text-sm">{subItem.description}</p>
              
              {subItem.features && (
                <div className="mt-2 space-y-2">
                  <h5 className="text-sm font-medium text-gray-300">Key Features:</h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {subItem.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        <span className="text-cyan-400">{feature.name}</span>
                        <p className="text-gray-400 text-xs">{feature.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {subItem.audience && (
                <div className="mt-2">
                  <h5 className="text-sm font-medium text-gray-300">Target Audience:</h5>
                  <p className="text-gray-400 text-sm">{subItem.audience}</p>
                </div>
              )}
              
              {subItem.benefits && (
                <div className="mt-2">
                  <h5 className="text-sm font-medium text-gray-300">Benefits:</h5>
                  <ul className="list-disc list-inside text-gray-400 text-sm">
                    {subItem.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationItem;