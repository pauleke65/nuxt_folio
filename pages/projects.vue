<script setup>
import { PROJECTS, ACHIEVEMENTS } from '~/data/research/projects'

definePageMeta({ layout: 'research' })

useHead({
  title: 'Projects — Paul I.',
  meta: [{ name: 'description', content: 'Nine years of building the systems I now study — production work as a lead engineer across seven companies and four countries.' }],
})

const { siteData } = useSiteData()
</script>

<template>
  <main class="rs-main" style="max-width:1180px;margin:0 auto;padding:0 28px">
    <section class="rs-grid-stack rs-hero-pad" style="padding:72px 0 30px;display:grid;grid-template-columns:1fr 300px;gap:56px;align-items:end;border-bottom:1px solid var(--ink)">
      <div>
        <div style="font:400 12px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:18px">Projects · engineering, 2017–2026</div>
        <h1 class="rs-hero-h1" style="margin:0 0 18px;font:600 60px/1.04 var(--body-font);letter-spacing:-.035em">Nine years of building<br>the systems I now study</h1>
        <p style="margin:0;font:400 19px/1.6 var(--body-font);color:rgba(28,26,22,.78);max-width:32em">Production work as a lead engineer across seven companies and four countries — marketplaces, supply chains, banking, legal infrastructure. This is the field access behind the models.</p>
      </div>
      <div style="border:1px solid var(--rule);padding:18px 20px;background:rgba(28,26,22,.03)">
        <div style="font:400 11px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--dim);margin-bottom:10px">For recruiters</div>
        <div style="font:400 15px/1.55 var(--body-font);margin-bottom:12px">Engineering by exception. Research collaboration first.</div>
        <div style="display:flex;flex-direction:column;gap:7px;font:400 12px var(--mono)">
          <a v-if="siteData.resumeLink?.url" :href="siteData.resumeLink.url" target="_blank" rel="noopener noreferrer">CV (PDF) ↓</a>
          <a href="https://github.com/pauleke65" target="_blank" rel="noopener noreferrer">github/pauleke65</a>
        </div>
      </div>
    </section>

    <section style="padding:40px 0 0">
      <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:20px">
        <h2 style="margin:0;font:500 12px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim)">Achievements &amp; certifications</h2>
        <span style="font:400 12px var(--mono);color:var(--dim)">Send me the certificate list and I will fill the second column</span>
      </div>
      <div class="rs-grid-stack" style="display:grid;grid-template-columns:1.25fr 1fr;gap:34px;padding-bottom:44px;border-bottom:1px solid var(--ink)">
        <div style="border-top:1px solid var(--rule)">
          <div v-for="a in ACHIEVEMENTS" :key="a.text" style="display:grid;grid-template-columns:112px 1fr;gap:16px;padding:14px 0;border-bottom:1px solid var(--rule)"><span style="font:400 12px var(--mono);color:var(--dim)">{{ a.year }}</span><span><span style="font:400 17px/1.45 var(--body-font)">{{ a.text }}</span></span></div>
        </div>
        <div>
          <div style="border:1px dashed var(--rule);padding:20px;background:rgba(28,26,22,.02)">
            <div style="font:400 11px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--dim);margin-bottom:14px">Certifications — placeholder</div>
            <div style="display:flex;flex-direction:column;gap:12px">
              <div v-for="n in 3" :key="n" style="display:flex;justify-content:space-between;gap:14px;font:400 15px var(--body-font);color:var(--dim);padding-bottom:10px;border-bottom:1px solid var(--rule)"><span>Certificate name</span><span style="font:400 12px var(--mono)">issuer · year</span></div>
            </div>
            <div style="font:400 12px/1.7 var(--mono);color:var(--dim);margin-top:14px">Your old site had a certificates page but no list in the repo — give me the titles and issuers and these become real rows.</div>
          </div>
        </div>
      </div>
    </section>

    <section style="padding:40px 0 90px">
      <h2 style="margin:0 0 22px;font:500 12px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim)">Selected work — {{ PROJECTS.length }} projects</h2>
      <div class="rs-grid-stack" style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--rule);border-top:1px solid var(--rule);border-bottom:1px solid var(--rule)">
        <div
          v-for="p in PROJECTS"
          :key="p.name"
          :style="{ gridColumn: p.span2 ? '1 / -1' : 'auto', background: 'var(--paper)', padding: '26px 24px', display: 'flex', flexDirection: 'column' }"
        >
          <div style="display:flex;justify-content:space-between;font:400 12px var(--mono);color:var(--dim);margin-bottom:12px"><span>{{ p.name }}</span><span>{{ p.period }}</span></div>
          <div style="font:400 25px/1.26 var(--body-font);margin-bottom:6px">{{ p.title }}</div>
          <div style="font:400 12px var(--mono);color:var(--dim);margin-bottom:14px">{{ p.role }}</div>
          <p style="margin:0 0 14px;font:400 15px/1.62 var(--body-font);color:rgba(28,26,22,.78);flex:1">{{ p.description }}</p>
          <a :href="p.linkHref" target="_blank" rel="noopener noreferrer" style="font:400 12px var(--mono);padding-top:4px">{{ p.linkLabel }}</a>
        </div>
      </div>
    </section>
  </main>
</template>
