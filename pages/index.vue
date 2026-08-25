<script setup>
definePageMeta({ layout: 'research' })

useHead({
  title: 'Paul I. — Systems research',
  meta: [
    { name: 'description', content: 'I study systems — how they are built, how they hold, and how they fail. Models, predictions and experiments, recorded before the outcome is known.' },
    { property: 'og:title', content: 'Paul I. — Systems research' },
    { property: 'og:type', content: 'website' },
  ],
})

// Right/wrong order for the 21 settled predictions, oldest first — 13 right, 8 wrong.
const SETTLED_STRIP = ['right', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'right']
const OPEN_STRIP_COUNT = 13

const latestWork = [
  { date: '18 Aug', title: 'Transit ridership responds to fuel price, not fare', type: 'Model', typeAccent: true, id: 'M-07', to: '/models/M-07' },
  { date: '15 Aug', title: 'Why my epidemic model was wrong by eleven days', type: 'Post-mortem', typeAccent: false, id: 'P-19', to: '/essays/E-08' },
  { date: '11 Aug', title: 'Housing supply is a stock-and-flow problem read as a demand problem', type: 'Model', typeAccent: true, id: 'M-06', to: '/models/M-06' },
  { date: '06 Aug', title: 'Monte Carlo: how long a seed-stage runway really lasts', type: 'Experiment', typeAccent: false, id: 'S-04', to: '/experiments?exp=S-04' },
  { date: '02 Aug', title: 'Land titling is an information problem before it is a legal one', type: 'Essay', typeAccent: false, id: 'E-09', to: '/essays/E-09' },
]
</script>

