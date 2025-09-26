import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { BookOpen, Code, ExternalLink, Zap, Users, User } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="homepage-hero">
      <div className="homepage-container homepage-section" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
        <div style={{margin: '0 1.5rem', textAlign: 'center'}}>
          <div className="homepage-badge ai-platform-badge">
            <Zap style={{width: '0.75rem', height: '0.75rem', marginRight: '0.25rem'}} />
            <Translate>API Platform</Translate>
          </div>
          <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.2'}}>
            Fashion AI <span className="documentation-gradient"><Translate>Documentation</Translate></span>
          </h1>
          <p style={{fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem auto', lineHeight: '1.6', opacity: 0.8}}>
            <Translate>Complete guide to integrate Fashion AI into your applications. Learn how to use our RESTful API endpoint.</Translate>
          </p>
          <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            <Link to="/docs/developer-guide/getting-started" className="homepage-button primary">
              <Code style={{width: '1rem', height: '1rem'}} />
              <Translate>Documentation</Translate>
            </Link>
            <Link to="/docs/user-guide/getting-started" className="homepage-button">
              <User style={{width: '1rem', height: '1rem'}} />
              <Translate>Platform Tutorial</Translate>
            </Link>
          </div>
          <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center'}}>
            <a href="https://www.generativecrm.com/" className="homepage-link" target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--ifm-color-primary)', textDecoration: 'none'}}>
              <ExternalLink style={{width: '0.875rem', height: '0.875rem'}} />
              <Translate>Learn more about Fashion AI</Translate>
            </a>
          </div>
          <div style={{marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', fontSize: '0.875rem', flexWrap: 'wrap'}}>
            <div className="homepage-status-indicator">
              <div className="homepage-status-dot" />
              <Translate>API Available</Translate>
            </div>
            <div className="homepage-status-indicator">
              <Code style={{width: '0.75rem', height: '0.75rem'}} />
              <Translate>RESTful</Translate>
            </div>
            <div className="homepage-status-indicator">
              <Zap style={{width: '0.75rem', height: '0.75rem'}} />
              <Translate>Fast Response</Translate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}