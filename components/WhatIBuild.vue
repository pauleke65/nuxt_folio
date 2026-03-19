<script setup>
const domains = [
  {
    num: '01',
    title: 'Mobile Apps',
    description: 'Cross-platform mobile experiences built from scratch — from architecture and schema design to Play Store deployment. Specialising in Flutter and React Native with a focus on performance and polish.',
    tech: ['Flutter', 'React Native', 'Dart', 'Firebase'],
  },
  {
    num: '02',
    title: 'Web Platforms',
    description: 'Full-stack web applications using modern frameworks and scalable backends. From landing pages to complex SaaS platforms — with clean APIs, solid database design, and fast frontends.',
    tech: ['Next.js', 'NuxtJS', 'Vue', 'Django', 'Node.js', 'PostgreSQL'],
  },
  {
    num: '03',
    title: 'AI Integrations',
    description: 'Intelligent systems and automation pipelines — AI-powered agents, smart search, automated content generation, and WhatsApp/email automation bots that work around the clock.',
    tech: ['OpenAI API', 'Bull MQ', 'WhatsApp API', 'LLM Agents'],
  },
  {
    num: '04',
    title: 'Web3 & Blockchain',
    description: 'Decentralised solutions built on Stellar Blockchain and IPFS for immutable records, verifiable data, and tokenisation — from proof-of-concept to funded production systems.',
    tech: ['Stellar', 'IPFS', 'Pinata', 'Smart Contracts'],
  },
]
</script>

<template>
  <section class="bg-black py-24 border-t border-white/10" id="services">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header row -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span class="text-white/40 text-xs tracking-widest uppercase">Services</span>
          </div>
          <h2 class="text-white font-bold leading-tight" style="font-size: clamp(2rem, 4vw, 3.2rem);">
            Built Across Every Layer
          </h2>
        </div>
        <p class="text-white/30 text-sm max-w-sm leading-relaxed lg:text-right">
          9+ years across mobile, web, AI, and blockchain — I work across the full stack and own the full lifecycle.
        </p>
      </div>

      <!-- 2×2 cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
        <div
          v-for="domain in domains"
          :key="domain.num"
          class="relative bg-black p-10 flex flex-col gap-8 group overflow-hidden transition-colors duration-300 hover:bg-white/[0.03]"
        >
          <!-- Large faint number (background) -->
          <span
            class="absolute top-6 right-8 font-black text-white/[0.04] select-none pointer-events-none leading-none"
            style="font-size: 7rem;"
          >
            {{ domain.num }}
          </span>

          <!-- Yellow left accent bar -->
          <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-yellow-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

          <!-- Top row: number + title -->
          <div class="flex items-start justify-between gap-4 relative z-10">
            <span class="text-yellow-500 text-xs font-mono tracking-widest">{{ domain.num }}</span>
          </div>

          <!-- Title -->
          <h3 class="text-white font-bold relative z-10" style="font-size: clamp(1.5rem, 2.5vw, 2rem);">
            {{ domain.title }}
          </h3>

          <!-- Description -->
          <p class="text-white/40 text-sm leading-relaxed relative z-10 flex-1">
            {{ domain.description }}
          </p>

          <!-- Tech pills -->
          <div class="flex flex-wrap gap-2 relative z-10 pt-4 border-t border-white/10">
            <span
              v-for="tech in domain.tech"
              :key="tech"
              class="text-xs px-3 py-1 rounded-full border border-white/10 text-white/40 group-hover:border-yellow-500/25 group-hover:text-yellow-500/60 transition-all duration-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
