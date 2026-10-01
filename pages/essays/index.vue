<script setup>
import { ESSAYS } from '~/data/research/essays'

definePageMeta({ layout: 'research' })

useHead({
  title: 'Essays — Paul Imoke',
  meta: [{ name: 'description', content: 'Short pieces, one idea each. Several are post-mortems on predictions I lost, which are the ones worth reading.' }],
})
</script>

<template>
  <main class="rs-main" style="max-width:1180px;margin:0 auto;padding:0 28px">
    <section class="rs-grid-stack rs-hero-pad" style="padding:72px 0 30px;display:grid;grid-template-columns:1fr 300px;gap:56px;align-items:end;border-bottom:1px solid var(--ink)">
      <div>
        <div style="font:400 12px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:18px">Essays · {{ ESSAYS.length }} notes</div>
        <h1 class="rs-hero-h1" style="margin:0 0 18px;font:600 60px/1.04 var(--body-font);letter-spacing:-.035em">Writing is how I find out<br>whether I understood it</h1>
        <p style="margin:0;font:400 19px/1.6 var(--body-font);color:rgba(28,26,22,.78);max-width:32em">Short pieces, one idea each. Several are post-mortems on predictions I lost, which are the ones worth reading.</p>
      </div>
      <div style="font:400 12px/1.9 var(--mono);color:var(--dim);text-align:right">3 post-mortems<br>2 historical<br>1 personal</div>
    </section>
    <section style="padding:0 0 90px">
      <NuxtLink
        v-for="e in ESSAYS"
        :key="e.id"
        :to="`/essays/${e.id}`"
        class="rs-grid-stack"
        style="display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:40px;padding:26px 0;border-bottom:1px solid var(--rule);color:var(--ink)"
      >
        <div>
          <div style="font:400 12px var(--mono);color:var(--dim);margin-bottom:8px">{{ e.id }} · {{ e.date }} · {{ e.readTime }}</div>
          <div style="font:400 27px/1.3 var(--body-font);margin-bottom:8px">{{ e.title }}</div>
          <div style="font:400 16px/1.6 var(--body-font);color:rgba(28,26,22,.72)">{{ e.dek }}</div>
        </div>
        <div style="font:400 12px var(--mono);color:var(--dim);line-height:1.8;padding-top:26px">{{ e.tag }}<template v-if="e.tag2"><br>{{ e.tag2 }}</template></div>
      </NuxtLink>
    </section>
  </main>
</template>
