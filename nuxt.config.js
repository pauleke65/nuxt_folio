// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  // On Netlify, Nuxt would pick its netlify-static preset, which writes a
  // _redirects file with "/* /404.html 404". That file overrides netlify.toml,
  // so every deep link (/essays/E-09, /work…) was served with a 404 status.
  // The plain static preset writes to .output/public (what netlify.toml
  // publishes) and leaves routing to netlify.toml.
  nitro: { preset: 'static' },

  app: {
    head: {
      title: 'Paul Imoke — Systems research',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Paul Imoke studies systems — how they are built, how they hold, and how they fail. Models, predictions and experiments, recorded before the outcome is known.' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      script: [
        // Apply a saved theme before the app mounts, so dark mode never flashes white.
        { innerHTML: "try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}" },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/paul-favicon.png' },
        // Boxicons icon font (moved here from inline template <link> tags)
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&family=JetBrains+Mono:wght@400;500&display=swap' },
      ],
    },
  },

  css: ['~/assets/css/tailwind.css', '~/assets/css/site.css', '~/assets/css/site-dark.css', '~/assets/css/site-copy.css'],

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

  // Drafts (draft: true in content/) show in `yarn dev` and on Netlify
  // deploy previews, never on the production site.
  vite: {
    define: {
      __SHOW_DRAFTS__: JSON.stringify(process.env.NODE_ENV !== 'production' || ['deploy-preview', 'branch-deploy'].includes(process.env.CONTEXT)),
    },
  },

  components: true,

  compatibilityDate: '2024-11-01',
})
