<script setup>
import { useKeenSlider } from 'keen-slider/vue'
import 'keen-slider/keen-slider.min.css'
import { useApolloClient } from '@vue/apollo-composable'
import { PROJECT_QUERY } from '~/graphql/queries'

const route = useRoute()
const { resolveClient } = useApolloClient()

const { data: project, error } = await useAsyncData(
  `project-${route.params.project_slug}`,
  async () => {
    const client = resolveClient()
    const res = await client.query({
      query: PROJECT_QUERY,
      variables: { slug: route.params.project_slug },
    })
    return res.data.project
  }
)

useHead(computed(() => ({
  title: project.value?.name ? `${project.value.name} | Paul Imoke` : 'Project | Paul Imoke',
  meta: [
    { name: 'description', content: project.value?.description ?? '' },
    { property: 'og:title', content: project.value?.name ?? 'Paul Imoke' },
    { property: 'og:image', content: project.value?.image?.url ?? '' },
  ],
})))

const hasMedia = computed(() =>
  (project.value?.project_videos?.length > 0) || (project.value?.project_image?.length > 0)
)

// Mouse wheel plugin — maps wheel/trackpad events to horizontal slider drag
function WheelControls(slider) {
  let touchTimeout
  let position
  let wheelActive

  function dispatch(e, name) {
    position.x -= e.deltaX
    position.y -= e.deltaY
    slider.container.dispatchEvent(
      new CustomEvent(name, { detail: { x: position.x, y: position.y } })
    )
  }

  function wheelStart(e) {
    position = { x: e.pageX, y: e.pageY }
    dispatch(e, 'ksDragStart')
  }

  function wheel(e) { dispatch(e, 'ksDrag') }
  function wheelEnd(e) { dispatch(e, 'ksDragEnd') }

  function eventWheel(e) {
    e.preventDefault()
    if (!wheelActive) { wheelStart(e); wheelActive = true }
    wheel(e)
    clearTimeout(touchTimeout)
    touchTimeout = setTimeout(() => { wheelActive = false; wheelEnd(e) }, 50)
  }

  slider.on('created', () => slider.container.addEventListener('wheel', eventWheel, { passive: false }))
  slider.on('destroyed', () => slider.container.removeEventListener('wheel', eventWheel))
}

const [sliderRef, slider] = useKeenSlider(
  {
    loop: false,
    mode: 'free-snap',
    renderMode: 'performance',
    drag: true,
    slides: { perView: 'auto', spacing: 20 },
  },
  [WheelControls],
)

const currentSlide = ref(0)
const slideCount = computed(() =>
  (project.value?.project_videos?.length ?? 0) + (project.value?.project_image?.length ?? 0)
)

onMounted(() => {
  slider.value?.on('slideChanged', (s) => {
    currentSlide.value = s.track.details.rel
  })
})
</script>

<template>
  <div class="bg-black min-h-screen">
    <Nav />

    <!-- Error -->
    <div v-if="error" class="flex items-center justify-center h-screen">
      <div class="text-center">
        <p class="text-red-400 text-sm mb-4">Failed to load project.</p>
        <NuxtLink to="/projects" class="text-white/50 text-sm underline underline-offset-4 hover:text-white">
          ← Back to projects
        </NuxtLink>
      </div>
    </div>

    <!-- Loading -->
    <div v-else-if="!project" class="flex items-center justify-center h-screen">
      <div class="flex flex-col items-center gap-3">
        <div class="w-6 h-6 rounded-full border-2 border-yellow-500 border-t-transparent animate-spin"></div>
        <p class="text-white/30 text-sm">Loading project…</p>
      </div>
    </div>

    <!-- Project content -->
    <div v-else>

      <!-- Hero image -->
      <div class="relative w-full h-[50vh] min-h-64 overflow-hidden">
        <NuxtImg
          v-if="project.image?.url"
          :src="project.image.url"
          :alt="project.name"
          class="w-full h-full object-cover object-top"
          width="1400"
          height="600"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <!-- Back link -->
        <div class="absolute top-24 left-6 max-w-7xl">
          <NuxtLink
            to="/projects"
            class="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors duration-200"
          >
            ← All Projects
          </NuxtLink>
        </div>
      </div>

      <!-- Main content -->
      <div class="max-w-7xl mx-auto px-6 -mt-20 relative z-10">

        <!-- Header -->
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <h1 class="text-white font-bold leading-tight mb-3" style="font-size: clamp(2rem, 5vw, 4rem);">
              {{ project.name }}
            </h1>
            <!-- Tool icons row -->
            <div class="flex items-center gap-3 flex-wrap">
              <span class="text-white/30 text-xs">Built with</span>
              <div class="flex items-center gap-2 flex-wrap">
                <div
                  v-for="tool in project.tools"
                  :key="tool.name"
                  class="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full"
                >
                  <NuxtImg
                    :src="tool.image.url"
                    :alt="tool.name"
                    class="w-4 h-4 object-contain"
                    width="16"
                    height="16"
                  />
                  <span class="text-white/60 text-xs">{{ tool.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors duration-200 w-fit shrink-0"
          >
            View Live ↗
          </a>
        </div>

        <!-- Description -->
        <div class="py-12 border-b border-white/10 max-w-3xl">
          <p class="text-white/60 text-base leading-loose">
            {{ project.description }}
          </p>
        </div>

        <!-- Screenshots / Videos gallery -->
        <div v-if="hasMedia" class="py-12">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-white font-semibold text-lg">Screenshots & Demos</h2>
            <!-- Slide counter -->
            <span class="text-white/30 text-sm font-mono">
              {{ currentSlide + 1 }} / {{ slideCount }}
            </span>
          </div>

          <div ref="sliderRef" class="keen-slider" style="height: 560px; overflow: visible;">
            <!-- Videos -->
            <div
              v-for="videoUrl in project.project_videos"
              :key="videoUrl"
              class="keen-slider__slide rounded-2xl overflow-hidden bg-white/5"
              style="min-width: 75%;"
            >
              <iframe
                :src="videoUrl"
                class="w-full h-full"
                allowfullscreen
                title="Project demo video"
              />
            </div>

            <!-- Images — wrapper sizes to fit-content so the slide is as wide as the image naturally is at 560px tall -->
            <div
              v-for="img in project.project_image"
              :key="img.url"
              class="keen-slider__slide rounded-2xl overflow-hidden bg-white/5"
              style="width: fit-content; min-width: fit-content; height: 560px;"
            >
              <img
                :src="img.url"
                :alt="`${project.name} screenshot`"
                style="height: 560px; width: auto; display: block;"
              />
            </div>
          </div>

          <!-- Slider nav dots -->
          <div v-if="slideCount > 1" class="flex gap-2 mt-6">
            <button
              v-for="i in slideCount"
              :key="i"
              class="h-1 rounded-full transition-all duration-300"
              :class="currentSlide === i - 1 ? 'bg-yellow-500 w-6' : 'bg-white/20 w-3'"
              @click="slider?.moveToIdx(i - 1)"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
