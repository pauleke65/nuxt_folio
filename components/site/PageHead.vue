<script setup>
defineProps({
  kicker: { type: String, required: true },
  title: { type: String, required: true },
  stand: { type: String, default: '' },
})
</script>

<template>
  <section class="ph w">
    <div>
      <div class="lbl kick"><i></i>{{ kicker }}</div>
      <h1>{{ title }}</h1>
      <p v-if="stand" class="stand">{{ stand }}</p>
    </div>
    <slot />
  </section>
</template>
