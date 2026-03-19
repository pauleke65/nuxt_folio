<script setup>
const { posts, loading } = usePosts()

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(dateStr))
}
</script>

<template>
  <section class="bg-black py-24 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span class="text-white/40 text-xs tracking-widest uppercase">Blog</span>
          </div>
          <h2 class="text-white font-bold leading-tight" style="font-size: clamp(2rem, 4vw, 3.2rem);">
            Latest Writings
          </h2>
        </div>
        <NuxtLink
          to="/blog"
          class="text-sm text-white/50 hover:text-white border border-white/15 hover:border-white/40 rounded-full px-5 py-2 transition-all duration-200 w-fit"
        >
          Read all posts ↗
        </NuxtLink>
      </div>

      <!-- Loading skeleton -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="n in 3" :key="n" class="bg-black h-72 animate-pulse bg-white/5"></div>
      </div>

      <!-- Posts grid -->
      <div v-else-if="posts.length" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="post in posts.slice(0, 3)"
          :key="post.id"
          :to="`/posts/${post.slug}`"
          class="bg-white/[0.03] border border-white/10 rounded-2xl group flex flex-col overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
        >
          <!-- Cover image -->
          <div class="relative h-44 overflow-hidden">
            <NuxtImg
              v-if="post.coverImage?.url"
              :src="post.coverImage.url"
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              width="400"
              height="200"
            />
            <div v-else class="w-full h-full bg-white/5"></div>
            <!-- Category pill -->
            <span
              v-if="post.category?.name"
              class="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white/70"
            >
              {{ post.category.name }}
            </span>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col gap-3 flex-1">
            <p class="text-white/30 text-xs">{{ formatDate(post.publishedAt) }}</p>
            <h3 class="text-white font-semibold text-base leading-snug group-hover:text-yellow-500 transition-colors duration-200 line-clamp-2">
              {{ post.title }}
            </h3>
            <p class="text-white/40 text-sm leading-relaxed line-clamp-2 flex-1">{{ post.excerpt }}</p>
            <div class="flex items-center gap-1 text-white/30 text-xs mt-2 group-hover:text-yellow-500/70 transition-colors duration-200">
              <span>Read more</span>
              <span>→</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Empty state -->
      <p v-else class="text-white/30 text-sm">No posts yet — check back soon.</p>

    </div>
  </section>
</template>
