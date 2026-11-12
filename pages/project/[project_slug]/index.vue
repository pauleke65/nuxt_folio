<script setup>
import { projects, getProject } from '~/data/projects'

definePageMeta({
  // Old slugs (e.g. menji-driver) resolve to the merged project; keep the URL canonical.
  middleware: (to) => {
    const match = getProject(to.params.project_slug)
    if (match && match.slug !== to.params.project_slug) {
      return navigateTo(`/project/${match.slug}`, { replace: true })
    }
  },
})

const route = useRoute()
const project = computed(() => getProject(route.params.project_slug))

useHead(computed(() => ({
  title: project.value ? `${project.value.name} – Paul Imoke` : 'Project not found – Paul Imoke',
  meta: [
    { name: 'description', content: project.value?.tagline ?? '' },
    { property: 'og:title', content: project.value ? `${project.value.name} – Paul Imoke` : 'Paul Imoke' },
    { property: 'og:description', content: project.value?.tagline ?? '' },
  ],
})))

const index = computed(() => projects.findIndex(p => p.slug === project.value?.slug))
const prev = computed(() => projects[(index.value - 1 + projects.length) % projects.length])
const next = computed(() => projects[(index.value + 1) % projects.length])

const facts = computed(() => {
  const p = project.value
  if (!p) return []
  return [
    { label: 'Role', value: p.role },
    { label: p.studio ? 'Client' : 'Company', value: p.org },
    { label: p.studio ? 'Year' : 'When', value: p.timeline ?? p.period },
    { label: 'Platform', value: p.platform ?? p.location },
    { label: 'Status', value: p.status },
  ].filter(f => f.value)
})

// Studio galleries are four art-directed images; CMS galleries are loose screenshots.
const curatedGallery = computed(() => project.value?.studio && project.value?.gallery?.length === 4)

const strip = ref(null)
function scrollStrip(dir) {
  strip.value?.scrollBy({ left: dir * strip.value.clientWidth * 0.8, behavior: 'smooth' })
}
</script>

