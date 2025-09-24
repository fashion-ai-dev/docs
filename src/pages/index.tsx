import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import HeroSection from '../components/homepage/HeroSection';
import FeaturesSection from '../components/homepage/FeaturesSection';
import CTASection from '../components/homepage/CTASection';

export default function HomePage() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={translate({message: 'Fashion AI Documentation'})}
      description={translate({message: 'Complete guide to integrate Fashion AI into your applications'})}>
      <div style={{minHeight: '100vh'}}>
        <HeroSection />
        <FeaturesSection />
      </div>
    </Layout>
  )
}