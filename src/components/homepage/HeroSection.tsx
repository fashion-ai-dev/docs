import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { Code, ArrowRight, Zap, User } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="homepage-hero">
      <div className="homepage-container homepage-section hero-section-padding">
        <div className="hero-content">
          <div className="homepage-badge ai-platform-badge">
            <Zap className="badge-icon" />
            <Translate>API Platform</Translate>
          </div>
          <h1 className="hero-title">
            Fashion AI <span className="documentation-gradient"><Translate>Documentation</Translate></span>
          </h1>
          <p className="hero-description">
            <Translate>Complete guide to integrate Fashion AI into your applications. Learn how to use our RESTful API endpoint.</Translate>
          </p>
          <div className="hero-buttons">
            <Link to="/docs/developer-guide/getting-started" className="homepage-button primary hero-button-shadow">
              <Code className="button-icon" />
              <Translate>Documentation</Translate>
              <ArrowRight className="arrow-icon" />
            </Link>
            <Link to="/docs/user-guide/getting-started" className="homepage-button secondary-outline">
              <User className="button-icon" />
              <Translate>Platform Tutorial</Translate>
            </Link>
          </div>
          <div className="hero-link-container">
            <a
              href="https://www.generativecrm.com/"
              className="homepage-link-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Translate>Learn more about Fashion AI</Translate>
              <ArrowRight className="link-arrow" />
            </a>
          </div>
          <div className="hero-status-indicators">
            <div className="homepage-status-indicator">
              <div className="homepage-status-dot pulsing" />
              <span className="status-text"><Translate>API Available</Translate></span>
            </div>
            <div className="homepage-status-indicator">
              <Code className="status-icon primary-color" />
              <span className="status-text"><Translate>RESTful</Translate></span>
            </div>
            <div className="homepage-status-indicator">
              <Zap className="status-icon accent-color" />
              <span className="status-text"><Translate>Fast Response</Translate></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}