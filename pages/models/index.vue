<script setup>
import { MODELS, DOMAINS } from '~/data/research/models'

definePageMeta({ layout: 'research' })

useHead({
  title: 'Models — Paul I.',
  meta: [{ name: 'description', content: 'Every system, mapped the same nine ways — actors, resources, information, incentives, feedback, constraints, bottlenecks, failure modes, leverage points.' }],
})

const era = ref('all')
const domain = ref('all')

const filtered = computed(() => MODELS.filter((m) =>
  (era.value === 'all' || m.era === era.value) && (domain.value === 'all' || m.domain === domain.value)
))

const emptyNote = computed(() => {
  if (!filtered.value.length) return 'No models in that combination yet — try another domain.'
  if (filtered.value.length === MODELS.length) return '12 built · 14 planned · next: informal credit'
  return `${filtered.value.length} of ${MODELS.length} models match this filter.`
})
</script>

<template>
  <main class="rs-main" style="max-width:1180px;margin:0 auto;padding:0 28px">
    <section class="rs-grid-stack rs-hero-pad" style="padding:72px 0 30px;display:grid;grid-template-columns:1fr 300px;gap:56px;align-items:end;border-bottom:1px solid var(--ink)">
      <div>
        <div style="font:400 12px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:18px">Models</div>
        <h1 class="rs-hero-h1" style="margin:0 0 18px;font:600 60px/1.04 var(--body-font);letter-spacing:-.035em">Every system,<br>mapped the same nine ways</h1>
        <p style="margin:0;font:400 19px/1.6 var(--body-font);color:rgba(28,26,22,.78);max-width:32em">Actors, resources, information, incentives, feedback, constraints, bottlenecks, failure modes, leverage points. The same nine for a 19th-century canal and a 2026 payments float — which is the point of doing it this way.</p>
      </div>
      <div style="font:400 12px/1.9 var(--mono);color:var(--dim);text-align:right">12 built · 26 planned<br>3 historical backtests<br>next: informal credit</div>
    </section>
    <section style="padding:0 0 20px">
      <div style="display:flex;align-items:center;gap:6px;padding:14px 0;border-bottom:1px solid var(--rule);font:400 12px var(--mono);flex-wrap:wrap">
        <a href="#" @click.prevent="era = 'all'" style="position:relative;padding:7px 12px;color:var(--ink)">All<span v-if="era === 'all'" style="position:absolute;left:0;right:0;bottom:0;height:2px;background:var(--accent)"></span></a>
        <a href="#" @click.prevent="era = 'now'" style="position:relative;padding:7px 12px;color:var(--ink)">Contemporary<span v-if="era === 'now'" style="position:absolute;left:0;right:0;bottom:0;height:2px;background:var(--accent)"></span></a>
        <a href="#" @click.prevent="era = 'past'" style="position:relative;padding:7px 12px;color:var(--ink)">Historical<span v-if="era === 'past'" style="position:absolute;left:0;right:0;bottom:0;height:2px;background:var(--accent)"></span></a>
        <span style="flex:1"></span>
        <label style="display:flex;align-items:center;gap:8px;color:var(--dim)">Domain
          <select v-model="domain">
            <option value="all">All domains</option>
            <option v-for="d in DOMAINS" :key="d" :value="d">{{ d }}</option>
          </select>
        </label>
        <span style="color:var(--dim);padding-left:6px">{{ filtered.length }} shown</span>
      </div>
      <div class="rs-grid-3" style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--rule);border-bottom:1px solid var(--rule)">
        <NuxtLink
          v-for="m in filtered"
          :key="m.id"
          :to="`/models/${m.id}`"
          style="background:var(--paper);padding:24px 22px;color:var(--ink);display:flex;flex-direction:column"
        >
          <div style="display:flex;justify-content:space-between;font:400 12px var(--mono);color:var(--dim);margin-bottom:10px"><span>{{ m.id }} · {{ m.domain }}</span><span>{{ m.year }}</span></div>
          <div style="font:400 21px/1.3 var(--body-font);margin-bottom:10px">{{ m.title }}</div>
          <div style="font:400 14px/1.55 var(--body-font);color:rgba(28,26,22,.7);margin-bottom:14px;flex:1">{{ m.blurb }}</div>
          <div style="font:400 11px var(--mono);letter-spacing:.06em;color:var(--accent)">{{ m.meta }}</div>
        </NuxtLink>
      </div>
      <div style="padding:20px 0 90px;font:400 13px var(--mono);color:var(--dim)">{{ emptyNote }}</div>
    </section>
  </main>
</template>
