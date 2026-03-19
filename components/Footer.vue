<script setup>
const route = useRoute()

function sectionLink(hash) {
  return route.path === '/' ? hash : `/${hash}`
}
</script>

<template>
  <footer class="relative bg-black overflow-hidden">

    <!-- Grid tile pattern -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0 grid-pattern opacity-100"></div>
    </div>

    <!-- Footer content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">

      <!-- Left: nav links -->
      <nav class="flex items-center gap-3 flex-wrap">
        <a :href="sectionLink('#home')" class="text-white text-sm px-4 py-1.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-200">
          Home
        </a>
        <a :href="sectionLink('#experience')" class="text-white/60 text-sm hover:text-white transition-colors duration-200">About Me</a>
        <a :href="sectionLink('#portfolio')" class="text-white/60 text-sm hover:text-white transition-colors duration-200">Portfolio</a>
        <a :href="sectionLink('#services')" class="text-white/60 text-sm hover:text-white transition-colors duration-200">Services</a>
        <NuxtLink to="/blog" class="text-white/60 text-sm hover:text-white transition-colors duration-200">Blog</NuxtLink>
      </nav>

      <!-- Right: big email -->
      <a
        href="mailto:pauleke65@gmail.com"
        class="text-white font-light hover:text-yellow-500 transition-colors duration-200 tracking-tight"
        style="font-size: clamp(1.2rem, 3vw, 2rem);"
      >
        pauleke65@gmail.com
      </a>

    </div>
  </footer>
</template>

<style scoped>
.grid-pattern {
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 80px 80px;
}
</style>
