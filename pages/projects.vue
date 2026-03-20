<script setup>
useHead({
  title: 'Projects – Paul Imoke',
  meta: [
    { name: 'description', content: 'Selected projects by Paul Imoke — mobile apps, web platforms, AI integrations, and Web3 solutions.' },
    { property: 'og:title', content: 'Projects – Paul Imoke' },
  ],
})

const { projects, loading, error } = useProjects()
const hoveredId = ref(null)
</script>

<template>
  <div class="bg-black min-h-screen">
    <Nav />

    <!-- Page header -->
    <div class="max-w-7xl mx-auto px-6 pt-36 pb-16">
      <div class="flex items-center gap-3 mb-6">
        <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
        <span class="text-white/40 text-xs tracking-widest uppercase">Portfolio</span>
      </div>
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <h1 class="text-white font-bold leading-tight" style="font-size: clamp(2.5rem, 6vw, 5rem);">
          All Projects
        </h1>
        <p class="text-white/30 text-sm max-w-xs leading-relaxed">
          Products I've built, led, or contributed to across my career.
        </p>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="max-w-7xl mx-auto px-6 border-t border-white/10">
      <div v-for="n in 5" :key="n" class="border-b border-white/10 py-8 flex justify-between items-center gap-8">
        <div class="flex gap-6 items-center flex-1">
          <div class="w-10 h-4 bg-white/10 rounded animate-pulse"></div>
          <div class="h-5 bg-white/10 rounded w-48 animate-pulse"></div>
        </div>
        <div class="w-24 h-3 bg-white/10 rounded animate-pulse hidden sm:block"></div>
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="max-w-7xl mx-auto px-6 py-16 text-red-400 text-sm">
      Failed to load projects. Please try again later.
    </div>

    <!-- Project list -->
    <div v-else class="max-w-7xl mx-auto px-6 border-t border-white/10">
      <div
        v-for="(project, i) in projects"
        :key="project.id"
        class="group border-b border-white/10 relative overflow-hidden transition-colors duration-300 cursor-pointer"
        :class="hoveredId === project.id ? 'bg-white/[0.02]' : ''"
        @mouseenter="hoveredId = project.id"
        @mouseleave="hoveredId = null"
        @click="$router.push(`/project/${project.slug}`)"
      >
        <!-- Yellow left accent -->
        <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-yellow-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

        <!-- Always-visible row -->
        <div class="flex items-center justify-between gap-6 py-7 pl-4">
          <!-- Left: index + name + subtitle -->
          <div class="flex items-center gap-6 min-w-0 flex-1">
            <span class="text-white/20 text-xs font-mono shrink-0 w-6 text-right">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="min-w-0">
              <p class="text-white font-semibold text-lg group-hover:text-yellow-500 transition-colors duration-200 truncate">
                {{ project.name }}
              </p>
              <p v-if="project.subtitle" class="text-white/40 text-sm mt-0.5 truncate">{{ project.subtitle }}</p>
            </div>
          </div>

          <!-- Arrow -->
          <span class="text-white/20 group-hover:text-yellow-500 transition-colors duration-200 text-lg shrink-0">↗</span>
        </div>

        <!-- Expandable image panel -->
        <div
          class="overflow-hidden transition-all duration-500 ease-in-out"
          :style="hoveredId === project.id ? 'max-height: 320px; opacity: 1;' : 'max-height: 0px; opacity: 0;'"
        >
          <div class="pl-16 pr-4 pb-6">
            <div class="w-full h-56 rounded-2xl overflow-hidden bg-white/5">
              <img
                v-if="project.image?.url"
                :src="project.image.url"
                :alt="project.name"
                class="w-full h-full object-cover object-top"
                width="1200"
                height="224"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
