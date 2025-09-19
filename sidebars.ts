import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',

    // Seção para usuários não técnicos
    {
      type: 'category',
      label: '📚 User Guide',
      items: [
        'getting-started',
        'platform-overview',
        'catalog-management',
        'seo-recommendations',
        'analytics-reports'
      ],
    },

    // Seção para desenvolvedores
    {
      type: 'category',
      label: '🛠️ Developer Guide',
      items: [
        'api-endpoints',
        'authentication',
        {
          type: 'category',
          label: 'Search API',
          items: [
            'search/overview',
            'search/examples'
          ],
        },
        'ui-integration',
        'webhooks',
        'sdks'
      ],
    },

    // Seção para integração/analytics (ponte)
    {
      type: 'category',
      label: '📊 Integration & Analytics',
      items: [
        'google-analytics',
        'google-tag-manager',
        'integration-examples'
      ],
    },
  ],
};

export default sidebars;
