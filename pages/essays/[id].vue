<script setup>
import { ESSAYS, ESSAY_BODIES } from '~/data/research/essays'

definePageMeta({ layout: 'research' })

const route = useRoute()
const essayId = computed(() => route.params.id)
const essay = computed(() => ESSAYS.find((e) => e.id === essayId.value))
const body = computed(() => ESSAY_BODIES[essayId.value])

useHead(() => ({
  title: essay.value ? `${essay.value.title} — Paul I.` : 'Essay — Paul I.',
  meta: [{ name: 'description', content: essay.value?.dek ?? '' }],
}))
</script>

<template>
  <main class="rs-main" style="max-width:1180px;margin:0 auto;padding:0 28px">
    <div v-if="!essay" style="padding:90px 0;font:400 16px var(--body-font)">
      Essay not found. <NuxtLink to="/essays">Back to Essays</NuxtLink>
    </div>

    <template v-else>
      <div style="padding:24px 0 0;font:400 13px var(--mono);color:var(--dim)"><NuxtLink to="/essays" style="color:var(--dim)">Essays</NuxtLink> / {{ essay.id }}</div>

      <article v-if="body" class="rs-grid-stack rs-grid-stack-gap" style="display:grid;grid-template-columns:minmax(0,1fr) minmax(180px,220px);gap:0 40px;padding:56px 0 96px;max-width:920px">
        <div>
          <div style="font:400 12px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:16px">Essay · {{ essay.date }} · {{ essay.readTime }}</div>
          <h1 class="rs-detail-h1" style="margin:0 0 22px;font:600 42px/1.14 var(--body-font);letter-spacing:-.03em">{{ essay.title }}</h1>
          <p v-for="(para, i) in body.paragraphs" :key="i" style="margin:0 0 20px;font:400 20px/1.72 var(--body-font);color:rgba(28,26,22,.85)">{{ para }}</p>
        </div>
        <div style="padding-top:110px;display:flex;flex-direction:column;gap:24px">
          <div v-if="body.relatedModel" style="border-left:2px solid var(--accent);padding-left:12px;font:400 13px/1.6 var(--mono);color:var(--dim)">Related model<br><NuxtLink :to="body.relatedModel.to">{{ body.relatedModel.label }}</NuxtLink></div>
          <div v-if="body.revisesPrediction" style="border-left:2px solid var(--rule);padding-left:12px;font:400 13px/1.6 var(--mono);color:var(--dim)">Prediction this revises<br><NuxtLink :to="body.revisesPrediction.to">{{ body.revisesPrediction.label }}</NuxtLink></div>
          <div v-if="body.lineage" style="border-left:2px solid var(--rule);padding-left:12px;font:400 13px/1.6 var(--mono);color:var(--dim)">{{ body.lineage }}</div>
        </div>
      </article>

      <!-- No full write-up yet — show the dek so the link is never dead. -->
      <div v-else style="padding:56px 0 120px;max-width:640px">
        <div style="font:400 12px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:16px">Essay · {{ essay.date }} · {{ essay.readTime }}</div>
        <h1 class="rs-detail-h1" style="margin:0 0 22px;font:600 36px/1.16 var(--body-font);letter-spacing:-.03em">{{ essay.title }}</h1>
        <p style="margin:0 0 20px;font:400 19px/1.65 var(--body-font);color:rgba(28,26,22,.82)">{{ essay.dek }}</p>
        <p style="margin:0;font:400 13px var(--mono);color:var(--dim)">Full essay not published yet.</p>
      </div>
    </template>
  </main>
</template>
