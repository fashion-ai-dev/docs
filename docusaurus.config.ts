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
    defaultLocale: 'en',
    locales: ['en','pt','es'],
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
          label: 'Documentação',
        },
        {
          href: 'https://app.generativecrm.com',
          label: 'Plataforma',
          position: 'right',
        },
        {
          href: '#',
          className: 'custom-locale-icon',
          'aria-label': 'Language selector',
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
          title: 'Documentação',
          items: [
            {
              label: 'API Endpoints',
              to: '/docs/api-endpoints',
            },
            {
              label: 'Integração UI',
              to: '/docs/ui-integration',
            },
            {
              label: 'Google Analytics',
              to: '/docs/google-analytics',
            },
            {
              label: 'Google Tag Manager',
              to: '/docs/google-tag-manager',
            },
          ],
        },
        {
          title: 'Desenvolvimento',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/fashion-ai-dev/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fashionai. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
