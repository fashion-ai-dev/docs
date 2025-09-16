import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '../components/homepage/HeroSection';
import FeaturesSection from '../components/homepage/FeaturesSection';
import CTASection from '../components/homepage/CTASection';

export default function HomePage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="FashionAI"
      description="API de Personalização para E-commerce de Moda">
      <div style={{minHeight: '100vh'}}>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </div>
    </Layout>
  )
}