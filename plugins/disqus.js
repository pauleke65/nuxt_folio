// Nuxt 3 plugin — replaces Vue 2 `Vue.use()` pattern
import VueDisqus from 'vue-disqus'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  nuxtApp.vueApp.use(VueDisqus, {
    shortname: config.public.disqusShortname,
  })
})