<template>
  <main class="rs-main" style="max-width:1180px;margin:0 auto;padding:0 28px">
    <section class="rs-hero-pad" style="padding:96px 0 56px;max-width:760px">
      <div style="font:400 12px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--accent);margin-bottom:22px">Systems research · month 04 of 06</div>
      <h1 class="rs-home-h1" style="margin:0 0 28px;font:300 46px/1.22 var(--body-font);letter-spacing:-.02em">I study systems — how they are built, how they hold, and how they fail.</h1>
      <p style="margin:0 0 20px;font:400 20px/1.68 var(--body-font);color:rgba(28,26,22,.82)">Not one industry and not one century. A rail network in 1890, a mobile payments float in 2026 and a medieval grain reserve are the same object seen three times: actors, stocks, flows, information, incentives, delay.</p>
      <p style="margin:0 0 20px;font:400 20px/1.68 var(--body-font);color:rgba(28,26,22,.82)">Nine years as a lead engineer put me inside a handful of these — marketplaces, supply chains, banking, court scheduling. I learned where they break. I am now doing the harder half: modelling them, predicting them, and recording the score.</p>
      <p style="margin:0;font:400 20px/1.68 var(--body-font);color:rgba(28,26,22,.82)">Every page here is a model I built, a number I committed to before the outcome, or an account of why the number was wrong. Nothing is edited after the fact.</p>
    </section>

    <section style="border-top:1px solid var(--ink);padding:26px 0 34px">
      <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:20px">
        <span style="font:500 12px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim)">The scoreboard, honestly</span>
        <span style="font:400 12px var(--mono);color:var(--dim)">Week 17 of 26</span>
      </div>
      <div class="rs-grid-stack" style="display:grid;grid-template-columns:1.35fr 1fr;gap:52px;align-items:start">
        <div>
          <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:10px">
            <span style="font:500 60px/1 var(--mono);letter-spacing:-.04em;color:var(--accent)">13</span>
            <span style="font:400 22px/1.3 var(--body-font)">of 21 settled predictions came out right.</span>
          </div>
          <div style="display:flex;gap:3px;margin:16px 0 12px">
            <div v-for="(s, i) in SETTLED_STRIP" :key="'s' + i" :style="{ flex: 1, height: '30px', background: s === 'right' ? 'var(--good)' : 'var(--accent)' }"></div>
            <div style="width:10px"></div>
            <div v-for="i in OPEN_STRIP_COUNT" :key="'o' + i" style="flex:1;height:30px;border:1px dashed var(--rule)"></div>
          </div>
          <div style="display:flex;gap:22px;font:400 11px var(--mono);color:var(--dim);margin-bottom:16px"><span>■ right</span><span style="color:var(--accent)">■ wrong</span><span>▢ still open</span></div>
          <p style="margin:0;font:400 16px/1.6 var(--body-font);color:var(--dim);max-width:34em">The wrong ones stay published with the reason attached. <NuxtLink to="/predictions">Read the ledger →</NuxtLink></p>
        </div>
        <div style="border-left:1px solid var(--rule);padding-left:32px">
          <div style="font:400 11px var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--dim);margin-bottom:16px">Built so far</div>
          <NuxtLink to="/models" style="display:flex;align-items:baseline;gap:14px;padding:11px 0;border-bottom:1px solid var(--rule);color:var(--ink)"><span style="font:500 20px var(--mono);width:38px">12</span><span style="font:400 17px var(--body-font);flex:1">models</span><span style="font:400 11px var(--mono);color:var(--dim)">of 26 planned</span></NuxtLink>
          <NuxtLink to="/experiments" style="display:flex;align-items:baseline;gap:14px;padding:11px 0;border-bottom:1px solid var(--rule);color:var(--ink)"><span style="font:500 20px var(--mono);width:38px">07</span><span style="font:400 17px var(--body-font);flex:1">experiments run</span><span style="font:400 11px var(--mono);color:var(--dim)">2 backtests</span></NuxtLink>
          <NuxtLink to="/essays" style="display:flex;align-items:baseline;gap:14px;padding:11px 0;border-bottom:1px solid var(--rule);color:var(--ink)"><span style="font:500 20px var(--mono);width:38px">09</span><span style="font:400 17px var(--body-font);flex:1">essays</span><span style="font:400 11px var(--mono);color:var(--dim)">3 post-mortems</span></NuxtLink>
          <NuxtLink to="/predictions" style="display:flex;align-items:baseline;gap:14px;padding:11px 0;border-bottom:1px solid var(--rule);color:var(--ink)"><span style="font:500 20px var(--mono);width:38px">34</span><span style="font:400 17px var(--body-font);flex:1">predictions logged</span><span style="font:400 11px var(--mono);color:var(--dim)">13 open</span></NuxtLink>
          <div style="font:400 12px/1.7 var(--mono);color:var(--dim);margin-top:16px">Oldest open prediction: 04 Aug<br>Next deadline: 01 Nov</div>
        </div>
      </div>
    </section>

    <section style="padding:44px 0 20px;border-top:1px solid var(--rule)">
      <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:6px">
        <h2 style="margin:0;font:500 13px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim)">Latest work</h2>
        <span style="font:400 12px var(--mono);color:var(--dim)">Updated 21 Aug</span>
      </div>
      <div style="border-top:1px solid var(--ink)">
        <NuxtLink
          v-for="item in latestWork"
          :key="item.id"
          :to="item.to"
          class="rs-grid-stack"
          style="display:grid;grid-template-columns:104px 1fr 130px 78px;gap:22px;align-items:baseline;padding:17px 0;border-bottom:1px solid var(--rule);color:var(--ink)"
        >
          <span style="font:400 13px var(--mono);color:var(--dim)">{{ item.date }}</span>
          <span style="font:400 18px/1.4 var(--body-font)">{{ item.title }}</span>
          <span :style="{ font: '400 12px var(--mono)', letterSpacing: '.08em', textTransform: 'uppercase', color: item.typeAccent ? 'var(--accent)' : 'var(--dim)' }">{{ item.type }}</span>
          <span style="font:400 13px var(--mono);color:var(--dim);text-align:right">{{ item.id }}</span>
        </NuxtLink>
      </div>
    </section>
    <section style="padding:34px 0 90px">
      <div style="font:500 13px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--dim);margin-bottom:18px">Where to start</div>
      <div class="rs-grid-3" style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--rule);border:1px solid var(--rule)">
        <NuxtLink to="/models" style="background:var(--paper);padding:24px;color:var(--ink)"><div style="font:400 22px/1.3 var(--body-font);margin-bottom:8px">Models</div><div style="font:400 15px/1.55 var(--body-font);color:var(--dim)">Twelve systems mapped the same nine ways. The core of the work.</div></NuxtLink>
        <NuxtLink to="/predictions" style="background:var(--paper);padding:24px;color:var(--ink)"><div style="font:400 22px/1.3 var(--body-font);margin-bottom:8px">Predictions</div><div style="font:400 15px/1.55 var(--body-font);color:var(--dim)">The scoreboard. Thirteen open, twenty-one settled, eight wrong.</div></NuxtLink>
        <NuxtLink to="/projects" style="background:var(--paper);padding:24px;color:var(--ink)"><div style="font:400 22px/1.3 var(--body-font);margin-bottom:8px">Projects</div><div style="font:400 15px/1.55 var(--body-font);color:var(--dim)">Nine years of engineering — the field access behind the models.</div></NuxtLink>
      </div>
    </section>
  </main>
</template>
