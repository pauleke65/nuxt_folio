<script setup>
import { PROJECTS, ACHIEVEMENTS } from '~/data/research/projects'
import PageHead from '~/components/site/PageHead.vue'
import ExternalArrow from '~/components/site/ExternalArrow.vue'
import { numberWord } from '~/lib/content.mjs'

definePageMeta({ layout: 'research' })

useHead({
  title: 'Fieldwork — Paul Imoke',
  meta: [{ name: 'description', content: 'The systems I built before I studied them: production work as a lead engineer across seven companies and four countries.' }],
})

// "Lead Engineer · USA, remote" → role and place. The arrow is drawn, not typed.
const jobs = PROJECTS.map((p) => {
  const [role, ...place] = p.role.split(' · ')
  return {
    ...p,
    roleOnly: role,
    place: place.join(' · '),
    label: p.linkLabel.replace(/\s*↗\s*$/, ''),
    href: p.linkHref && p.linkHref !== '#' ? p.linkHref : null,
  }
})

const achievements = [...ACHIEVEMENTS].sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10))

const countWord = numberWord(PROJECTS.length)
</script>

<template>
  <main>
    <PageHead
      kicker="Fieldwork · Engineering record"
      title="The systems I built before I studied them"
      stand="Production work as a lead engineer across seven companies and four countries: marketplaces, supply chains, banking, legal infrastructure. This is the field access behind the models."
    >
      <div class="rec">
        <div class="lbl mu">For recruiters</div>
        <p>Engineering by exception. Research collaboration first.</p>
        <a class="tl" href="https://github.com/pauleke65" target="_blank" rel="noopener noreferrer">github.com/pauleke65<ExternalArrow /></a>
      </div>
    </PageHead>

    <section class="sec w" style="padding-top:clamp(24px,3vw,40px)">
      <div class="sh"><h2>Achievements</h2><p>The short version.</p><span class="lbl">2021 to 2026</span></div>
      <div class="ach">
        <div v-for="a in achievements" :key="a.text" class="fw-row"><span class="yy lbl">{{ a.year }}</span><span class="wh">{{ a.text }}</span></div>
      </div>
    </section>

    <section class="sec w">
      <div class="sh"><h2>Selected work</h2><p>{{ countWord }} projects, newest first.</p><span class="lbl">{{ PROJECTS.length }} projects</span></div>
      <div class="jobs" style="border-top:0">
        <article v-for="j in jobs" :key="j.name" class="job">
          <div class="jb-when lbl">{{ j.period }}</div>
          <div><h3>{{ j.name }}</h3><div class="jb-sub">{{ j.title }}</div><p>{{ j.description }}</p></div>
          <div class="jb-side">
            <span class="lbl">{{ j.roleOnly }}</span>
            <span v-if="j.place" class="lbl mu">{{ j.place }}</span>
            <a v-if="j.href" class="tl" :href="j.href" target="_blank" rel="noopener noreferrer"><span>{{ j.label }}</span><ExternalArrow /></a>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
