import React from 'react';
import { Sparkles, Search, TrendingUp } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <Sparkles style={{width: '1.5rem', height: '1.5rem'}} />,
    iconType: 'primary' as const,
    title: 'Recomendações Inteligentes',
    description: 'Sistema de recomendação baseado em IA que analisa preferências, histórico de compras e tendências para sugerir produtos personalizados para cada cliente.',
    linkColor: 'var(--ifm-color-primary)'
  },
  {
    icon: <Search style={{width: '1.5rem', height: '1.5rem'}} />,
    iconType: 'secondary' as const,
    title: 'Busca Semântica Avançada',
    description: 'Busca inteligente que entende descrições naturais como "vestido azul para casamento" e encontra produtos usando processamento de linguagem natural e análise de imagens.',
    linkColor: '#059669'
  },
  {
    icon: <TrendingUp style={{width: '1.5rem', height: '1.5rem'}} />,
    iconType: 'accent' as const,
    title: 'SEO e Analytics de Moda',
    description: 'Otimização automática para mecanismos de busca com tags especializadas em moda, análise de tendências e relatórios detalhados de performance do catálogo.',
    linkColor: '#d97706'
  }
];

export default function FeaturesSection() {
  return (
    <section className="homepage-section">
      <div className="homepage-container">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1rem'}}>
            Recursos Principais
          </h2>
          <p style={{fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto', opacity: 0.8}}>
            Tudo que você precisa para criar experiências de compra personalizadas e inteligentes
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}