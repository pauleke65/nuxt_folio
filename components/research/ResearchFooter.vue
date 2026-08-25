<script setup>
const { siteData } = useSiteData()
</script>

<template>
  <footer style="border-top:1px solid var(--ink);background:rgba(28,26,22,.03)">
    <div style="max-width:1180px;margin:0 auto;padding:44px 28px 34px">
      <div style="display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:44px;padding-bottom:30px;border-bottom:1px solid var(--rule)">
        <div>
          <div style="font:500 14px var(--mono);letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px">Paul I.</div>
          <p style="margin:0 0 14px;font:400 17px/1.6 var(--body-font);max-width:26em">I study systems — how they are built, how they hold, and how they fail. The record of being wrong is part of the record.</p>
          <div style="font:400 12px var(--mono);color:var(--dim)">Month 04 of 06 · updated 21 Aug 2026</div>
        </div>
        <div>
          <div style="font:400 11px var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--dim);margin-bottom:14px">The work</div>
          <div style="display:flex;flex-direction:column;gap:9px;font:400 15px var(--body-font)">
            <NuxtLink to="/models" style="color:var(--ink)">Models</NuxtLink>
            <NuxtLink to="/predictions" style="color:var(--ink)">Predictions</NuxtLink>
            <NuxtLink to="/experiments" style="color:var(--ink)">Experiments</NuxtLink>
            <NuxtLink to="/essays" style="color:var(--ink)">Essays</NuxtLink>
          </div>
        </div>
        <div>
          <div style="font:400 11px var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--dim);margin-bottom:14px">Elsewhere</div>
          <div style="display:flex;flex-direction:column;gap:9px;font:400 15px var(--body-font)">
            <NuxtLink to="/projects" style="color:var(--ink)">Engineering record</NuxtLink>
            <NuxtLink to="/about" style="color:var(--ink)">About &amp; contact</NuxtLink>
            <a v-if="siteData.resumeLink?.url" :href="siteData.resumeLink.url" target="_blank" rel="noopener noreferrer" style="color:var(--ink)">CV (PDF) ↓</a>
            <a href="https://github.com/pauleke65" target="_blank" rel="noopener noreferrer" style="color:var(--ink)">github/pauleke65</a>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:30px;padding-top:18px;font:400 11px var(--mono);color:var(--dim);flex-wrap:wrap">
        <span>Observe → model → predict → test → explain → repeat.</span>
        <span>Nothing here is edited after the fact.</span>
      </div>
    </div>
  </footer>
</template>
