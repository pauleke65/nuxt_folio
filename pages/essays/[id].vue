<script setup>
import { ESSAYS, ESSAY_BODIES } from '~/data/research/essays'
import { MODELS } from '~/data/research/models'
import PageHead from '~/components/site/PageHead.vue'
import SidebarBlock from '~/components/site/SidebarBlock.vue'
import PrevNext from '~/components/site/PrevNext.vue'
import BarChart from '~/components/site/BarChart.vue'

definePageMeta({ layout: 'research' })

const route = useRoute()
const sorted = [...ESSAYS].sort((a, b) => b.iso.localeCompare(a.iso))
const index = computed(() => sorted.findIndex((e) => e.id === route.params.id))
const essay = computed(() => sorted[index.value])
const body = computed(() => ESSAY_BODIES[route.params.id])
const model = computed(() => MODELS.find((m) => m.id === essay.value?.model))

const paragraphs = computed(() => body.value ? (body.value.pull ? body.value.paragraphs.slice(0, -1) : body.value.paragraphs) : [])
const pull = computed(() => body.value?.pull ? body.value.paragraphs.at(-1) : null)

useHead(() => ({
  title: essay.value ? `Essay ${essay.value.id} — Paul Imoke` : 'Essay — Paul Imoke',
  meta: [{ name: 'description', content: essay.value?.dek ?? '' }],
}))

const ALL = { to: '/essays', title: 'Writing is how I find out whether I understood it' }
const pn = computed(() => {
  const newer = sorted[index.value - 1]
  const older = sorted[index.value + 1]
  return {
    prev: newer ? { label: `← Newer · ${newer.id}`, title: newer.title, to: `/essays/${newer.id}` } : { label: '← All essays', ...ALL },
    next: older ? { label: `Older · ${older.id} →`, title: older.title, to: `/essays/${older.id}` } : { label: 'All essays →', ...ALL },
  }
})
</script>

<template>
  <main v-if="!essay" class="w">
    <div class="crumb lbl"><NuxtLink to="/essays">Essays</NuxtLink><span>/</span><span>Not found</span></div>
    <PageHead kicker="Essays" title="That essay doesn't exist" stand="The published ones are on the essays page." />
  </main>

  <main v-else>
    <div class="w"><div class="crumb lbl"><NuxtLink to="/essays">Essays</NuxtLink><span>/</span><span>{{ essay.id }}</span></div></div>
    <header class="eh w">
      <div class="lbl kick"><i></i>Essay · {{ essay.date }} · {{ essay.readTime }} read</div>
      <h1>{{ essay.title }}</h1>
      <p class="stand">{{ essay.dek }}</p>
    </header>

    <div class="w">
      <div v-if="body" class="art">
        <article class="copy">
          <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
          <BarChart v-if="body.figure" class="cmp" :chart="body.figure" />
          <p v-if="pull" class="pull">{{ pull }}</p>
        </article>
        <aside class="side">
          <div class="side-in">
            <SidebarBlock v-if="model" label="Related model">
              <NuxtLink class="rel" :to="`/models/${model.id}`"><b>{{ model.id }} · {{ model.title }}</b><span>{{ model.blurb }}</span></NuxtLink>
            </SidebarBlock>
            <SidebarBlock v-if="body.revises" label="Revises">
              <div class="rel"><b>{{ body.revises.title }}</b><span>{{ body.revises.text }}</span></div>
            </SidebarBlock>
            <SidebarBlock v-if="body.lineage" label="Where it came from">
              <div class="rel"><span><em>{{ body.lineage }}</em></span></div>
            </SidebarBlock>
          </div>
        </aside>
      </div>
      <div v-else class="art">
        <p class="note" style="margin:0">Full essay not published yet.</p>
      </div>
    </div>

    <div class="w" style="padding-top:clamp(56px,6vw,96px)"><PrevNext v-bind="pn" label="More essays" /></div>
  </main>
</template>
