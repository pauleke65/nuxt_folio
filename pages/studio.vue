<script setup>
import { studioProjects } from '~/data/projects'

const description = 'PIE Drops Studio is the build studio Paul Imoke runs. It makes the systems, tools and products growing businesses run on, from MVPs and AI tools to brands and campaign sites.'

useHead({
  title: 'PIE Drops Studio – Paul Imoke',
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: 'PIE Drops Studio – Paul Imoke' },
    { property: 'og:description', content: description },
  ],
})

const services = [
  { title: 'MVPs & prototypes', body: 'From napkin sketch to a working product, tested with real users before the runway burns.' },
  { title: 'AI tools & automations', body: 'Custom AI workflows that replace the manual work slowing a team down.' },
  { title: 'Chatbots & assistants', body: 'Conversational AI in the brand’s voice, for support, lead gen or internal tools.' },
  { title: 'Strategy & launch', body: 'Validation, positioning and the go-to-market plan, then the build that ships it.' },
  { title: 'Brand & content', body: 'Identities, content kits and campaign sites, made so a small team can keep them running.' },
  { title: 'Training & enablement', body: 'Hands-on workshops that leave a team genuinely able to use AI day to day.' },
]

const models = [
  { name: 'Project', note: 'One-off build', body: 'A clear problem and a deadline. Scoped in the first conversation, shipped in weeks.' },
  { name: 'Retainer', note: 'Ongoing partner', body: 'Dedicated capacity every month: building, iterating and solving alongside the team.' },
  { name: 'Sprint', note: '1–2 weeks', body: 'Drop in on one urgent thing and hand back real output, not a report.' },
]

const own = studioProjects.filter(p => p.org.startsWith('PIE Drops'))
const client = studioProjects.filter(p => !p.org.startsWith('PIE Drops'))
</script>

<template>
  <div class="bg-black min-h-screen studio">
    <Nav />

    <!-- ── Hero ──────────────────────────────────────────────────────────── -->
    <header class="relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute -left-40 -bottom-60 w-[720px] h-[720px] rounded-full" style="background: radial-gradient(circle, rgba(192,57,43,0.35) 0%, rgba(192,57,43,0) 65%);"></div>
        <div class="absolute inset-0 studio-grid"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-6 pt-32 sm:pt-40 pb-20">
        <div class="flex items-center gap-3 mb-10">
          <span class="w-8 h-px bg-[#C0392B]"></span>
          <span class="text-[#E0604F] text-xs tracking-widest uppercase font-medium">The studio I run</span>
        </div>

        <img src="/work/pie-drops-brand/mark.svg" alt="PIE Drops Studio logo" class="h-12 sm:h-16 w-auto mb-10" />

        <h1 class="text-white font-bold leading-[0.95] tracking-tight max-w-4xl" style="font-size: clamp(2.5rem, 6.5vw, 5.25rem);">
          Systems, MVPs and products for growing businesses<span class="text-[#C0392B]">.</span>
        </h1>
        <p class="text-white/60 mt-6 max-w-2xl leading-relaxed" style="font-size: clamp(1.05rem, 1.8vw, 1.3rem);">
          PIE Drops is a build partner. We don’t hand over a roadmap and leave; we walk it with the client, from the first prototype to full deployment. It is also where I build my own products.
        </p>

        <div class="flex flex-wrap gap-3 mt-10">
          <a href="https://piedrops.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-[#C0392B] text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#D44535] transition-colors">
            Visit piedrops.com <span aria-hidden="true">↗</span>
          </a>
          <a href="mailto:hello@piedrops.com" class="inline-flex items-center gap-2 text-white text-sm px-5 py-2.5 rounded-full border border-white/25 hover:bg-white hover:text-black transition-colors">
            hello@piedrops.com
          </a>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-6">
      <!-- ── Own products ──────────────────────────────────────────────── -->
      <section class="py-16 border-t border-white/10" aria-labelledby="own">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <p class="text-white/35 text-xs tracking-widest uppercase mb-3">Studio products</p>
            <h2 id="own" class="text-white font-semibold text-2xl sm:text-3xl">Things we build for ourselves</h2>
          </div>
          <p class="text-white/40 text-sm max-w-sm">Products the studio designs, builds and runs: AI, fintech, developer tools and brand.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard v-for="p in own" :key="p.slug" :project="p" size="lg" />
        </div>
      </section>

      <!-- ── Client work ───────────────────────────────────────────────── -->
      <section class="py-16 border-t border-white/10" aria-labelledby="clients">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <p class="text-white/35 text-xs tracking-widest uppercase mb-3">Client work</p>
            <h2 id="clients" class="text-white font-semibold text-2xl sm:text-3xl">Things we build for others</h2>
          </div>
          <p class="text-white/40 text-sm max-w-sm">Campaign sites and brands for consumer businesses in Ghana and Nigeria.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard v-for="p in client" :key="p.slug" :project="p" size="lg" />
        </div>
      </section>

      <!-- ── Services ──────────────────────────────────────────────────── -->
      <section class="py-16 border-t border-white/10" aria-labelledby="services-heading">
        <div class="grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <p class="text-white/35 text-xs tracking-widest uppercase mb-3">What the studio does</p>
            <h2 id="services-heading" class="text-white font-semibold text-2xl sm:text-3xl leading-tight">Fast enough to matter. Built to last.</h2>
          </div>
          <div class="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            <div v-for="(s, i) in services" :key="s.title" class="bg-black p-6">
              <span class="text-[#E0604F] text-xs font-mono">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="text-white font-medium mt-3">{{ s.title }}</h3>
              <p class="text-white/50 text-sm leading-relaxed mt-2">{{ s.body }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── How we engage ─────────────────────────────────────────────── -->
      <section class="py-16 border-t border-white/10" aria-labelledby="engage">
        <p class="text-white/35 text-xs tracking-widest uppercase mb-3">How we engage</p>
        <h2 id="engage" class="text-white font-semibold text-2xl sm:text-3xl mb-8">Pick the model that fits.</h2>
        <div class="grid md:grid-cols-3 gap-5">
          <div v-for="m in models" :key="m.name" class="rounded-2xl border border-white/10 p-6 bg-white/[0.02]">
            <div class="flex items-baseline justify-between gap-3">
              <h3 class="text-white text-xl font-semibold">{{ m.name }}</h3>
              <span class="text-white/40 text-xs">{{ m.note }}</span>
            </div>
            <p class="text-white/55 text-sm leading-relaxed mt-3">{{ m.body }}</p>
          </div>
        </div>
      </section>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <section class="border-t border-white/10" style="background: radial-gradient(70% 140% at 100% 100%, rgba(192,57,43,0.28) 0%, transparent 60%);">
      <div class="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p class="text-white/40 text-sm mb-3">Got a problem worth solving?</p>
          <a href="mailto:hello@piedrops.com" class="text-white font-semibold hover:text-[#E0604F] transition-colors break-all" style="font-size: clamp(1.6rem, 4.5vw, 3.25rem);">
            hello@piedrops.com
          </a>
        </div>
        <NuxtLink to="/projects" class="inline-flex items-center gap-2 text-white text-sm px-6 py-3 rounded-full border border-white/25 hover:bg-white hover:text-black transition-colors w-fit">
          See my full portfolio →
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.studio-grid {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at 30% 60%, black 20%, transparent 75%);
}
</style>
