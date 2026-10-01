<script setup>
import { ESSAYS } from '~/data/research/essays'
import PageHead from '~/components/site/PageHead.vue'
import FactList from '~/components/site/FactList.vue'

definePageMeta({ layout: 'research' })

useHead({
  title: 'Essays — Paul Imoke',
  meta: [{ name: 'description', content: 'Short pieces, one idea each. Several are post-mortems on predictions I lost.' }],
})

const sorted = [...ESSAYS].sort((a, b) => b.iso.localeCompare(a.iso))

const facts = [
  { k: 'Published', v: `${ESSAYS.length} notes` },
  { k: 'Post-mortems', v: String(ESSAYS.filter((e) => e.kind === 'Post-mortem').length) },
  { k: 'Latest', v: `${sorted[0].id} · ${sorted[0].date}` },
]

const FILTERS = [
  { label: 'All', kind: null },
  { label: 'Post-mortems', kind: 'Post-mortem' },
  { label: 'Historical', kind: 'Historical' },
  { label: 'Personal', kind: 'Personal' },
]
const kind = ref(null)
const shown = computed(() => kind.value ? sorted.filter((e) => e.kind === kind.value) : sorted)
</script>

<template>
  <main>
    <PageHead
      :kicker="`Essays · ${ESSAYS.length} notes`"
      title="Writing is how I find out whether I understood it"
      stand="Short pieces, one idea each. Several are post-mortems on predictions I lost, which are the ones worth reading."
    >
      <FactList :items="facts" />
    </PageHead>

    <section class="w">
      <div class="filters">
        <button v-for="f in FILTERS" :key="f.label" class="chip" :class="{ on: kind === f.kind }" type="button" :aria-pressed="kind === f.kind ? 'true' : 'false'" @click="kind = f.kind">{{ f.label }}</button>
      </div>
      <div class="posts">
        <NuxtLink v-for="(e, i) in shown" :key="e.id" class="post" :class="{ lead: i === 0 }" :to="`/essays/${e.id}`">
          <div class="po-meta"><span class="lbl">{{ e.date }}</span><span class="lbl mu">{{ e.id }} · {{ e.readTime }}</span></div>
          <div class="po-main"><h3>{{ e.title }}</h3><p>{{ e.dek }}</p></div>
          <div class="po-tags"><span class="lbl ac">{{ e.kind }}</span><span v-if="e.model" class="lbl mu">Model {{ e.model }}</span></div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
