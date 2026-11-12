<script setup>
import { projects, featuredProjects, moreProjects, CATEGORIES, categoryCount } from '~/data/projects'

const route = useRoute()
const router = useRouter()
const { siteData } = useSiteData()

const description = 'Portfolio of Paul Imoke, Lead Software Engineer. Mobile apps, web platforms, AI automation and Web3, shipped for startups in Africa, the Middle East and the USA.'

useHead({
  title: 'Work – Paul Imoke, Lead Software Engineer',
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: 'Paul Imoke – Selected work' },
    { property: 'og:description', content: description },
  ],
})

// ── Filter, kept in the URL (?focus=mobile) so a filtered view can be shared ──
const validKeys = CATEGORIES.map(c => c.key)
const focus = computed(() => (validKeys.includes(route.query.focus) ? route.query.focus : 'all'))

function setFocus(key) {
  router.replace({ query: key === 'all' ? {} : { focus: key } })
}

const featuredSlugs = new Set(featuredProjects.map(p => p.slug))
const filtered = computed(() => {
  const matches = projects.filter(p => p.categories.includes(focus.value))
  // Case studies first, then the original order
  return [...matches.filter(p => featuredSlugs.has(p.slug)), ...matches.filter(p => !featuredSlugs.has(p.slug))]
})
const focusLabel = computed(() => CATEGORIES.find(c => c.key === focus.value)?.label)

// ── Share ──
const copied = ref(false)
async function share() {
  const url = window.location.href
  try {
    if (navigator.share) {
      await navigator.share({ title: 'Paul Imoke – Selected work', url })
      return
    }
    await navigator.clipboard.writeText(url)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // User cancelled the share sheet or clipboard was blocked; nothing to do.
  }
}

const facts = [
  { value: '9+', label: 'years shipping software' },
  { value: String(projects.length), label: 'projects in this portfolio' },
  { value: '4', label: 'countries of remote teams led' },
  { value: '$60K', label: 'Stellar funding won with a demo' },
]

const experience = [
  { role: 'Lead Engineer', org: 'BLIA — Buy Land in Africa', where: 'USA · Remote', period: '2024 – Now' },
  { role: 'Lead Developer', org: 'Agrolinking Solutions', where: 'Nigeria · Remote', period: '2025 – 2026' },
  { role: 'Lead Mobile Engineer', org: 'Sustineri Attorneys', where: 'Ghana · Remote', period: '2023 – 2025' },
  { role: 'Lead Engineer', org: 'Tecmie LLC', where: 'USA · Remote', period: '2023 – 2025' },
  { role: 'Lead Engineer', org: 'AMTAP Technologies', where: 'Dubai · Remote', period: '2022 – 2025' },
  { role: 'Technology Lead', org: 'MEST Africa (4 startups)', where: 'Accra, Ghana', period: '2022 – 2023' },
  { role: 'Software Mobile Engineer', org: 'WSTC Financial Services', where: 'Nigeria', period: '2022 – 2023' },
  { role: 'Mobile App Developer', org: 'Impresanera Ltd', where: 'Nigeria', period: '2021 – 2022' },
]

const skills = [
  { group: 'Mobile', items: 'Flutter (Dart), React Native' },
  { group: 'Web', items: 'Next.js, Nuxt, Vue, Angular' },
  { group: 'Backend', items: 'Node.js, Express, Django, PostgreSQL, MySQL, Firebase' },
  { group: 'AI & Automation', items: 'OpenAI API, AI agents, WhatsApp Business API, Bull MQ' },
  { group: 'Web3', items: 'Stellar, IPFS, Pinata' },
]
</script>

