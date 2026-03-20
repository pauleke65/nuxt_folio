<script setup>
defineProps({
  siteData: {
    type: Object,
    default: () => ({}),
  },
})

const year = new Date().getFullYear()
</script>

<template>
  <section class="relative min-h-screen bg-black overflow-hidden" id="home">

    <!-- ── VERTICAL LEFT STRIP (absolute, far left) ── -->
    <div class="hidden lg:flex absolute left-0 top-0 bottom-0 w-12 flex-col items-center justify-between py-24 px-3 z-20">
      <span class="text-white/20 text-xs tracking-widest uppercase rotate-180" style="writing-mode: vertical-rl;">
        Full Stack Developer
      </span>
      <div class="w-px flex-1 bg-white/10 my-6"></div>
      <span class="text-white/20 text-xs tracking-widest rotate-180" style="writing-mode: vertical-rl;">
        {{ year }}
      </span>
    </div>

    <!-- ── PROFILE PHOTO (absolute, bottom-anchored portrait) ── -->
    <img
      class="hidden lg:block absolute top-0 z-0 pointer-events-none"
      src="/hero-photo.png"
      alt="Paul Imoke"
      style="right: 0%; height: 150%; width: auto; clip-path: inset(0 0 30% 0);"
      loading="eager"
    />

    <!-- ── MAIN CONTENT — aligned to navbar container ── -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
      <div class="flex flex-col justify-center pt-24 pb-12 w-full lg:w-1/2">

        <!-- Label -->
        <div class="flex items-center gap-3 mb-10">
          <span class="w-8 h-px bg-yellow-500"></span>
          <span class="text-yellow-500 text-xs tracking-widest uppercase font-medium">Full Stack Developer</span>
        </div>

        <!-- Stats row -->
        <div class="flex gap-10 mb-10">
          <div>
            <p class="text-white text-3xl font-bold leading-tight">+9</p>
            <p class="text-yellow-500 text-xs tracking-wide mt-1">Years experience</p>
          </div>
          <div class="w-px bg-white/10"></div>
          <div>
            <p class="text-white text-3xl font-bold leading-tight">+16</p>
            <p class="text-yellow-500 text-xs tracking-wide mt-1">Projects completed</p>
          </div>
        </div>

        <!-- Hi there + name -->
        <p class="text-white/50 text-base mb-2 tracking-wide font-light">Hi There, I'm</p>
        <h1 class="text-white font-bold leading-none mb-6" style="font-size: clamp(3.2rem, 6vw, 5.5rem);">
          Paul Imoke<span class="text-yellow-500">.</span>
        </h1>

        <!-- Short description -->
        <p class="text-white/50 text-base leading-relaxed mb-10 max-w-md">
          A full stack developer who loves building clean, fast &amp; impactful digital experiences — from sleek UIs to robust backends.
        </p>

        <!-- Social links -->
        <div class="flex items-center gap-5 mb-14">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/pauleke65" class="opacity-40 hover:opacity-100 transition-opacity">
            <img src="../assets/images/github.svg" alt="Paul Imoke on GitHub" class="w-5 h-5 invert" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/paul-imoke-010a941bb/" class="opacity-40 hover:opacity-100 transition-opacity">
            <img src="../assets/images/Linkedin.svg" alt="Paul Imoke on LinkedIn" class="w-5 h-5 invert" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/PaulEke20" class="opacity-40 hover:opacity-100 transition-opacity">
            <img src="../assets/images/Twitter.svg" alt="Paul Imoke on Twitter" class="w-5 h-5 invert" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/pauleke65/" class="opacity-40 hover:opacity-100 transition-opacity">
            <img src="../assets/images/Instagram.svg" alt="Paul Imoke on Instagram" class="w-5 h-5 invert" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/paul.eke.399" class="opacity-40 hover:opacity-100 transition-opacity">
            <img src="../assets/images/Facebook.svg" alt="Paul Imoke on Facebook" class="w-5 h-5 invert" />
          </a>
        </div>

        <!-- Scroll down -->
        <div class="flex items-center gap-3 text-yellow-500 text-sm">
          <span>Scroll down</span>
          <!-- Mouse scroll icon -->
          <svg class="w-5 h-7" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="34" rx="11" stroke="currentColor" stroke-width="2"/>
            <line x1="12" y1="8" x2="12" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <animate attributeName="y1" values="8;13;8" dur="1.4s" repeatCount="indefinite"/>
              <animate attributeName="y2" values="14;19;14" dur="1.4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite"/>
            </line>
          </svg>
        </div>
      </div>
    </div>

    <!-- Decorative bottom border -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
  </section>
</template>
