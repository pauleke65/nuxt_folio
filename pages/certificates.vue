<script setup>
const { certificates, loading, error } = useCertificates()
</script>

<template>
  <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">

    <!-- Loading skeleton -->
    <template v-if="loading">
      <div v-for="n in 4" :key="n" class="animate-pulse bg-gray-400 h-64"></div>
    </template>

    <!-- Error state -->
    <div v-else-if="error" class="col-span-full text-center text-red-500 p-4">
      Failed to load certificates. Please try again later.
    </div>

    <!-- Certificate cards -->
    <template v-else>
      <div
        v-for="certificate in certificates"
        :key="certificate.id"
        class="bg-gray-400 h-64"
      >
        <a :href="certificate.certUrl" target="_blank" rel="noopener noreferrer">
          <img
            :src="certificate.image.url"
            :alt="certificate.title || certificate.name || 'Certificate'"
            class="w-full h-full object-cover"
            width="400"
            height="256"
          />
        </a>
      </div>
    </template>

  </div>
</template>
