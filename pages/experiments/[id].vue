<script setup>
import { EXPERIMENTS } from '~/data/research/experiments'
import { MODELS } from '~/data/research/models'
import PageHead from '~/components/site/PageHead.vue'
import FactList from '~/components/site/FactList.vue'
import SidebarBlock from '~/components/site/SidebarBlock.vue'
import PrevNext from '~/components/site/PrevNext.vue'
import BarChart from '~/components/site/BarChart.vue'

definePageMeta({ layout: 'research' })

const route = useRoute()
const index = computed(() => EXPERIMENTS.findIndex((e) => e.id === route.params.id))
const exp = computed(() => EXPERIMENTS[index.value])

useHead(() => ({
  title: exp.value ? `Experiment ${exp.value.id} — Paul Imoke` : 'Experiment — Paul Imoke',
  meta: [{ name: 'description', content: exp.value?.summary ?? exp.value?.lede ?? '' }],
}))

const facts = computed(() => {
  const e = exp.value
  if (!e) return []
  if (e.facts) return e.facts
  const model = MODELS.find((m) => m.id === e.relatedModel)
  return [
    { k: 'Method', v: e.kind },
    { k: 'Runs', v: e.runs },
    model && { k: 'Tests', v: `${model.id} · ${model.title}` },
    e.headline && { k: 'Result', v: `${e.headline.value} · ${e.headline.label}` },
  ].filter(Boolean)
})

const run = computed(() => exp.value?.run ?? [{ k: 'Date', v: exp.value?.date }, { k: 'Runs', v: exp.value?.runs }])

// Keywords in the code block turn blue. Escape first, then wrap.
const code = computed(() => (exp.value?.code ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/\b(for|in)\b/g, '<i>$1</i>'))

// The list runs newest first, so "previous" is the older run.
const WORDS = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
const ALL = { to: '/experiments', title: `${WORDS[EXPERIMENTS.length] ?? EXPERIMENTS.length} runs, two more waiting` }
const pn = computed(() => {
  const older = EXPERIMENTS[index.value + 1]
  const newer = EXPERIMENTS[index.value - 1]
  return {
    prev: older ? { label: `← Previous · ${older.id}`, title: older.title, to: `/experiments/${older.id}` } : { label: '← All experiments', ...ALL },
    next: newer ? { label: `Next · ${newer.id} →`, title: newer.title, to: `/experiments/${newer.id}` } : { label: 'All experiments →', ...ALL },
  }
})
</script>

<template>
  <main v-if="!exp" class="w">
    <div class="crumb lbl"><NuxtLink to="/experiments">Experiments</NuxtLink><span>/</span><span>Not found</span></div>
    <PageHead kicker="Experiments" title="That run doesn't exist" stand="It may be one of the runs still waiting on its prediction. The published ones are on the experiments page." />
  </main>

  <main v-else>
    <div class="w"><div class="crumb lbl"><NuxtLink to="/experiments">Experiments</NuxtLink><span>/</span><span>{{ exp.id }}</span></div></div>

    <PageHead :kicker="`Experiment · ${exp.kind} · ${exp.date}`" :title="exp.title" :stand="exp.lede">
      <FactList :items="facts" />
    </PageHead>

    <section class="body w" style="padding-top:0">
      <div class="main">
        <section id="assumptions" class="part">
          <div class="part-h"><span class="lbl">01</span><h2>Assumptions</h2></div>
          <dl class="asm">
            <div v-for="r in exp.rows" :key="r.k"><dt class="lbl">{{ r.k }}</dt><dd>{{ r.v }}</dd></div>
          </dl>
        </section>
        <section id="result" class="part">
          <div class="part-h"><span class="lbl">02</span><h2>Result</h2></div>
          <BarChart v-if="exp.chart" :chart="exp.chart" style="margin-top:24px" />
          <FactList v-else :items="exp.stats" style="margin-top:8px;border-top:0" />
        </section>
        <section id="mechanism" class="part">
          <div class="part-h"><span class="lbl">03</span><h2>Mechanism, in code</h2></div>
          <pre class="code" style="margin-top:24px" v-html="code"></pre>
        </section>
        <section id="changed" class="part">
          <div class="part-h"><span class="lbl">04</span><h2>What the run changed</h2></div>
          <blockquote class="fals"><span class="lbl">{{ exp.findingLabel ?? 'Finding' }}</span><p>{{ exp.finding }}</p></blockquote>
        </section>
      </div>
      <aside class="side">
        <div class="side-in">
          <SidebarBlock label="On this page">
            <ol class="toc">
              <li><a href="#assumptions"><span>01</span>Assumptions</a></li>
              <li><a href="#result"><span>02</span>Result</a></li>
              <li><a href="#mechanism"><span>03</span>Mechanism</a></li>
              <li><a href="#changed"><span>04</span>What changed</a></li>
            </ol>
          </SidebarBlock>
          <SidebarBlock label="Produced">
            <ul class="prod">
              <li v-for="p in exp.produced" :key="p.label"><b>{{ p.n }}</b>{{ p.label }}<em v-if="p.note">{{ p.note }}</em></li>
            </ul>
          </SidebarBlock>
          <SidebarBlock label="Run">
            <ol class="rev">
              <li v-for="r in run" :key="r.k"><b>{{ r.k }}</b>{{ r.v }}</li>
            </ol>
          </SidebarBlock>
        </div>
      </aside>
    </section>

    <div class="w"><PrevNext v-bind="pn" label="More experiments" /></div>
  </main>
</template>
