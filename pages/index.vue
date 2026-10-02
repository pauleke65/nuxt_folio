<script setup>
import { MODELS, HOME_MODELS } from '~/data/research/models'
import { PROJECTS } from '~/data/research/projects'
import { NOW, LATEST } from '~/data/research/now'
import { numberWord } from '~/lib/content.mjs'
import LoopDiagram from '~/components/site/LoopDiagram.vue'
import NowCard from '~/components/site/NowCard.vue'
import ModelTile from '~/components/site/ModelTile.vue'

definePageMeta({ layout: 'research' })

useHead({
  title: 'Paul Imoke — Systems research',
  meta: [
    { name: 'description', content: 'I work out how systems actually behave, then publish predictions I can be wrong about. Models, experiments and essays.' },
    { property: 'og:title', content: 'Paul Imoke — Systems research' },
    { property: 'og:type', content: 'website' },
  ],
})

// The eight home tiles and their order come from content/home.yml. Phone shows the first four.
const featuredModels = HOME_MODELS
const modelCount = numberWord(MODELS.length)

const ERAS = [
  { label: 'All', value: 'all' },
  { label: 'Contemporary', value: 'now' },
  { label: 'Historical', value: 'past' },
]
const era = ref('all')
const shownModels = computed(() => era.value === 'all' ? featuredModels : featuredModels.filter((m) => m.era === era.value))

// Newest model revisions, runs and essays, built from content/.
const latest = LATEST

const fieldwork = PROJECTS.filter((p) => p.featured).sort((a, b) => a.featured - b.featured)
const fieldworkCols = [fieldwork.slice(0, 3), fieldwork.slice(3, 6)]
</script>

<template>
  <main>
    <section class="hero w">
      <div>
        <div class="lbl kick"><i></i>Systems research</div>
        <h1 class="h1">I work out how systems actually behave, <span>then publish predictions I can be wrong about.</span></h1>
        <p class="intro">Cities, energy, money, institutions. Different domains, same parts: actors, stocks, flows, information, incentives and delay. I map each system the same nine ways, test the map against history, and log what I expect it to do next.</p>
        <div class="links">
          <NuxtLink class="pri" to="/models/M-07">Latest model: M-07 →</NuxtLink>
          <NuxtLink to="/about">About me</NuxtLink>
          <a href="https://x.com/iampeke65" target="_blank" rel="noopener noreferrer">Follow on X</a>
        </div>
      </div>
      <LoopDiagram />
    </section>

    <section id="now" class="sec w">
      <div class="sh"><h2>Currently</h2><p>What's on the desk this month.</p><span class="lbl">Changes monthly</span></div>
      <div class="cards">
        <NowCard v-for="item in NOW" :key="item.title" :item="item" />
      </div>
    </section>

    <section class="sec w">
      <div class="sh"><h2>Models</h2><p>{{ modelCount }} systems, mapped the same nine ways.</p><NuxtLink to="/models">All models →</NuxtLink></div>
      <div class="filters">
        <button v-for="e in ERAS" :key="e.value" class="chip" :class="{ on: era === e.value }" type="button" :aria-pressed="era === e.value ? 'true' : 'false'" @click="era = e.value">{{ e.label }}</button>
      </div>
      <div class="grid">
        <ModelTile v-for="m in shownModels" :key="m.id" :model="m" />
      </div>
    </section>

    <section class="sec w">
      <div class="sh"><h2>Latest</h2><p>Models, runs and essays, newest first.</p><NuxtLink to="/models">Everything →</NuxtLink></div>
      <div class="rows">
        <NuxtLink v-for="item in latest" :key="item.id" class="row" :to="item.to">
          <span class="dt lbl">{{ item.date }}</span><span class="tt">{{ item.title }}</span><span class="ty lbl">{{ item.type }}</span><span class="id lbl">{{ item.id }}</span>
        </NuxtLink>
      </div>
    </section>

    <section class="sec w">
      <div class="sh"><h2>Fieldwork</h2><p>The systems I built before I studied them.</p><NuxtLink to="/fieldwork">Full record →</NuxtLink></div>
      <div class="split">
        <div v-for="(col, i) in fieldworkCols" :key="i" class="fw">
          <NuxtLink v-for="p in col" :key="p.name" class="fw-row" to="/fieldwork">
            <span class="yy lbl">{{ p.period }}</span><span class="pj">{{ p.name }}</span><span class="wh">{{ p.short }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
