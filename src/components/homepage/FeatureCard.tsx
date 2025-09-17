import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  iconType: 'primary' | 'secondary' | 'accent';
  title: React.ReactNode;
  description: React.ReactNode;
  linkColor: string;
}

export default function FeatureCard({ icon, iconType, title, description, linkColor }: FeatureCardProps) {
  return (
    <div className="homepage-card">
      <div className={`homepage-card-icon ${iconType}`}>
        {icon}
      </div>
      <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>{title}</h3>
      <p style={{marginBottom: '1.5rem', lineHeight: '1.6', opacity: 0.8}}>
        {description}
      </p>
      <div style={{display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: linkColor, fontWeight: 500}}>
        Saiba mais
        <ArrowRight style={{width: '0.75rem', height: '0.75rem', marginLeft: '0.25rem', transition: 'transform 0.3s ease'}} />
      </div>
    </div>
  );
}