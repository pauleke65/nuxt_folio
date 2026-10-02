<script setup>
import PageHead from '~/components/site/PageHead.vue'
import FactList from '~/components/site/FactList.vue'
import ExternalArrow from '~/components/site/ExternalArrow.vue'

// Static on purpose. No prediction entry appears anywhere on the site before
// January 2027, and real entries are never committed to this public repo.
definePageMeta({ layout: 'research' })

useHead({
  title: 'Ledger — Paul Imoke',
  meta: [{ name: 'description', content: 'Predictions with a mechanism, a probability and a deadline, logged before the outcome is known. The ledger opens in January 2027.' }],
})

const facts = [
  { k: 'Opens', v: 'January 2027' },
  { k: 'Until then', v: 'Logged privately' },
  { k: 'Edits after the fact', v: 'None' },
]

const rules = [
  'Logged before the outcome is known.',
  'Every call has a mechanism, a probability and a deadline.',
  'Nothing is edited after the fact.',
  'The wrong ones stay up, with the reason attached.',
]
const chain = [88, 116, 72, 98]
</script>

<template>
  <main>
    <PageHead
      kicker="Ledger · Private until January 2027"
      title="The ledger opens in January 2027"
      stand="Each prediction carries a mechanism, a probability and a deadline, logged before the outcome is known. It stays private for its first three months, so it opens with a real hit rate instead of a promise."
    >
      <FactList :items="facts" />
    </PageHead>

    <section class="lg w" style="padding-top:clamp(8px,1vw,16px)">
      <div>
        <div class="part-h"><span class="lbl">01</span><h2>What an entry looks like</h2></div>
        <figure class="fig entry" style="margin-top:24px">
          <div class="en-h"><span class="lbl">Anatomy of an entry</span><span class="lbl">Sealed</span></div>
          <div class="en-b">
            <div class="en-f"><span class="lbl">The claim</span><div class="redact" aria-hidden="true"><i style="width:34%"></i><i style="width:20%"></i><i style="width:30%"></i><i style="width:44%"></i><i style="width:18%"></i></div></div>
            <div class="en-f">
              <span class="lbl">Mechanism</span>
              <div class="chain" aria-hidden="true">
                <template v-for="(w, i) in chain" :key="i"><svg v-if="i" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg><i :style="{ width: w + 'px' }"></i></template>
              </div>
            </div>
            <div class="en-2">
              <div class="en-f"><span class="lbl">Probability</span><div class="redact big" aria-hidden="true"><i style="width:72px"></i></div><p class="en-n">Stated once. Never revised.</p></div>
              <div class="en-f"><span class="lbl">Deadline</span><div class="redact big" aria-hidden="true"><i style="width:116px"></i></div><p class="en-n">A date it can be checked on.</p></div>
            </div>
            <div class="en-f"><span class="lbl">Falsifier</span><div class="redact" aria-hidden="true"><i style="width:42%"></i><i style="width:26%"></i><i style="width:22%"></i><i style="width:36%"></i></div></div>
            <div class="en-f"><span class="lbl">Sources</span><div class="redact" aria-hidden="true"><i style="width:30%"></i><i style="width:24%"></i></div></div>
          </div>
          <figcaption>Every entry has these six parts. The contents stay sealed until the ledger opens.</figcaption>
        </figure>
      </div>
      <div>
        <div class="part-h"><span class="lbl">02</span><h2>The rules</h2></div>
        <ol class="rules">
          <li v-for="(r, i) in rules" :key="r"><b>{{ String(i + 1).padStart(2, '0') }}</b><span>{{ r }}</span></li>
        </ol>
        <div class="calib">
          <div class="lbl mu">Calibration · stated against actual</div>
          <!-- Empty on purpose until the ledger opens. -->
          <svg viewBox="0 0 360 236" role="img" aria-label="An empty calibration chart with a dotted diagonal line.">
            <line x1="46" y1="12" x2="46" y2="196" style="stroke:var(--ink);stroke-width:1" />
            <line x1="46" y1="196" x2="346" y2="196" style="stroke:var(--ink);stroke-width:1" />
            <line x1="46" y1="196" x2="346" y2="12" style="stroke:var(--accent);stroke-width:1.5;stroke-dasharray:2 6;stroke-linecap:round" />
            <line x1="46" y1="150" x2="346" y2="150" style="stroke:var(--line);stroke-width:1" />
            <line x1="46" y1="104" x2="346" y2="104" style="stroke:var(--line);stroke-width:1" />
            <line x1="46" y1="58" x2="346" y2="58" style="stroke:var(--line);stroke-width:1" />
            <line x1="46" y1="12" x2="346" y2="12" style="stroke:var(--line);stroke-width:1" />
            <text x="38" y="200" style="text-anchor:end">50</text>
            <text x="38" y="154" style="text-anchor:end">60</text>
            <text x="38" y="108" style="text-anchor:end">70</text>
            <text x="38" y="62" style="text-anchor:end">80</text>
            <text x="38" y="16" style="text-anchor:end">90</text>
            <text x="46" y="214" style="text-anchor:middle">50%</text>
            <text x="121" y="214" style="text-anchor:middle">60%</text>
            <text x="196" y="214" style="text-anchor:middle">70%</text>
            <text x="271" y="214" style="text-anchor:middle">80%</text>
            <text x="346" y="214" style="text-anchor:middle">90%</text>
            <text x="196" y="232" style="text-anchor:middle">STATED CONFIDENCE</text>
            <text x="54" y="28">ACTUAL</text>
          </svg>
          <p>The score goes here when the ledger opens. On the dotted line, a 70% call comes true 70% of the time.</p>
        </div>
      </div>
    </section>

    <div class="w">
      <div class="cta">
        <p>I’ll say so on X the day it opens.</p>
        <a class="tl" href="https://x.com/iampeke65" target="_blank" rel="noopener noreferrer">Follow @iampeke65<ExternalArrow /></a>
      </div>
    </div>
  </main>
</template>
