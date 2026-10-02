<script setup>
definePageMeta({ layout: 'research' })

useHead({
  title: 'About — Paul Imoke',
  meta: [{ name: 'description', content: 'Paul Imoke spent years building systems as a lead engineer. Now he studies them.' }],
})

const day = [
  { t: '30 min', what: 'Studying', flex: 30, cls: '' },
  { t: '45 min', what: 'Modelling', flex: 45, cls: 'a' },
  { t: '15 min', what: 'In the prediction ledger', flex: 15, cls: '' },
  { t: 'The rest', what: 'Writing', flex: 22, cls: 'o' },
]

const pulls = [
  { text: 'Cities, and how people move through them', strength: 3, note: 'Strongest pull' },
  { text: 'Energy: who gets power, and who pays for it', strength: 3, note: 'Strongest pull' },
  { text: 'How money reaches people who need it', strength: 1, note: 'Maybe' },
  { text: 'How organisations decide things', strength: 1, note: 'Maybe' },
  { text: 'Education, and what it actually produces', strength: 1, note: 'Maybe' },
]

const layers = [
  ['Foundation', 'Systems thinking'],
  ['Mathematics', 'Probability, statistics, modelling'],
  ['Dynamics', 'Control theory, dynamical systems'],
  ['Behaviour', 'Psychology, economics, game theory'],
  ['Networks', 'Network science'],
  ['Complexity', 'Complex adaptive systems'],
  ['Theology', 'Order, purpose, and what a system is for'],
  ['Reality', 'History, politics, biology, technology'],
]

const exploring = [
  ['Delay and oscillation', 'Why systems overshoot when the signal is old. Reading control theory, badly at first.'],
  ['Historical backtests', 'Running my loops against systems that already ended, so the answer can’t flatter me.'],
  ['Calibration, not cleverness', 'I am overconfident above 80%. Trying to fix the habit rather than the wording.'],
  ['Theology and order', 'The oldest arguments about what holds a world together. It changes what I count as a system’s purpose.'],
]

const nn = (i) => String(i + 1).padStart(2, '0')
</script>

<template>
  <main>
    <section class="ab w">
      <div>
        <div class="lbl kick"><i></i>About</div>
        <h1>I spent years building systems. <span>Now I study them.</span></h1>
        <p class="bio">futurist. systems engineering. building infra one step at a time.</p>
        <div class="copy">
          <p>Lead engineer across seven companies in four countries: a property marketplace, agricultural traceability on Stellar, a court and trial management system, a mobile bank, four products at an accelerator. Building inside those systems is where the questions came from, and none of the tools I had were the ones that answer them.</p>
          <p>So I am changing what I do. A six-month intensive, ninety to a hundred and twenty minutes a day, six days a week. I still ship software. It is no longer the point.</p>
          <p>I am not picking one field yet. More evidence first, then one system gets the next decade.</p>
        </div>
      </div>
      <aside class="day">
        <div class="lbl mu">The daily practice</div>
        <p class="day-n">90 to 120 minutes</p>
        <p class="day-s">Every day, six days a week.</p>
        <div class="day-bar" aria-hidden="true"><i v-for="d in day" :key="d.what" :class="d.cls" :style="{ flex: d.flex }"></i></div>
        <ul class="day-key">
          <li v-for="d in day" :key="d.what"><b>{{ d.t }}</b><span>{{ d.what }}</span></li>
        </ul>
      </aside>
    </section>

    <section class="sec w">
      <div class="sh"><h2>Systems I keep coming back to</h2><p>One of these gets the next decade.</p><span class="lbl">{{ pulls.length }} candidates</span></div>
      <ol class="pulls">
        <li v-for="(p, i) in pulls" :key="p.text" :class="{ top: p.strength === 3 }">
          <b>{{ nn(i) }}</b><span>{{ p.text }}</span>
          <span class="bars" aria-hidden="true"><i v-for="n in 3" :key="n" :class="{ on: n <= p.strength }"></i></span>
          <span class="lbl">{{ p.note }}</span>
        </li>
      </ol>
      <p class="note">I am watching which one I return to without being asked.</p>
    </section>

    <section class="sec w">
      <div class="sh"><h2>What I’m learning, in order</h2><p>Each layer only makes sense once the one above it does.</p><span class="lbl">{{ layers.length }} layers</span></div>
      <div class="two">
        <ol class="layers">
          <li v-for="(l, i) in layers.slice(0, 4)" :key="l[0]"><b>{{ nn(i) }}</b><strong>{{ l[0] }}</strong><span>{{ l[1] }}</span></li>
        </ol>
        <ol class="layers" start="5">
          <li v-for="(l, i) in layers.slice(4)" :key="l[0]"><b>{{ nn(i + 4) }}</b><strong>{{ l[0] }}</strong><span>{{ l[1] }}</span></li>
        </ol>
      </div>
    </section>

    <section class="sec w">
      <div class="sh"><h2>Currently exploring</h2><p>Last month it was network science.</p><span class="lbl">Changes monthly</span></div>
      <div class="xp">
        <div v-for="x in exploring" :key="x[0]"><b>{{ x[0] }}</b><span>{{ x[1] }}</span></div>
      </div>
    </section>
  </main>
</template>
