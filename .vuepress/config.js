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
    lastUpdated: 'Last Updated',
    repo: 'directus/docs',
    docsDir: '',
    editLinks: true,
    serviceWorker: true,
    hiddenLinks: [
      '/api-reference/reference.html',
    ],
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
          ['/getting-started/introduction', 'Introduction'],
          ['/getting-started/installation', 'Installation'],
          ['/getting-started/concepts', 'Concepts'],
          ['/getting-started/contributing', 'Contributing'],
          ['/getting-started/supporting-directus', 'Supporting Directus'],
          ['/getting-started/troubleshooting', 'Troubleshooting'],
        ]
      },
      {
        title: '📖 Guides',
        collapsable: true,
        children: [
          '/guides/user-guide',
          '/guides/auth',
          '/guides/cli',
          '/guides/collections',
          '/guides/database',
          '/guides/fields',
          '/guides/field-types',
          ['/guides/i18n', 'Internationalization'],
          '/guides/permissions',
          '/guides/relationships',
          '/guides/roles',
          '/guides/settings',
          '/guides/sso',
          '/guides/status',
          ['/guides/style-guide', 'Style Guide'],
          '/guides/thumbnailer',
          '/guides/upgrading',
        ]
      },
      {
        title: '🚀 API Reference',
        collapsable: true,
        children: [
          '/api-reference/reference',
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
          ['/advanced/other-install-methods', 'Other Install Methods'],
          ['/advanced/source', 'Local Dev Environment'],
          ['/advanced/server-setup', 'Server Setup'],
          ['/advanced/app/standalone', 'Application Standalone Install'],
          ['/advanced/app/configuration', 'Application Configuration'],
          ['/advanced/api/standalone', 'API Standalone Install'],
          ['/advanced/api/configuration', 'API Configuration'],
          ['/advanced/api/codebase', 'API Codebase'],
          // ['/advanced/deploying-versions', 'Deploying Versions'],
        ]
      }
    ]
  }
};
