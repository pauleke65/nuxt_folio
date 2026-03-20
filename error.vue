<script setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-black text-white">
    <h1 class="text-8xl font-extrabold">{{ error.statusCode }}</h1>
    <p class="text-xl mt-4 text-gray-400">{{ error.message }}</p>
    <NuxtLink to="/" class="mt-8 underline text-white hover:text-yellow-400 transition-colors">
      ← Go Home
    </NuxtLink>
  </div>
</template>
