<script setup>
definePageMeta({ layout: 'research' })

useHead({
  title: 'About — Paul Imoke',
  meta: [{ name: 'description', content: 'Paul Imoke — nine years building systems as a lead engineer. Now studying them: models, predictions, and the record of being wrong.' }],
})

const { siteData } = useSiteData()

const exploring = [
  { title: 'Delay and oscillation', text: 'Why systems overshoot when the signal is old. Reading control theory, badly at first.' },
  { title: 'Historical backtests', text: 'Running my loops against systems that already ended, so the answer can’t flatter me.', link: { label: 'S-02', to: '/experiments?exp=S-02' } },
  { title: 'Calibration, not cleverness', text: 'I am overconfident above 80%. Trying to fix the habit rather than the wording.' },
  { title: 'Theology and order', text: 'The oldest arguments about what holds a world together. Not decoration — it changes what I count as a system’s purpose.' },
]

const learningStack = [
  { layer: 'Foundation', topic: 'Systems thinking' },
  { layer: 'Mathematics', topic: 'Probability, statistics, modelling' },
  { layer: 'Dynamics', topic: 'Control theory, dynamical systems' },
  { layer: 'Behaviour', topic: 'Psychology, economics, game theory' },
  { layer: 'Networks', topic: 'Network science' },
  { layer: 'Complexity', topic: 'Complex adaptive systems' },
  { layer: 'Theology', topic: 'Order, purpose, and what a system is for' },
  { layer: 'Reality', topic: 'History, politics, biology, technology' },
]

const systemsOfInterest = [
  { text: 'Cities and how people move through them', note: 'strongest pull', accent: true },
  { text: 'Energy — who gets power and who pays for it', note: 'strongest pull', accent: true },
  { text: 'How money reaches people who need it', note: 'maybe', accent: false },
  { text: 'How organisations decide things', note: 'maybe', accent: false },
  { text: 'Education and what it actually produces', note: 'maybe', accent: false },
]
</script>

<template>
  <main class="rs-main" style="max-width:1180px;margin:0 auto;padding:0 28px">
    <section class="rs-grid-stack rs-hero-pad" style="padding:72px 0 44px;display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:56px;align-items:start;border-bottom:1px solid var(--ink)">
      <div style="max-width:34em">
        <div style="font:400 12px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:18px">About</div>
        <h1 class="rs-detail-h1" style="margin:0 0 22px;font:600 44px/1.1 var(--body-font);letter-spacing:-.03em">Paul Imoke — I spent nine years building systems. Now I study them.</h1>
        <p style="margin:0 0 18px;font:400 18px/1.7 var(--body-font);color:rgba(28,26,22,.82)">Lead engineer across seven companies in four countries: a property marketplace, agricultural traceability on Stellar, a court and trial management system, a mobile bank, four products at an accelerator. Building inside those systems is where the questions came from — and none of the tools I had were the ones that answer them.</p>
        <p style="margin:0 0 18px;font:400 18px/1.7 var(--body-font);color:rgba(28,26,22,.82)">So I am changing what I do. Four months into a six-month intensive: ninety to a hundred and twenty minutes daily, six days a week — thirty minutes studying, forty-five modelling, fifteen in the prediction ledger, the rest writing. I still ship software. It is no longer the point.</p>
        <p style="margin:0;font:400 18px/1.7 var(--body-font);color:rgba(28,26,22,.82)">I am not picking one field yet. Two more months of evidence, then one system gets the next decade.</p>
      </div>
      <div>
        <div style="display:flex;align-items:baseline;justify-content:space-between;padding-bottom:10px;border-bottom:1px solid var(--ink)">
          <span style="font:500 11px var(--mono);letter-spacing:.14em;text-transform:uppercase">Currently exploring</span>
          <span style="font:400 11px var(--mono);color:var(--dim)">Aug 2026</span>
        </div>
        <div style="display:flex;flex-direction:column">
          <div v-for="x in exploring" :key="x.title" style="padding:16px 0;border-bottom:1px solid var(--rule)">
            <div style="font:400 18px/1.35 var(--body-font);margin-bottom:5px">{{ x.title }}</div>
            <div style="font:400 14px/1.55 var(--body-font);color:var(--dim)">{{ x.text }} <NuxtLink v-if="x.link" :to="x.link.to">{{ x.link.label }}</NuxtLink>.</div>
          </div>
        </div>
        <div style="font:400 11px/1.7 var(--mono);color:var(--dim);margin-top:14px">This list changes monthly. Last month it was network science.</div>
      </div>
    </section>

    <section class="rs-grid-stack" style="padding:40px 0 0;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:56px">
      <div>
        <div style="font:500 12px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim);margin-bottom:8px">What I'm learning, in order</div>
        <p style="margin:0 0 18px;font:400 15px/1.6 var(--body-font);color:var(--dim)">Each layer only makes sense once the one above it does.</p>
        <div style="display:flex;flex-direction:column;border-top:1px solid var(--ink)">
          <div v-for="l in learningStack" :key="l.layer" style="display:flex;gap:16px;padding:11px 0;border-bottom:1px solid var(--rule)"><span style="font:400 12px var(--mono);color:var(--dim);width:104px">{{ l.layer }}</span><span style="font:400 16px var(--body-font)">{{ l.topic }}</span></div>
        </div>
      </div>
      <div>
        <div style="font:500 12px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim);margin-bottom:8px">Systems I keep coming back to</div>
        <p style="margin:0 0 18px;font:400 15px/1.6 var(--body-font);color:var(--dim)">One of these gets the next decade. I am watching which one I return to without being asked.</p>
        <div style="display:flex;flex-direction:column;border-top:1px solid var(--ink)">
          <div v-for="s in systemsOfInterest" :key="s.text" style="display:flex;align-items:baseline;gap:14px;padding:12px 0;border-bottom:1px solid var(--rule)"><span style="font:400 17px var(--body-font);flex:1">{{ s.text }}</span><span :style="{ font: '400 11px var(--mono)', color: s.accent ? 'var(--accent)' : 'var(--dim)' }">{{ s.note }}</span></div>
        </div>
        <div style="margin-top:34px;border-top:1px solid var(--ink);padding-top:22px">
          <div style="font:500 12px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim);margin-bottom:12px">Contact</div>
          <p style="margin:0 0 16px;font:400 17px/1.65 var(--body-font);color:rgba(28,26,22,.82)">Open to research collaboration, data access, and commissioned systems analysis. Engineering by exception — <NuxtLink to="/projects">the record is here</NuxtLink>.</p>
          <div style="display:flex;flex-wrap:wrap;gap:10px;font:400 13px var(--mono)">
            <a href="mailto:pauleke65@gmail.com" style="padding:8px 14px;border:1px solid var(--ink);color:var(--ink)">pauleke65@gmail.com</a>
            <a href="https://github.com/pauleke65" target="_blank" rel="noopener noreferrer" style="padding:8px 14px;border:1px solid var(--rule);color:var(--dim)">github</a>
            <a href="https://linkedin.com/in/paul-imoke-010a941bb/" target="_blank" rel="noopener noreferrer" style="padding:8px 14px;border:1px solid var(--rule);color:var(--dim)">linkedin</a>
            <a v-if="siteData.resumeLink?.url" :href="siteData.resumeLink.url" target="_blank" rel="noopener noreferrer" style="padding:8px 14px;border:1px solid var(--rule);color:var(--dim)">CV ↓</a>
          </div>
        </div>
      </div>
    </section>
    <div style="height:90px"></div>
  </main>
</template>
