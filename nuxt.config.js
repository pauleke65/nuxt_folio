// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'Paul I. — Systems research',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Paul I. studies systems — how they are built, how they hold, and how they fail. Models, predictions and experiments, recorded before the outcome is known.' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/paul-favicon.png' },
        // Boxicons icon font (moved here from inline template <link> tags)
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=JetBrains+Mono:wght@400;500;700&display=swap' },
      ],
    },
  },

  css: ['~/assets/css/tailwind.css', '~/assets/css/research-theme.css'],

  modules: [
    '@nuxtjs/apollo',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.BLOG_URL,
      },
    },
  },

  runtimeConfig: {
    public: {
      // Can be overridden via NUXT_PUBLIC_DISQUS_SHORTNAME env var
      disqusShortname: 'paulimoke',
    },
  },

  components: true,

  compatibilityDate: '2024-11-01',
})
