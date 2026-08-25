<script setup>
import { EXPERIMENTS } from '~/data/research/experiments'

definePageMeta({ layout: 'research' })

useHead({
  title: 'Experiments — Paul I.',
  meta: [{ name: 'description', content: 'Simulations, historical backtests and the occasional field test. Assumptions stated first, then what the run changed about my thinking.' }],
})

const route = useRoute()
const router = useRouter()

const selectedId = computed({
  get: () => (typeof route.query.exp === 'string' && EXPERIMENTS.some((e) => e.id === route.query.exp)) ? route.query.exp : 'S-04',
  set: (id) => router.replace({ query: { ...route.query, exp: id } }),
})

const exp = computed(() => EXPERIMENTS.find((e) => e.id === selectedId.value) || EXPERIMENTS[1])

const maxBar = computed(() => Math.max(...exp.value.bars))
const peakIndex = computed(() => exp.value.bars.indexOf(maxBar.value))
const barStyles = computed(() => exp.value.bars.map((h, i) => ({
  flex: 1,
  height: Math.round((h / maxBar.value) * 100) + '%',
  background: i === peakIndex.value ? 'var(--ink)' : (i < peakIndex.value ? 'var(--accent)' : 'rgba(28,26,22,.45)'),
})))
</script>

<template>
  <main style="max-width:1180px;margin:0 auto;padding:0 28px">
    <section style="padding:72px 0 30px;display:grid;grid-template-columns:1fr 300px;gap:56px;align-items:end;border-bottom:1px solid var(--ink)">
      <div>
        <div style="font:400 12px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:18px">Experiments · {{ EXPERIMENTS.length }} runs</div>
        <h1 style="margin:0 0 18px;font:600 60px/1.04 var(--body-font);letter-spacing:-.035em">A model I cannot run<br>is an opinion with boxes</h1>
        <p style="margin:0;font:400 19px/1.6 var(--body-font);color:rgba(28,26,22,.78);max-width:32em">Simulations, historical backtests and the occasional field test. Assumptions stated first, then what the run changed about my thinking — including when it changed nothing.</p>
      </div>
      <div style="font:400 12px/1.9 var(--mono);color:var(--dim);text-align:right">5 simulations<br>2 historical backtests<br>3 predictions produced</div>
    </section>

    <section style="display:grid;grid-template-columns:296px minmax(0,1fr);gap:0;padding-bottom:90px">
      <div style="border-right:1px solid var(--rule);padding:26px 26px 26px 0">
        <div style="font:500 11px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin-bottom:14px">All experiments</div>
        <div style="display:flex;flex-direction:column;gap:2px">
          <a
            v-for="e in EXPERIMENTS"
            :key="e.id"
            href="#"
            @click.prevent="selectedId = e.id"
            :style="{
              display: 'block', padding: '14px 14px', color: 'var(--ink)', textDecoration: 'none',
              background: e.id === exp.id ? 'rgba(140,59,31,.07)' : 'transparent',
              borderLeft: e.id === exp.id ? '3px solid var(--accent)' : '3px solid transparent',
            }"
          >
            <div style="display:flex;justify-content:space-between;font:400 11px var(--mono);color:var(--dim);margin-bottom:5px"><span>{{ e.id }} · {{ e.kind }}</span><span>{{ e.date }}</span></div>
            <div style="font:400 17px/1.35 var(--body-font)">{{ e.title }}</div>
          </a>
        </div>
        <div style="font:400 11px/1.7 var(--mono);color:var(--dim);margin-top:20px;padding-top:16px;border-top:1px solid var(--rule)">Two more runs are unpublished until their predictions resolve.</div>
      </div>

      <div style="padding:26px 0 0 34px">
        <div style="display:flex;align-items:baseline;gap:14px;margin-bottom:14px">
          <span style="font:500 12px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--accent)">{{ exp.id }} · {{ exp.kind }}</span>
          <span style="font:400 12px var(--mono);color:var(--dim)">{{ exp.date }} · {{ exp.runs }}</span>
        </div>
        <h2 style="margin:0 0 14px;font:600 38px/1.12 var(--body-font);letter-spacing:-.03em">{{ exp.title }}</h2>
        <p style="margin:0 0 28px;font:400 18px/1.65 var(--body-font);color:rgba(28,26,22,.82);max-width:36em">{{ exp.lede }}</p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:34px;margin-bottom:30px">
          <div>
            <div style="font:500 11px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin-bottom:12px">Assumptions</div>
            <div style="border-top:1px solid var(--rule)">
              <div v-for="r in exp.rows" :key="r.k" style="display:flex;justify-content:space-between;gap:16px;padding:10px 0;border-bottom:1px solid var(--rule);font:400 13px var(--mono)"><span style="color:var(--dim)">{{ r.k }}</span><span>{{ r.v }}</span></div>
            </div>
          </div>
          <div>
            <div style="font:500 11px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin-bottom:12px">{{ exp.chartLabel }}</div>
            <div style="background:#fff;border:1px solid var(--rule);padding:16px 14px 10px">
              <div style="display:flex;align-items:flex-end;gap:3px;height:142px">
                <div v-for="(s, i) in barStyles" :key="i" :style="s"></div>
              </div>
              <div style="display:flex;justify-content:space-between;font:400 10px var(--mono);color:var(--dim);margin-top:8px">
                <span v-for="t in exp.axis" :key="t">{{ t }}</span>
              </div>
            </div>
            <div style="display:flex;gap:20px;margin-top:12px;font:400 12px var(--mono);flex-wrap:wrap">
              <span v-for="s in exp.stats" :key="s.k" style="color:var(--dim)">{{ s.k }} <b style="font-weight:500;color:var(--ink)">{{ s.v }}</b></span>
            </div>
          </div>
        </div>

        <div style="font:500 11px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin-bottom:10px">Mechanism, in code</div>
        <pre style="margin:0 0 28px;background:#1c1a16;color:#e8e3d6;padding:20px 22px;font:400 12.5px/1.75 var(--mono);overflow:auto">{{ exp.code }}</pre>

        <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:34px;border-top:1px solid var(--ink);padding-top:24px">
          <div>
            <div style="font:500 11px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin-bottom:10px">What the run changed</div>
            <p style="margin:0;font:400 17px/1.65 var(--body-font);color:rgba(28,26,22,.82)">{{ exp.finding }}</p>
          </div>
          <div>
            <div style="font:500 11px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin-bottom:10px">Produced</div>
            <div style="display:flex;flex-direction:column;gap:9px;font:400 15px/1.4 var(--body-font)">
              <span v-for="p in exp.produced" :key="p">{{ p }}</span>
            </div>
            <div style="display:flex;gap:14px;margin-top:14px;font:400 12px var(--mono)">
              <NuxtLink to="/predictions">Ledger →</NuxtLink>
              <NuxtLink v-if="exp.relatedModel" :to="`/models/${exp.relatedModel}`">Model →</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
