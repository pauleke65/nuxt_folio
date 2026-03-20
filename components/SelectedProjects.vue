<script setup>
const { projects, loading } = useProjects()
</script>

<template>
  <section class="bg-black py-24 border-t border-white/10" id="portfolio">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span class="text-white/40 text-xs tracking-widest uppercase">Portfolio</span>
          </div>
          <h2 class="text-white font-bold leading-tight" style="font-size: clamp(2rem, 4vw, 3.2rem);">
            Recent Projects
          </h2>
        </div>
        <NuxtLink
          to="/projects"
          class="text-sm text-white/50 hover:text-white border border-white/15 hover:border-white/40 rounded-full px-5 py-2 transition-all duration-200 w-fit"
        >
          View all projects ↗
        </NuxtLink>
      </div>

      <!-- Loading skeleton -->
      <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div v-for="n in 4" :key="n" class="rounded-2xl border border-white/10 h-72 animate-pulse bg-white/5"></div>
      </div>

      <!-- Projects grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <NuxtLink
          v-for="(project, i) in projects.slice(0, 4)"
          :key="project.id"
          :to="`/project/${project.slug}`"
          class="relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden group block hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300"
          :class="i === 0 ? 'sm:col-span-2' : ''"
        >
          <!-- Cover image -->
          <div class="relative overflow-hidden" :class="i === 0 ? 'h-80' : 'h-56'">
            <img
              v-if="project.image?.url"
              :src="project.image.url"
              :alt="project.name"
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              width="800"
              height="400"
            />
            <div v-else class="w-full h-full bg-white/5"></div>
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>

          <!-- Info bar -->
          <div class="p-6 flex items-start justify-between gap-4">
            <div>
              <p class="text-white font-semibold text-base">{{ project.name }}</p>
              <p v-if="project.subtitle" class="text-white/40 text-sm mt-1">{{ project.subtitle }}</p>
            </div>
            <div class="flex flex-wrap gap-1.5 justify-end">
              <span
                v-for="tool in project.tools?.slice(0, 3)"
                :key="tool.id"
                class="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/40"
              >
                {{ tool.name }}
              </span>
            </div>
          </div>

          <!-- Arrow -->
          <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ↗
          </div>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
