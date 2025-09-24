import React from 'react';
import Translate from '@docusaurus/Translate';
import { Sparkles, Search, TrendingUp } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Sparkles style={{width: '1.5rem', height: '1.5rem'}} />,
      iconType: 'primary' as const,
      title: <Translate>Smart Recommendations</Translate>,
      description: <Translate>AI-powered recommendation system that analyzes preferences, purchase history, and trends to suggest personalized products for each customer.</Translate>,
      linkColor: 'var(--ifm-color-primary)',
      linkUrl: '/docs/developer-guide/api-endpoints'
    },
    {
      icon: <Search style={{width: '1.5rem', height: '1.5rem'}} />,
      iconType: 'secondary' as const,
      title: <Translate>Advanced Semantic Search</Translate>,
      description: <Translate>Intelligent search that understands natural descriptions like "blue dress for wedding" and finds products using natural language processing and image analysis.</Translate>,
      linkColor: '#059669',
      linkUrl: '/docs/developer-guide/search/overview'
    },
    {
      icon: <TrendingUp style={{width: '1.5rem', height: '1.5rem'}} />,
      iconType: 'accent' as const,
      title: <Translate>Fashion SEO & Analytics</Translate>,
      description: <Translate>Automatic search engine optimization with specialized fashion tags, trend analysis, and detailed catalog performance reports.</Translate>,
      linkColor: '#d97706',
      linkUrl: '/docs/developer-guide/analytics/google-analytics'
    }
  ];

  return (
    <section className="homepage-section">
      <div className="homepage-container">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1rem'}}>
            <Translate>Key Features</Translate>
          </h2>
          <p style={{fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto', opacity: 0.8}}>
            <Translate>Everything you need to create personalized and intelligent shopping experiences</Translate>
          </p>
        </div>

        <div className="homepage-grid" style={{maxWidth: '72rem', margin: '0 auto'}}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              iconType={feature.iconType}
              title={feature.title}
              description={feature.description}
              linkColor={feature.linkColor}
              linkUrl={feature.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}