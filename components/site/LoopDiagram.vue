<script setup>
// The method loop in the home hero. Each step links to its section.
const steps = [
  { verb: 'OBSERVE', name: 'Fieldwork', to: '/fieldwork', x: 120.1, y: 79.0 },
  { verb: 'MODEL', name: 'Models', to: '/models', x: 279.9, y: 79.0 },
  { verb: 'PREDICT', name: 'Ledger', to: '/ledger', x: 329.3, y: 231.0 },
  { verb: 'TEST', name: 'Experiments', to: '/experiments', x: 200.0, y: 325.0 },
  { verb: 'EXPLAIN', name: 'Essays', to: '/essays', x: 70.7, y: 231.0 },
]

// Plain <a> inside the SVG, routed client-side.
const go = (e, to) => {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
  e.preventDefault()
  navigateTo(to)
}
</script>

<template>
  <figure class="loop">
    <div class="lp-h"><span class="lbl">How I work</span></div>
    <svg class="lp-svg" viewBox="0 60 400 298" role="img" aria-label="A loop: observe in Fieldwork, model in Models, predict in the Ledger, test in Experiments, explain in Essays, then observe again.">
      <defs><marker id="lpA" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,1 L10,5 L0,9 z" style="fill:var(--ink)" /></marker></defs>
      <g class="lp-arcs">
        <path d="M178.5 65.7 A136 136 0 0 1 233.1 68.1" />
        <path d="M305.8 114.6 A136 136 0 0 1 335.7 209.7" />
        <path d="M318.1 267.4 A136 136 0 0 1 269.4 316.9" />
        <path d="M130.6 316.9 A136 136 0 0 1 81.9 267.4" />
        <path d="M64.3 209.7 A136 136 0 0 1 94.2 114.6" />
      </g>
      <a v-for="s in steps" :key="s.name" :href="s.to" @click="go($event, s.to)">
        <text :x="s.x" :y="s.y" class="lp-v">{{ s.verb }}</text>
        <text :x="s.x" :y="s.y + 23" class="lp-n">{{ s.name }}</text>
      </a>
      <g transform="translate(177.2 177.2) scale(1.9)" class="lp-c"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></g>
    </svg>
    <figcaption>Every system I study goes round this loop. Each step has its own section, so it doubles as a map of the site.</figcaption>
  </figure>
</template>
