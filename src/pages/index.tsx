import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import HeroSection from '../components/homepage/HeroSection';
import FeaturesSection from '../components/homepage/FeaturesSection';

export default function HomePage() {

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