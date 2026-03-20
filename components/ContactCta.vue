<template>
  <section class="bg-black py-32 border-t border-white/10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center gap-16">

      <!-- Left: content -->
      <div class="flex-1">
        <div class="flex items-center gap-3 mb-8">
          <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span class="text-white/40 text-xs tracking-widest uppercase">Contact</span>
        </div>
        <h2 class="text-white font-bold leading-none mb-6" style="font-size: clamp(3rem, 8vw, 7rem);">
          Let's build<br /><span class="text-yellow-500">something.</span>
        </h2>
        <p class="text-white/40 text-lg leading-relaxed max-w-xl mb-12">
          Have a product idea, a platform to scale, or a team that needs a lead engineer?
          I'd love to hear about it.
        </p>
        <div class="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="mailto:pauleke65@gmail.com"
            class="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-yellow-400 transition-colors duration-200"
          >
            Send me an email ↗
          </a>
          <a
            href="https://linkedin.com/in/paul-imoke-010a941bb/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm text-white border border-white/20 px-7 py-3.5 rounded-full hover:bg-white hover:text-black transition-all duration-200"
          >
            Connect on LinkedIn
          </a>
        </div>
        <div class="flex items-center gap-6">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/pauleke65">
            <img src="../assets/images/github.svg" alt="GitHub" class="w-5 h-5 invert opacity-40 hover:opacity-100 transition-opacity" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/PaulEke20">
            <img src="../assets/images/Twitter.svg" alt="Twitter" class="w-5 h-5 invert opacity-40 hover:opacity-100 transition-opacity" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/pauleke65/">
            <img src="../assets/images/Instagram.svg" alt="Instagram" class="w-5 h-5 invert opacity-40 hover:opacity-100 transition-opacity" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/paul.eke.399">
            <img src="../assets/images/Facebook.svg" alt="Facebook" class="w-5 h-5 invert opacity-40 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      <!-- Right: empty -->
      <div class="hidden lg:block shrink-0 w-[340px]"></div>

    </div>
  </section>
</template>

<style scoped>
</style>
