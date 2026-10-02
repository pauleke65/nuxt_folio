<script setup>
// Horizontal bars from a zero baseline.
// chart: { title, unit, max, bars: [{ label, value, display, win }], caption, axis }
// axis: false hides the scale; otherwise five ticks from 0 to max.
const props = defineProps({ chart: { type: Object, required: true } })

const width = (v) => `${Math.round((v / props.chart.max) * 10000) / 100}%`
const ticks = computed(() => [0, 1, 2, 3, 4].map((i) => Math.round((props.chart.max * i) / 4)))
</script>

<template>
  <figure class="fig chart">
    <div class="fig-h"><span class="lbl">{{ chart.title }}</span><span class="lbl">{{ chart.unit }}</span></div>
    <div class="ch-b">
      <div v-for="b in chart.bars" :key="b.label" class="ch-row" :class="{ win: b.win }">
        <span class="ch-l">{{ b.label }}</span><div class="ch-t"><i :style="{ width: width(b.value) }"></i></div><b>{{ b.display }}</b>
      </div>
      <div v-if="chart.axis !== false" class="ch-ax lbl"><div><span v-for="t in ticks" :key="t">{{ t }}</span></div></div>
    </div>
    <figcaption v-if="chart.caption">{{ chart.caption }}</figcaption>
  </figure>
</template>
