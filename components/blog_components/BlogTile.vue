<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
})

// Replace moment.js with native Intl.DateTimeFormat
function formatDate(date) {
  if (!date) return ''
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(date))
}
</script>

<template>
  <NuxtLink :to="{ path: '/posts/' + post.slug }">
    <div class="flex-col">
      <div class="bg-gray-700 h-64 lg:h-80 w-full rounded-md overflow-hidden">
        <img
          :src="post.coverImage.url"
          :alt="post.title"
          class="h-full w-full object-cover"
          width="600"
          height="320"
        />
      </div>

      <div class="flex justify-between flex-col mb-4 md:mb-8">
        <div>
          <h2 class="text-2xl font-extrabold mb-2 mt-2">
            {{ post.title }}
          </h2>
          <p class="text-gray-800">{{ post.excerpt }}</p>
          <p class="text-sm text-gray-500 mt-2">
            {{ post.category?.name }} | {{ formatDate(post.publishedAt) }} by
            {{ post.author?.name }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
