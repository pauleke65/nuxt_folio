<script setup>
import { MODELS, MODEL_DETAILS } from '~/data/research/models'
import PageHead from '~/components/site/PageHead.vue'
import FactList from '~/components/site/FactList.vue'
import SidebarBlock from '~/components/site/SidebarBlock.vue'
import PrevNext from '~/components/site/PrevNext.vue'
import DiagramM07 from '~/components/site/DiagramM07.vue'
import { numberWord } from '~/lib/content.mjs'

definePageMeta({ layout: 'research' })

const route = useRoute()
const model = computed(() => MODELS.find((m) => m.id === route.params.id))
const detail = computed(() => MODEL_DETAILS[route.params.id])

useHead(() => ({
  title: model.value ? `Model ${model.value.id} — Paul Imoke` : 'Model — Paul Imoke',
  meta: [{ name: 'description', content: model.value?.blurb ?? '' }],
}))

const TIERS = { LOW: 1, MEDIUM: 2, HIGH: 3, EXTREME: 4 }
const tierLabel = (t) => t.charAt(0) + t.slice(1).toLowerCase()

// "v3 · 18 Aug · added B1" → version and the rest.
const splitRevision = (r) => {
  const i = r.indexOf(' · ')
  return i === -1 ? [r, ''] : [r.slice(0, i), r.slice(i + 3)]
}

const stubFacts = computed(() => model.value ? [
  { k: 'Domain', v: model.value.domain },
  { k: 'Period', v: model.value.year },
  { k: 'Status', v: model.value.meta === 'IN PROGRESS' ? 'In progress' : 'Write-up pending' },
] : [])

// Previous / next in id order. The ends link back to the full list.
const byId = [...MODELS].sort((a, b) => a.id.localeCompare(b.id))
const ALL = { to: '/models', title: `${numberWord(MODELS.length)} systems, mapped the same nine ways` }
const pn = computed(() => {
  const i = byId.findIndex((m) => m.id === route.params.id)
  const prev = byId[i - 1]
  const next = byId[i + 1]
  return {
    prev: prev ? { label: `← Previous · ${prev.id}`, title: prev.title, to: `/models/${prev.id}` } : { label: '← All models', ...ALL },
    next: next ? { label: `Next · ${next.id} →`, title: next.title, to: `/models/${next.id}` } : { label: 'All models →', ...ALL },
  }
})
</script>

<template>
  <main v-if="!model" class="w">
    <div class="crumb lbl"><NuxtLink to="/models">Models</NuxtLink><span>/</span><span>Not found</span></div>
    <PageHead kicker="Models" title="That model doesn't exist" stand="It may have been renumbered. The full list is on the models page." />
  </main>

  <main v-else>
    <div class="w"><div class="crumb lbl"><NuxtLink to="/models">Models</NuxtLink><span>/</span><span>{{ model.id }}</span></div></div>

    <template v-if="detail">
      <PageHead :kicker="detail.kicker" :title="detail.title" :stand="detail.lede">
        <FactList :items="detail.facts" />
      </PageHead>

      <section v-if="model.id === 'M-07'" id="structure" class="w">
        <figure class="fig">
          <div class="fig-h"><span class="lbl">01 — Structure</span><span class="lbl">Fig. 1</span></div>
          <div class="fig-b"><DiagramM07 /></div>
          <figcaption>{{ detail.caption }}</figcaption>
        </figure>
      </section>

      <section class="body w">
        <div class="main">
          <section id="actors" class="part">
            <div class="part-h"><span class="lbl">02</span><h2>Actors &amp; incentives</h2></div>
            <dl class="actors">
              <div v-for="a in detail.actors" :key="a.who"><dt>{{ a.who }}</dt><dd>{{ a.what }}</dd></div>
            </dl>
          </section>
          <section id="leverage" class="part">
            <div class="part-h"><span class="lbl">03</span><h2>Leverage points</h2></div>
            <ol class="ladder">
              <li v-for="l in detail.leverage" :key="l.tier">
                <span class="lv lbl">{{ tierLabel(l.tier) }}</span>
                <span class="bars" aria-hidden="true"><i v-for="n in 4" :key="n" :class="{ on: n <= TIERS[l.tier] }"></i></span>
                <p>{{ l.text }}</p>
              </li>
            </ol>
          </section>
          <section id="falsifier" class="part">
            <div class="part-h"><span class="lbl">04</span><h2>What would prove me wrong</h2></div>
            <blockquote class="fals"><span class="lbl">Falsifier</span><p>{{ detail.falsifier }}</p></blockquote>
          </section>
        </div>
        <aside class="side">
          <div class="side-in">
            <SidebarBlock label="On this page">
              <ol class="toc">
                <li><a href="#structure"><span>01</span>Structure</a></li>
                <li><a href="#actors"><span>02</span>Actors</a></li>
                <li><a href="#leverage"><span>03</span>Leverage</a></li>
                <li><a href="#falsifier"><span>04</span>Falsifier</a></li>
              </ol>
            </SidebarBlock>
            <SidebarBlock label="Produced">
              <ul class="prod">
                <li v-for="p in detail.produced" :key="p.label"><b>{{ p.n }}</b>{{ p.label }}<em v-if="p.note">{{ p.note }}</em></li>
              </ul>
            </SidebarBlock>
            <SidebarBlock label="Revisions">
              <ol class="rev">
                <li v-for="r in detail.revisions" :key="r"><b>{{ splitRevision(r)[0] }}</b>{{ splitRevision(r)[1] }}</li>
              </ol>
            </SidebarBlock>
          </div>
        </aside>
      </section>
    </template>

    <template v-else>
      <PageHead :kicker="`Model · ${model.domain}`" :title="model.title" :stand="model.blurb">
        <FactList :items="stubFacts" />
      </PageHead>
      <section class="w" style="padding-bottom:clamp(48px,5vw,72px)">
        <p class="note" style="margin:0;padding-top:20px;border-top:1px solid var(--ink)">Full write-up not published yet.</p>
      </section>
    </template>

    <div class="w"><PrevNext v-bind="pn" label="More models" /></div>
  </main>
</template>
