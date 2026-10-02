<script setup>
defineProps({ label: { type: String, required: true } })
</script>

<template>
  <div class="sb"><div class="lbl">{{ label }}</div><slot /></div>
</template>
