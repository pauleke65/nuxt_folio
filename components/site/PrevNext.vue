<script setup>
// prev / next: { label, title, to }. The second link is right-aligned on desktop.
defineProps({
  prev: { type: Object, required: true },
  next: { type: Object, required: true },
  label: { type: String, default: 'More' },
})
</script>

<template>
  <nav class="pn" :aria-label="label">
    <NuxtLink :to="prev.to"><span class="lbl">{{ prev.label }}</span><b>{{ prev.title }}</b></NuxtLink>
    <NuxtLink :to="next.to"><span class="lbl">{{ next.label }}</span><b>{{ next.title }}</b></NuxtLink>
  </nav>
</template>
