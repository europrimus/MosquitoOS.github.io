// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const importPartial = require('remark-import-partial');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mosquito velomobile open source',
  tagline: 'Un vélomobile opensource et auto-constructible',
  url: 'https://www.mosquito-velomobiles.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MosquitoOS',
  projectName: 'MosquitoOS.github.io', 
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
	  remarkPlugins: [importPartial, require('mdx-mermaid'), require('plugin-image-zoom')],
          editUrl: 'https://github.com/MosquitoOS/MosquitoOS.github.io/tree/master/docs/',
          editLocalizedFiles: false,
	  editCurrentVersion: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/MosquitoOS/MosquitoOS.github.io/tree/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Mosquito OS',
        logo: {
          alt: 'Mosquito OS logo',
          src: 'img/logo.svg',
	  srcDark: 'img/logo-dark.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guide',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
	  {to: '/communaute', label: 'Communauté', position: 'left'},
          {
            href: 'https://github.com/MosquitoOS/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/KPn7SQePVv',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MosquitoOS',
              },
            ],
          },
        ],
        copyright: `CC-BY-SA ${new Date().getFullYear()} Mosquito OS. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
