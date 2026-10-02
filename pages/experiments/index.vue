<script setup>
import { EXPERIMENTS } from '~/data/research/experiments'
import PageHead from '~/components/site/PageHead.vue'
import FactList from '~/components/site/FactList.vue'

definePageMeta({
  layout: 'research',
  // Old links used /experiments?exp=S-04. Each run has its own page now.
  middleware: [(to) => {
    if (typeof to.query.exp === 'string' && to.query.exp) return navigateTo(`/experiments/${to.query.exp}`, { replace: true })
  }],
})

useHead({
  title: 'Experiments — Paul Imoke',
  meta: [{ name: 'description', content: 'Simulations, historical backtests and the occasional field test. Assumptions stated first, then what the run changed.' }],
})

const latest = EXPERIMENTS[0]
const facts = [
  { k: 'Published', v: `${EXPERIMENTS.length} runs` },
  { k: 'Waiting', v: '2 runs, until their predictions resolve' },
  { k: 'Latest', v: latest ? `${latest.id} · ${latest.date}` : 'None yet' },
]
</script>

<template>
  <main>
    <PageHead
      :kicker="`Experiments · ${EXPERIMENTS.length} runs`"
      title="A model I cannot run is an opinion with boxes"
      stand="Simulations, historical backtests and the occasional field test. Assumptions stated first, then what the run changed about my thinking, including when it changed nothing."
    >
      <FactList :items="facts" />
    </PageHead>

    <section class="w">
      <div class="runs">
        <NuxtLink v-for="e in EXPERIMENTS" :key="e.id" class="run" :to="`/experiments/${e.id}`">
          <div class="rn-id"><span class="lbl">{{ e.id }}</span><span class="lbl mu">{{ e.date }}</span></div>
          <div class="rn-main">
            <span class="lbl ac">{{ e.kind }}<template v-if="e.summary"> · {{ e.runs }}</template></span>
            <h3>{{ e.title }}</h3>
            <p v-if="e.summary">{{ e.summary }}</p>
          </div>
          <div class="rn-res"><template v-if="e.headline"><b>{{ e.headline.value }}</b><span class="lbl mu">{{ e.headline.label }}</span></template></div>
        </NuxtLink>
        <div class="run wait">
          <div class="rn-id"><span class="st mu lbl"><i class="o"></i>Waiting</span></div>
          <p>Two more runs are unpublished until their predictions resolve.</p>
        </div>
      </div>
    </section>
  </main>
</template>
