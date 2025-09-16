import React from 'react';
import Translate from '@docusaurus/Translate';

export default function CTASection() {
  return (
    <section style={{padding: '6rem 0', backgroundColor: 'var(--ifm-background-color-secondary)'}}>
      <div className="homepage-container">
        <div style={{maxWidth: '48rem', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1.5rem'}}>
            <Translate>Ready to revolutionize your e-commerce?</Translate>
          </h2>
          <p style={{fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.8}}>
            <Translate>Start using FashionAI today and see conversion increases in minutes.</Translate>
          </p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            <button className="homepage-button">
              <Translate>Schedule Demo</Translate>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}