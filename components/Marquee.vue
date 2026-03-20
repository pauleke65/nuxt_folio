<template>
  <div class="bg-yellow-500 overflow-hidden py-3 border-y border-yellow-400">
    <div class="marquee-track flex items-center whitespace-nowrap">
      <!-- Duplicated for seamless loop -->
      <span v-for="n in 2" :key="n" class="flex items-center shrink-0">
        <template v-for="item in items" :key="item">
          <span class="text-black font-semibold text-sm tracking-widest uppercase mx-6">{{ item }}</span>
          <span class="text-black/40 text-lg">·</span>
        </template>
      </span>
    </div>
  </div>
</template>

<script setup>
const items = [
  'Flutter', 'React Native', 'Next.js', 'NuxtJS', 'Vue', 'Angular',
  'Django', 'Node.js', 'Express.js', 'TypeScript', 'Python', 'Dart',
  'PostgreSQL', 'Firebase', 'OpenAI', 'Stellar Blockchain', 'IPFS',
  'Bull MQ', 'REST APIs', 'GraphQL',
]
</script>

<style scoped>
.marquee-track {
  animation: marquee 30s linear infinite;
  width: max-content;
}

@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
