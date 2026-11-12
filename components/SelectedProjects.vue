<script setup>
import { featuredProjects, projects } from '~/data/projects'

const shown = featuredProjects.slice(0, 4)
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
            Selected Work
          </h2>
        </div>
        <NuxtLink
          to="/projects"
          class="text-sm text-white/50 hover:text-white border border-white/15 hover:border-white/40 rounded-full px-5 py-2 transition-all duration-200 w-fit"
        >
          View all {{ projects.length }} projects ↗
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard v-for="project in shown" :key="project.slug" :project="project" size="lg" />
      </div>

    </div>
  </section>
</template>
