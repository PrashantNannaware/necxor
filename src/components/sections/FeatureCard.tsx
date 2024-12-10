import React from 'react';
import Card from '../common/Card';
import IconWrapper from '../common/IconWrapper';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card variant="feature">
    <IconWrapper icon={icon} size={32} />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </Card>
);

export default FeatureCard;