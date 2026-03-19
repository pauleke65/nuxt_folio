// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'Paul Imoke',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Paul Imoke – Full Stack Developer' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/paul-favicon.png' },
        // Boxicons icon font (moved here from inline template <link> tags)
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' },
      ],
    },
  },

  css: ['~/assets/css/tailwind.css'],

  modules: [
    '@nuxtjs/apollo',
    '@nuxt/image',
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

  image: {
    // Allow images from Hygraph CDN
    domains: ['media.graphassets.com', 'us-east-1.graphassets.com'],
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
