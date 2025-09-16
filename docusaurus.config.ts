import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Fashionai',
  tagline: 'Data with Style',
  favicon: 'img/logo.svg',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://docs.generativecrm.com',
  baseUrl: '/',

  organizationName: 'fashion-ai-dev',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt', 'es'],
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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    navbar: {
      title: '',
      logo: {
        alt: 'Fashionai Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'components.NavigationBar.documentation',
        },
        {
          href: 'https://app.generativecrm.com',
          label: 'components.NavigationBar.platform',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/fashion-ai-dev/docs',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'footer.sections.documentation',
          items: [
            {
              label: 'footer.links.apiEndpoints',
              to: '/docs/api-endpoints',
            },
            {
              label: 'footer.links.uiIntegration',
              to: '/docs/ui-integration',
            },
            {
              label: 'footer.links.googleAnalytics',
              to: '/docs/google-analytics',
            },
            {
              label: 'footer.links.googleTagManager',
              to: '/docs/google-tag-manager',
            },
          ],
        },
        {
          title: 'footer.sections.development',
          items: [
            {
              label: 'footer.links.github',
              href: 'https://github.com/fashion-ai-dev/docs',
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
