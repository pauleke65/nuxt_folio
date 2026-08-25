<script setup>
import { OPEN_PREDICTIONS, SETTLED_PREDICTIONS, CALIBRATION_BUCKETS } from '~/data/research/predictions'

definePageMeta({ layout: 'research' })

useHead({
  title: 'Predictions — Paul I.',
  meta: [{ name: 'description', content: 'The ledger. Each prediction carries a mechanism, a probability and a deadline, logged before the outcome is known.' }],
})

const rightCount = SETTLED_PREDICTIONS.filter((p) => p.verdict === 'RIGHT').length
const wrongCount = SETTLED_PREDICTIONS.length - rightCount
</script>

<template>
  <main class="rs-main" style="max-width:1180px;margin:0 auto;padding:0 28px">
    <section class="rs-grid-stack rs-hero-pad" style="padding:72px 0 30px;display:grid;grid-template-columns:1fr 380px;gap:56px;align-items:end;border-bottom:1px solid var(--ink)">
      <div>
        <div style="font:400 12px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:18px">Predictions · 34 recorded</div>
        <h1 class="rs-hero-h1" style="margin:0 0 18px;font:600 60px/1.04 var(--body-font);letter-spacing:-.035em">The ledger</h1>
        <p style="margin:0;font:400 19px/1.6 var(--body-font);color:rgba(28,26,22,.78);max-width:33em">Each prediction carries a mechanism, a probability and a deadline, logged before the outcome is known. Thirteen are open. Twenty-one are settled, eight of them against me.</p>
      </div>
      <div>
        <div style="font:400 11px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--dim);margin-bottom:10px">Calibration — stated vs. actual</div>
        <div style="display:flex;align-items:flex-end;gap:8px;height:84px">
          <div v-for="b in CALIBRATION_BUCKETS" :key="b.label" style="flex:1;display:flex;align-items:flex-end;gap:3px;height:100%">
            <div :style="{ flex: 1, height: b.stated + '%', background: 'rgba(28,26,22,.2)' }"></div>
            <div :style="{ flex: 1, height: b.actual + '%', background: 'var(--accent)' }"></div>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;font:400 10px var(--mono);color:var(--dim);margin-top:6px"><span v-for="b in CALIBRATION_BUCKETS" :key="'l' + b.label">{{ b.label }}</span></div>
        <div style="font:400 12px var(--mono);color:var(--dim);margin-top:10px">Brier 0.19 · overconfident above 80%</div>
      </div>
    </section>

    <section style="padding:34px 0 0">
      <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:18px">
        <h2 style="margin:0;font:500 12px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim)">Open — {{ OPEN_PREDICTIONS.length }}</h2>
        <span style="font:400 12px var(--mono);color:var(--dim)">Nearest deadline first</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:18px">
        <div v-for="(p, i) in OPEN_PREDICTIONS" :key="p.id" :style="i === 0 ? 'border:1px solid var(--ink);background:#fff' : 'border:1px solid var(--rule);background:#fff'">
          <div class="rs-wrap" style="display:flex;align-items:center;justify-content:space-between;gap:20px;padding:11px 22px;border-bottom:1px solid var(--rule);background:rgba(28,26,22,.03)">
            <div style="display:flex;align-items:center;gap:14px;font:400 12px var(--mono);color:var(--dim)"><span style="font-weight:500;color:var(--ink)">{{ p.id }}</span><span>{{ p.domain }}</span><span>logged {{ p.logged }}</span></div>
            <div style="display:flex;align-items:center;gap:14px;font:400 12px var(--mono)"><span style="color:var(--dim)">{{ p.daysLeft }} days left</span><span style="padding:3px 9px;border:1px solid var(--accent);color:var(--accent);letter-spacing:.08em">{{ p.deadline }}</span></div>
          </div>
          <div class="rs-grid-stack rs-grid-stack-gap" style="display:grid;grid-template-columns:132px minmax(0,1fr);gap:0">
            <div style="border-right:1px solid var(--rule);padding:22px 20px;display:flex;flex-direction:column;justify-content:space-between">
              <div>
                <div style="font:500 42px/1 var(--mono);letter-spacing:-.04em;color:var(--accent)">{{ p.confidence }}<span style="font-size:20px">%</span></div>
                <div style="font:400 10px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--dim);margin-top:6px">Confidence</div>
              </div>
              <div style="margin-top:20px">
                <div style="height:5px;background:rgba(28,26,22,.1)"><div :style="{ width: p.confidence + '%', height: '5px', background: 'var(--accent)' }"></div></div>
                <div style="font:400 10px var(--mono);color:var(--dim);margin-top:7px">stated, not revised</div>
              </div>
            </div>
            <div style="padding:22px 24px">
              <div style="font:400 25px/1.32 var(--body-font);margin-bottom:16px">{{ p.title }}</div>
              <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;font:400 11px var(--mono);margin-bottom:16px">
                <template v-for="(m, mi) in p.mechanism" :key="m.label">
                  <span :style="m.accent ? 'padding:5px 10px;border:1px solid var(--accent);color:var(--accent)' : 'padding:5px 10px;border:1px solid var(--rule);color:var(--dim)'">{{ m.label }}</span>
                  <span v-if="mi < p.mechanism.length - 1" style="color:var(--dim)">→</span>
                </template>
                <span v-if="p.mechanismNote" style="color:var(--dim);padding-left:4px">{{ p.mechanismNote }}</span>
              </div>
              <div v-if="p.falsifier" style="display:grid;grid-template-columns:76px 1fr;gap:8px 14px;font:400 15px/1.55 var(--body-font);border-top:1px solid var(--rule);padding-top:14px">
                <span style="font:400 11px var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--dim);padding-top:4px">Falsifier</span>
                <span style="color:rgba(28,26,22,.8)">{{ p.falsifier }}</span>
                <span style="font:400 11px var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--dim);padding-top:4px">Sources</span>
                <span style="color:rgba(28,26,22,.8)">{{ p.sources }}</span>
              </div>
              <div style="display:flex;gap:16px;margin-top:16px;padding-top:14px;border-top:1px solid var(--rule);font:400 12px var(--mono)">
                <NuxtLink v-for="l in p.links" :key="l.label" :to="l.to">{{ l.label }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding:44px 0 90px">
      <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:18px;border-top:1px solid var(--ink);padding-top:26px">
        <h2 style="margin:0;font:500 12px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim)">Settled — {{ SETTLED_PREDICTIONS.length }} · {{ rightCount }} right, {{ wrongCount }} wrong</h2>
        <span style="font:400 12px var(--mono);color:var(--dim)">Never edited after the fact</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:14px">
        <div
          v-for="p in SETTLED_PREDICTIONS"
          :key="p.id"
          :style="{
            border: '1px solid var(--rule)',
            borderLeft: `4px solid ${p.verdict === 'RIGHT' ? 'var(--good)' : 'var(--accent)'}`,
            background: p.verdict === 'RIGHT' ? 'rgba(63,92,58,.05)' : 'rgba(140,59,31,.04)',
            padding: '20px 24px',
          }"
        >
          <div class="rs-wrap" style="display:flex;align-items:baseline;justify-content:space-between;gap:20px;margin-bottom:10px">
            <div style="display:flex;align-items:baseline;gap:14px;font:400 12px var(--mono);color:var(--dim)"><span style="font-weight:500;color:var(--ink)">{{ p.id }}</span><span>{{ p.domain }}</span><span>{{ p.settledNote }}</span></div>
            <div style="display:flex;align-items:baseline;gap:12px;font:400 12px var(--mono)"><span style="color:var(--dim)">stated {{ p.stated }}%</span><span :style="{ fontWeight: 500, color: p.verdict === 'RIGHT' ? 'var(--good)' : 'var(--accent)', letterSpacing: '.08em' }">{{ p.verdict }}</span></div>
          </div>
          <div style="font:400 23px/1.34 var(--body-font);margin-bottom:10px">{{ p.title }}</div>
          <div v-if="p.rows" style="display:grid;grid-template-columns:96px 1fr;gap:10px 14px;font:400 15px/1.6 var(--body-font);border-top:1px solid rgba(28,26,22,.1);padding-top:12px">
            <template v-for="row in p.rows" :key="row.label">
              <span style="font:400 11px var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--dim);padding-top:4px">{{ row.label }}</span>
              <span style="color:rgba(28,26,22,.8)">
                {{ row.text }}<template v-if="row.links"><template v-for="(l, li) in row.links" :key="l.label"><NuxtLink :to="l.to">{{ l.label }}</NuxtLink><span v-if="li < row.links.length - 1"> · </span></template></template>
              </span>
            </template>
          </div>
          <div v-if="p.note" style="font:400 15px/1.6 var(--body-font);color:rgba(28,26,22,.75);margin-top:8px">{{ p.note }} <NuxtLink v-if="p.noteLink" :to="p.noteLink.to">{{ p.noteLink.label }}</NuxtLink></div>
        </div>
      </div>
    </section>
  </main>
</template>
