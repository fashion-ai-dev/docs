import React, { useState } from 'react';
import Translate from '@docusaurus/Translate';
import { Sparkles, Search, TrendingUp, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: <Sparkles size={24} />,
      iconType: 'primary' as const,
      title: <Translate id="features.smartRecommendations.title">Smart Recommendations</Translate>,
      description: <Translate id="features.smartRecommendations.description">AI-powered recommendation system that analyzes preferences, purchase history, and trends to suggest personalized products for each customer.</Translate>,
      linkColor: 'var(--ifm-color-primary)',
      linkUrl: '/docs/developer-guide/api-endpoints'
    },
    {
      icon: <Search size={24} />,
      iconType: 'secondary' as const,
      title: <Translate id="features.semanticSearch.title">Advanced Semantic Search</Translate>,
      description: <Translate id="features.semanticSearch.description">Intelligent search that understands natural descriptions like "blue dress for wedding" and finds products using natural language processing and image analysis.</Translate>,
      linkColor: '#059669',
      linkUrl: '/docs/search'
    },
    {
      icon: <TrendingUp size={24} />,
      iconType: 'accent' as const,
      title: <Translate id="features.seo.title">Fashion SEO</Translate>,
      description: <Translate id="features.seo.description">Automatic search engine optimization with specialized fashion tags and metadata for better product visibility and search rankings.</Translate>,
      linkColor: '#d97706',
      linkUrl: '/docs/user-guide/seo'
    },
    {
      icon: <BarChart3 size={24} />,
      iconType: 'primary' as const,
      title: <Translate id="features.analytics.title">Analytics & Insights</Translate>,
      description: <Translate id="features.analytics.description">Comprehensive analytics dashboard with trend analysis, performance metrics, and detailed catalog performance reports.</Translate>,
      linkColor: '#7c3aed',
      linkUrl: '/docs/developer-guide/analytics'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (features.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length - 2) % (features.length - 2));
  };

  const visibleFeatures = features.slice(currentIndex, currentIndex + 3);

  return (
    <section className="homepage-section">
      <div className="homepage-container">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1rem'}}>
            <Translate id="features.title">Key Features</Translate>
          </h2>
          <p style={{fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto', opacity: 0.8}}>
            <Translate id="features.subtitle">Everything you need to create personalized and intelligent shopping experiences</Translate>
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '72rem', margin: '0 auto', padding: '0 4rem' }}>
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            style={{
              background: 'var(--ifm-color-primary)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease',
              opacity: currentIndex === 0 ? '0.5' : '1'
            }}
            onMouseEnter={(e) => {
              if (currentIndex !== 0) {
                e.currentTarget.style.transform = 'scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            disabled={currentIndex === 0}
            aria-label="Previous features"
            className="carousel-nav-button carousel-prev"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            style={{
              background: 'var(--ifm-color-primary)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease',
              opacity: currentIndex >= features.length - 3 ? '0.5' : '1'
            }}
            onMouseEnter={(e) => {
              if (currentIndex < features.length - 3) {
                e.currentTarget.style.transform = 'scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            disabled={currentIndex >= features.length - 3}
            aria-label="Next features"
            className="carousel-nav-button carousel-next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Feature Cards */}
          <div className="homepage-grid">
            {visibleFeatures.map((feature, index) => (
              <FeatureCard
                key={currentIndex + index}
                icon={feature.icon}
                iconType={feature.iconType}
                title={feature.title}
                description={feature.description}
                linkColor={feature.linkColor}
                linkUrl={feature.linkUrl}
              />
            ))}
          </div>

          {/* Mobile: Show all features in single column */}
          <div className="features-mobile-grid" style={{
            display: 'none',
            width: '100%',
            padding: '0 1rem'
          }}>
            {features.map((feature, index) => (
              <FeatureCard
                key={`mobile-${index}`}
                icon={feature.icon}
                iconType={feature.iconType}
                title={feature.title}
                description={feature.description}
                linkColor={feature.linkColor}
                linkUrl={feature.linkUrl}
              />
            ))}
          </div>

          {/* Dots Indicator - Hidden on mobile */}
          <div className="carousel-dots" style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
            gap: '0.5rem'
          }}>
            {Array.from({ length: features.length - 2 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: currentIndex === index ? 'var(--ifm-color-primary)' : 'rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}