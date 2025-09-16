import React from 'react';
import Link from '@docusaurus/Link';
import { BookOpen, Code, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="homepage-hero">
      <div className="homepage-container homepage-section" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
        <div style={{maxWidth: '64rem', margin: '0 auto', textAlign: 'center'}}>
          <div className="homepage-badge">
            <Zap style={{width: '0.75rem', height: '0.75rem', marginRight: '0.25rem'}} />
            Powered by AI
          </div>
          <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: '1.2'}}>
            API de Personalização para <span style={{color: 'var(--ifm-color-primary)'}}>E-commerce de Moda</span>
          </h1>
          <p style={{fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem auto', lineHeight: '1.6', opacity: 0.8}}>
            Transforme sua loja online com recomendações inteligentes, busca semântica avançada e analytics de moda
            impulsionados por IA.
          </p>
          <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', alignItems: 'center'}}>
            <Link to="docs/intro" className="homepage-button">
              <BookOpen style={{width: '1rem', height: '1rem'}} />
              Ver Documentação
            </Link>
            <Link to="https://www.generativecrm.com/" className="homepage-button">
              <BookOpen style={{width: '1rem', height: '1rem'}} />
              Saiba mais
            </Link>
          </div>
          <div style={{marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', fontSize: '0.875rem', flexWrap: 'wrap'}}>
            <div className="homepage-status-indicator">
              <div className="homepage-status-dot" />
              API sempre disponível
            </div>
            <div className="homepage-status-indicator">
              <Code style={{width: '0.75rem', height: '0.75rem'}} />
              RESTful & GraphQL
            </div>
            <div className="homepage-status-indicator">
              <Zap style={{width: '0.75rem', height: '0.75rem'}} />
              Resposta &lt; 100ms
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}