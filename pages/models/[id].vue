<script setup>
import { MODELS, MODEL_DETAILS } from '~/data/research/models'

definePageMeta({ layout: 'research' })

const route = useRoute()
const modelId = computed(() => route.params.id)
const model = computed(() => MODELS.find((m) => m.id === modelId.value))
const detail = computed(() => MODEL_DETAILS[modelId.value])

useHead(() => ({
  title: model.value ? `${model.value.title} — Paul Imoke` : 'Model — Paul Imoke',
  meta: [{ name: 'description', content: model.value?.blurb ?? '' }],
}))
</script>

<template>
  <main class="rs-main" style="max-width:1180px;margin:0 auto;padding:0 28px">
    <div v-if="!model" style="padding:90px 0;font:400 16px var(--body-font)">
      Model not found. <NuxtLink to="/models">Back to Models</NuxtLink>
    </div>

    <template v-else>
      <div style="padding:24px 0 0;font:400 13px var(--mono);color:var(--dim)"><NuxtLink to="/models" style="color:var(--dim)">Models</NuxtLink> / {{ model.id }}</div>

      <!-- Full write-up, when one exists (currently M-07 only). -->
      <div v-if="detail" class="rs-grid-stack" style="display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:56px;padding:34px 0 90px">
        <div>
          <div style="font:400 12px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:16px">{{ detail.kicker }}</div>
          <h1 class="rs-detail-h1" style="margin:0 0 18px;font:600 46px/1.08 var(--body-font);letter-spacing:-.03em">{{ detail.title }}</h1>
          <p style="margin:0 0 30px;font:400 19px/1.65 var(--body-font);color:rgba(28,26,22,.8);max-width:34em">{{ detail.lede }}</p>
          <div style="height:1px;background:var(--ink);margin-bottom:26px"></div>

          <div style="font:500 12px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim);margin-bottom:16px">01 — Structure</div>
          <div style="background:#fff;border:1px solid var(--rule);padding:30px 26px;margin-bottom:12px">
            <div style="display:flex;align-items:center;gap:12px;justify-content:center;font:400 13px var(--mono);flex-wrap:wrap">
              <template v-for="(step, i) in detail.structureChain" :key="step">
                <span :style="i === detail.structureChain.length - 1 ? 'border:1px solid var(--accent);color:var(--accent);padding:9px 14px' : 'border:1px solid var(--ink);padding:9px 14px'">{{ step }}</span>
                <span v-if="i < detail.structureChain.length - 1" style="color:var(--dim)">→</span>
              </template>
            </div>
            <div style="display:flex;justify-content:center;gap:12px;margin-top:20px;font:400 13px var(--mono);align-items:center">
              <span style="color:var(--dim)">↑</span>
              <template v-for="(step, i) in detail.structureLoop" :key="step.label">
                <span style="border:1px dashed var(--rule);padding:8px 13px;color:var(--dim)">{{ step.label }}</span>
                <span v-if="i < detail.structureLoop.length - 1" style="color:var(--dim)">←</span>
              </template>
              <span style="color:var(--dim)">←</span>
            </div>
            <div style="text-align:center;font:400 11px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--dim);margin-top:20px">{{ detail.structureLoopNote }}</div>
          </div>
          <p style="margin:0 0 32px;font:400 13px var(--mono);color:var(--dim)">Diagram placeholder — replace with the real causal-loop export.</p>

          <div style="font:500 12px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim);margin-bottom:14px">02 — Actors &amp; incentives</div>
          <div style="display:grid;grid-template-columns:158px 1fr;font:400 16px/1.5 var(--body-font);border-top:1px solid var(--rule);margin-bottom:32px">
            <template v-for="a in detail.actors" :key="a.who">
              <div style="padding:12px 0;border-bottom:1px solid var(--rule);font:400 13px var(--mono);color:var(--dim)">{{ a.who }}</div>
              <div style="padding:12px 0;border-bottom:1px solid var(--rule)">{{ a.what }}</div>
            </template>
          </div>

          <div style="font:500 12px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim);margin-bottom:14px">03 — Leverage points</div>
          <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:32px">
            <div v-for="l in detail.leverage" :key="l.tier" style="display:flex;gap:14px">
              <span :style="{ font: '500 12px var(--mono)', color: (l.tier === 'HIGH' || l.tier === 'EXTREME') ? 'var(--accent)' : 'var(--dim)', width: '80px', paddingTop: '4px' }">{{ l.tier }}</span>
              <span style="font:400 16px/1.5 var(--body-font);flex:1">{{ l.text }}</span>
            </div>
          </div>

          <div style="font:500 12px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim);margin-bottom:14px">04 — What would prove me wrong</div>
          <p style="margin:0;font:400 17px/1.65 var(--body-font);max-width:34em;color:rgba(28,26,22,.8)">{{ detail.falsifier }}</p>
        </div>
        <aside style="padding-top:60px">
          <div style="font:400 11px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--dim);margin-bottom:12px">On this page</div>
          <div style="display:flex;flex-direction:column;gap:9px;font:400 13px var(--mono);margin-bottom:28px"><span style="color:var(--accent)">01 Structure</span><span style="color:var(--dim)">02 Actors</span><span style="color:var(--dim)">03 Leverage</span><span style="color:var(--dim)">04 Falsifiers</span></div>
          <div style="height:1px;background:var(--rule);margin-bottom:22px"></div>
          <div style="font:400 11px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--dim);margin-bottom:12px">Produced</div>
          <div style="display:flex;flex-direction:column;gap:11px;font:400 14px/1.4 var(--body-font);margin-bottom:28px">
            <NuxtLink v-for="p in detail.produced" :key="p.label" :to="p.to">{{ p.label }}</NuxtLink>
          </div>
          <div style="height:1px;background:var(--rule);margin-bottom:22px"></div>
          <div style="font:400 11px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--dim);margin-bottom:12px">Revisions</div>
          <div style="display:flex;flex-direction:column;gap:8px;font:400 12px var(--mono);color:var(--dim)"><span v-for="r in detail.revisions" :key="r">{{ r }}</span></div>
        </aside>
      </div>

      <!-- No full write-up yet — show the summary card so the link is never dead. -->
      <div v-else style="padding:34px 0 120px;max-width:640px">
        <div style="font:400 12px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:16px">Model · {{ model.domain }} · {{ model.year }}</div>
        <h1 class="rs-detail-h1" style="margin:0 0 18px;font:600 40px/1.1 var(--body-font);letter-spacing:-.03em">{{ model.title }}</h1>
        <p style="margin:0 0 20px;font:400 18px/1.6 var(--body-font);color:rgba(28,26,22,.8)">{{ model.blurb }}</p>
        <p style="margin:0;font:400 13px var(--mono);color:var(--dim)">Full write-up not published yet — {{ model.meta.toLowerCase() }}.</p>
      </div>
    </template>
  </main>
</template>