<template>
  <div class="bg-black min-h-screen">
    <Nav />

    <!-- Not found -->
    <div v-if="!project" class="max-w-7xl mx-auto px-6 pt-40 pb-32">
      <p class="text-white/40 text-sm mb-4">404</p>
      <h1 class="text-white text-4xl font-bold mb-6">That project isn’t here.</h1>
      <NuxtLink to="/projects" class="text-yellow-500 text-sm hover:underline underline-offset-4">← See all work</NuxtLink>
    </div>

    <article v-else>
      <!-- ── Header ──────────────────────────────────────────────────────── -->
      <header class="max-w-7xl mx-auto px-6 pt-28 sm:pt-32">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-10">
          <NuxtLink to="/projects" class="text-white/50 text-sm hover:text-white transition-colors">← All work</NuxtLink>
          <NuxtLink
            v-if="project.studio"
            to="/studio"
            class="text-xs tracking-widest uppercase text-white/70 border border-[#C0392B]/60 rounded-full px-3 py-1 hover:bg-[#C0392B] hover:text-white transition-colors"
          >A PIE Drops Studio project</NuxtLink>
        </div>

        <p class="text-yellow-500 text-xs tracking-widest uppercase font-medium mb-4">{{ project.label }}</p>
        <h1 class="text-white font-bold leading-[0.95] tracking-tight" style="font-size: clamp(2.5rem, 7vw, 5.5rem);">
          {{ project.name }}
        </h1>
        <p class="text-white/65 mt-6 max-w-3xl leading-snug" style="font-size: clamp(1.1rem, 2vw, 1.45rem);">
          {{ project.tagline }}
        </p>

        <div v-if="project.links?.length" class="flex flex-wrap gap-3 mt-8">
          <a
            v-for="(link, i) in project.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full transition-colors"
            :class="i === 0
              ? 'bg-yellow-500 text-black font-semibold hover:bg-yellow-400'
              : 'text-white border border-white/20 hover:bg-white hover:text-black'"
          >{{ link.label }} <span aria-hidden="true">↗</span></a>
        </div>

        <!-- Facts -->
        <dl class="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6 mt-12 pt-8 border-t border-white/10">
          <div v-for="fact in facts" :key="fact.label" :class="fact.label === 'Platform' || fact.label === 'Status' ? 'col-span-2 lg:col-span-1' : ''">
            <dt class="text-white/35 text-xs tracking-widest uppercase mb-2">{{ fact.label }}</dt>
            <dd class="text-white/85 text-sm leading-relaxed">{{ fact.value }}</dd>
          </div>
        </dl>
      </header>

      <!-- ── Hero ────────────────────────────────────────────────────────── -->
      <div class="max-w-7xl mx-auto px-6 mt-12">
        <div class="rounded-3xl overflow-hidden border border-white/10 aspect-[16/10] sm:aspect-[16/8]">
          <img
            v-if="project.hero"
            :src="project.hero.src"
            :alt="project.hero.alt"
            class="w-full h-full object-cover"
            loading="eager"
          />
          <ProjectCover v-else :project="project" size="hero" eager />
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6">
        <!-- ── Impact ────────────────────────────────────────────────────── -->
        <section v-if="project.impact?.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16 border-b border-white/10" aria-label="Impact">
          <div v-for="m in project.impact" :key="m.num">
            <p class="text-yellow-500 font-bold leading-none" style="font-size: clamp(2.75rem, 6vw, 4.5rem);">{{ m.num }}</p>
            <p class="text-white/60 text-sm mt-3 max-w-xs leading-relaxed">{{ m.label }}</p>
          </div>
        </section>

        <!-- ── Story sections ────────────────────────────────────────────── -->
        <section
          v-for="section in project.sections"
          :key="section.heading"
          class="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-16 py-16 border-b border-white/10"
        >
          <div>
            <p class="text-white/35 text-xs tracking-widest uppercase mb-3">{{ section.kicker }}</p>
            <h2 class="text-white font-semibold leading-tight" style="font-size: clamp(1.5rem, 3vw, 2.25rem);">{{ section.heading }}</h2>
          </div>
          <div class="space-y-5">
            <p v-for="(para, i) in section.body" :key="i" class="text-white/65 leading-relaxed">{{ para }}</p>
          </div>
        </section>

        <!-- ── What I did ────────────────────────────────────────────────── -->
        <section class="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-16 py-16 border-b border-white/10">
          <div>
            <p class="text-white/35 text-xs tracking-widest uppercase mb-3">{{ project.studio ? 'The solution' : 'What I did' }}</p>
            <h2 class="text-white font-semibold leading-tight" style="font-size: clamp(1.5rem, 3vw, 2.25rem);">
              {{ project.highlightsHeading ?? `${project.role}, ${project.org}` }}
            </h2>
            <div class="flex flex-wrap gap-1.5 mt-6">
              <span v-for="tech in project.stack" :key="tech" class="text-xs px-3 py-1 rounded-full border border-white/15 text-white/60">{{ tech }}</span>
            </div>
          </div>
          <ol class="space-y-0">
            <li
              v-for="(item, i) in project.highlights"
              :key="i"
              class="grid grid-cols-[2.25rem_1fr] gap-2 py-4 border-t border-white/10 first:border-t-0 first:pt-0"
            >
              <span class="text-yellow-500/80 text-xs font-mono pt-1">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="text-white/75 leading-relaxed">{{ item }}</span>
            </li>
          </ol>
        </section>

        <!-- ── Video ─────────────────────────────────────────────────────── -->
        <section v-if="project.video" class="py-16 border-b border-white/10">
          <h2 class="text-white font-semibold text-xl mb-6">Demo</h2>
          <div class="aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            <iframe :src="project.video" class="w-full h-full" allowfullscreen loading="lazy" :title="`${project.name} demo video`"></iframe>
          </div>
        </section>

        <!-- ── Gallery ───────────────────────────────────────────────────── -->
        <section v-if="project.gallery?.length" class="py-16">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-white font-semibold text-xl">{{ curatedGallery ? 'Inside the build' : 'Screens' }}</h2>
            <div v-if="!curatedGallery && project.gallery.length > 2" class="flex gap-2">
              <button type="button" class="w-10 h-10 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors" aria-label="Previous screens" @click="scrollStrip(-1)">←</button>
              <button type="button" class="w-10 h-10 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors" aria-label="More screens" @click="scrollStrip(1)">→</button>
            </div>
          </div>

          <!-- Curated 4-up: tall left, two stacked right, wide bottom -->
          <div v-if="curatedGallery" class="grid grid-cols-1 sm:grid-cols-[0.9fr_1fr] gap-4">
            <img :src="project.gallery[0].src" :alt="project.gallery[0].alt" loading="lazy" class="w-full h-full object-cover rounded-2xl border border-white/10 sm:row-span-2" />
            <img :src="project.gallery[1].src" :alt="project.gallery[1].alt" loading="lazy" class="w-full h-full object-cover rounded-2xl border border-white/10" />
            <img :src="project.gallery[2].src" :alt="project.gallery[2].alt" loading="lazy" class="w-full h-full object-cover rounded-2xl border border-white/10" />
            <img :src="project.gallery[3].src" :alt="project.gallery[3].alt" loading="lazy" class="w-full rounded-2xl border border-white/10 sm:col-span-2" />
          </div>

          <!-- Screenshot strip -->
          <div v-else ref="strip" class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 gallery-strip">
            <img
              v-for="(img, i) in project.gallery"
              :key="img.src + i"
              :src="img.src"
              :alt="`${img.alt} ${i + 1}`"
              loading="lazy"
              class="snap-start h-[420px] sm:h-[520px] w-auto max-w-none rounded-2xl border border-white/10 bg-white/5 shrink-0"
            />
          </div>
        </section>
      </div>

      <!-- ── Prev / next ─────────────────────────────────────────────────── -->
      <nav class="border-t border-white/10 mt-8" aria-label="More projects">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-2">
          <NuxtLink :to="`/project/${prev.slug}`" class="group py-10 pr-4 border-r border-white/10">
            <span class="text-white/35 text-xs tracking-widest uppercase">← Previous</span>
            <span class="block text-white text-lg sm:text-2xl font-semibold mt-2 group-hover:text-yellow-500 transition-colors">{{ prev.name }}</span>
          </NuxtLink>
          <NuxtLink :to="`/project/${next.slug}`" class="group py-10 pl-4 sm:pl-8 text-right">
            <span class="text-white/35 text-xs tracking-widest uppercase">Next →</span>
            <span class="block text-white text-lg sm:text-2xl font-semibold mt-2 group-hover:text-yellow-500 transition-colors">{{ next.name }}</span>
          </NuxtLink>
        </div>
      </nav>
    </article>
  </div>
</template>

<style scoped>
.gallery-strip {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}
</style>
