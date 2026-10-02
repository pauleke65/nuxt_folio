<script setup>
// Inline feather icons used by the research site. Stroke, no fill; size and
// stroke width come from the caller's class or the props below.
defineProps({
  name: { type: String, required: true },
  stroke: { type: [Number, String], default: 2 },
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    :style="`fill:none;stroke:currentColor;stroke-width:${stroke};stroke-linecap:round;stroke-linejoin:round`"
  >
    <template v-if="name === 'rotate-cw'"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></template>
    <template v-else-if="name === 'activity'"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></template>
    <template v-else-if="name === 'book-open'"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></template>
    <template v-else-if="name === 'target'"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></template>
    <template v-else-if="name === 'bar-chart-2'"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></template>
    <template v-else-if="name === 'arrow-right-circle'"><circle cx="12" cy="12" r="10" /><polyline points="12 16 16 12 12 8" /><line x1="8" y1="12" x2="16" y2="12" /></template>
    <template v-else-if="name === 'chevron-down'"><polyline points="6 9 12 15 18 9" /></template>
    <template v-else-if="name === 'arrow-up-right'"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></template>
    <template v-else-if="name === 'sun'"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></template>
    <template v-else-if="name === 'moon'"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></template>
    <template v-else-if="name === 'arrow-right'"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></template>
  </svg>
</template>
