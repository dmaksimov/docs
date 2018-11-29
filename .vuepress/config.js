module.exports = {
  base: '/',
  title: 'Directus Docs',
  description: 'The All-New Directus 7. Future-Proof Headless CMS for Managing Custom Database Content.',
  ga: 'UA-24637628-7',
  plugins: [
    '@vuepress/medium-zoom'
  ],
  head: [
    ['link', { rel: "manifest",  href: "/site.webmanifest" }],
    ['link', { rel: "mask-icon",  href: "/safari-pinned-tab.svg", color: "#5bbad5" }],
    ['link', { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" }],
    ['link', { rel: "apple-touch-icon", type: "image/x-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['meta', { name: "application-name", content: "Directus Docs" }],
    ['meta', { name: "theme-color", content: "#263238" }],
    ['meta', { name: "apple-mobile-web-app-title", content: "Directus Docs" }],
    ['meta', { name: "msapplication-TileColor", content: "#263238" }],
    ['meta', { name: "msapplication-config", content: "/browserconfig.xml" }]
  ],
  themeConfig: {
    nav: [
      { text: 'Website', link: 'https://directus.io' },
      { text: 'Cloud', link: 'https://directus.cloud' },
      { text: 'Demo', link: 'https://directus.app' }
    ],
    sidebarDepth: 1,
    // 🧠 📡 🤖 ✨ 💥 🔥 🌈 ⭐️ 🍄 🍹 🎱 🎨 🏆 🚨 🚀 💡 ⚙️ 🔮 🛠 🔑 🎁 🎈 🎀 ❤️ 💯
    sidebar: [
      {
        title: '🐰 Getting Started',
        collapsable: false,
        children: [
          ['/getting-started/about-directus', 'Introduction'],
          '/getting-started/installation',
          '/getting-started/concepts',
          ['/getting-started/contributing', 'Contributing'],
          '/getting-started/troubleshooting',
          '/getting-started/supporting-directus',
        ]
      },
      {
        title: '📖 Guides',
        collapsable: true,
        children: [
          '/guides/auth',
          '/guides/cli',
          '/guides/collections',
          '/guides/database',
          '/guides/field-types',
          '/guides/fields',
          ['/guides/i18n', 'Internationalization'],
          '/guides/permissions',
          '/guides/relationships',
          '/guides/roles',
          '/guides/settings',
          '/guides/sso',
          '/guides/status',
          '/guides/styleguide',
          '/guides/thumbnailer',
          '/guides/upgrading',
          '/guides/user-guide',
        ]
      },
      {
        title: '🚀 API Reference',
        collapsable: true,
        children: [
          '/api-reference/',
        ]
      },
      {
        title: '⚡️ SDKs',
        collapsable: true,
        children: [
          ['/sdk/js', 'Javascript'],
        ]
      },
      {
        title: '🦄 Extensions',
        collapsable: true,
        children: [
          ['/extensions/', 'Introduction'],
          '/extensions/app-customization',
          '/extensions/architecture',
          '/extensions/auth-providers',
          '/extensions/custom-endpoints',
          '/extensions/hooks',
          '/extensions/interfaces',
          '/extensions/layouts',
          '/extensions/pages',
          '/extensions/storage-adapters',
        ]
      },
      {
        title: '🚧 Advanced',
        collapsable: true,
        children: [
          ['/advanced/app/install', 'Standalone App'],
          ['/advanced/api/install', 'Standalone API'],
        ]
      }
      // {
      //   title: 'API',
      //   collapsable: true,
      //   children: [
      //     ['/api/reference', 'API Reference'],
      //     ['/', '┄┄┄┄┄┄┄┄┄┄'],
      //     ['/api/admin/', 'Admin Guide'],
      //     ['/api/admin/install', 'Installing'],
      //     ['/api/admin/update', 'Updating'],
      //     ['/api/admin/configure', 'Configuring'],

      //     ['/', '┄┄┄┄┄┄┄┄┄┄'],
      //     ['/api/contributor/', 'Contributor Guide'],
      //     ['/api/contributor/codebase-overview', 'Codebase Overview'],
      //     ['/api/contributor/database-overview', 'Database Overview'],
      //     ['/api/contributor/resources', 'Resources'],
      //     ['/api/contributor/troubleshooting', 'Troubleshooting']
      //   ]
      // },
      // {
      //   title: 'Application',
      //   collapsable: true,
      //   children: [
      //     ['/app/user-guide', 'User Guide'],
      //     ['/', '┄┄┄┄┄┄┄┄┄┄'],
      //     ['/app/admin/', 'Admin Guide'],
      //     ['/app/admin/install', 'Installing'],
      //     ['/app/admin/update', 'Updating'],
      //     ['/app/admin/troubleshooting', 'Troubleshooting'],
      //     ['/app/admin/collections', 'Collections'],
      //     ['/app/admin/fields', 'Fields'],
      //     ['/app/admin/relationships', 'Relationships'],
      //     ['/app/admin/status', 'Status'],
      //     ['/app/admin/roles', 'Roles'],
      //     ['/', '┄┄┄┄┄┄┄┄┄┄'],
      //     ['/app/contributor/', 'Contributor Guide'],
      //     ['/app/contributor/install-dev', 'Development Environment'],
      //     ['/app/contributor/helpers', 'Helpers'],
      //     ['/app/contributor/i18n', 'Internationalization'],
      //     ['/app/contributor/resources', 'Resources'],
      //     ['/app/contributor/troubleshooting', 'Troubleshooting']
      //   ]
      // }

    ],
    lastUpdated: 'Last Updated',
    repo: 'directus/docs',
    docsDir: '',
    editLinks: true
  }
};
