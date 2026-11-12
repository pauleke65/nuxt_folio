// https://nuxt.com/docs/api/configuration/nuxt-config
import { projects } from './data/projects'

// Netlify answers unknown paths with 404.html (status 404), so link previews treat
// shared case-study URLs as broken. Writing a shell page for every project route
// makes each one a real file that returns 200.
const projectRoutes = projects.flatMap(p => [p.slug, ...(p.aliases ?? [])]).map(slug => `/project/${slug}`)
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'Paul Imoke',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Paul Imoke – Lead Software Engineer. Mobile apps, web platforms, AI automation and Web3.' },
        { name: 'format-detection', content: 'telephone=no' },
        // The site is a client-rendered SPA, so link previews (LinkedIn, Slack, email)
        // only ever see these static tags. Keep them generic enough for every page.
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Paul Imoke' },
        { property: 'og:title', content: 'Paul Imoke – Lead Software Engineer' },
        { property: 'og:description', content: 'Selected work: mobile apps, web platforms, AI automation and Web3, shipped for startups in Africa, the Middle East and the USA.' },
        { property: 'og:image', content: 'https://paulimoke.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://paulimoke.com/og-image.png' },
      ],
      // Apply the saved theme before first paint so light mode doesn't flash dark.
      script: [
        { innerHTML: "try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}", tagPosition: 'head' },
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

  nitro: {
    prerender: {
      routes: ['/projects', '/studio', ...projectRoutes],
    },
  },

  compatibilityDate: '2024-11-01',
})
