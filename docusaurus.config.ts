import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FashionAI',
  tagline: 'AI-powered fashion recommendations and intelligent search for e-commerce',
  favicon: 'img/favicon.png',
  url: 'https://docs.generativecrm.com',
  baseUrl: '/',
  organizationName: 'fashion-ai-dev',
  projectName: 'docs',
  onBrokenLinks: 'warn',
  markdown: {
    format: 'mdx',
    mermaid: false,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
      pt: {
        label: 'Português',
        direction: 'ltr',
        htmlLang: 'pt-BR',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es',
      },
    },
  },


  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/fashion-ai-dev/docs/edit/main/',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.8,
          ignorePatterns: ['/docs/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    metadata: [
      {name: 'keywords', content: 'fashion AI, e-commerce API, product recommendations, semantic search, machine learning'},
      {name: 'description', content: 'Complete documentation for FashionAI - AI-powered fashion recommendations and intelligent search API for e-commerce platforms'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'FashionAI Documentation'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@fashion_ai'},
    ],
    algolia: {
      container: '#docsearch',
      appId: 'I0A754A8VU',
      apiKey: 'edd9c7af6222bee311b4803e1bdfc042',
      keyboardShortcuts: { 'Ctrl/Cmd+K': false, '/' : false },
      indexName: 'documentation',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
      insights: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'FashionAI Logo',
        src: 'img/fashionai-logo.png',
        srcDark: 'img/fashionai-logo-white.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'userGuideSidebar',
          position: 'right',
          label: 'components.NavigationBar.userGuide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developerGuideSidebar',
          position: 'right',
          label: 'components.NavigationBar.developerGuide',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/fashion-ai-dev/docs',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
          rel: 'noopener noreferrer',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'footer.sections.userGuide',
          items: [
            {
              label: 'footer.links.userGettingStarted',
              to: '/docs/user-guide/getting-started',
            },
            {
              label: 'footer.links.integrations',
              to: '/docs/user-guide/integrations/vtex',
            },
            {
              label: 'footer.links.recommendations',
              to: '/docs/user-guide/recomendations',
            },
            {
              label: 'footer.links.profiling',
              to: '/docs/user-guide/profiling',
            },
            {
              label: 'footer.links.behaviors',
              to: '/docs/user-guide/behaviors',
            },
          ],
        },
        {
          title: 'footer.sections.developerGuide',
          items: [
            {
              label: 'footer.links.devGettingStarted',
              to: '/docs/developer-guide/getting-started',
            },
            {
              label: 'footer.links.authentication',
              to: '/docs/developer-guide/authentication',
            },
            {
              label: 'footer.links.apiEndpoints',
              to: '/docs/developer-guide/recommendations-search/api-endpoints',
            },
            {
              label: 'footer.links.search',
              to: '/docs/developer-guide/recommendations-search/search/overview',
            },
            {
              label: 'footer.links.analytics',
              to: '/docs/developer-guide/analytics',
            },
          ],
        },
        {
          title: 'footer.sections.features',
          items: [
            {
              label: 'footer.links.seoContent',
              to: '/docs/user-guide/seo-content',
            },
            {
              label: 'footer.links.taxonomy',
              to: '/docs/user-guide/taxonomy',
            },
            {
              label: 'footer.links.visionEnrichment',
              to: '/docs/user-guide/vision-enrichment',
            },
            {
              label: 'footer.links.vmBuilder',
              to: '/docs/developer-guide/recommendations-search/vm-builder',
            },
          ],
        },
        {
          title: 'footer.sections.platform',
          items: [
            {
              label: 'footer.links.dashboard',
              href: 'https://app.generativecrm.com',
              rel: 'noopener noreferrer',
            },
            {
              label: 'footer.links.website',
              href: 'https://www.generativecrm.com',
              rel: 'noopener noreferrer',
            },
            {
              label: 'footer.links.contact',
              href: 'mailto:support@generativecrm.com',
            },
          ],
        },
      ],
      copyright: 'footer.copyright',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
