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
  userGuideSidebar: [
    'user-guide/getting-started',
    {
      type: 'category',
      label: 'Recommendations',
      items: [
        'user-guide/recomendations/index',
        'user-guide/recomendations/how-our-ai-works',
        {
          type: 'category',
          label: 'Search',
          items: [
            'user-guide/recomendations/search/index',
            'user-guide/recomendations/search/smart-search',
            'user-guide/recomendations/search/detailed-search',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Behaviors',
      items: [
        'user-guide/behaviors/index',
        'user-guide/behaviors/how-to-use',
        {
          type: 'category',
          label: 'Integrations',
          items: [
            'user-guide/behaviors/integrations/index',
            'user-guide/behaviors/integrations/hubspot',
            'user-guide/behaviors/integrations/meta',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'SEO Content',
      items: [
        'user-guide/seo-content/index',
        'user-guide/seo-content/syncing',
        'user-guide/seo-content/translating',
      ],
    },
    {
      type: 'category',
      label: 'Taxonomy',
      items: [
        'user-guide/taxonomy/index',
        'user-guide/taxonomy/versions',
      ],
    },
    {
      type: 'category',
      label: 'Vision Enrichment',
      items: [
        'user-guide/vision-enrichment/index',
      ],
    },
  ],

  developerGuideSidebar: [
    'developer-guide/getting-started',
    {
      type: 'category',
      label: 'Initial Setup',
      items: [
        'developer-guide/initial-setup/index',
        {
          type: 'category',
          label: 'API',
          items: [
            'developer-guide/initial-setup/api/index',
          ],
        },
        {
          type: 'category',
          label: 'Integrations',
          items: [
            'developer-guide/initial-setup/integrations/index',
            'developer-guide/initial-setup/integrations/shopify-integration',
            'developer-guide/initial-setup/integrations/vtex-integration',
          ],
        },
        {
          type: 'category',
          label: 'Spreadsheet',
          items: [
            'developer-guide/initial-setup/spreadsheet/index',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Recommendations & Search',
      items: [
        'developer-guide/recommendations-search/index',
        'developer-guide/recommendations-search/api-endpoints',
        {
          type: 'category',
          label: 'Search',
          items: [
            'developer-guide/recommendations-search/search/index',
            'developer-guide/recommendations-search/search/overview',
            'developer-guide/recommendations-search/search/detailed-search',
            'developer-guide/recommendations-search/search/examples',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Analytics',
      items: [
        'developer-guide/analytics/index',
        'developer-guide/analytics/google-analytics',
        'developer-guide/analytics/google-tag-manager',
      ],
    },
    {
      type: 'category',
      label: 'Customization Reference',
      items: [
        'developer-guide/customization-reference/index',
        'developer-guide/customization-reference/authentication',
        'developer-guide/customization-reference/ui-integration',
        'developer-guide/customization-reference/vm-builder',
      ],
    },
  ],
};

export default sidebars;
