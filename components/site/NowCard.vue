<script setup>
import FeatherIcon from './FeatherIcon.vue'

defineProps({ item: { type: Object, required: true } })
</script>

<template>
  <NuxtLink class="card" :to="item.to">
    <div class="c-top"><FeatherIcon class="c-ic" :name="item.icon" :stroke="1.5" /><span class="st lbl"><i :class="{ o: item.dot === 'hollow' }"></i>{{ item.status }}</span></div>
    <div class="c-type lbl">{{ item.type }}</div>
    <h3>{{ item.title }}</h3>
    <p>{{ item.text }}</p>
    <div class="c-foot lbl">{{ item.foot }}</div>
  </NuxtLink>
</template>
