import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { features } from './features';
import '../Styles/FeatureCard.css';

const FeaturesSection = () => (
  <div className="features-container">
    <h1>Our Impeccable Features</h1>
    <div className="features-grid">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  </div>
);

export default FeaturesSection;
