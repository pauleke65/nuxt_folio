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
    <div class="flex flex-col md:flex-row">
      <div class="bg-gray-700 h-72 md:h-100 md:w-7/12 rounded-md overflow-hidden">
        <NuxtImg
          :src="post.coverImage.url"
          :alt="post.title"
          class="h-full w-full object-cover"
          width="900"
          height="400"
        />
      </div>

      <div class="flex justify-between flex-col md:w-5/12 md:pl-8">
        <div>
          <h2 class="text-2xl lg:text-3xl font-extrabold mt-2 md:mt-0 mb-4">
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
