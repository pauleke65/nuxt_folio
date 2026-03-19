<template>
  <section class="bg-black py-24 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="flex items-center gap-3 mb-16">
        <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
        <span class="text-white/40 text-xs tracking-widest uppercase">Recognition</span>
      </div>

      <!-- Stats row -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mb-16">
        <div
          v-for="stat in stats"
          :key="stat.value"
          class="bg-black px-8 py-10 flex flex-col gap-3 group hover:bg-white/5 transition-colors duration-300"
        >
          <p class="text-yellow-500 font-bold leading-none" style="font-size: clamp(2.5rem, 5vw, 4rem);">
            {{ stat.value }}
          </p>
          <p class="text-white/50 text-sm leading-relaxed">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Achievements list -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
        <div
          v-for="(item, i) in achievements"
          :key="i"
          class="bg-black p-8 flex items-start gap-5 hover:bg-white/5 transition-colors duration-300"
        >
          <span class="text-yellow-500 text-xl shrink-0 mt-0.5">{{ item.icon }}</span>
          <div>
            <p class="text-white font-medium text-sm leading-relaxed">{{ item.title }}</p>
            <p class="text-white/40 text-xs mt-1.5 leading-relaxed">{{ item.detail }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '9+',   label: 'Years of professional software engineering' },
  { value: '$20K', label: 'Secured in Stellar Development Foundation funding' },
  { value: '4',    label: 'Countries led remote engineering teams across — Nigeria, Ghana, UAE & USA' },
  { value: '95%',  label: 'Reduction in manual server monitoring time at SEC Nigeria' },
]

const achievements = [
  {
    icon: '🏆',
    title: 'HNG i8 Top Finalist — Highest Code Contributor',
    detail: 'Completed the HNG i8 Internship as a top finalist with the highest lines of code contributed across the entire cohort.',
  },
  {
    icon: '🚀',
    title: 'Technology Lead — MEST Africa 2023',
    detail: 'Selected as Technology Lead for one of Africa\'s most competitive tech accelerators, shipping four production products.',
  },
  {
    icon: '⛓️',
    title: '$20K Stellar Development Foundation Grant',
    detail: 'Contributed to a product demo at Agrolinking Solutions that secured $20,000 in funding from the Stellar Foundation.',
  },
  {
    icon: '🌍',
    title: 'Led Remote Teams Across 4 Countries',
    detail: 'Managed distributed engineering teams across the USA, Dubai, Ghana, and Nigeria over 5+ years.',
  },
  {
    icon: '📉',
    title: 'Server Monitoring Script — 95% Time Reduction',
    detail: 'Built an automated monitoring script at the Securities and Exchange Commission of Nigeria that cut manual checks by over 95%.',
  },
  {
    icon: '📱',
    title: 'Play Store Published Apps',
    detail: 'Multiple mobile applications published on Google Play Store — including Menji (ride-hailing) and WSTC Mobile (banking).',
  },
]
</script>
