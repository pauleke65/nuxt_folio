<script setup>
import { MODELS, DOMAINS } from '~/data/research/models'
import PageHead from '~/components/site/PageHead.vue'
import FactList from '~/components/site/FactList.vue'
import ModelTile from '~/components/site/ModelTile.vue'
import FeatherIcon from '~/components/site/FeatherIcon.vue'
import { numberWord } from '~/lib/content.mjs'

definePageMeta({ layout: 'research' })

useHead({
  title: 'Models — Paul Imoke',
  meta: [{ name: 'description', content: 'Every system, mapped the same nine ways: actors, resources, information, incentives, feedback, constraints, bottlenecks, failure modes and leverage points.' }],
})

const LENSES = ['Actors', 'Resources', 'Information', 'Incentives', 'Feedback', 'Constraints', 'Bottlenecks', 'Failure modes', 'Leverage points']

const facts = [
  { k: 'Built', v: `${MODELS.length} models` },
  { k: 'Historical backtests', v: String(MODELS.filter((m) => m.era === 'past').length) },
  { k: 'Next', v: 'Informal credit' },
]

const ERAS = [
  { label: 'All', value: 'all' },
  { label: 'Contemporary', value: 'now' },
  { label: 'Historical', value: 'past' },
]
const era = ref('all')
const domain = ref('all')

const shown = computed(() => MODELS.filter((m) =>
  (era.value === 'all' || m.era === era.value) && (domain.value === 'all' || m.domain === domain.value)))
</script>

<template>
  <main>
    <PageHead
      :kicker="`Models · ${MODELS.length} built`"
      title="Every system, mapped the same nine ways"
      stand="The same nine for a 19th-century canal and a 2026 payments float, which is the point of doing it this way. The systems change. The parts do not."
    >
      <FactList :items="facts" />
    </PageHead>

    <section class="w">
      <ol class="nine" aria-label="The nine lenses">
        <li v-for="(lens, i) in LENSES" :key="lens"><b>{{ String(i + 1).padStart(2, '0') }}</b><span>{{ lens }}</span></li>
      </ol>
    </section>

    <section class="w">
      <div class="fbar">
        <div class="filters">
          <button v-for="e in ERAS" :key="e.value" class="chip" :class="{ on: era === e.value }" type="button" :aria-pressed="era === e.value ? 'true' : 'false'" @click="era = e.value">{{ e.label }}</button>
          <label class="chip dd" :class="{ on: domain !== 'all' }" style="position:relative">
            {{ domain === 'all' ? 'All domains' : domain }}<FeatherIcon name="chevron-down" />
            <select v-model="domain" aria-label="Domain" style="position:absolute;inset:0;width:100%;opacity:0;cursor:pointer">
              <option value="all">All domains</option>
              <option v-for="d in DOMAINS" :key="d" :value="d">{{ d }}</option>
            </select>
          </label>
        </div>
        <span class="lbl mu" aria-live="polite">{{ shown.length }} shown</span>
      </div>
      <div v-if="shown.length" class="grid all">
        <ModelTile v-for="m in shown" :key="m.id" :model="m" />
      </div>
      <p v-else class="note" style="margin-top:0">No models match those filters yet.</p>
      <p class="note">{{ numberWord(MODELS.length) }} built so far. Informal credit is next.</p>
    </section>
  </main>
</template>
