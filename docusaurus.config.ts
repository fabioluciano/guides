import { themes as prismThemes } from 'prism-react-renderer';
import { spawnSync } from 'node:child_process';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const hasGitHistory =
  spawnSync('git', ['rev-parse', '--verify', 'HEAD'], {
    stdio: 'ignore',
  }).status === 0;

const projectName = 'guides';
const githubPagesBaseUrl = `/${projectName}/`;

const config: Config = {
  title: 'Nebulosa',
  tagline: 'Minha nuvem de conhecimento em expansão 🌌',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://fabioluciano.github.io',
  baseUrl: githubPagesBaseUrl,

  organizationName: 'fabioluciano',
  projectName,

  // Wiki under construction - allow broken links to future content
  onBrokenLinks: 'warn',

  // Markdown features
  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: `${githubPagesBaseUrl}img/logo.svg`,
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: `${githubPagesBaseUrl}manifest.json`,
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#8b5cf6',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#8b5cf6',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: `${githubPagesBaseUrl}img/logo.svg`,
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: hasGitHistory,
          showLastUpdateAuthor: hasGitHistory,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '🌌 Nebulosa',
      logo: undefined,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Anotações',
        },
        {
          href: 'https://github.com/fabioluciano/guides',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Conteúdo',
          items: [
            {
              label: 'Início',
              to: '/docs/intro',
            },
            {
              label: 'Kubernetes',
              to: '/docs/kubernetes',
            },
          ],
        },
        {
          title: 'Certificações',
          items: [
            {
              label: 'CKA',
              to: '/docs/kubernetes/certifications/cka',
            },
            {
              label: 'CKAD',
              to: '/docs/kubernetes/certifications/ckad',
            },
            {
              label: 'CKS',
              to: '/docs/kubernetes/certifications/cks',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/fabioluciano/guides',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nebulosa 🌌 - Wiki pessoal de estudos`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'bash',
        'yaml',
        'json',
        'docker',
        'nginx',
        'python',
        'go',
        'rust',
        'toml',
        'ini',
        'diff',
      ],
      defaultLanguage: 'bash',
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    metadata: [
      {name: 'keywords', content: 'kubernetes, cloud native, devops, certificações, cka, ckad, cks'},
      {name: 'author', content: 'Fábio Luciano'},
    ],
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
      options: {
        maxTextSize: 50000,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
