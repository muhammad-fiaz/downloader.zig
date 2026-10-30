import { defineConfig } from 'vitepress'
import llmstxt, { copyOrDownloadAsMarkdownButtons } from 'vitepress-plugin-llms'

export const SITE_URL = 'https://muhammad-fiaz.github.io/downloader.zig'
export const SITE_NAME = 'downloader.zig'
export const SITE_DESCRIPTION =
  'A production-ready, high-performance HTTP/HTTPS downloader library for Zig'

// Google Analytics and Google Tag Manager IDs
export const GA_ID = 'G-6BVYCRK57P'
export const GTM_ID = 'GTM-P4M9T8ZR'

// Google AdSense Client ID
export const ADSENSE_CLIENT_ID = 'ca-pub-2040560600290490'

// Microsoft Clarity Project ID
export const CLARITY_ID = 'z5vdzih779'

export default defineConfig({
  lang: 'en-US',
  title: SITE_NAME,
  titleTemplate: ':title | downloader.zig',
  description: SITE_DESCRIPTION,

  base: '/downloader.zig/',
  cleanUrls: false,
  lastUpdated: true,

  sitemap: {
    hostname: `${SITE_URL}/`,
  },

  vite: {
    plugins: [llmstxt()],
  },

  markdown: {
    config(md) {
      md.use(copyOrDownloadAsMarkdownButtons)
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/downloader.zig/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#f7a41d' }],
    ['meta', { name: 'author', content: 'Muhammad Fiaz' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'downloader.zig' }],
    ['meta', { property: 'og:description', content: SITE_DESCRIPTION }],
    ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'downloader.zig' }],
    ['meta', { name: 'twitter:description', content: SITE_DESCRIPTION }],

    // Google Analytics
    ['script', { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}` }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
    ],

    // Google Tag Manager (noscript fallback is injected after <body> in transformHtml)
    [
      'script',
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
    ],

    // Google AdSense
    [
      'script',
      {
        async: '',
        src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`,
        crossorigin: 'anonymous',
      },
    ],

    // Microsoft Clarity
    [
      'script',
      {},
      `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${CLARITY_ID}");`,
    ],
  ],

  transformHtml(html) {
    const noscript = `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
    return html.replace(/<body([^>]*)>/, `<body$1>\n    ${noscript}`)
  },

  transformPageData(pageData: any) {
    const pageTitle = pageData.title || SITE_NAME
    const pageDescription = pageData.description || SITE_DESCRIPTION

    // Resolve the published URL. cleanUrls is disabled, so regular pages end
    // in `.html` while directory index pages keep their trailing slash.
    const cleanPath = pageData.relativePath.replace(/\.md$/, '')
    let canonicalUrl: string
    if (cleanPath === 'index') {
      canonicalUrl = `${SITE_URL}/`
    } else if (cleanPath.endsWith('/index')) {
      canonicalUrl = `${SITE_URL}/${cleanPath.slice(0, -'index'.length)}`
    } else {
      canonicalUrl = `${SITE_URL}/${cleanPath}.html`
    }

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:title', content: `${pageTitle} | ${SITE_NAME}` }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { name: 'twitter:url', content: canonicalUrl }],
    )

    if (pageData.frontmatter.description) {
      pageData.frontmatter.head.push(
        ['meta', { property: 'og:description', content: pageData.frontmatter.description }],
        ['meta', { name: 'description', content: pageData.frontmatter.description }],
      )
    }
  },

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/' },
      { text: 'Examples', link: '/examples/' },
      {
        text: 'v0.0.1',
        items: [
          { text: 'Releases', link: 'https://github.com/muhammad-fiaz/downloader.zig/releases' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is downloader.zig?', link: '/guide/introduction' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Configuration', link: '/guide/configuration' },
            { text: 'Progress Reporting', link: '/guide/progress' },
            { text: 'Resume Downloads', link: '/guide/resume' },
            { text: 'Retry Logic', link: '/guide/retry' },
            { text: 'Error Handling', link: '/guide/errors' },
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Concurrent Downloads', link: '/guide/concurrent' },
            { text: 'Custom User-Agent', link: '/guide/user-agent' },
            { text: 'Thread Safety', link: '/guide/thread-safety' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Client', link: '/api/client' },
            { text: 'Config', link: '/api/config' },
            { text: 'Progress', link: '/api/progress' },
            { text: 'Errors', link: '/api/errors' },
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Overview', link: '/examples/' },
            { text: 'Basic Download', link: '/examples/basic' },
            { text: 'Advanced Configuration', link: '/examples/advanced' },
            { text: 'Concurrent Downloads', link: '/examples/concurrent' },
            { text: 'Resume Downloads', link: '/examples/resume' },
            { text: 'Checksum Verification', link: '/examples/checksum' },
            { text: 'Update Checker', link: '/examples/update-check' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/muhammad-fiaz/downloader.zig' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright Ac 2024 Muhammad Fiaz'
    },

    search: {
      provider: 'local'
    },

    llms: {
      copyText: 'Copy page',
      copiedText: 'Copied',
      viewMarkdownText: 'View as Markdown',
      openInAIText: 'Open in {provider}'
    },

    editLink: {
      pattern: 'https://github.com/muhammad-fiaz/downloader.zig/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
