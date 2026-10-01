<script setup>
// items: [{ k, v }]
defineProps({ items: { type: Array, required: true } })
</script>

<template>
  <dl class="facts">
    <div v-for="f in items" :key="f.k"><dt class="lbl">{{ f.k }}</dt><dd>{{ f.v }}</dd></div>
  </dl>
</template>
