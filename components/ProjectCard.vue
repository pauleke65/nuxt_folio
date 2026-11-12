<script setup>
defineProps({
  project: { type: Object, required: true },
  // 'lg' = case-study card, 'md' = grid card
  size: { type: String, default: 'md' },
})
</script>

<template>
  <NuxtLink
    :to="`/project/${project.slug}`"
    class="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/25 hover:bg-white/[0.04] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-500"
  >
    <div class="relative" :class="size === 'lg' ? 'aspect-[16/10]' : 'aspect-[16/11]'">
      <ProjectCover :project="project" />
      <span class="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white text-sm opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" aria-hidden="true">↗</span>
    </div>

    <div class="flex flex-col flex-1" :class="size === 'lg' ? 'p-6 sm:p-7' : 'p-5 sm:p-6'">
      <p class="text-white/40 text-xs tracking-wide mb-2">
        {{ project.label }}<template v-if="project.period"> · {{ project.period }}</template>
      </p>
      <h3
        class="text-white font-semibold leading-tight group-hover:text-yellow-500 transition-colors duration-200"
        :class="size === 'lg' ? 'text-2xl' : 'text-lg'"
      >{{ project.name }}</h3>
      <p class="text-white/55 text-sm leading-relaxed mt-2" :class="size === 'lg' ? '' : 'line-clamp-3'">
        {{ project.tagline }}
      </p>

      <div class="mt-auto pt-5 flex flex-col gap-3">
        <p class="text-white/70 text-xs">
          <span class="text-white">{{ project.role }}</span>
          <span class="text-white/30"> · </span>{{ project.org }}
        </p>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tech in project.stack.slice(0, size === 'lg' ? 5 : 3)"
            :key="tech"
            class="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-white/50"
          >{{ tech }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
