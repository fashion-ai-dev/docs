import React from 'react';

export default function CTASection() {
  return (
    <section style={{padding: '6rem 0', backgroundColor: 'var(--ifm-background-color-secondary)'}}>
      <div className="homepage-container">
        <div style={{maxWidth: '48rem', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1.5rem'}}>
            Pronto para revolucionar seu e-commerce?
          </h2>
          <p style={{fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.8}}>
            Comece a usar a FashionAI hoje mesmo e veja o aumento nas conversões em questão de minutos.
          </p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            <button className="homepage-button">
              Agendar Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}