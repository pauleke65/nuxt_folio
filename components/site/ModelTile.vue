<script setup>
defineProps({ model: { type: Object, required: true } })
</script>

<template>
  <NuxtLink class="tile" :to="`/models/${model.id}`">
    <div class="t-top lbl"><span>{{ model.id }}</span><span>{{ model.domain }}</span></div>
    <div class="yr">{{ model.year }}</div>
    <div class="t-title">{{ model.title }}</div>
    <div class="t-line">{{ model.blurb }}</div>
    <div class="t-meta lbl">
      <span v-if="model.meta === 'IN PROGRESS'" class="st"><i class="o"></i>In progress</span>
      <template v-else>{{ model.meta }}</template>
    </div>
  </NuxtLink>
</template>