<template>
  <div class="bg-black min-h-screen">
    <Nav />

    <!-- ── Intro ─────────────────────────────────────────────────────────── -->
    <header class="max-w-7xl mx-auto px-6 pt-32 sm:pt-40 pb-14">
      <div class="flex items-center gap-3 mb-8">
        <span class="w-8 h-px bg-yellow-500"></span>
        <span class="text-yellow-500 text-xs tracking-widest uppercase font-medium">Selected work · 2016 – 2026</span>
      </div>

      <div class="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
        <div>
          <h1 class="text-white font-bold leading-[0.95] tracking-tight" style="font-size: clamp(2.75rem, 7vw, 5.75rem);">
            Paul Imoke<span class="text-yellow-500">.</span>
          </h1>
          <p class="text-white/80 mt-5 leading-snug" style="font-size: clamp(1.15rem, 2.2vw, 1.6rem);">
            Lead Software Engineer. I design and ship mobile apps, web platforms, AI automation and Web3 products, from the schema to the store listing.
          </p>
        </div>

        <div class="lg:pb-2">
          <p class="text-white/50 text-sm leading-relaxed">
            9+ years building for startups across Africa, the Middle East and the USA. I usually own the whole thing: architecture, backend, mobile, deployment, and the conversation with the CEO. I also run <NuxtLink to="/studio" class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-yellow-500">PIE Drops Studio</NuxtLink>.
          </p>
          <div class="flex flex-wrap items-center gap-3 mt-6">
            <a
              href="mailto:pauleke65@gmail.com"
              class="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-400 transition-colors"
            >Email me <span aria-hidden="true">↗</span></a>
            <a
              v-if="siteData.resumeLink?.url"
              :href="siteData.resumeLink.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-white text-sm px-5 py-2.5 rounded-full border border-white/25 hover:bg-white hover:text-black transition-colors"
            >Download CV</a>
            <button
              type="button"
              class="inline-flex items-center gap-2 text-white/70 text-sm px-4 py-2.5 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-colors"
              @click="share"
            >
              <i class="bx" :class="copied ? 'bx-check' : 'bx-link'" aria-hidden="true"></i>
              {{ copied ? 'Link copied' : 'Share' }}
            </button>
            <a href="https://linkedin.com/in/paul-imoke-010a941bb/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors" aria-label="LinkedIn">
              <i class="bx bxl-linkedin text-lg"></i>
            </a>
            <a href="https://github.com/pauleke65" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-colors" aria-label="GitHub">
              <i class="bx bxl-github text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Facts -->
      <dl class="grid grid-cols-2 lg:grid-cols-4 mt-14 border-t border-white/10">
        <div v-for="(fact, i) in facts" :key="fact.label" class="pt-6 pb-2 pr-4" :class="i % 2 === 1 ? 'pl-4 lg:pl-0' : ''">
          <dt class="sr-only">{{ fact.label }}</dt>
          <dd class="text-white font-bold text-3xl sm:text-4xl leading-none">{{ fact.value }}</dd>
          <dd class="text-white/40 text-xs sm:text-sm mt-2">{{ fact.label }}</dd>
        </div>
      </dl>
    </header>

    <!-- ── Filter bar ────────────────────────────────────────────────────── -->
    <div class="sticky top-16 z-50 bg-black/85 backdrop-blur-md border-y border-white/10">
      <div class="max-w-7xl mx-auto px-6">
        <nav class="flex gap-2 overflow-x-auto py-3 -mx-1 px-1 no-scrollbar" aria-label="Filter projects">
          <button
            v-for="cat in CATEGORIES"
            :key="cat.key"
            type="button"
            class="shrink-0 text-sm px-4 py-1.5 rounded-full border transition-colors duration-200"
            :class="focus === cat.key
              ? 'bg-white text-black border-white'
              : 'text-white/60 border-white/10 hover:text-white hover:border-white/30'"
            :aria-pressed="focus === cat.key"
            @click="setFocus(cat.key)"
          >
            {{ cat.label }}
            <span class="ml-1 text-xs" :class="focus === cat.key ? 'text-black/50' : 'text-white/30'">{{ categoryCount(cat.key) }}</span>
          </button>
        </nav>
      </div>
    </div>

    <!-- ── All work ──────────────────────────────────────────────────────── -->
    <main v-if="focus === 'all'" class="max-w-7xl mx-auto px-6">
      <section class="pt-16 pb-20" aria-labelledby="case-studies">
        <div class="flex items-end justify-between gap-6 mb-8">
          <h2 id="case-studies" class="text-white font-semibold text-2xl sm:text-3xl">Case studies</h2>
          <p class="text-white/40 text-sm hidden sm:block">The work I’d point a hiring manager to first.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" size="lg" />
        </div>
      </section>

      <section class="pb-20" aria-labelledby="more-work">
        <div class="flex items-end justify-between gap-6 mb-8">
          <h2 id="more-work" class="text-white font-semibold text-2xl sm:text-3xl">More work</h2>
          <p class="text-white/40 text-sm hidden sm:block">Client, studio, product and open-source work.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard v-for="project in moreProjects" :key="project.slug" :project="project" />
        </div>
      </section>

    </main>

    <!-- ── Filtered view ─────────────────────────────────────────────────── -->
    <main v-else class="max-w-7xl mx-auto px-6 pt-12 pb-20">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
        <h2 class="text-white font-semibold text-2xl sm:text-3xl">
          {{ focusLabel }} <span class="text-white/30 font-normal">· {{ filtered.length }}</span>
        </h2>
        <button type="button" class="text-white/50 hover:text-white text-sm text-left sm:text-right" @click="share">
          {{ copied ? 'Link copied' : 'Copy a link to this view' }}
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProjectCard v-for="project in filtered" :key="project.slug" :project="project" />
      </div>
    </main>

    <!-- ── Experience & skills at a glance ───────────────────────────────── -->
    <section class="border-t border-white/10" aria-labelledby="glance">
      <div class="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[1.3fr_1fr] gap-14">
        <div>
          <h2 id="glance" class="text-white font-semibold text-2xl sm:text-3xl mb-8">Where I’ve worked</h2>
          <ol class="border-t border-white/10">
            <li
              v-for="job in experience"
              :key="job.org"
              class="grid grid-cols-[1fr_auto] sm:grid-cols-[1.1fr_1fr_auto] gap-x-6 gap-y-1 py-4 border-b border-white/10"
            >
              <span class="text-white text-sm font-medium">{{ job.org }}</span>
              <span class="text-white/40 text-sm font-mono sm:order-3 text-right">{{ job.period }}</span>
              <span class="text-white/50 text-sm col-span-2 sm:col-span-1 sm:order-2">{{ job.role }} · {{ job.where }}</span>
            </li>
          </ol>
          <NuxtLink to="/#experience" class="inline-block mt-6 text-sm text-white/50 hover:text-white">Full experience →</NuxtLink>
        </div>

        <div>
          <h2 class="text-white font-semibold text-2xl sm:text-3xl mb-8">Toolbox</h2>
          <dl class="border-t border-white/10">
            <div v-for="s in skills" :key="s.group" class="py-4 border-b border-white/10">
              <dt class="text-white/40 text-xs tracking-widest uppercase mb-1.5">{{ s.group }}</dt>
              <dd class="text-white/80 text-sm leading-relaxed">{{ s.items }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <section class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p class="text-white/40 text-sm mb-3">Hiring, or have something to build?</p>
          <a href="mailto:pauleke65@gmail.com" class="text-white font-semibold hover:text-yellow-500 transition-colors break-all" style="font-size: clamp(1.6rem, 4.5vw, 3.25rem);">
            pauleke65@gmail.com
          </a>
        </div>
        <a
          v-if="siteData.resumeLink?.url"
          :href="siteData.resumeLink.url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-white text-sm px-6 py-3 rounded-full border border-white/25 hover:bg-white hover:text-black transition-colors w-fit"
        >Download my CV ↗</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
