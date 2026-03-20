<script setup>
useHead({
  title: 'PurpleEmber – Blog',
  meta: [
    { name: 'description', content: "Paul Imoke's blog on tech, life, faith, and more." },
    { property: 'og:title', content: 'PurpleEmber – Blog' },
  ],
})

const { posts, loading, error } = usePosts()
const { categories } = useCategories()

const searchQuery = ref('')
const selectedCategory = ref(null)

function setCategory(name) {
  selectedCategory.value = selectedCategory.value === name ? null : name
}

const filteredPosts = computed(() => {
  let result = posts.value
  if (selectedCategory.value) {
    result = result.filter(p => p.category?.name === selectedCategory.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(p =>
      p.title?.toLowerCase().includes(q) ||
      p.excerpt?.toLowerCase().includes(q)
    )
  }
  return result
})

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(dateStr))
}

// Newsletter — shared state used by both popup and inline section
const email = ref('')
const subscribeStatus = ref('idle') // idle | loading | success | error

async function subscribe() {
  if (!email.value.trim() || subscribeStatus.value === 'loading') return
  subscribeStatus.value = 'loading'
  // Simulate a short delay — swap this out for your real endpoint later
  await new Promise(r => setTimeout(r, 900))
  subscribeStatus.value = 'success'
  localStorage.setItem('pe_newsletter_dismissed', '1')
}

// Popup
const showPopup = ref(false)

onMounted(() => {
  if (!localStorage.getItem('pe_newsletter_dismissed')) {
    setTimeout(() => { showPopup.value = true }, 2500)
  }
})

function dismissPopup() {
  showPopup.value = false
  localStorage.setItem('pe_newsletter_dismissed', '1')
}
</script>

