<script setup>
const toggled = ref(false)
const route = useRoute()

function toggleNav() {
  toggled.value = !toggled.value
}

watch(() => route.path, () => { toggled.value = false })

// On sub-pages, anchor links must be prefixed with / to navigate home first
function sectionLink(hash) {
  return route.path === '/' ? hash : `/${hash}`
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-100 bg-black/90 backdrop-blur-md border-b border-white/10">
    <nav class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

      <!-- Logo -->
      <a :href="sectionLink('#home')" class="text-white font-bold text-xl tracking-wide shrink-0">
        Paul<span class="text-yellow-500">.</span>
      </a>

      <!-- Desktop nav links -->
      <ul class="hidden md:flex items-center gap-8">
        <li>
          <a :href="sectionLink('#experience')" class="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200">
            About Me
          </a>
        </li>
        <li>
          <a :href="sectionLink('#portfolio')" class="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200">
            Portfolio
          </a>
        </li>
        <li>
          <a :href="sectionLink('#services')" class="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200">
            Services
          </a>
        </li>
        <li>
          <NuxtLink to="/blog" class="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200 purple-ember-link">
            PurpleEmber.
          </NuxtLink>
        </li>
      </ul>

      <!-- Desktop CTA -->
      <a
        href="mailto:pauleke65@gmail.com"
        class="hidden md:inline-flex items-center gap-1 text-sm text-white border border-white/30 rounded-full px-5 py-2 hover:bg-white hover:text-black transition-all duration-200"
      >
        Get in touch <span class="text-base">↗</span>
      </a>

      <!-- Mobile hamburger -->
      <button
        @click="toggleNav"
        class="md:hidden text-white text-3xl leading-none"
        :aria-label="toggled ? 'Close menu' : 'Open menu'"
      >
        <i :class="toggled ? 'bx bx-x' : 'bx bx-menu'"></i>
      </button>
    </nav>

    <!-- Mobile drawer -->
    <Transition name="slide-down">
      <div v-if="toggled" class="md:hidden bg-black border-t border-white/10 px-6 py-10">
        <ul class="flex flex-col gap-7 mb-10">
          <li>
            <a @click="toggleNav" :href="sectionLink('#home')" class="text-white text-2xl">Home</a>
          </li>
          <li>
            <a @click="toggleNav" :href="sectionLink('#experience')" class="text-white text-2xl">About Me</a>
          </li>
          <li>
            <a @click="toggleNav" :href="sectionLink('#services')" class="text-white text-2xl">Services</a>
          </li>
          <li>
            <a @click="toggleNav" :href="sectionLink('#portfolio')" class="text-white text-2xl">Portfolio</a>
          </li>
          <li>
            <NuxtLink @click="toggleNav" to="/blog" class="text-2xl purple-ember-link">
              PurpleEmber.
            </NuxtLink>
          </li>
        </ul>

        <!-- Social icons — mobile -->
        <div class="flex items-center gap-5 mt-4">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/pauleke65">
            <img src="../assets/images/github.svg" alt="Paul Imoke on GitHub" class="w-6 h-6 invert" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/paul-imoke-010a941bb/">
            <img src="../assets/images/Linkedin.svg" alt="Paul Imoke on LinkedIn" class="w-6 h-6 invert" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/PaulEke20">
            <img src="../assets/images/Twitter.svg" alt="Paul Imoke on Twitter" class="w-6 h-6 invert" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/pauleke65/">
            <img src="../assets/images/Instagram.svg" alt="Paul Imoke on Instagram" class="w-6 h-6 invert" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:pauleke65@gmail.com">
            <img src="../assets/images/At Symbol.svg" alt="Email Paul Imoke" class="w-6 h-6 invert" />
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
</style>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.purple-ember-link {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  color: rgba(168, 85, 247, 0.8);
}
.purple-ember-link:hover {
  color: rgb(168, 85, 247);
}
</style>
