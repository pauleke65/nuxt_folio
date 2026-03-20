<script setup>
const props = defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
  searchQuery: {
    type: String,
    default: '',
  },
})

// Fetch categories dynamically from Hygraph (replaces hardcoded list)
const { categories } = useCategories()

const selectedCategory = ref(null)

function setCategory(name) {
  // Toggle: clicking the active category deselects it (shows all)
  selectedCategory.value = selectedCategory.value === name ? null : name
}

// All filtering (search + category) in one computed
const allFilteredPosts = computed(() => {
  let result = props.posts

  if (selectedCategory.value) {
    result = result.filter(p => p.category?.name === selectedCategory.value)
  }

  if (props.searchQuery) {
    const q = props.searchQuery.toLowerCase()
    result = result.filter(
      p =>
        p.title?.toLowerCase().includes(q) ||
        p.excerpt?.toLowerCase().includes(q)
    )
  }

  return result
})

// Derived slices — with null guards (Fix: was crashing when < 3 posts)
const featuredPost = computed(() => allFilteredPosts.value[0] ?? null)
const secondPost = computed(() => allFilteredPosts.value[1] ?? null)
const thirdPost = computed(() => allFilteredPosts.value[2] ?? null)
const remainingPosts = computed(() => allFilteredPosts.value.slice(3))
</script>

<template>
  <div>

    <!-- Category filter tabs — now dynamic from Hygraph + wired up -->
    <div
      v-if="categories.length > 0"
      class="flex flex-row justify-between items-center my-4 sticky top-2 bg-gray-100 py-3 px-3 md:px-8 shadow-xl lg:ml-20 mr-6 lg:mr-52"
    >
      <!-- "All" pseudo-category -->
      <p
        :class="['text-md', 'md:text-xl', 'cursor-pointer', selectedCategory === null ? 'active' : 'notActive']"
        @click="setCategory(null)"
      >
        All
      </p>
      <p
        v-for="category in categories"
        :key="category.id"
        :class="['text-md', 'md:text-xl', 'cursor-pointer', selectedCategory === category.name ? 'active' : 'notActive']"
        @click="setCategory(category.name)"
      >
        {{ category.name }}
      </p>
    </div>

    <!-- Empty state -->
    <div v-if="allFilteredPosts.length === 0" class="text-center py-12 text-gray-500">
      No posts found.
    </div>

    <template v-else>
      <!-- Featured post (Fix: was posts[0] with no null guard) -->
      <div class="mb-8">
        <BlogTileHead v-if="featuredPost" :post="featuredPost" />
      </div>

      <!-- 2-column row (Fix: was posts[1] + posts[2] with no null guard) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BlogTile v-if="secondPost" :post="secondPost" />
        <BlogTile v-if="thirdPost" :post="thirdPost" />
      </div>

      <!-- Remaining posts grid -->
      <div v-if="remainingPosts.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <BlogTile v-for="post in remainingPosts" :key="post.id" :post="post" />
      </div>
    </template>

  </div>
</template>

<style>
.active {
  background-color: rgb(252 211 77);
  padding: 0.5rem 1rem;
  font-weight: 800;
}

.notActive {
  font-weight: 400;
}
</style>