<template>
  <div class="bg-black min-h-screen">
    <Nav />

    <!-- Page header -->
    <div class="max-w-7xl mx-auto px-6 pt-36 pb-12 border-b border-white/10">
      <div class="flex items-center gap-3 mb-6">
        <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
        <span class="text-white/40 text-xs tracking-widest uppercase">Blog</span>
      </div>
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <h1 class="text-white leading-tight blog-masthead" style="font-size: clamp(2.5rem, 6vw, 5rem);">
          <span class="text-purple-400">Purple</span>Ember<span class="text-yellow-500">.</span>
        </h1>

        <!-- Search -->
        <div class="relative max-w-sm w-full">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search posts…"
            class="w-full bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors duration-200"
          />
          <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
          </svg>
        </div>
      </div>

      <!-- Category filters -->
      <div v-if="categories.length" class="flex flex-wrap gap-2 mt-8">
        <button
          class="text-xs px-4 py-1.5 rounded-full border transition-all duration-200"
          :class="selectedCategory === null ? 'bg-yellow-500 border-yellow-500 text-black font-semibold' : 'border-white/15 text-white/50 hover:border-white/40 hover:text-white'"
          @click="setCategory(null)"
        >
          All
        </button>
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="text-xs px-4 py-1.5 rounded-full border transition-all duration-200"
          :class="selectedCategory === cat.name ? 'bg-yellow-500 border-yellow-500 text-black font-semibold' : 'border-white/15 text-white/50 hover:border-white/40 hover:text-white'"
          @click="setCategory(cat.name)"
        >
          {{ cat.name }}
        </button>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="n in 6" :key="n" class="rounded-2xl border border-white/10 h-72 animate-pulse bg-white/5"></div>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="max-w-7xl mx-auto px-6 py-16 text-red-400 text-sm">
      Failed to load posts. Please try again later.
    </div>

    <!-- Posts -->
    <div v-else-if="filteredPosts.length" class="max-w-7xl mx-auto px-6 py-12">

      <!-- Featured post (first) -->
      <NuxtLink
        :to="`/posts/${filteredPosts[0].slug}`"
        class="group flex flex-col lg:flex-row gap-0 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300 mb-6 block"
      >
        <div class="lg:w-1/2 h-56 lg:h-auto overflow-hidden relative">
          <img
            v-if="filteredPosts[0].coverImage?.url"
            :src="filteredPosts[0].coverImage.url"
            :alt="filteredPosts[0].title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            width="700"
            height="400"
          />
        </div>
        <div class="lg:w-1/2 p-8 flex flex-col justify-center gap-4">
          <div class="flex items-center gap-3">
            <span v-if="filteredPosts[0].category?.name" class="text-xs px-3 py-1 rounded-full border border-white/15 text-white/50">
              {{ filteredPosts[0].category.name }}
            </span>
            <span class="text-white/30 text-xs">{{ formatDate(filteredPosts[0].publishedAt) }}</span>
          </div>
          <h2 class="text-white font-bold text-2xl leading-snug group-hover:text-yellow-500 transition-colors duration-200">
            {{ filteredPosts[0].title }}
          </h2>
          <p class="text-white/40 text-sm leading-relaxed line-clamp-3">{{ filteredPosts[0].excerpt }}</p>
          <span class="text-yellow-500/70 text-sm mt-2">Read post →</span>
        </div>
      </NuxtLink>

      <!-- Remaining posts grid -->
      <div v-if="filteredPosts.length > 1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="post in filteredPosts.slice(1)"
          :key="post.id"
          :to="`/posts/${post.slug}`"
          class="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300 flex flex-col"
        >
          <div class="h-44 overflow-hidden relative">
            <img
              v-if="post.coverImage?.url"
              :src="post.coverImage.url"
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              width="400"
              height="176"
            />
            <span
              v-if="post.category?.name"
              class="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white/70"
            >
              {{ post.category.name }}
            </span>
          </div>
          <div class="p-5 flex flex-col gap-2 flex-1">
            <p class="text-white/30 text-xs">{{ formatDate(post.publishedAt) }}</p>
            <h3 class="text-white font-semibold text-base leading-snug group-hover:text-yellow-500 transition-colors duration-200 line-clamp-2">
              {{ post.title }}
            </h3>
            <p class="text-white/40 text-sm leading-relaxed line-clamp-2 flex-1">{{ post.excerpt }}</p>
            <span class="text-white/30 text-xs mt-3 group-hover:text-yellow-500/70 transition-colors duration-200">Read more →</span>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Empty state -->
    <div v-else class="max-w-7xl mx-auto px-6 py-24 text-center text-white/30 text-sm">
      No posts found.
    </div>

    <!-- Newsletter -->
    <div class="max-w-7xl mx-auto px-6 py-20 border-t border-white/10">
      <div class="max-w-xl">
        <p class="text-white/40 text-xs tracking-widest uppercase mb-4">Newsletter</p>
        <h2 class="text-white blog-masthead mb-3" style="font-size: clamp(1.6rem, 3.5vw, 2.6rem);">
          Get new posts in your inbox.
        </h2>
        <p class="text-white/40 text-sm leading-relaxed mb-8">
          No spam, no noise. Just thoughts on tech, faith, and building things — whenever I publish.
        </p>

        <!-- Success state -->
        <div v-if="subscribeStatus === 'success'" class="flex items-center gap-3 text-yellow-500 text-sm">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          You're in! Watch your inbox for the next post.
        </div>

        <!-- Form -->
        <form v-else class="flex flex-col sm:flex-row gap-3" @submit.prevent="subscribe">
          <input
            v-model="email"
            type="email"
            placeholder="your@email.com"
            required
            class="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors duration-200"
          />
          <button
            type="submit"
            :disabled="subscribeStatus === 'loading'"
            class="bg-yellow-500 hover:bg-yellow-400 disabled:opacity-60 text-black font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 shrink-0 flex items-center gap-2"
          >
            <svg v-if="subscribeStatus === 'loading'" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            {{ subscribeStatus === 'loading' ? 'Subscribing…' : 'Subscribe' }}
          </button>
        </form>
      </div>
    </div>

    <!-- Newsletter popup -->
    <Transition name="popup">
      <div
        v-if="showPopup"
        class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-0"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/70 backdrop-blur-sm"
          @click="dismissPopup"
        />

        <!-- Card -->
        <div class="relative z-10 w-full max-w-md bg-[#0d0d0d] border border-white/10 rounded-2xl p-8 shadow-2xl">

          <!-- Close -->
          <button
            class="absolute top-4 right-4 text-white/30 hover:text-white transition-colors duration-200"
            aria-label="Close"
            @click="dismissPopup"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Content -->
          <p class="text-white/40 text-xs tracking-widest uppercase mb-3">Newsletter</p>
          <h2 class="text-white blog-masthead mb-2" style="font-size: 1.75rem;">
            Stay in the loop.
          </h2>
          <p class="text-white/40 text-sm leading-relaxed mb-6">
            New posts on tech, faith, and building things — straight to your inbox. No spam.
          </p>

          <!-- Success -->
          <div v-if="subscribeStatus === 'success'" class="flex items-center gap-3 text-yellow-500 text-sm py-2">
            <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
            You're in! Talk soon.
          </div>

          <!-- Form -->
          <form v-else class="flex flex-col gap-3" @submit.prevent="subscribe">
            <input
              v-model="email"
              type="email"
              placeholder="your@email.com"
              required
              class="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors duration-200"
            />
            <button
              type="submit"
              :disabled="subscribeStatus === 'loading'"
              class="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-60 text-black font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg v-if="subscribeStatus === 'loading'" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
              </svg>
              {{ subscribeStatus === 'loading' ? 'Subscribing…' : 'Subscribe' }}
            </button>
            <button
              type="button"
              class="text-white/30 hover:text-white/60 text-xs text-center transition-colors duration-200 py-1"
              @click="dismissPopup"
            >
              No thanks
            </button>
          </form>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

.blog-masthead {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  font-style: italic;
}

.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s ease;
}
.popup-enter-active .relative.z-10,
.popup-leave-active .relative.z-10 {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}
.popup-enter-from .relative.z-10,
.popup-leave-to .relative.z-10 {
  opacity: 0;
  transform: translateY(16px);
}
</style>
